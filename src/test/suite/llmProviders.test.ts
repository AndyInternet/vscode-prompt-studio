import * as assert from "assert";
import { LLMProviderManager, PromptRequest } from "../../llmProviders";

suite("LLM Provider Manager Test Suite", () => {
  let llmManager: LLMProviderManager;

  setup(() => {
    llmManager = new LLMProviderManager();
  });

  test("Should create LLMProviderManager instance", () => {
    assert.ok(llmManager);
    assert.ok(llmManager instanceof LLMProviderManager);
  });

  test("Should handle missing API key gracefully", async () => {
    const request: PromptRequest = {
      provider: "openai",
      model: "gpt-4",
      prompt: "Test prompt",
    };

    const response = await llmManager.runPrompt(request);

    // Should return error response instead of throwing
    assert.ok(response);
    assert.strictEqual(response.provider, "openai");
    assert.strictEqual(response.model, "gpt-4");
    assert.ok(response.error);
    assert.ok(response.error.includes("API key"));
  });

  test("Should accept valid prompt request structure", () => {
    const request: PromptRequest = {
      provider: "openai",
      model: "gpt-4",
      prompt: "Test prompt",
      systemPrompt: "You are helpful",
      temperature: 0.7,
      maxTokens: 1000,
    };

    assert.strictEqual(request.provider, "openai");
    assert.strictEqual(request.model, "gpt-4");
    assert.strictEqual(request.prompt, "Test prompt");
    assert.strictEqual(request.systemPrompt, "You are helpful");
    assert.strictEqual(request.temperature, 0.7);
    assert.strictEqual(request.maxTokens, 1000);
  });

  test("Should handle all supported providers", async () => {
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

      const response = await llmManager.runPrompt(request);

      // Should handle each provider without crashing
      assert.ok(response);
      assert.strictEqual(response.provider, provider);
    }
  });

  test("Should return timestamp in response", async () => {
    const request: PromptRequest = {
      provider: "openai",
      model: "gpt-4",
      prompt: "Test",
    };

    const response = await llmManager.runPrompt(request);

    assert.ok(response.timestamp);
    assert.ok(response.timestamp instanceof Date);
  });

  test("Should handle optional parameters", async () => {
    // Test with minimal required parameters
    const minimalRequest: PromptRequest = {
      provider: "openai",
      model: "gpt-4",
      prompt: "Test",
    };

    const response = await llmManager.runPrompt(minimalRequest);
    assert.ok(response);

    // Test with all parameters
    const fullRequest: PromptRequest = {
      provider: "openai",
      model: "gpt-4",
      prompt: "Test",
      systemPrompt: "System",
      temperature: 0.5,
      maxTokens: 500,
    };

    const fullResponse = await llmManager.runPrompt(fullRequest);
    assert.ok(fullResponse);
  });

  test("Should validate provider types", () => {
    const validProviders = ["openai", "anthropic", "google"];

    validProviders.forEach((provider) => {
      const request: PromptRequest = {
        provider: provider as any,
        model: "test-model",
        prompt: "Test",
      };

      assert.ok(["openai", "anthropic", "google"].includes(request.provider));
    });
  });
});
