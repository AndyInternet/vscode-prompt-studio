import * as vscode from "vscode";
import * as path from "path";
import { LLMProviderManager, PromptRequest } from "./llmProviders";
import { HistoryManager } from "./historyManager";
import { getModelsForDisplay } from "./models";

export class SidebarProvider implements vscode.WebviewViewProvider {
  private _view?: vscode.WebviewView;
  private currentFilePath: string = "";
  private currentFileName: string = "";

  constructor(
    private readonly _extensionUri: vscode.Uri,
    private llmManager: LLMProviderManager,
    private historyManager: HistoryManager
  ) {}

  public resolveWebviewView(
    webviewView: vscode.WebviewView,
    context: vscode.WebviewViewResolveContext,
    _token: vscode.CancellationToken
  ) {
    this._view = webviewView;

    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [this._extensionUri],
    };

    webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

    // Handle messages from the webview
    webviewView.webview.onDidReceiveMessage(async (data) => {
      switch (data.type) {
        case "getAvailableModels":
          await this.sendAvailableModels();
          break;
        case "getCurrentFile":
          await this.sendCurrentFile();
          break;
        case "runPrompt":
          await this.runPrompt(data);
          break;
        case "saveApiKeys":
          await this.saveApiKeys(data.keys);
          break;
        case "getApiKeys":
          await this.sendApiKeys();
          break;
        case "getHistory":
          await this.sendHistory(data.filePath);
          break;
        case "clearHistory":
          await this.clearHistory(data.filePath);
          break;
        case "openInNewTab":
          await this.openInNewTab(data.content, data.title);
          break;
        case "addFiles":
          await this.addFiles();
          break;
        case "readFile":
          await this.sendFileContent(data.filePath);
          break;
        case "getOpenFiles":
          await this.sendOpenFiles();
          break;
        case "selectCurrentFile":
          await this.selectCurrentFile(data.filePath);
          break;
      }
    });

    // Send initial data
    this.sendCurrentFile();
    this.sendOpenFiles();
    this.sendAvailableModels();
  }

  private async sendCurrentFile() {
    const editor = vscode.window.activeTextEditor;
    if (editor && this._view) {
      const document = editor.document;
      this._view.webview.postMessage({
        type: "currentFile",
        filePath: document.fileName,
        fileName: path.basename(document.fileName),
        content: document.getText(),
      });
    }
  }

  private async readFileContent(filePath: string): Promise<string> {
    try {
      const uri = vscode.Uri.file(filePath);
      const content = await vscode.workspace.fs.readFile(uri);
      return Buffer.from(content).toString("utf8");
    } catch (error: any) {
      throw new Error(`Failed to read file ${filePath}: ${error.message}`);
    }
  }

  private async sendAvailableModels() {
    if (!this._view) {
      return;
    }

    const config = vscode.workspace.getConfiguration("promptStudio");
    const models: Array<{ provider: string; model: string; label: string }> =
      [];

    // Check OpenAI
    const openaiKey = config.get<string>("openai.apiKey");
    if (openaiKey && openaiKey.trim()) {
      models.push(...getModelsForDisplay("openai"));
    }

    // Check Anthropic
    const anthropicKey = config.get<string>("anthropic.apiKey");
    if (anthropicKey && anthropicKey.trim()) {
      models.push(...getModelsForDisplay("anthropic"));
    }

    // Check Google
    const googleKey = config.get<string>("google.apiKey");
    if (googleKey && googleKey.trim()) {
      models.push(...getModelsForDisplay("google"));
    }

    this._view.webview.postMessage({
      type: "availableModels",
      models: models,
    });
  }

  private async runPrompt(data: any) {
    if (!this._view) {
      return;
    }

    // Show loading state
    this._view.webview.postMessage({
      type: "loading",
      loading: true,
    });

    try {
      // Store current file info
      this.currentFilePath = data.filePath || "";
      this.currentFileName = data.fileName || "";

      const request: PromptRequest = {
        provider: data.provider,
        model: data.model,
        prompt: data.prompt,
        systemPrompt: data.systemPrompt || undefined,
        temperature: 0.7,
        maxTokens: 2000,
      };

      const response = await this.llmManager.runPrompt(request);

      // Save to history if we have file info and a valid response
      if (this.currentFilePath && !response.error) {
        await this.historyManager.addEntry(
          this.currentFilePath,
          this.currentFileName,
          data.userPrompt || data.prompt, // Save original user prompt
          request.systemPrompt,
          request.provider,
          request.model,
          response
        );
      }

      this._view.webview.postMessage({
        type: "response",
        response: response,
      });
    } catch (error: any) {
      this._view.webview.postMessage({
        type: "error",
        error: error.message || "Unknown error occurred",
      });
    } finally {
      this._view.webview.postMessage({
        type: "loading",
        loading: false,
      });
    }
  }

  private async saveApiKeys(keys: {
    openai?: string;
    anthropic?: string;
    google?: string;
  }) {
    const config = vscode.workspace.getConfiguration("promptStudio");

    try {
      if (keys.openai !== undefined) {
        await config.update(
          "openai.apiKey",
          keys.openai,
          vscode.ConfigurationTarget.Global
        );
      }
      if (keys.anthropic !== undefined) {
        await config.update(
          "anthropic.apiKey",
          keys.anthropic,
          vscode.ConfigurationTarget.Global
        );
      }
      if (keys.google !== undefined) {
        await config.update(
          "google.apiKey",
          keys.google,
          vscode.ConfigurationTarget.Global
        );
      }

      // Refresh available models after saving keys
      await this.sendAvailableModels();

      if (this._view) {
        this._view.webview.postMessage({
          type: "apiKeysSaved",
          success: true,
        });
      }

      vscode.window.showInformationMessage("API keys saved successfully!");
    } catch (error: any) {
      if (this._view) {
        this._view.webview.postMessage({
          type: "apiKeysSaved",
          success: false,
          error: error.message,
        });
      }
      vscode.window.showErrorMessage(
        `Failed to save API keys: ${error.message}`
      );
    }
  }

  private async sendApiKeys() {
    if (!this._view) {
      return;
    }

    const config = vscode.workspace.getConfiguration("promptStudio");

    const keys = {
      openai: config.get<string>("openai.apiKey") || "",
      anthropic: config.get<string>("anthropic.apiKey") || "",
      google: config.get<string>("google.apiKey") || "",
    };

    this._view.webview.postMessage({
      type: "apiKeys",
      keys: keys,
    });
  }

  private async sendHistory(filePath?: string) {
    if (!this._view) {
      return;
    }

    // Use provided filePath or fall back to active editor
    let targetFilePath = filePath;
    if (!targetFilePath) {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        this._view.webview.postMessage({
          type: "history",
          entries: [],
        });
        return;
      }
      targetFilePath = editor.document.fileName;
    }

    const entries = await this.historyManager.getHistoryForFile(targetFilePath);

    this._view.webview.postMessage({
      type: "history",
      entries: entries.map((entry) => ({
        id: entry.id,
        timestamp: entry.timestamp,
        prompt: entry.prompt,
        response: entry.response,
        systemPrompt: entry.systemPrompt,
        provider: entry.provider,
        model: entry.model,
        tokensUsed: entry.tokensUsed,
      })),
    });
  }

  private async clearHistory(filePath: string) {
    try {
      await this.historyManager.clearHistoryForFile(filePath);
      vscode.window.showInformationMessage("History cleared for current file");
      // Refresh history display
      await this.sendHistory();
    } catch (error: any) {
      vscode.window.showErrorMessage(
        `Failed to clear history: ${error.message}`
      );
    }
  }

  private async openInNewTab(content: string, title: string) {
    try {
      // Create a new untitled document
      const document = await vscode.workspace.openTextDocument({
        content: content,
        language: "markdown",
      });

      // Show the document in a new editor
      await vscode.window.showTextDocument(document, {
        preview: false,
        viewColumn: vscode.ViewColumn.One,
      });
    } catch (error: any) {
      vscode.window.showErrorMessage(
        `Failed to open in new tab: ${error.message}`
      );
    }
  }

  private async addFiles() {
    try {
      const uris = await vscode.window.showOpenDialog({
        canSelectMany: true,
        openLabel: "Add Files",
        filters: {
          "All Files": ["*"],
        },
      });

      if (uris && uris.length > 0 && this._view) {
        const files = await Promise.all(
          uris.map(async (uri) => {
            const content = await this.readFileContent(uri.fsPath);
            return {
              filePath: uri.fsPath,
              fileName: path.basename(uri.fsPath),
              content: content,
            };
          })
        );

        this._view.webview.postMessage({
          type: "filesAdded",
          files: files,
        });
      }
    } catch (error: any) {
      vscode.window.showErrorMessage(`Failed to add files: ${error.message}`);
    }
  }

  private async sendFileContent(filePath: string) {
    try {
      const content = await this.readFileContent(filePath);
      if (this._view) {
        this._view.webview.postMessage({
          type: "fileContent",
          filePath: filePath,
          fileName: path.basename(filePath),
          content: content,
        });
      }
    } catch (error: any) {
      if (this._view) {
        this._view.webview.postMessage({
          type: "fileContentError",
          filePath: filePath,
          error: error.message,
        });
      }
    }
  }

  private async sendOpenFiles() {
    if (!this._view) {
      return;
    }

    const openFiles = vscode.window.tabGroups.all
      .flatMap((group) => group.tabs)
      .filter((tab) => tab.input instanceof vscode.TabInputText)
      .map((tab) => {
        const input = tab.input as vscode.TabInputText;
        return {
          filePath: input.uri.fsPath,
          fileName: path.basename(input.uri.fsPath),
        };
      });

    this._view.webview.postMessage({
      type: "openFiles",
      files: openFiles,
    });
  }

  private async selectCurrentFile(filePath: string) {
    if (!this._view) {
      return;
    }

    try {
      const content = await this.readFileContent(filePath);
      this._view.webview.postMessage({
        type: "currentFile",
        filePath: filePath,
        fileName: path.basename(filePath),
        content: content,
      });
    } catch (error: any) {
      vscode.window.showErrorMessage(`Failed to read file: ${error.message}`);
    }
  }

  private _getHtmlForWebview(webview: vscode.Webview) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
    <title>Prompt Studio</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: var(--vscode-font-family);
            font-size: var(--vscode-font-size);
            color: var(--vscode-foreground);
            background-color: var(--vscode-sideBar-background);
            padding: 16px;
        }
        
        .section {
            margin-bottom: 16px;
        }
        
        .section-title {
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            color: var(--vscode-foreground);
            margin-bottom: 8px;
            opacity: 0.8;
        }
        
        select, input, textarea, button {
            width: 100%;
            padding: 6px 8px;
            background-color: var(--vscode-input-background);
            color: var(--vscode-input-foreground);
            border: 1px solid var(--vscode-input-border);
            border-radius: 2px;
            font-family: var(--vscode-font-family);
            font-size: var(--vscode-font-size);
        }
        
        select {
            cursor: pointer;
        }
        
        textarea {
            min-height: 100px;
            resize: vertical;
            font-family: var(--vscode-editor-font-family);
        }
        
        button {
            background-color: var(--vscode-button-background);
            color: var(--vscode-button-foreground);
            border: none;
            cursor: pointer;
            font-weight: 600;
            padding: 8px 12px;
            margin-top: 8px;
        }
        
        button:hover {
            background-color: var(--vscode-button-hoverBackground);
        }
        
        button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        
        .file-display {
            padding: 8px;
            background-color: var(--vscode-editor-background);
            border: 1px solid var(--vscode-panel-border);
            border-radius: 2px;
            font-family: var(--vscode-editor-font-family);
            font-size: 12px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        .response-container {
            margin-top: 16px;
            padding: 12px;
            background-color: var(--vscode-editor-background);
            border: 1px solid var(--vscode-panel-border);
            border-radius: 2px;
            display: none;
        }
        
        .response-container.visible {
            display: block;
        }
        
        .response-header {
            font-weight: 600;
            margin-bottom: 8px;
            padding-bottom: 8px;
            border-bottom: 1px solid var(--vscode-panel-border);
            font-size: 12px;
        }
        
        .response-meta {
            font-size: 11px;
            color: var(--vscode-descriptionForeground);
            margin-bottom: 8px;
        }
        
        .response-content {
            white-space: pre-wrap;
            word-wrap: break-word;
            line-height: 1.6;
            font-family: var(--vscode-editor-font-family);
            font-size: 13px;
        }
        
        .error {
            color: var(--vscode-errorForeground);
            padding: 8px;
            background-color: var(--vscode-inputValidation-errorBackground);
            border: 1px solid var(--vscode-inputValidation-errorBorder);
            border-radius: 2px;
            font-size: 12px;
        }
        
        .loading {
            text-align: center;
            padding: 12px;
            color: var(--vscode-descriptionForeground);
            font-size: 12px;
        }
        
        .no-models {
            padding: 8px;
            background-color: var(--vscode-inputValidation-warningBackground);
            border: 1px solid var(--vscode-inputValidation-warningBorder);
            border-radius: 2px;
            font-size: 12px;
            margin-bottom: 12px;
        }
        
        .help-text {
            font-size: 11px;
            color: var(--vscode-descriptionForeground);
            margin-top: 4px;
            font-style: italic;
        }

        .divider {
            height: 1px;
            background-color: var(--vscode-panel-border);
            margin: 16px 0;
        }

        .config-button {
            background-color: var(--vscode-button-secondaryBackground);
            color: var(--vscode-button-secondaryForeground);
            padding: 4px 8px;
            font-size: 11px;
            margin-top: 0;
            width: auto;
            display: inline-block;
        }

        .config-button:hover {
            background-color: var(--vscode-button-secondaryHoverBackground);
        }

        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
            padding: 20px;
        }

        .modal.visible {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .modal-content {
            background-color: var(--vscode-editor-background);
            border: 1px solid var(--vscode-panel-border);
            border-radius: 4px;
            padding: 20px;
            max-width: 500px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
        }

        .modal-header {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 16px;
            color: var(--vscode-foreground);
        }

        .modal-section {
            margin-bottom: 16px;
        }

        .modal-label {
            font-size: 12px;
            font-weight: 600;
            margin-bottom: 6px;
            display: block;
            color: var(--vscode-foreground);
        }

        .modal-input {
            width: 100%;
            padding: 8px;
            margin-bottom: 4px;
        }

        .modal-help {
            font-size: 11px;
            color: var(--vscode-descriptionForeground);
            font-style: italic;
        }

        .modal-buttons {
            display: flex;
            gap: 8px;
            margin-top: 20px;
        }

        .modal-buttons button {
            flex: 1;
            margin-top: 0;
        }

        .cancel-button {
            background-color: var(--vscode-button-secondaryBackground);
            color: var(--vscode-button-secondaryForeground);
        }

        .cancel-button:hover {
            background-color: var(--vscode-button-secondaryHoverBackground);
        }

        .title-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
        }

        .tabs {
            display: flex;
            gap: 4px;
            margin-bottom: 16px;
            border-bottom: 1px solid var(--vscode-panel-border);
        }

        .tab {
            padding: 8px 16px;
            background: transparent;
            border: none;
            border-bottom: 2px solid transparent;
            cursor: pointer;
            font-weight: 500;
            color: var(--vscode-foreground);
            opacity: 0.6;
            margin-top: 0;
            width: auto;
        }

        .tab:hover {
            opacity: 0.8;
            background: transparent;
        }

        .tab.active {
            opacity: 1;
            border-bottom-color: var(--vscode-focusBorder);
        }

        .tab-content {
            display: none;
        }

        .tab-content.active {
            display: block;
        }

        .history-version-select {
            margin-bottom: 16px;
        }

        .history-detail {
            margin-top: 16px;
        }

        .history-detail-section {
            margin-bottom: 16px;
            background: var(--vscode-editor-background);
            border: 1px solid var(--vscode-panel-border);
            border-radius: 3px;
        }

        .history-detail-label {
            font-size: 10px;
            font-weight: 600;
            text-transform: uppercase;
            color: var(--vscode-descriptionForeground);
            margin-bottom: 6px;
        }

        .history-detail-content {
            font-size: 12px;
            white-space: pre-wrap;
            word-wrap: break-word;
            line-height: 1.5;
        }

        .collapsible-section {
            margin-bottom: 16px;
            background: var(--vscode-editor-background);
            border: 1px solid var(--vscode-panel-border);
            border-radius: 3px;
        }

        .collapsible-header {
            padding: 12px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            user-select: none;
        }

        .collapsible-header:hover {
            background: var(--vscode-list-hoverBackground);
        }

        .collapsible-content {
            padding: 0 12px 12px 12px;
            display: none;
        }

        .collapsible-content.expanded {
            display: block;
        }

        .collapse-icon {
            font-size: 12px;
            transition: transform 0.2s;
        }

        .collapse-icon.expanded {
            transform: rotate(90deg);
        }

        .header-controls {
            display: flex;
            gap: 8px;
            align-items: center;
        }

        .icon-button {
            background: transparent;
            border: 1px solid var(--vscode-button-border);
            padding: 6px;
            font-size: 14px;
            cursor: pointer;
            border-radius: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            width: 28px;
            height: 28px;
            transition: all 0.2s;
        }

        .icon-button:hover {
            background: var(--vscode-button-hoverBackground);
        }

        .icon-button.success {
            background: var(--vscode-button-background);
            border-color: var(--vscode-button-background);
        }

        @keyframes buttonSuccess {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
            100% {
                transform: scale(1);
            }
        }

        .icon-button.success {
            animation: buttonSuccess 0.3s ease-in-out;
        }

        .file-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .file-item {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px;
            background-color: var(--vscode-editor-background);
            border: 1px solid var(--vscode-panel-border);
            border-radius: 3px;
            font-size: 12px;
        }

        .file-item.current-file {
            background-color: var(--vscode-list-hoverBackground);
        }

        .file-item.draggable {
            cursor: move;
        }

        .file-item.dragging {
            opacity: 0.5;
        }

        .file-item.drag-over {
            border-top: 2px solid var(--vscode-focusBorder);
        }

        .file-icon {
            font-size: 14px;
            flex-shrink: 0;
        }

        .drag-handle {
            cursor: move;
            opacity: 0.5;
            flex-shrink: 0;
        }

        .file-item:hover .drag-handle {
            opacity: 1;
        }

        .file-name {
            flex: 1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .file-badge {
            font-size: 10px;
            padding: 2px 6px;
            background-color: var(--vscode-badge-background);
            color: var(--vscode-badge-foreground);
            border-radius: 2px;
            flex-shrink: 0;
        }

        .file-remove {
            background: transparent;
            border: none;
            color: var(--vscode-errorForeground);
            cursor: pointer;
            padding: 2px 4px;
            font-size: 14px;
            width: auto;
            margin: 0;
            flex-shrink: 0;
        }

        .file-remove:hover {
            background: var(--vscode-inputValidation-errorBackground);
        }
    </style>
</head>
<body>
    <div class="section">
        <div class="title-row">
            <div class="section-title">📁 System Prompt Files</div>
            <button class="config-button" onclick="addFiles()">➕ Add Files</button>
        </div>
        <div class="section-title" style="margin-top: 12px;">Current File</div>
        <select id="currentFileSelect" onchange="selectCurrentFile()">
            <option value="">Loading open files...</option>
        </select>
        <div class="help-text">Select which open file to use as the primary system prompt</div>
        
        <div id="additionalFilesSection" style="margin-top: 16px; display: none;">
            <div class="section-title">Additional Files</div>
            <div class="file-list" id="additionalFilesList"></div>
            <div class="help-text">Drag to reorder. Files are combined in order shown.</div>
        </div>
    </div>

    <div class="divider"></div>

    <!-- Tabs -->
    <div class="tabs">
        <button class="tab active" onclick="switchTab('prompt')">💬 Prompt</button>
        <button class="tab" onclick="switchTab('history')">📜 History</button>
    </div>

    <!-- Prompt Tab -->
    <div id="promptTab" class="tab-content active">
        <div class="section">
            <div class="title-row">
                <div class="section-title">🤖 Model</div>
                <button class="config-button" onclick="openConfigModal()">⚙️ Configure</button>
            </div>
        <div id="noModelsWarning" class="no-models" style="display: none;">
            No API keys configured. Click Configure to add API keys.
        </div>
        <select id="modelSelect">
            <option value="">Loading models...</option>
        </select>
    </div>

    <div class="section">
        <div class="section-title">💬 Prompt</div>
        <textarea id="promptInput" placeholder="Enter your prompt or instruction..."></textarea>
        <div class="help-text">The file content will be used as the system prompt</div>
    </div>

        <button id="runButton" onclick="runPrompt()">▶ Run Prompt</button>

        <div id="loadingIndicator" class="loading" style="display: none;">
            ⏳ Running prompt...
        </div>

        <div class="response-container" id="responseContainer">
            <div class="response-header">📤 Response</div>
            <div class="response-meta" id="responseMeta"></div>
            <div class="response-content" id="responseContent"></div>
        </div>
    </div>

    <!-- History Tab -->
    <div id="historyTab" class="tab-content">
        <div class="section">
            <div class="title-row">
                <div class="section-title">📜 Select Version</div>
                <button class="config-button" onclick="clearFileHistory()">🗑️ Clear All</button>
            </div>
            <select id="historyVersionSelect" onchange="loadHistoryVersion(this.value)">
                <option value="">Select a saved version...</option>
            </select>
        </div>

        <div id="historyDetail" class="history-detail" style="display: none;">
            <div class="history-detail-section">
                <div class="history-detail-label">📅 Date & Time</div>
                <div class="history-detail-content" id="historyDate"></div>
            </div>

            <div class="history-detail-section">
                <div class="history-detail-label">🤖 Model</div>
                <div class="history-detail-content" id="historyModel"></div>
            </div>

            <div class="history-detail-section">
                <div class="history-detail-label">📁 File</div>
                <div class="history-detail-content" id="historyFile"></div>
            </div>

            <div class="collapsible-section">
                <div class="collapsible-header">
                    <div class="history-detail-label" onclick="toggleCollapse('systemPrompt')" style="flex: 1; cursor: pointer;">⚙️ System Prompt</div>
                    <div class="header-controls">
                        <button class="icon-button" id="openSystemPromptBtn" onclick="event.stopPropagation(); openInNewTab('historySystemPrompt', 'System Prompt', 'openSystemPromptBtn')" title="Open in new tab">📄</button>
                        <button class="icon-button" id="copySystemPromptBtn" onclick="event.stopPropagation(); copyToClipboard('historySystemPrompt', 'copySystemPromptBtn')" title="Copy to clipboard">📋</button>
                        <span class="collapse-icon" id="systemPromptIcon" onclick="toggleCollapse('systemPrompt')">▶</span>
                    </div>
                </div>
                <div class="collapsible-content" id="systemPromptContent">
                    <div class="history-detail-content" id="historySystemPrompt" style="font-style: italic;"></div>
                </div>
            </div>

            <div class="collapsible-section">
                <div class="collapsible-header">
                    <div class="history-detail-label" onclick="toggleCollapse('userPrompt')" style="flex: 1; cursor: pointer;">💬 User Prompt</div>
                    <div class="header-controls">
                        <button class="icon-button" id="openUserPromptBtn" onclick="event.stopPropagation(); openInNewTab('historyPrompt', 'User Prompt', 'openUserPromptBtn')" title="Open in new tab">📄</button>
                        <button class="icon-button" id="copyUserPromptBtn" onclick="event.stopPropagation(); copyToClipboard('historyPrompt', 'copyUserPromptBtn')" title="Copy to clipboard">📋</button>
                        <span class="collapse-icon" id="userPromptIcon" onclick="toggleCollapse('userPrompt')">▶</span>
                    </div>
                </div>
                <div class="collapsible-content" id="userPromptContent">
                    <div class="history-detail-content" id="historyPrompt"></div>
                </div>
            </div>

            <div class="collapsible-section">
                <div class="collapsible-header">
                    <div class="history-detail-label" onclick="toggleCollapse('historyResponse')" style="flex: 1; cursor: pointer;">📤 Response</div>
                    <div class="header-controls">
                        <button class="icon-button" id="openResponseBtn" onclick="event.stopPropagation(); openInNewTab('historyResponse', 'Response', 'openResponseBtn')" title="Open in new tab">📄</button>
                        <button class="icon-button" id="copyResponseBtn" onclick="event.stopPropagation(); copyToClipboard('historyResponse', 'copyResponseBtn')" title="Copy to clipboard">📋</button>
                        <span class="collapse-icon" id="historyResponseIcon" onclick="toggleCollapse('historyResponse')">▶</span>
                    </div>
                </div>
                <div class="collapsible-content" id="historyResponseContent">
                    <div class="history-detail-content" id="historyResponse"></div>
                </div>
            </div>

            <button onclick="loadHistoryIntoPrompt()">↩️ Load Into Prompt Tab</button>
        </div>

        <div id="noHistoryMessage" style="text-align: center; padding: 40px; opacity: 0.5;">
            No history available for this file. Run a prompt to create history.
        </div>
    </div>

    <!-- Configuration Modal -->
    <div id="configModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">🔑 Configure API Keys</div>
            
            <div class="modal-section">
                <label class="modal-label">OpenAI API Key</label>
                <input type="password" class="modal-input" id="openaiKeyInput" placeholder="sk-...">
                <div class="modal-help">Get your API key from platform.openai.com</div>
            </div>

            <div class="modal-section">
                <label class="modal-label">Anthropic API Key</label>
                <input type="password" class="modal-input" id="anthropicKeyInput" placeholder="sk-ant-...">
                <div class="modal-help">Get your API key from console.anthropic.com</div>
            </div>

            <div class="modal-section">
                <label class="modal-label">Google AI API Key</label>
                <input type="password" class="modal-input" id="googleKeyInput" placeholder="AI...">
                <div class="modal-help">Get your API key from makersuite.google.com</div>
            </div>

            <div class="modal-buttons">
                <button class="cancel-button" onclick="closeConfigModal()">Cancel</button>
                <button onclick="saveApiKeys()">💾 Save Keys</button>
            </div>
        </div>
    </div>

    <!-- Clear History Confirmation Modal -->
    <div id="clearHistoryModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">⚠️ Clear History</div>
            
            <div class="modal-section">
                <p style="margin-bottom: 12px;">Are you sure you want to clear all history for this file?</p>
                <p style="font-size: 11px; color: var(--vscode-descriptionForeground); font-style: italic;">This action cannot be undone.</p>
            </div>

            <div class="modal-buttons">
                <button class="cancel-button" onclick="closeClearHistoryModal()">Cancel</button>
                <button onclick="confirmClearHistory()" style="background-color: var(--vscode-errorForeground); color: var(--vscode-button-foreground);">🗑️ Clear All</button>
            </div>
        </div>
    </div>

    <script>
        const vscode = acquireVsCodeApi();

        // All state variables declared upfront
        let currentFileContent = '';
        let currentFilePath = '';
        let availableModels = [];
        let historyEntries = [];
        let selectedHistoryEntry = null;
        let additionalFiles = [];
        let openFiles = [];

        // Restore previous state
        const previousState = vscode.getState() || {};
        
        // Request initial data
        vscode.postMessage({ type: 'getCurrentFile' });
        vscode.postMessage({ type: 'getAvailableModels' });

        // Single consolidated message handler for all extension messages
        window.addEventListener('message', event => {
            const message = event.data;

            switch (message.type) {
                case 'currentFile':
                    currentFileContent = message.content;
                    currentFilePath = message.filePath;
                    // Update dropdown selection
                    const fileSelect = document.getElementById('currentFileSelect');
                    if (fileSelect) {
                        fileSelect.value = message.filePath;
                    }
                    break;

                case 'availableModels':
                    availableModels = message.models;
                    updateModelSelect(message.models);
                    break;

                case 'loading':
                    const loadingIndicator = document.getElementById('loadingIndicator');
                    const runBtn = document.getElementById('runButton');
                    if (message.loading) {
                        loadingIndicator.style.display = 'block';
                        runBtn.disabled = true;
                        document.getElementById('responseContainer').classList.remove('visible');
                    } else {
                        loadingIndicator.style.display = 'none';
                        runBtn.disabled = false;
                    }
                    break;

                case 'response':
                    displayResponse(message.response);
                    break;

                case 'error':
                    displayError(message.error);
                    break;

                case 'history':
                    historyEntries = message.entries;
                    populateHistoryDropdown(message.entries);
                    break;

                case 'openFiles':
                    openFiles = message.files;
                    populateCurrentFileSelect(message.files);
                    break;

                case 'filesAdded':
                    handleFilesAdded(message.files);
                    break;

                case 'apiKeys':
                    document.getElementById('openaiKeyInput').value = message.keys.openai || '';
                    document.getElementById('anthropicKeyInput').value = message.keys.anthropic || '';
                    document.getElementById('googleKeyInput').value = message.keys.google || '';
                    break;

                case 'apiKeysSaved':
                    if (message.success) {
                        closeConfigModal();
                        vscode.postMessage({ type: 'getAvailableModels' });
                    }
                    break;
            }
        });

        function updateModelSelect(models) {
            const select = document.getElementById('modelSelect');
            const noModelsWarning = document.getElementById('noModelsWarning');
            
            if (models.length === 0) {
                select.innerHTML = '<option value="">No models available</option>';
                select.disabled = true;
                noModelsWarning.style.display = 'block';
                document.getElementById('runButton').disabled = true;
            } else {
                select.innerHTML = models.map(m => 
                    \`<option value="\${m.provider}:\${m.model}">\${m.label}</option>\`
                ).join('');
                select.disabled = false;
                noModelsWarning.style.display = 'none';
                document.getElementById('runButton').disabled = false;
                
                // Restore previously selected model if available
                if (previousState.selectedModel) {
                    select.value = previousState.selectedModel;
                }
            }
            
            // Save state when model changes
            select.addEventListener('change', saveState);
        }

        // Restore prompt text if available
        const promptInput = document.getElementById('promptInput');
        if (previousState.promptText) {
            promptInput.value = previousState.promptText;
        }
        
        // Save state when prompt changes
        promptInput.addEventListener('input', saveState);

        function saveState() {
            const modelSelect = document.getElementById('modelSelect');
            const promptInput = document.getElementById('promptInput');
            
            vscode.setState({
                selectedModel: modelSelect.value,
                promptText: promptInput.value
            });
        }

        function runPrompt() {
            const modelValue = document.getElementById('modelSelect').value;
            const promptInput = document.getElementById('promptInput').value;
            
            if (!modelValue) {
                // Show error in UI instead of alert
                displayError('Please select a model');
                return;
            }
            
            if (!promptInput.trim()) {
                displayError('Please enter a prompt');
                return;
            }
            
            const [provider, model] = modelValue.split(':');
            
            // Get file name from path
            const fileName = currentFilePath.split('/').pop() || currentFilePath.split('\\\\').pop() || 'unknown';
            
            // Combine current file with additional files in order
            let combinedSystemPrompt = '';
            
            // Add current file first
            if (currentFileContent) {
                const currentFileName = currentFilePath.split('/').pop() || currentFilePath.split('\\\\').pop() || 'File';
                combinedSystemPrompt += \`# \${currentFileName}\\n\\n\${currentFileContent}\`;
            }
            
            // Add additional files in order
            additionalFiles.forEach(file => {
                if (combinedSystemPrompt) {
                    combinedSystemPrompt += '\\n\\n';
                }
                combinedSystemPrompt += \`# \${file.fileName}\\n\\n\${file.content}\`;
            });
            
            const systemPrompt = combinedSystemPrompt || undefined;
            
            // Send message to extension
            vscode.postMessage({
                type: 'runPrompt',
                provider: provider,
                model: model,
                prompt: promptInput,
                userPrompt: promptInput,
                systemPrompt: systemPrompt,
                filePath: currentFilePath,
                fileName: fileName
            });
        }

        function displayResponse(response) {
            const container = document.getElementById('responseContainer');
            const meta = document.getElementById('responseMeta');
            const content = document.getElementById('responseContent');
            
            container.classList.add('visible');
            
            if (response.error) {
                content.innerHTML = \`<div class="error">❌ \${response.error}</div>\`;
                meta.textContent = '';
            } else {
                content.textContent = response.content;
                meta.textContent = \`\${response.provider} | \${response.model}\${response.tokensUsed ? ' | ' + response.tokensUsed + ' tokens' : ''}\`;
            }
        }

        function displayError(error) {
            const container = document.getElementById('responseContainer');
            const content = document.getElementById('responseContent');
            
            container.classList.add('visible');
            content.innerHTML = \`<div class="error">❌ Error: \${error}</div>\`;
            document.getElementById('responseMeta').textContent = '';
        }

        // Configuration Modal Functions
        function openConfigModal() {
            // Request current API keys - response handled in main message handler
            vscode.postMessage({ type: 'getApiKeys' });
            document.getElementById('configModal').classList.add('visible');
        }

        function closeConfigModal() {
            document.getElementById('configModal').classList.remove('visible');
        }

        function saveApiKeys() {
            const keys = {
                openai: document.getElementById('openaiKeyInput').value,
                anthropic: document.getElementById('anthropicKeyInput').value,
                google: document.getElementById('googleKeyInput').value
            };

            vscode.postMessage({
                type: 'saveApiKeys',
                keys: keys
            });
            // Response handled in main message handler
        }

        // Tab Switching
        function switchTab(tabName) {
            // Update tab buttons
            document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
            event.target.classList.add('active');

            // Update tab contents
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            if (tabName === 'prompt') {
                document.getElementById('promptTab').classList.add('active');
            } else if (tabName === 'history') {
                document.getElementById('historyTab').classList.add('active');
                // Load history when switching to history tab, passing the current file path
                vscode.postMessage({ 
                    type: 'getHistory',
                    filePath: currentFilePath 
                });
            }
        }

        // History Tab Functions
        function clearFileHistory() {
            document.getElementById('clearHistoryModal').classList.add('visible');
        }

        function closeClearHistoryModal() {
            document.getElementById('clearHistoryModal').classList.remove('visible');
        }

        function confirmClearHistory() {
            vscode.postMessage({ type: 'clearHistory', filePath: currentFilePath });
            closeClearHistoryModal();
        }

        function populateHistoryDropdown(entries) {
            const select = document.getElementById('historyVersionSelect');
            const noHistoryMsg = document.getElementById('noHistoryMessage');
            const historyDetail = document.getElementById('historyDetail');

            if (entries.length === 0) {
                select.innerHTML = '<option value="">No history available</option>';
                select.disabled = true;
                noHistoryMsg.style.display = 'block';
                historyDetail.style.display = 'none';
                return;
            }

            select.disabled = false;
            noHistoryMsg.style.display = 'none';
            
            select.innerHTML = '<option value="">Select a saved version...</option>' + 
                entries.map((entry, index) => {
                    const date = new Date(entry.timestamp);
                    const timeStr = date.toLocaleString();
                    const promptPreview = entry.prompt.substring(0, 50).replace(/\\n/g, ' ');
                    return \`<option value="\${index}">\${timeStr} - \${entry.model} - \${promptPreview}...</option>\`;
                }).join('');
        }

        function loadHistoryVersion(index) {
            if (!index) {
                document.getElementById('historyDetail').style.display = 'none';
                return;
            }

            const entry = historyEntries[parseInt(index)];
            if (!entry) return;

            selectedHistoryEntry = entry;

            const date = new Date(entry.timestamp);
            
            document.getElementById('historyDate').textContent = date.toLocaleString();
            document.getElementById('historyModel').textContent = \`\${entry.provider} / \${entry.model}\${entry.tokensUsed ? ' (' + entry.tokensUsed + ' tokens)' : ''}\`;
            document.getElementById('historyFile').textContent = currentFilePath;
            document.getElementById('historySystemPrompt').textContent = entry.systemPrompt || '(None)';
            document.getElementById('historyPrompt').textContent = entry.prompt;
            document.getElementById('historyResponse').textContent = entry.response;

            document.getElementById('historyDetail').style.display = 'block';
        }

        function loadHistoryIntoPrompt() {
            if (!selectedHistoryEntry) return;

            // Load the prompt back into the prompt field
            document.getElementById('promptInput').value = selectedHistoryEntry.prompt;

            // Switch to prompt tab
            document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('.tab')[0].classList.add('active');
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            document.getElementById('promptTab').classList.add('active');
        }

        // Collapsible section toggle
        function toggleCollapse(section) {
            const content = document.getElementById(section + 'Content');
            const icon = document.getElementById(section + 'Icon');
            
            if (content.classList.contains('expanded')) {
                content.classList.remove('expanded');
                icon.classList.remove('expanded');
            } else {
                content.classList.add('expanded');
                icon.classList.add('expanded');
            }
        }

        // Copy to clipboard function with animation
        function copyToClipboard(contentElementId, buttonId) {
            const element = document.getElementById(contentElementId);
            const button = document.getElementById(buttonId);
            
            if (!element || !button) return;
            
            const text = element.textContent;
            
            // Use the Clipboard API
            navigator.clipboard.writeText(text).then(() => {
                // Success animation
                const originalIcon = button.innerHTML;
                button.innerHTML = '✓';
                button.classList.add('success');
                
                // Reset after 2 seconds
                setTimeout(() => {
                    button.innerHTML = originalIcon;
                    button.classList.remove('success');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy:', err);
                button.innerHTML = '❌';
                setTimeout(() => {
                    button.innerHTML = '📋';
                }, 2000);
            });
        }

        // Open content in new VS Code tab
        function openInNewTab(contentElementId, title, buttonId) {
            const element = document.getElementById(contentElementId);
            const button = document.getElementById(buttonId);
            
            if (!element || !button) return;
            
            const text = element.textContent;
            
            // Send message to extension to open new tab
            vscode.postMessage({
                type: 'openInNewTab',
                content: text,
                title: title
            });
            
            // Success animation
            const originalIcon = button.innerHTML;
            button.innerHTML = '✓';
            button.classList.add('success');
            
            // Reset after 1 second
            setTimeout(() => {
                button.innerHTML = originalIcon;
                button.classList.remove('success');
            }, 1000);
        }

        // Close modal when clicking outside
        document.addEventListener('click', (e) => {
            const configModal = document.getElementById('configModal');
            const clearHistoryModal = document.getElementById('clearHistoryModal');
            if (e.target === configModal) {
                closeConfigModal();
            }
            if (e.target === clearHistoryModal) {
                closeClearHistoryModal();
            }
        });

        // Multiple File Management - Request open files on load
        vscode.postMessage({ type: 'getOpenFiles' });

        function populateCurrentFileSelect(files) {
            const select = document.getElementById('currentFileSelect');
            
            if (!files || files.length === 0) {
                select.innerHTML = '<option value="">No files open</option>';
                select.disabled = true;
                return;
            }

            select.disabled = false;
            select.innerHTML = files.map(f => 
                \`<option value="\${f.filePath}">\${f.fileName}</option>\`
            ).join('');

            // Set to current file if available
            if (currentFilePath) {
                select.value = currentFilePath;
            }
        }

        function selectCurrentFile() {
            const select = document.getElementById('currentFileSelect');
            const filePath = select.value;
            
            if (filePath) {
                vscode.postMessage({ 
                    type: 'selectCurrentFile',
                    filePath: filePath
                });
                
                // If history tab is active, refresh it for the new file
                const historyTab = document.getElementById('historyTab');
                if (historyTab && historyTab.classList.contains('active')) {
                    // Small delay to ensure currentFilePath is updated
                    setTimeout(() => {
                        vscode.postMessage({ 
                            type: 'getHistory',
                            filePath: filePath 
                        });
                    }, 100);
                }
            }
        }

        function addFiles() {
            vscode.postMessage({ type: 'addFiles' });
        }

        function handleFilesAdded(files) {
            files.forEach(file => {
                additionalFiles.push(file);
            });
            renderAdditionalFiles();
        }

        function renderAdditionalFiles() {
            const container = document.getElementById('additionalFilesList');
            const section = document.getElementById('additionalFilesSection');
            
            if (additionalFiles.length === 0) {
                section.style.display = 'none';
                return;
            }
            
            section.style.display = 'block';
            container.innerHTML = additionalFiles.map((file, index) => \`
                <div class="file-item draggable" draggable="true" 
                     data-index="\${index}"
                     ondragstart="handleDragStart(event)"
                     ondragover="handleDragOver(event)"
                     ondrop="handleDrop(event)"
                     ondragend="handleDragEnd(event)">
                    <span class="drag-handle">⠿</span>
                    <span class="file-icon">📄</span>
                    <span class="file-name" title="\${file.filePath}">\${file.fileName}</span>
                    <button class="file-remove" onclick="removeFile(\${index})" title="Remove file">×</button>
                </div>
            \`).join('');
        }

        function removeFile(index) {
            additionalFiles.splice(index, 1);
            renderAdditionalFiles();
        }

        // Drag and Drop Implementation
        let draggedIndex = null;

        function handleDragStart(e) {
            draggedIndex = parseInt(e.currentTarget.dataset.index);
            e.currentTarget.classList.add('dragging');
            e.dataTransfer.effectAllowed = 'move';
        }

        function handleDragOver(e) {
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.dataTransfer.dropEffect = 'move';
            return false;
        }

        function handleDrop(e) {
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            
            const dropIndex = parseInt(e.currentTarget.dataset.index);
            
            if (draggedIndex !== null && draggedIndex !== dropIndex) {
                const draggedFile = additionalFiles[draggedIndex];
                additionalFiles.splice(draggedIndex, 1);
                additionalFiles.splice(dropIndex, 0, draggedFile);
                renderAdditionalFiles();
            }
            
            return false;
        }

        function handleDragEnd(e) {
            e.currentTarget.classList.remove('dragging');
            draggedIndex = null;
        }
    </script>
</body>
</html>`;
  }
}
