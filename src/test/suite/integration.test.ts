import * as assert from "assert";
import * as vscode from "vscode";
import { LLMProviderManager, PromptRequest } from "../../llmProviders";
import { PromptRunner } from "../../promptRunner";
import { TestManager } from "../../testManager";
import { HistoryManager } from "../../historyManager";
import { SidebarProvider } from "../../sidebarProvider";

suite("Integration Test Suite", () => {
  let llmManager: LLMProviderManager;
  let promptRunner: PromptRunner;
  let mockContext: vscode.ExtensionContext;
  let testManager: TestManager;
  let historyManager: HistoryManager;
  let sidebarProvider: SidebarProvider;

  setup(() => {
    llmManager = new LLMProviderManager();
    promptRunner = new PromptRunner(llmManager);

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
    historyManager = new HistoryManager(mockContext);
    sidebarProvider = new SidebarProvider(
      vscode.Uri.file(__dirname),
      llmManager,
      historyManager
    );
  });

  test("End-to-end: LLMProviderManager -> PromptRunner", async () => {
    const request: PromptRequest = {
      provider: "openai",
      model: "gpt-4",
      prompt: "Test integration",
    };

    // Test that LLMProviderManager and PromptRunner work together
    const response = await promptRunner.runPrompt(request);

    assert.ok(response);
    assert.strictEqual(response.provider, "openai");
    assert.strictEqual(response.model, "gpt-4");
    assert.ok(response.timestamp);
  });

  test("End-to-end: Complete workflow with all components", async () => {
    // 1. Create a prompt request
    const request: PromptRequest = {
      provider: "anthropic",
      model: "claude-3-sonnet-20240229",
      prompt: "Integration test prompt",
      systemPrompt: "You are a test assistant",
      temperature: 0.7,
      maxTokens: 1000,
    };

    // 2. Run prompt through PromptRunner
    const response = await promptRunner.runPrompt(request);

    // 3. Verify response structure
    assert.ok(response);
    assert.strictEqual(response.provider, "anthropic");
    assert.strictEqual(response.model, "claude-3-sonnet-20240229");
    assert.ok(response.timestamp instanceof Date);

    // 4. Verify TestManager was initialized correctly
    assert.ok(testManager);
    assert.ok(testManager instanceof TestManager);
  });

  test("Multiple providers in sequence", async () => {
    const providers: Array<"openai" | "anthropic" | "google"> = [
      "openai",
      "anthropic",
      "google",
    ];

    const responses = [];

    for (const provider of providers) {
      const request: PromptRequest = {
        provider,
        model: "test-model",
        prompt: `Test for ${provider}`,
      };

      const response = await promptRunner.runPrompt(request);
      responses.push(response);

      assert.ok(response);
      assert.strictEqual(response.provider, provider);
    }

    // Verify all responses were collected
    assert.strictEqual(responses.length, 3);
  });

  test("Error handling across components", async () => {
    const request: PromptRequest = {
      provider: "openai",
      model: "gpt-4",
      prompt: "Test",
    };

    // Should handle missing API key error
    const response = await promptRunner.runPrompt(request);

    assert.ok(response);
    assert.ok(response.error);
    assert.ok(response.error.includes("API key"));

    // Should still have basic response structure
    assert.strictEqual(response.provider, "openai");
    assert.ok(response.timestamp);
  });

  test("Concurrent prompt execution", async () => {
    const requests: PromptRequest[] = [
      { provider: "openai", model: "gpt-4", prompt: "Test 1" },
      {
        provider: "anthropic",
        model: "claude-3-sonnet-20240229",
        prompt: "Test 2",
      },
      { provider: "google", model: "gemini-pro", prompt: "Test 3" },
    ];

    // Execute all prompts concurrently
    const responses = await Promise.all(
      requests.map((req) => promptRunner.runPrompt(req))
    );

    assert.strictEqual(responses.length, 3);
    responses.forEach((response, index) => {
      assert.ok(response);
      assert.strictEqual(response.provider, requests[index].provider);
    });
  });

  test("Component initialization order", () => {
    // Verify components can be initialized in any order
    const llm1 = new LLMProviderManager();
    const runner1 = new PromptRunner(llm1);
    assert.ok(runner1);

    const llm2 = new LLMProviderManager();
    const runner2 = new PromptRunner(llm2);
    assert.ok(runner2);

    // Components should be independent
    assert.notStrictEqual(runner1, runner2);
  });

  test("State isolation between components", async () => {
    const llm1 = new LLMProviderManager();
    const llm2 = new LLMProviderManager();

    const runner1 = new PromptRunner(llm1);
    const runner2 = new PromptRunner(llm2);

    const request: PromptRequest = {
      provider: "openai",
      model: "gpt-4",
      prompt: "Test",
    };

    const response1 = await runner1.runPrompt(request);
    const response2 = await runner2.runPrompt(request);

    // Both should work independently
    assert.ok(response1);
    assert.ok(response2);
    assert.notStrictEqual(response1.timestamp, response2.timestamp);
  });

  test("Extension commands are registered and executable", async () => {
    const commands = await vscode.commands.getCommands(true);

    const expectedCommands = [
      "prompt-studio.runPrompt",
      "prompt-studio.createTest",
      "prompt-studio.runTests",
      "prompt-studio.compareResults",
    ];

    for (const cmd of expectedCommands) {
      assert.ok(commands.includes(cmd), `Command ${cmd} should be registered`);
    }
  });

  test("Configuration integration", () => {
    const config = vscode.workspace.getConfiguration("promptStudio");

    // Verify configuration schema is accessible
    assert.ok(config);

    // Test getting config values (should not throw)
    const openaiKey = config.get("openai.apiKey");
    const anthropicKey = config.get("anthropic.apiKey");
    const googleKey = config.get("google.apiKey");
    const defaultModel = config.get("defaultModel");

    // Values might be undefined, but getting them shouldn't throw
    assert.doesNotThrow(() => config.get("openai.apiKey"));
    assert.doesNotThrow(() => config.get("anthropic.apiKey"));
    assert.doesNotThrow(() => config.get("google.apiKey"));
    assert.doesNotThrow(() => config.get("defaultModel"));
  });

  test("HistoryManager integration with PromptRunner", async () => {
    const request: PromptRequest = {
      provider: "openai",
      model: "gpt-4",
      prompt: "Test for history",
    };

    // Run prompt
    const response = await promptRunner.runPrompt(request);
    assert.ok(response);

    // Add to history
    const entry = await historyManager.addEntry(
      "/test/file.md",
      "file.md",
      request.prompt,
      request.systemPrompt,
      request.provider,
      request.model,
      response
    );

    assert.ok(entry);
    assert.strictEqual(entry.prompt, request.prompt);
    assert.strictEqual(entry.response, response.content);

    // Verify history can be retrieved
    const history = await historyManager.getHistoryForFile("/test/file.md");
    assert.strictEqual(history.length, 1);
    assert.strictEqual(history[0].id, entry.id);
  });

  test("SidebarProvider integration with LLMProviderManager", () => {
    // Verify SidebarProvider can be created with LLMProviderManager
    const provider = new SidebarProvider(
      vscode.Uri.file(__dirname),
      llmManager,
      historyManager
    );

    assert.ok(provider);
    assert.ok(provider instanceof SidebarProvider);
  });

  test("Complete workflow: Prompt -> Response -> History", async () => {
    const request: PromptRequest = {
      provider: "anthropic",
      model: "claude-3-sonnet-20240229",
      prompt: "Complete workflow test",
      systemPrompt: "Test system prompt",
    };

    // 1. Run prompt
    const response = await promptRunner.runPrompt(request);
    assert.ok(response);

    // 2. Save to history
    const entry = await historyManager.addEntry(
      "/test/workflow.md",
      "workflow.md",
      request.prompt,
      request.systemPrompt,
      request.provider,
      request.model,
      response
    );
    assert.ok(entry);

    // 3. Verify end-to-end data integrity
    const history = await historyManager.getHistoryForFile("/test/workflow.md");
    assert.strictEqual(history.length, 1);
    assert.strictEqual(history[0].prompt, request.prompt);
    assert.strictEqual(history[0].systemPrompt, request.systemPrompt);
    assert.strictEqual(history[0].provider, request.provider);
    assert.strictEqual(history[0].model, request.model);
    assert.strictEqual(history[0].response, response.content);
  });

  test("All components can coexist", () => {
    // Verify all components can be instantiated together
    const llm = new LLMProviderManager();
    const runner = new PromptRunner(llm);
    const tester = new TestManager(mockContext, llm);
    const history = new HistoryManager(mockContext);
    const sidebar = new SidebarProvider(
      vscode.Uri.file(__dirname),
      llm,
      history
    );

    assert.ok(llm);
    assert.ok(runner);
    assert.ok(tester);
    assert.ok(history);
    assert.ok(sidebar);
  });

  test("History persists across multiple prompt runs", async () => {
    const filePath = "/test/multi-prompt.md";
    const requests: PromptRequest[] = [
      { provider: "openai", model: "gpt-4", prompt: "First prompt" },
      {
        provider: "anthropic",
        model: "claude-3-sonnet-20240229",
        prompt: "Second prompt",
      },
      { provider: "google", model: "gemini-pro", prompt: "Third prompt" },
    ];

    // Run multiple prompts and save to history
    for (const request of requests) {
      const response = await promptRunner.runPrompt(request);
      await historyManager.addEntry(
        filePath,
        "multi-prompt.md",
        request.prompt,
        undefined,
        request.provider,
        request.model,
        response
      );
    }

    // Verify all entries are in history
    const history = await historyManager.getHistoryForFile(filePath);
    assert.strictEqual(history.length, 3);

    // Verify order (newest first)
    assert.strictEqual(history[0].prompt, "Third prompt");
    assert.strictEqual(history[1].prompt, "Second prompt");
    assert.strictEqual(history[2].prompt, "First prompt");
  });
});
