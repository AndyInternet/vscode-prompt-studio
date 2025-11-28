import * as vscode from "vscode";
import * as fs from "fs/promises";
import * as path from "path";
import {
  LLMProviderManager,
  PromptRequest,
  PromptResponse,
} from "./llmProviders";

export interface PromptTest {
  id: string;
  name: string;
  description?: string;
  provider: string;
  model: string;
  prompt: string;
  systemPrompt?: string;
  expectedKeywords?: string[];
  expectedNotKeywords?: string[];
}

export interface TestResult {
  testId: string;
  testName: string;
  timestamp: Date;
  response: PromptResponse;
  passed?: boolean;
  passedChecks?: string[];
  failedChecks?: string[];
}

export interface TestRun {
  id: string;
  timestamp: Date;
  results: TestResult[];
}

export class TestManager {
  private testsPath: string;
  private resultsPath: string;

  constructor(
    private context: vscode.ExtensionContext,
    private llmManager: LLMProviderManager
  ) {
    this.testsPath = path.join(context.globalStorageUri.fsPath, "tests.json");
    this.resultsPath = path.join(
      context.globalStorageUri.fsPath,
      "test-results.json"
    );
    this.ensureStorage();
  }

  private async ensureStorage() {
    try {
      await fs.mkdir(this.context.globalStorageUri.fsPath, { recursive: true });
    } catch (error) {
      console.error("Failed to create storage directory:", error);
    }
  }

  async createTest(): Promise<void> {
    const name = await vscode.window.showInputBox({
      prompt: "Enter test name",
      placeHolder: "My Prompt Test",
    });

    if (!name) {
      return;
    }

    const description = await vscode.window.showInputBox({
      prompt: "Enter test description (optional)",
      placeHolder: "Tests the ability to...",
    });

    const provider = await vscode.window.showQuickPick(
      ["openai", "anthropic", "google"],
      {
        placeHolder: "Select LLM provider",
      }
    );

    if (!provider) {
      return;
    }

    const modelMap: Record<string, string[]> = {
      openai: ["gpt-4", "gpt-4-turbo", "gpt-3.5-turbo"],
      anthropic: [
        "claude-3-opus-20240229",
        "claude-3-sonnet-20240229",
        "claude-3-haiku-20240307",
      ],
      google: ["gemini-pro", "gemini-pro-vision"],
    };

    const model = await vscode.window.showQuickPick(
      modelMap[provider as keyof typeof modelMap],
      {
        placeHolder: "Select model",
      }
    );

    if (!model) {
      return;
    }

    const prompt = await vscode.window.showInputBox({
      prompt: "Enter the prompt to test",
      placeHolder: "Explain quantum computing in simple terms",
    });

    if (!prompt) {
      return;
    }

    const systemPrompt = await vscode.window.showInputBox({
      prompt: "Enter system prompt (optional)",
      placeHolder: "You are a helpful assistant...",
    });

    const test: PromptTest = {
      id: Date.now().toString(),
      name,
      description: description || undefined,
      provider,
      model,
      prompt,
      systemPrompt: systemPrompt || undefined,
    };

    await this.saveTest(test);
    vscode.window.showInformationMessage(
      `Test "${name}" created successfully!`
    );
  }

  private async saveTest(test: PromptTest): Promise<void> {
    const tests = await this.loadTests();
    tests.push(test);
    await fs.writeFile(this.testsPath, JSON.stringify(tests, null, 2));
  }

  private async loadTests(): Promise<PromptTest[]> {
    try {
      const data = await fs.readFile(this.testsPath, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  async runTests(): Promise<void> {
    const tests = await this.loadTests();

    if (tests.length === 0) {
      vscode.window.showInformationMessage(
        "No tests found. Create a test first!"
      );
      return;
    }

    const selectedTests = await vscode.window.showQuickPick(
      tests.map((t) => ({
        label: t.name,
        description: t.description,
        test: t,
      })),
      {
        placeHolder: "Select tests to run",
        canPickMany: true,
      }
    );

    if (!selectedTests || selectedTests.length === 0) {
      return;
    }

    const results: TestResult[] = [];

    await vscode.window.withProgress(
      {
        location: vscode.ProgressLocation.Notification,
        title: "Running tests...",
        cancellable: false,
      },
      async (progress) => {
        for (let i = 0; i < selectedTests.length; i++) {
          const { test } = selectedTests[i];
          progress.report({
            message: `Running test ${i + 1}/${selectedTests.length}: ${
              test.name
            }`,
            increment: 100 / selectedTests.length,
          });

          const request: PromptRequest = {
            provider: test.provider as any,
            model: test.model,
            prompt: test.prompt,
            systemPrompt: test.systemPrompt,
          };

          const response = await this.llmManager.runPrompt(request);

          const result: TestResult = {
            testId: test.id,
            testName: test.name,
            timestamp: new Date(),
            response,
          };

          results.push(result);
        }
      }
    );

    await this.saveTestRun(results);
    await this.showTestResults(results);
  }

  private async saveTestRun(results: TestResult[]): Promise<void> {
    const testRuns = await this.loadTestRuns();
    const newRun: TestRun = {
      id: Date.now().toString(),
      timestamp: new Date(),
      results,
    };
    testRuns.push(newRun);
    await fs.writeFile(this.resultsPath, JSON.stringify(testRuns, null, 2));
  }

  private async loadTestRuns(): Promise<TestRun[]> {
    try {
      const data = await fs.readFile(this.resultsPath, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  private async showTestResults(results: TestResult[]): Promise<void> {
    const doc = await vscode.workspace.openTextDocument({
      content: this.formatTestResults(results),
      language: "markdown",
    });
    await vscode.window.showTextDocument(doc);
  }

  private formatTestResults(results: TestResult[]): string {
    let output = "# Test Results\n\n";
    output += `**Run Date:** ${new Date().toLocaleString()}\n\n`;
    output += `**Tests Run:** ${results.length}\n\n`;

    for (const result of results) {
      output += `## ${result.testName}\n\n`;
      output += `**Provider:** ${result.response.provider}\n`;
      output += `**Model:** ${result.response.model}\n`;
      output += `**Timestamp:** ${result.timestamp.toLocaleString()}\n`;

      if (result.response.tokensUsed) {
        output += `**Tokens Used:** ${result.response.tokensUsed}\n`;
      }

      if (result.response.error) {
        output += `\n**Error:** ${result.response.error}\n\n`;
      } else {
        output += `\n**Response:**\n\n${result.response.content}\n\n`;
      }

      output += "---\n\n";
    }

    return output;
  }

  async compareResults(): Promise<void> {
    const testRuns = await this.loadTestRuns();

    if (testRuns.length < 2) {
      vscode.window.showInformationMessage(
        "Need at least 2 test runs to compare. Run tests first!"
      );
      return;
    }

    const runOptions = testRuns.map((run) => ({
      label: new Date(run.timestamp).toLocaleString(),
      description: `${run.results.length} tests`,
      run,
    }));

    const firstRun = await vscode.window.showQuickPick(runOptions, {
      placeHolder: "Select first test run",
    });

    if (!firstRun) {
      return;
    }

    const secondRun = await vscode.window.showQuickPick(
      runOptions.filter((r) => r.run.id !== firstRun.run.id),
      {
        placeHolder: "Select second test run to compare",
      }
    );

    if (!secondRun) {
      return;
    }

    const comparison = this.compareTestRuns(firstRun.run, secondRun.run);
    const doc = await vscode.workspace.openTextDocument({
      content: comparison,
      language: "markdown",
    });
    await vscode.window.showTextDocument(doc);
  }

  private compareTestRuns(run1: TestRun, run2: TestRun): string {
    let output = "# Test Run Comparison\n\n";
    output += `**Run 1:** ${new Date(run1.timestamp).toLocaleString()}\n`;
    output += `**Run 2:** ${new Date(run2.timestamp).toLocaleString()}\n\n`;

    const testsById = new Map<
      string,
      { result1?: TestResult; result2?: TestResult }
    >();

    for (const result of run1.results) {
      testsById.set(result.testId, { result1: result });
    }

    for (const result of run2.results) {
      const existing = testsById.get(result.testId) || {};
      testsById.set(result.testId, { ...existing, result2: result });
    }

    for (const [testId, { result1, result2 }] of testsById) {
      const testName = result1?.testName || result2?.testName || "Unknown Test";
      output += `## ${testName}\n\n`;

      if (!result1) {
        output += "⚠️ Test not present in first run\n\n";
        output += `**Run 2 Response:**\n\n${result2!.response.content}\n\n`;
      } else if (!result2) {
        output += "⚠️ Test not present in second run\n\n";
        output += `**Run 1 Response:**\n\n${result1.response.content}\n\n`;
      } else {
        output += "### Run 1\n";
        output += `**Provider:** ${result1.response.provider} | **Model:** ${result1.response.model}\n`;
        if (result1.response.error) {
          output += `**Error:** ${result1.response.error}\n\n`;
        } else {
          output += `\n${result1.response.content}\n\n`;
        }

        output += "### Run 2\n";
        output += `**Provider:** ${result2.response.provider} | **Model:** ${result2.response.model}\n`;
        if (result2.response.error) {
          output += `**Error:** ${result2.response.error}\n\n`;
        } else {
          output += `\n${result2.response.content}\n\n`;
        }

        // Simple comparison
        if (result1.response.content === result2.response.content) {
          output += "✅ **Responses are identical**\n\n";
        } else {
          output += "ℹ️ **Responses differ**\n\n";
        }
      }

      output += "---\n\n";
    }

    return output;
  }
}
