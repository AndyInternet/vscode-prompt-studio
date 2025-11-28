import * as vscode from "vscode";
import * as fs from "fs/promises";
import * as path from "path";
import { PromptResponse } from "./llmProviders";

export interface HistoryEntry {
  id: string;
  timestamp: Date;
  filePath: string;
  fileName: string;
  prompt: string;
  systemPrompt?: string;
  provider: string;
  model: string;
  response: string;
  tokensUsed?: number;
  error?: string;
}

export interface FileHistory {
  filePath: string;
  entries: HistoryEntry[];
}

export class HistoryManager {
  private historyPath: string;

  constructor(private context: vscode.ExtensionContext) {
    this.historyPath = path.join(
      context.globalStorageUri.fsPath,
      "prompt-history.json"
    );
    this.ensureStorage();
  }

  private async ensureStorage() {
    try {
      await fs.mkdir(this.context.globalStorageUri.fsPath, { recursive: true });

      // Create empty history file if it doesn't exist
      try {
        await fs.access(this.historyPath);
      } catch {
        await fs.writeFile(this.historyPath, JSON.stringify([], null, 2));
      }
    } catch (error) {
      console.error("Failed to create storage directory:", error);
    }
  }

  async addEntry(
    filePath: string,
    fileName: string,
    prompt: string,
    systemPrompt: string | undefined,
    provider: string,
    model: string,
    response: PromptResponse
  ): Promise<HistoryEntry> {
    const entry: HistoryEntry = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      timestamp: new Date(),
      filePath,
      fileName,
      prompt,
      systemPrompt,
      provider,
      model,
      response: response.content,
      tokensUsed: response.tokensUsed,
      error: response.error,
    };

    const history = await this.loadHistory();
    history.push(entry);
    await this.saveHistory(history);

    return entry;
  }

  async getHistoryForFile(filePath: string): Promise<HistoryEntry[]> {
    const history = await this.loadHistory();
    return history
      .filter((entry) => entry.filePath === filePath)
      .sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );
  }

  async getAllHistory(): Promise<HistoryEntry[]> {
    const history = await this.loadHistory();
    return history.sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
  }

  async getHistoryByFile(): Promise<Map<string, HistoryEntry[]>> {
    const history = await this.loadHistory();
    const byFile = new Map<string, HistoryEntry[]>();

    for (const entry of history) {
      if (!byFile.has(entry.filePath)) {
        byFile.set(entry.filePath, []);
      }
      byFile.get(entry.filePath)!.push(entry);
    }

    // Sort entries within each file by timestamp (newest first)
    for (const [, entries] of byFile) {
      entries.sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );
    }

    return byFile;
  }

  async deleteEntry(id: string): Promise<void> {
    const history = await this.loadHistory();
    const filtered = history.filter((entry) => entry.id !== id);
    await this.saveHistory(filtered);
  }

  async clearHistoryForFile(filePath: string): Promise<void> {
    const history = await this.loadHistory();
    const filtered = history.filter((entry) => entry.filePath !== filePath);
    await this.saveHistory(filtered);
  }

  async clearAllHistory(): Promise<void> {
    await this.saveHistory([]);
  }

  private async loadHistory(): Promise<HistoryEntry[]> {
    try {
      const data = await fs.readFile(this.historyPath, "utf-8");
      const history = JSON.parse(data);
      // Convert timestamp strings back to Date objects
      return history.map((entry: any) => ({
        ...entry,
        timestamp: new Date(entry.timestamp),
      }));
    } catch (error) {
      console.error("Failed to load history:", error);
      return [];
    }
  }

  private async saveHistory(history: HistoryEntry[]): Promise<void> {
    try {
      await fs.writeFile(this.historyPath, JSON.stringify(history, null, 2));
    } catch (error) {
      console.error("Failed to save history:", error);
      throw error;
    }
  }
}
