import * as vscode from "vscode";
import {
  LLMProviderManager,
  LLMProvider,
  PromptRequest,
  PromptResponse,
} from "./llmProviders";
import { getModelIdsForProvider } from "./models";

export class PromptRunner {
  constructor(private llmManager: LLMProviderManager) {}

  async runPrompt(request: PromptRequest): Promise<PromptResponse> {
    return await vscode.window.withProgress(
      {
        location: vscode.ProgressLocation.Notification,
        title: `Running prompt with ${request.provider}...`,
        cancellable: false,
      },
      async () => {
        return await this.llmManager.runPrompt(request);
      }
    );
  }

  async runPromptInteractive(): Promise<PromptResponse | undefined> {
    // Get provider
    const provider = await vscode.window.showQuickPick(
      ["openai", "anthropic", "google"],
      {
        placeHolder: "Select LLM provider",
      }
    );

    if (!provider) {
      return undefined;
    }

    // Get model
    const model = await vscode.window.showQuickPick(
      getModelIdsForProvider(provider as LLMProvider),
      {
        placeHolder: "Select model",
      }
    );

    if (!model) {
      return undefined;
    }

    // Get prompt
    const prompt = await vscode.window.showInputBox({
      prompt: "Enter your prompt",
      placeHolder: "What would you like to ask?",
    });

    if (!prompt) {
      return undefined;
    }

    // Get system prompt (optional)
    const systemPrompt = await vscode.window.showInputBox({
      prompt: "Enter system prompt (optional, press Enter to skip)",
      placeHolder: "You are a helpful assistant...",
    });

    const request: PromptRequest = {
      provider: provider as any,
      model,
      prompt,
      systemPrompt: systemPrompt || undefined,
    };

    return await this.runPrompt(request);
  }
}
