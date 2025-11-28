import * as vscode from "vscode";
import { PromptRunner } from "./promptRunner";
import { TestManager } from "./testManager";
import { PromptRequest, PromptResponse } from "./llmProviders";
import { getWebviewModelMapJson, MODEL_CONFIG } from "./models";

// Generate default HTML options from first provider's models
function getDefaultModelOptions(): string {
  const firstProvider = MODEL_CONFIG.openai;
  return firstProvider
    .map((m) => `                <option value="${m.id}">${m.label}</option>`)
    .join("\n");
}

export class PromptWebviewProvider {
  private panel?: vscode.WebviewPanel;

  constructor(
    private context: vscode.ExtensionContext,
    private promptRunner: PromptRunner,
    private testManager: TestManager
  ) {}

  async showPromptPanel() {
    if (this.panel) {
      this.panel.reveal();
      return;
    }

    this.panel = vscode.window.createWebviewPanel(
      "promptStudio",
      "Prompt Studio",
      vscode.ViewColumn.One,
      {
        enableScripts: true,
        retainContextWhenHidden: true,
      }
    );

    this.panel.webview.html = this.getWebviewContent();

    this.panel.webview.onDidReceiveMessage(
      async (message) => {
        switch (message.command) {
          case "runPrompt":
            await this.handleRunPrompt(message.data);
            break;
          case "saveAsTest":
            await this.handleSaveAsTest(message.data);
            break;
        }
      },
      undefined,
      this.context.subscriptions
    );

    this.panel.onDidDispose(() => {
      this.panel = undefined;
    });
  }

  private async handleRunPrompt(data: any) {
    const request: PromptRequest = {
      provider: data.provider,
      model: data.model,
      prompt: data.prompt,
      systemPrompt: data.systemPrompt || undefined,
      temperature: data.temperature || 0.7,
      maxTokens: data.maxTokens || 2000,
    };

    const response = await this.promptRunner.runPrompt(request);

    this.panel?.webview.postMessage({
      command: "promptResponse",
      response,
    });
  }

  private async handleSaveAsTest(data: any) {
    // This would integrate with the test manager
    vscode.window.showInformationMessage(
      "Save as test feature - to be implemented"
    );
  }

  private getWebviewContent(): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prompt Studio</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: var(--vscode-font-family);
            color: var(--vscode-foreground);
            background-color: var(--vscode-editor-background);
            padding: 20px;
            line-height: 1.6;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        h1 {
            margin-bottom: 20px;
            color: var(--vscode-foreground);
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        select, input, textarea {
            width: 100%;
            padding: 8px;
            background-color: var(--vscode-input-background);
            color: var(--vscode-input-foreground);
            border: 1px solid var(--vscode-input-border);
            border-radius: 4px;
            font-family: var(--vscode-font-family);
            font-size: 14px;
        }
        
        textarea {
            min-height: 100px;
            resize: vertical;
        }
        
        .row {
            display: flex;
            gap: 20px;
        }
        
        .col {
            flex: 1;
        }
        
        button {
            padding: 10px 20px;
            background-color: var(--vscode-button-background);
            color: var(--vscode-button-foreground);
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            font-weight: bold;
            margin-right: 10px;
        }
        
        button:hover {
            background-color: var(--vscode-button-hoverBackground);
        }
        
        button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        
        .response-container {
            margin-top: 30px;
            padding: 20px;
            background-color: var(--vscode-editor-background);
            border: 1px solid var(--vscode-panel-border);
            border-radius: 4px;
            display: none;
        }
        
        .response-container.visible {
            display: block;
        }
        
        .response-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid var(--vscode-panel-border);
        }
        
        .response-meta {
            font-size: 12px;
            color: var(--vscode-descriptionForeground);
        }
        
        .response-content {
            white-space: pre-wrap;
            word-wrap: break-word;
            line-height: 1.8;
            font-family: var(--vscode-editor-font-family);
        }
        
        .error {
            color: var(--vscode-errorForeground);
            padding: 10px;
            background-color: var(--vscode-inputValidation-errorBackground);
            border: 1px solid var(--vscode-inputValidation-errorBorder);
            border-radius: 4px;
        }
        
        .loading {
            display: none;
            text-align: center;
            padding: 20px;
            color: var(--vscode-descriptionForeground);
        }
        
        .loading.visible {
            display: block;
        }
        
        .advanced-options {
            margin-top: 10px;
            padding: 15px;
            background-color: var(--vscode-editor-background);
            border: 1px solid var(--vscode-panel-border);
            border-radius: 4px;
        }
        
        .advanced-toggle {
            background: none;
            color: var(--vscode-textLink-foreground);
            text-decoration: underline;
            padding: 5px 0;
            margin-bottom: 10px;
        }
        
        .advanced-content {
            display: none;
        }
        
        .advanced-content.visible {
            display: block;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Prompt Studio</h1>
        
        <div class="form-group">
            <label for="provider">Provider</label>
            <select id="provider" onchange="updateModels()">
                <option value="openai">OpenAI</option>
                <option value="anthropic">Anthropic</option>
                <option value="google">Google</option>
            </select>
        </div>
        
        <div class="form-group">
            <label for="model">Model</label>
            <select id="model">
${getDefaultModelOptions()}
            </select>
        </div>
        
        <div class="form-group">
            <label for="systemPrompt">System Prompt (Optional)</label>
            <textarea id="systemPrompt" placeholder="You are a helpful assistant..."></textarea>
        </div>
        
        <div class="form-group">
            <label for="prompt">Prompt</label>
            <textarea id="prompt" placeholder="Enter your prompt here..." style="min-height: 150px;"></textarea>
        </div>
        
        <button class="advanced-toggle" onclick="toggleAdvanced()">⚙️ Advanced Options</button>
        
        <div class="advanced-content" id="advancedOptions">
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="temperature">Temperature (0-2)</label>
                        <input type="number" id="temperature" min="0" max="2" step="0.1" value="0.7">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="maxTokens">Max Tokens</label>
                        <input type="number" id="maxTokens" min="1" max="8000" value="2000">
                    </div>
                </div>
            </div>
        </div>
        
        <div style="margin-top: 20px;">
            <button id="runButton" onclick="runPrompt()">Run Prompt</button>
            <button onclick="clearAll()">Clear</button>
        </div>
        
        <div class="loading" id="loading">
            ⏳ Running prompt...
        </div>
        
        <div class="response-container" id="responseContainer">
            <div class="response-header">
                <h2>Response</h2>
                <div class="response-meta" id="responseMeta"></div>
            </div>
            <div class="response-content" id="responseContent"></div>
        </div>
    </div>
    
    <script>
        const vscode = acquireVsCodeApi();
        
        const modelMap = ${getWebviewModelMapJson()};
        
        function updateModels() {
            const provider = document.getElementById('provider').value;
            const modelSelect = document.getElementById('model');
            modelSelect.innerHTML = '';
            
            modelMap[provider].forEach(model => {
                const option = document.createElement('option');
                option.value = model.value;
                option.textContent = model.label;
                modelSelect.appendChild(option);
            });
        }
        
        function toggleAdvanced() {
            const content = document.getElementById('advancedOptions');
            content.classList.toggle('visible');
        }
        
        function runPrompt() {
            const provider = document.getElementById('provider').value;
            const model = document.getElementById('model').value;
            const prompt = document.getElementById('prompt').value;
            const systemPrompt = document.getElementById('systemPrompt').value;
            const temperature = parseFloat(document.getElementById('temperature').value);
            const maxTokens = parseInt(document.getElementById('maxTokens').value);
            
            if (!prompt.trim()) {
                alert('Please enter a prompt');
                return;
            }
            
            document.getElementById('loading').classList.add('visible');
            document.getElementById('responseContainer').classList.remove('visible');
            document.getElementById('runButton').disabled = true;
            
            vscode.postMessage({
                command: 'runPrompt',
                data: {
                    provider,
                    model,
                    prompt,
                    systemPrompt,
                    temperature,
                    maxTokens
                }
            });
        }
        
        function clearAll() {
            document.getElementById('prompt').value = '';
            document.getElementById('systemPrompt').value = '';
            document.getElementById('responseContainer').classList.remove('visible');
        }
        
        window.addEventListener('message', event => {
            const message = event.data;
            
            if (message.command === 'promptResponse') {
                document.getElementById('loading').classList.remove('visible');
                document.getElementById('runButton').disabled = false;
                
                const response = message.response;
                const container = document.getElementById('responseContainer');
                const meta = document.getElementById('responseMeta');
                const content = document.getElementById('responseContent');
                
                container.classList.add('visible');
                
                if (response.error) {
                    content.innerHTML = '<div class="error">Error: ' + response.error + '</div>';
                    meta.textContent = '';
                } else {
                    content.textContent = response.content;
                    meta.textContent = 'Provider: ' + response.provider + 
                                      ' | Model: ' + response.model +
                                      (response.tokensUsed ? ' | Tokens: ' + response.tokensUsed : '');
                }
            }
        });
        
        // Initialize
        updateModels();
    </script>
</body>
</html>`;
  }
}
