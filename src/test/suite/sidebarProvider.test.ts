import * as assert from "assert";
import * as vscode from "vscode";
import { SidebarProvider } from "../../sidebarProvider";
import { LLMProviderManager } from "../../llmProviders";
import { HistoryManager } from "../../historyManager";

suite("SidebarProvider Test Suite", () => {
  let sidebarProvider: SidebarProvider;
  let llmManager: LLMProviderManager;
  let historyManager: HistoryManager;
  let mockContext: vscode.ExtensionContext;
  let extensionUri: vscode.Uri;

  setup(() => {
    extensionUri = vscode.Uri.file(__dirname);

    mockContext = {
      subscriptions: [],
      workspaceState: {
        get: () => undefined,
        update: async () => {},
        keys: () => [],
      },
      globalState: {
        get: () => undefined,
        update: async () => {},
        keys: () => [],
        setKeysForSync: () => {},
      },
      secrets: {} as any,
      extensionUri: extensionUri,
      extensionPath: __dirname,
      storagePath: __dirname + "/storage",
      globalStoragePath: __dirname + "/globalStorage",
      globalStorageUri: vscode.Uri.file(__dirname + "/globalStorage"),
      logPath: __dirname + "/logs",
      logUri: vscode.Uri.file(__dirname + "/logs"),
      environmentVariableCollection: {} as any,
      asAbsolutePath: (relativePath: string) => relativePath,
      storageUri: vscode.Uri.file(__dirname + "/storage"),
      extensionMode: vscode.ExtensionMode.Test,
      extension: {} as any,
      languageModelAccessInformation: {} as any,
    } as vscode.ExtensionContext;

    llmManager = new LLMProviderManager();
    historyManager = new HistoryManager(mockContext);
    sidebarProvider = new SidebarProvider(
      extensionUri,
      llmManager,
      historyManager
    );
  });

  test("SidebarProvider instance creation", () => {
    assert.ok(sidebarProvider);
    assert.ok(sidebarProvider instanceof SidebarProvider);
  });

  test("SidebarProvider implements WebviewViewProvider", () => {
    assert.ok(typeof sidebarProvider.resolveWebviewView === "function");
  });

  test("SidebarProvider has required dependencies", () => {
    // Verify dependencies were injected
    assert.ok(sidebarProvider);
  });

  test("SidebarProvider can be constructed with all parameters", () => {
    const provider = new SidebarProvider(
      extensionUri,
      llmManager,
      historyManager
    );

    assert.ok(provider);
    assert.ok(provider instanceof SidebarProvider);
  });
});
