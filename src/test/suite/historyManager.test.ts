import * as assert from "assert";
import * as vscode from "vscode";
import { HistoryManager, HistoryEntry } from "../../historyManager";
import { PromptResponse } from "../../llmProviders";

suite("HistoryManager Test Suite", () => {
  let historyManager: HistoryManager;
  let mockContext: vscode.ExtensionContext;

  setup(() => {
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

    historyManager = new HistoryManager(mockContext);
  });

  test("HistoryManager instance creation", () => {
    assert.ok(historyManager);
    assert.ok(historyManager instanceof HistoryManager);
  });

  test("Add entry to history", async () => {
    const response: PromptResponse = {
      provider: "openai",
      model: "gpt-4",
      content: "Test response",
      timestamp: new Date(),
      tokensUsed: 50,
    };

    const entry = await historyManager.addEntry(
      "/path/to/test.md",
      "test.md",
      "Test prompt",
      undefined,
      "openai",
      "gpt-4",
      response
    );

    assert.ok(entry);
    assert.strictEqual(entry.filePath, "/path/to/test.md");
    assert.strictEqual(entry.fileName, "test.md");
    assert.strictEqual(entry.prompt, "Test prompt");
    assert.strictEqual(entry.provider, "openai");
    assert.strictEqual(entry.model, "gpt-4");
    assert.strictEqual(entry.response, "Test response");
    assert.strictEqual(entry.tokensUsed, 50);
    assert.ok(entry.id);
    assert.ok(entry.timestamp instanceof Date);
  });

  test("Add entry with system prompt", async () => {
    const response: PromptResponse = {
      provider: "anthropic",
      model: "claude-3-sonnet-20240229",
      content: "Test response",
      timestamp: new Date(),
    };

    const entry = await historyManager.addEntry(
      "/path/to/test.md",
      "test.md",
      "Test prompt",
      "You are a helpful assistant",
      "anthropic",
      "claude-3-sonnet-20240229",
      response
    );

    assert.ok(entry);
    assert.strictEqual(entry.systemPrompt, "You are a helpful assistant");
  });

  test("Add entry with error response", async () => {
    const response: PromptResponse = {
      provider: "openai",
      model: "gpt-4",
      content: "",
      timestamp: new Date(),
      error: "API key not configured",
    };

    const entry = await historyManager.addEntry(
      "/path/to/test.md",
      "test.md",
      "Test prompt",
      undefined,
      "openai",
      "gpt-4",
      response
    );

    assert.ok(entry);
    assert.strictEqual(entry.error, "API key not configured");
  });

  test("Get history for specific file", async () => {
    const response: PromptResponse = {
      provider: "openai",
      model: "gpt-4",
      content: "Response 1",
      timestamp: new Date(),
    };

    // Add entries for different files
    await historyManager.addEntry(
      "/path/to/file1.md",
      "file1.md",
      "Prompt 1",
      undefined,
      "openai",
      "gpt-4",
      response
    );

    await historyManager.addEntry(
      "/path/to/file2.md",
      "file2.md",
      "Prompt 2",
      undefined,
      "openai",
      "gpt-4",
      response
    );

    await historyManager.addEntry(
      "/path/to/file1.md",
      "file1.md",
      "Prompt 3",
      undefined,
      "openai",
      "gpt-4",
      response
    );

    const file1History = await historyManager.getHistoryForFile(
      "/path/to/file1.md"
    );
    const file2History = await historyManager.getHistoryForFile(
      "/path/to/file2.md"
    );

    assert.strictEqual(file1History.length, 2);
    assert.strictEqual(file2History.length, 1);
    assert.strictEqual(file1History[0].prompt, "Prompt 3"); // Most recent first
    assert.strictEqual(file1History[1].prompt, "Prompt 1");
  });

  test("Get all history", async () => {
    const response: PromptResponse = {
      provider: "openai",
      model: "gpt-4",
      content: "Response",
      timestamp: new Date(),
    };

    await historyManager.clearAllHistory();

    await historyManager.addEntry(
      "/path/to/file1.md",
      "file1.md",
      "Prompt 1",
      undefined,
      "openai",
      "gpt-4",
      response
    );

    await historyManager.addEntry(
      "/path/to/file2.md",
      "file2.md",
      "Prompt 2",
      undefined,
      "anthropic",
      "claude-3-sonnet-20240229",
      response
    );

    const allHistory = await historyManager.getAllHistory();

    assert.strictEqual(allHistory.length, 2);
    // Verify sorted by timestamp (newest first)
    assert.ok(
      allHistory[0].timestamp.getTime() >= allHistory[1].timestamp.getTime()
    );
  });

  test("Get history by file", async () => {
    const response: PromptResponse = {
      provider: "openai",
      model: "gpt-4",
      content: "Response",
      timestamp: new Date(),
    };

    await historyManager.clearAllHistory();

    await historyManager.addEntry(
      "/path/to/file1.md",
      "file1.md",
      "Prompt 1",
      undefined,
      "openai",
      "gpt-4",
      response
    );

    await historyManager.addEntry(
      "/path/to/file2.md",
      "file2.md",
      "Prompt 2",
      undefined,
      "openai",
      "gpt-4",
      response
    );

    const byFile = await historyManager.getHistoryByFile();

    assert.ok(byFile instanceof Map);
    assert.strictEqual(byFile.size, 2);
    assert.ok(byFile.has("/path/to/file1.md"));
    assert.ok(byFile.has("/path/to/file2.md"));
    assert.strictEqual(byFile.get("/path/to/file1.md")!.length, 1);
    assert.strictEqual(byFile.get("/path/to/file2.md")!.length, 1);
  });

  test("Delete entry by id", async () => {
    const response: PromptResponse = {
      provider: "openai",
      model: "gpt-4",
      content: "Response",
      timestamp: new Date(),
    };

    await historyManager.clearAllHistory();

    const entry1 = await historyManager.addEntry(
      "/path/to/file.md",
      "file.md",
      "Prompt 1",
      undefined,
      "openai",
      "gpt-4",
      response
    );

    const entry2 = await historyManager.addEntry(
      "/path/to/file.md",
      "file.md",
      "Prompt 2",
      undefined,
      "openai",
      "gpt-4",
      response
    );

    let history = await historyManager.getAllHistory();
    assert.strictEqual(history.length, 2);

    await historyManager.deleteEntry(entry1.id);

    history = await historyManager.getAllHistory();
    assert.strictEqual(history.length, 1);
    assert.strictEqual(history[0].id, entry2.id);
  });

  test("Clear history for specific file", async () => {
    const response: PromptResponse = {
      provider: "openai",
      model: "gpt-4",
      content: "Response",
      timestamp: new Date(),
    };

    await historyManager.clearAllHistory();

    await historyManager.addEntry(
      "/path/to/file1.md",
      "file1.md",
      "Prompt 1",
      undefined,
      "openai",
      "gpt-4",
      response
    );

    await historyManager.addEntry(
      "/path/to/file2.md",
      "file2.md",
      "Prompt 2",
      undefined,
      "openai",
      "gpt-4",
      response
    );

    await historyManager.clearHistoryForFile("/path/to/file1.md");

    const file1History = await historyManager.getHistoryForFile(
      "/path/to/file1.md"
    );
    const file2History = await historyManager.getHistoryForFile(
      "/path/to/file2.md"
    );

    assert.strictEqual(file1History.length, 0);
    assert.strictEqual(file2History.length, 1);
  });

  test("Clear all history", async () => {
    const response: PromptResponse = {
      provider: "openai",
      model: "gpt-4",
      content: "Response",
      timestamp: new Date(),
    };

    await historyManager.addEntry(
      "/path/to/file1.md",
      "file1.md",
      "Prompt 1",
      undefined,
      "openai",
      "gpt-4",
      response
    );

    await historyManager.addEntry(
      "/path/to/file2.md",
      "file2.md",
      "Prompt 2",
      undefined,
      "openai",
      "gpt-4",
      response
    );

    let history = await historyManager.getAllHistory();
    assert.ok(history.length > 0);

    await historyManager.clearAllHistory();

    history = await historyManager.getAllHistory();
    assert.strictEqual(history.length, 0);
  });

  test("Multiple entries maintain order by timestamp", async () => {
    const response: PromptResponse = {
      provider: "openai",
      model: "gpt-4",
      content: "Response",
      timestamp: new Date(),
    };

    await historyManager.clearAllHistory();

    // Add entries with small delays to ensure different timestamps
    await historyManager.addEntry(
      "/path/to/file.md",
      "file.md",
      "Prompt 1",
      undefined,
      "openai",
      "gpt-4",
      response
    );

    await new Promise((resolve) => setTimeout(resolve, 10));

    await historyManager.addEntry(
      "/path/to/file.md",
      "file.md",
      "Prompt 2",
      undefined,
      "openai",
      "gpt-4",
      response
    );

    await new Promise((resolve) => setTimeout(resolve, 10));

    await historyManager.addEntry(
      "/path/to/file.md",
      "file.md",
      "Prompt 3",
      undefined,
      "openai",
      "gpt-4",
      response
    );

    const history = await historyManager.getHistoryForFile("/path/to/file.md");

    assert.strictEqual(history.length, 3);
    assert.strictEqual(history[0].prompt, "Prompt 3"); // Newest first
    assert.strictEqual(history[1].prompt, "Prompt 2");
    assert.strictEqual(history[2].prompt, "Prompt 1");
  });

  test("Entry IDs are unique", async () => {
    const response: PromptResponse = {
      provider: "openai",
      model: "gpt-4",
      content: "Response",
      timestamp: new Date(),
    };

    const entry1 = await historyManager.addEntry(
      "/path/to/file.md",
      "file.md",
      "Prompt",
      undefined,
      "openai",
      "gpt-4",
      response
    );

    const entry2 = await historyManager.addEntry(
      "/path/to/file.md",
      "file.md",
      "Prompt",
      undefined,
      "openai",
      "gpt-4",
      response
    );

    assert.notStrictEqual(entry1.id, entry2.id);
  });

  test("History persists across multiple operations", async () => {
    const response: PromptResponse = {
      provider: "openai",
      model: "gpt-4",
      content: "Response",
      timestamp: new Date(),
    };

    await historyManager.clearAllHistory();

    // Add entry
    await historyManager.addEntry(
      "/path/to/file.md",
      "file.md",
      "Prompt 1",
      undefined,
      "openai",
      "gpt-4",
      response
    );

    // Get history
    let history = await historyManager.getAllHistory();
    assert.strictEqual(history.length, 1);

    // Add another entry
    await historyManager.addEntry(
      "/path/to/file.md",
      "file.md",
      "Prompt 2",
      undefined,
      "openai",
      "gpt-4",
      response
    );

    // Get history again
    history = await historyManager.getAllHistory();
    assert.strictEqual(history.length, 2);
  });

  test("Handles different providers correctly", async () => {
    const response: PromptResponse = {
      provider: "openai",
      model: "gpt-4",
      content: "Response",
      timestamp: new Date(),
    };

    await historyManager.clearAllHistory();

    const providers: Array<"openai" | "anthropic" | "google"> = [
      "openai",
      "anthropic",
      "google",
    ];

    for (const provider of providers) {
      await historyManager.addEntry(
        "/path/to/file.md",
        "file.md",
        `Prompt for ${provider}`,
        undefined,
        provider,
        "test-model",
        { ...response, provider }
      );
    }

    const history = await historyManager.getAllHistory();
    assert.strictEqual(history.length, 3);

    const providerSet = new Set(history.map((h) => h.provider));
    assert.strictEqual(providerSet.size, 3);
    assert.ok(providerSet.has("openai"));
    assert.ok(providerSet.has("anthropic"));
    assert.ok(providerSet.has("google"));
  });
});
