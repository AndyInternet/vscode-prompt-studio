import { LLMProvider } from "./llmProviders";

export interface ModelInfo {
  id: string;
  label: string;
}

export interface ProviderModels {
  provider: LLMProvider;
  models: ModelInfo[];
}

/**
 * Centralized model configuration for all LLM providers.
 * Update this single file to add/remove models across the entire app.
 *
 * NOTE: After updating models here, you must also update the enum in
 * package.json under "promptStudio.defaultModel" to keep VS Code settings in sync.
 * Run `getAllModelIds()` to get the list of model IDs for the enum.
 */
export const MODEL_CONFIG: Record<LLMProvider, ModelInfo[]> = {
  openai: [
    { id: "gpt-5", label: "GPT-5" },
    { id: "gpt-5-mini", label: "GPT-5 Mini" },
    { id: "gpt-5-nano", label: "GPT-5 Nano" },
    { id: "gpt-4o", label: "GPT-4o" },
    { id: "gpt-4o-mini", label: "GPT-4o Mini" },
    { id: "o3", label: "o3" },
    { id: "o4-mini", label: "o4 Mini" },
  ],
  anthropic: [
    { id: "claude-opus-4-5-20251101", label: "Claude Opus 4.5" },
    { id: "claude-sonnet-4-5-20250929", label: "Claude Sonnet 4.5" },
    { id: "claude-haiku-4-5-20251001", label: "Claude Haiku 4.5" },
    { id: "claude-sonnet-4-20250514", label: "Claude Sonnet 4" },
  ],
  google: [
    { id: "gemini-3-pro", label: "Gemini 3 Pro" },
    { id: "gemini-2.5-pro", label: "Gemini 2.5 Pro" },
    { id: "gemini-2.5-flash", label: "Gemini 2.5 Flash" },
  ],
};

/**
 * Get all model IDs as a flat array (useful for package.json enum generation)
 */
export function getAllModelIds(): string[] {
  return Object.values(MODEL_CONFIG).flatMap((models) =>
    models.map((m) => m.id)
  );
}

/**
 * Get model IDs for a specific provider
 */
export function getModelIdsForProvider(provider: LLMProvider): string[] {
  return MODEL_CONFIG[provider].map((m) => m.id);
}

/**
 * Get models formatted for sidebar/webview display
 */
export function getModelsForDisplay(
  provider: LLMProvider
): Array<{ provider: string; model: string; label: string }> {
  return MODEL_CONFIG[provider].map((m) => ({
    provider,
    model: m.id,
    label: m.label,
  }));
}

/**
 * Get all models formatted for sidebar/webview display
 */
export function getAllModelsForDisplay(): Array<{
  provider: string;
  model: string;
  label: string;
}> {
  return Object.entries(MODEL_CONFIG).flatMap(([provider, models]) =>
    models.map((m) => ({
      provider,
      model: m.id,
      label: m.label,
    }))
  );
}

/**
 * Generate JSON string for webview modelMap
 */
export function getWebviewModelMapJson(): string {
  const map: Record<string, Array<{ value: string; label: string }>> = {};
  for (const [provider, models] of Object.entries(MODEL_CONFIG)) {
    map[provider] = models.map((m) => ({ value: m.id, label: m.label }));
  }
  return JSON.stringify(map, null, 12);
}
