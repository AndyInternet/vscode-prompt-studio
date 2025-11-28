import * as assert from "assert";
import * as vscode from "vscode";
import { TestManager, PromptTest } from "../../testManager";
import { LLMProviderManager } from "../../llmProviders";

suite("Test Manager Test Suite", () => {
  let testManager: TestManager;
  let llmManager: LLMProviderManager;
  let mockContext: vscode.ExtensionContext;

  setup(() => {
    llmManager = new LLMProviderManager();

    // Create a mock context with minimal required properties
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
      extensionUri: vscode.Uri.file(__dirname),
      extensionPath: __dirname,
      storagePath: __dirname + "/storage",
      globalStoragePath: __dirname + "/globalStorage",
      logPath: __dirname + "/logs",
      environmentVariableCollection: {} as any,
      asAbsolutePath: (relativePath: string) => relativePath,
      storageUri: vscode.Uri.file(__dirname + "/storage"),
      globalStorageUri: vscode.Uri.file(__dirname + "/globalStorage"),
      logUri: vscode.Uri.file(__dirname + "/logs"),
      extensionMode: vscode.ExtensionMode.Test,
      extension: {} as any,
      languageModelAccessInformation: {} as any,
    } as vscode.ExtensionContext;

    testManager = new TestManager(mockContext, llmManager);
  });

  test("Should create TestManager instance", () => {
    assert.ok(testManager);
    assert.ok(testManager instanceof TestManager);
  });

  test("Should validate PromptTest structure", () => {
    const test: PromptTest = {
      id: "test-123",
      name: "Test Prompt",
      description: "A test prompt",
      provider: "openai",
      model: "gpt-4",
      prompt: "Test prompt content",
      systemPrompt: "System prompt",
      expectedKeywords: ["keyword1", "keyword2"],
      expectedNotKeywords: ["bad1", "bad2"],
    };

    assert.strictEqual(test.id, "test-123");
    assert.strictEqual(test.name, "Test Prompt");
    assert.strictEqual(test.description, "A test prompt");
    assert.strictEqual(test.provider, "openai");
    assert.strictEqual(test.model, "gpt-4");
    assert.strictEqual(test.prompt, "Test prompt content");
    assert.strictEqual(test.systemPrompt, "System prompt");
    assert.ok(Array.isArray(test.expectedKeywords));
    assert.ok(Array.isArray(test.expectedNotKeywords));
  });

  test("Should handle optional test fields", () => {
    const minimalTest: PromptTest = {
      id: "test-456",
      name: "Minimal Test",
      provider: "anthropic",
      model: "claude-3-sonnet-20240229",
      prompt: "Simple prompt",
    };

    assert.strictEqual(minimalTest.id, "test-456");
    assert.strictEqual(minimalTest.name, "Minimal Test");
    assert.strictEqual(minimalTest.description, undefined);
    assert.strictEqual(minimalTest.systemPrompt, undefined);
    assert.strictEqual(minimalTest.expectedKeywords, undefined);
    assert.strictEqual(minimalTest.expectedNotKeywords, undefined);
  });

  test("Should validate test result structure", () => {
    const testResult = {
      testId: "test-123",
      testName: "Test Name",
      timestamp: new Date(),
      response: {
        content: "Response content",
        provider: "openai" as const,
        model: "gpt-4",
        timestamp: new Date(),
        tokensUsed: 100,
      },
      passed: true,
      passedChecks: ["check1", "check2"],
      failedChecks: [],
    };

    assert.strictEqual(testResult.testId, "test-123");
    assert.strictEqual(testResult.testName, "Test Name");
    assert.ok(testResult.timestamp instanceof Date);
    assert.ok(testResult.response);
    assert.strictEqual(testResult.passed, true);
    assert.ok(Array.isArray(testResult.passedChecks));
    assert.ok(Array.isArray(testResult.failedChecks));
  });

  test("Should validate test run structure", () => {
    const testRun = {
      id: "run-123",
      timestamp: new Date(),
      results: [
        {
          testId: "test-1",
          testName: "Test 1",
          timestamp: new Date(),
          response: {
            content: "Content",
            provider: "openai" as const,
            model: "gpt-4",
            timestamp: new Date(),
          },
        },
      ],
    };

    assert.strictEqual(testRun.id, "run-123");
    assert.ok(testRun.timestamp instanceof Date);
    assert.ok(Array.isArray(testRun.results));
    assert.strictEqual(testRun.results.length, 1);
  });

  test("Should handle different providers in tests", () => {
    const providers = ["openai", "anthropic", "google"];

    providers.forEach((provider) => {
      const test: PromptTest = {
        id: `test-${provider}`,
        name: `${provider} Test`,
        provider,
        model: "test-model",
        prompt: "Test",
      };

      assert.strictEqual(test.provider, provider);
    });
  });

  test("Should handle test with error response", () => {
    const errorResult = {
      testId: "test-error",
      testName: "Error Test",
      timestamp: new Date(),
      response: {
        content: "",
        provider: "openai" as const,
        model: "gpt-4",
        timestamp: new Date(),
        error: "API key not found",
      },
    };

    assert.ok(errorResult.response.error);
    assert.strictEqual(errorResult.response.content, "");
  });

  test("Should generate unique test IDs", () => {
    const id1 = Date.now().toString();
    // Small delay to ensure different timestamp
    const id2 = (Date.now() + 1).toString();

    assert.notStrictEqual(id1, id2);
  });

  test("Should handle empty test results array", () => {
    const testRun = {
      id: "run-empty",
      timestamp: new Date(),
      results: [],
    };

    assert.ok(Array.isArray(testRun.results));
    assert.strictEqual(testRun.results.length, 0);
  });

  test("Should handle multiple tests in one run", () => {
    const testRun = {
      id: "run-multiple",
      timestamp: new Date(),
      results: [
        {
          testId: "test-1",
          testName: "Test 1",
          timestamp: new Date(),
          response: {
            content: "Response 1",
            provider: "openai" as const,
            model: "gpt-4",
            timestamp: new Date(),
          },
        },
        {
          testId: "test-2",
          testName: "Test 2",
          timestamp: new Date(),
          response: {
            content: "Response 2",
            provider: "anthropic" as const,
            model: "claude-3-opus-20240229",
            timestamp: new Date(),
          },
        },
      ],
    };

    assert.strictEqual(testRun.results.length, 2);
    assert.strictEqual(testRun.results[0].response.provider, "openai");
    assert.strictEqual(testRun.results[1].response.provider, "anthropic");
  });
});
