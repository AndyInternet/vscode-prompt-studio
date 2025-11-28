import * as vscode from "vscode";
import { LLMProviderManager } from "./llmProviders";
import { PromptRunner } from "./promptRunner";
import { TestManager } from "./testManager";
import { PromptWebviewProvider } from "./webview";
import { SidebarProvider } from "./sidebarProvider";
import { HistoryManager } from "./historyManager";

export function activate(context: vscode.ExtensionContext) {
  console.log("Prompt Studio extension activated");

  const llmManager = new LLMProviderManager();
  const historyManager = new HistoryManager(context);
  const promptRunner = new PromptRunner(llmManager);
  const testManager = new TestManager(context, llmManager);
  const webviewProvider = new PromptWebviewProvider(
    context,
    promptRunner,
    testManager
  );

  // Register sidebar provider
  const sidebarProvider = new SidebarProvider(
    context.extensionUri,
    llmManager,
    historyManager
  );
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      "prompt-studio.sidebarView",
      sidebarProvider
    )
  );

  // Update sidebar when active editor changes
  context.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor(() => {
      // Sidebar will handle this through its message system
    })
  );

  // Register commands
  context.subscriptions.push(
    vscode.commands.registerCommand("prompt-studio.runPrompt", async () => {
      await webviewProvider.showPromptPanel();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("prompt-studio.createTest", async () => {
      await testManager.createTest();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("prompt-studio.runTests", async () => {
      await testManager.runTests();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "prompt-studio.compareResults",
      async () => {
        await testManager.compareResults();
      }
    )
  );

  vscode.window.showInformationMessage("Prompt Studio is ready!");
}

export function deactivate() {
  console.log("Prompt Studio extension deactivated");
}
