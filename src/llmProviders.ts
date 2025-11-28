import * as vscode from "vscode";
import OpenAI from "openai";
import Anthropic from "@anthropic-ai/sdk";
import { GoogleGenerativeAI } from "@google/generative-ai";

export type LLMProvider = "openai" | "anthropic" | "google";

export interface PromptRequest {
  provider: LLMProvider;
  model: string;
  prompt: string;
  systemPrompt?: string;
  temperature?: number;
  maxTokens?: number;
}

export interface PromptResponse {
  content: string;
  provider: LLMProvider;
  model: string;
  timestamp: Date;
  tokensUsed?: number;
  error?: string;
}

export class LLMProviderManager {
  private getApiKey(provider: LLMProvider): string {
    const config = vscode.workspace.getConfiguration("promptStudio");
    const key = config.get<string>(`${provider}.apiKey`);
    if (!key) {
      throw new Error(`No API key configured for ${provider}`);
    }
    return key;
  }

  async runPrompt(request: PromptRequest): Promise<PromptResponse> {
    try {
      switch (request.provider) {
        case "openai":
          return await this.runOpenAI(request);
        case "anthropic":
          return await this.runAnthropic(request);
        case "google":
          return await this.runGoogle(request);
        default:
          throw new Error(`Unknown provider: ${request.provider}`);
      }
    } catch (error: any) {
      return {
        content: "",
        provider: request.provider,
        model: request.model,
        timestamp: new Date(),
        error: error.message || "Unknown error occurred",
      };
    }
  }

  private async runOpenAI(request: PromptRequest): Promise<PromptResponse> {
    const apiKey = this.getApiKey("openai");
    const openai = new OpenAI({ apiKey });

    const messages: any[] = [];
    if (request.systemPrompt) {
      messages.push({ role: "system", content: request.systemPrompt });
    }
    messages.push({ role: "user", content: request.prompt });

    const response = await openai.chat.completions.create({
      model: request.model,
      messages,
      temperature: request.temperature ?? 0.7,
      max_tokens: request.maxTokens ?? 2000,
    });

    return {
      content: response.choices[0]?.message?.content || "",
      provider: "openai",
      model: request.model,
      timestamp: new Date(),
      tokensUsed: response.usage?.total_tokens,
    };
  }

  private async runAnthropic(request: PromptRequest): Promise<PromptResponse> {
    const apiKey = this.getApiKey("anthropic");
    const anthropic = new Anthropic({ apiKey });

    const response = await anthropic.messages.create({
      model: request.model,
      max_tokens: request.maxTokens ?? 2000,
      temperature: request.temperature ?? 0.7,
      system: request.systemPrompt,
      messages: [{ role: "user", content: request.prompt }],
    });

    const content =
      response.content[0]?.type === "text" ? response.content[0].text : "";

    return {
      content,
      provider: "anthropic",
      model: request.model,
      timestamp: new Date(),
      tokensUsed: response.usage.input_tokens + response.usage.output_tokens,
    };
  }

  private async runGoogle(request: PromptRequest): Promise<PromptResponse> {
    const apiKey = this.getApiKey("google");
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: request.model,
    });

    const prompt = request.systemPrompt
      ? `${request.systemPrompt}\n\n${request.prompt}`
      : request.prompt;

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: request.temperature ?? 0.7,
        maxOutputTokens: request.maxTokens ?? 2000,
      },
    });

    const response = result.response;
    return {
      content: response.text(),
      provider: "google",
      model: request.model,
      timestamp: new Date(),
    };
  }
}
