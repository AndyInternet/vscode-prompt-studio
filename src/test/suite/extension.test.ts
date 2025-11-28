import * as assert from "assert";
import * as vscode from "vscode";

suite("Extension Test Suite", () => {
  vscode.window.showInformationMessage("Start all tests.");

  test("Extension should be present", () => {
    assert.ok(
      vscode.extensions.getExtension("your-publisher-name.prompt-studio")
    );
  });

  test("Extension should activate", async () => {
    const extension = vscode.extensions.getExtension(
      "your-publisher-name.prompt-studio"
    );
    assert.ok(extension);
    await extension!.activate();
    assert.strictEqual(extension!.isActive, true);
  });

  test("Should register all commands", async () => {
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

  test("Configuration properties should be defined", () => {
    const config = vscode.workspace.getConfiguration("promptStudio");

    // These should not throw errors
    assert.doesNotThrow(() => config.get("openai.apiKey"));
    assert.doesNotThrow(() => config.get("anthropic.apiKey"));
    assert.doesNotThrow(() => config.get("google.apiKey"));
    assert.doesNotThrow(() => config.get("defaultModel"));
  });
});
