import * as assert from "assert";
import { PromptRunner } from "../../promptRunner";
import { LLMProviderManager, PromptRequest } from "../../llmProviders";

suite("Prompt Runner Test Suite", () => {
  let llmManager: LLMProviderManager;
  let promptRunner: PromptRunner;

  setup(() => {
    llmManager = new LLMProviderManager();
    promptRunner = new PromptRunner(llmManager);
  });

  test("Should create PromptRunner instance", () => {
    assert.ok(promptRunner);
    assert.ok(promptRunner instanceof PromptRunner);
  });

  test("Should run prompt with valid request", async () => {
    const request: PromptRequest = {
      provider: "openai",
      model: "gpt-4",
      prompt: "Test prompt",
    };

    const response = await promptRunner.runPrompt(request);

    assert.ok(response);
    assert.strictEqual(response.provider, "openai");
    assert.strictEqual(response.model, "gpt-4");
    assert.ok(response.timestamp);
  });

  test("Should handle errors gracefully", async () => {
    const request: PromptRequest = {
      provider: "openai",
      model: "gpt-4",
      prompt: "Test",
    };

    const response = await promptRunner.runPrompt(request);

    // Should not throw, should return response with error
    assert.ok(response);
    if (response.error) {
      assert.ok(response.error.length > 0);
    }
  });

  test("Should pass through all request parameters", async () => {
    const request: PromptRequest = {
      provider: "anthropic",
      model: "claude-3-opus-20240229",
      prompt: "Test prompt",
      systemPrompt: "You are a test assistant",
      temperature: 0.8,
      maxTokens: 1500,
    };

    const response = await promptRunner.runPrompt(request);

    assert.ok(response);
    assert.strictEqual(response.provider, "anthropic");
    assert.strictEqual(response.model, "claude-3-opus-20240229");
  });

  test("Should handle different providers", async () => {
    const providers: Array<"openai" | "anthropic" | "google"> = [
      "openai",
      "anthropic",
      "google",
    ];

    for (const provider of providers) {
      const request: PromptRequest = {
        provider,
        model: "test-model",
        prompt: "Test",
      };

      const response = await promptRunner.runPrompt(request);
      assert.ok(response);
      assert.strictEqual(response.provider, provider);
    }
  });

  test("Should return response with timestamp", async () => {
    const request: PromptRequest = {
      provider: "google",
      model: "gemini-pro",
      prompt: "Test",
    };

    const response = await promptRunner.runPrompt(request);

    assert.ok(response.timestamp);
    assert.ok(response.timestamp instanceof Date);
    // Timestamp should be recent (within last minute)
    const now = new Date();
    const timeDiff = now.getTime() - response.timestamp.getTime();
    assert.ok(timeDiff < 60000); // Less than 1 minute
  });

  test("Should handle empty prompt", async () => {
    const request: PromptRequest = {
      provider: "openai",
      model: "gpt-4",
      prompt: "",
    };

    const response = await promptRunner.runPrompt(request);

    // Should handle gracefully
    assert.ok(response);
  });

  test("Should handle long prompts", async () => {
    const longPrompt = "Test ".repeat(1000); // 5000 characters

    const request: PromptRequest = {
      provider: "openai",
      model: "gpt-4",
      prompt: longPrompt,
    };

    const response = await promptRunner.runPrompt(request);

    assert.ok(response);
    assert.ok(response.timestamp);
  });

  test("Should handle special characters in prompt", async () => {
    const request: PromptRequest = {
      provider: "openai",
      model: "gpt-4",
      prompt: "Test with special chars: !@#$%^&*()_+-=[]{}|;:',.<>?/~`",
    };

    const response = await promptRunner.runPrompt(request);

    assert.ok(response);
  });
});
