# Prompt Studio - AI Agent Development Guide

This document is designed to help AI agents (LLMs) understand and contribute to the Prompt Studio VS Code extension.

## Project Overview

**Prompt Studio** is a Visual Studio Code extension that enables users to test and refine AI prompts directly within their editor. It supports multiple LLM providers (OpenAI, Anthropic, Google) and provides features for prompt testing, history management, and multi-file system prompts.

## Core Concept

Users open a file containing prompt text (the "system prompt"), write a user prompt in the sidebar, select an AI model, and run the prompt to get a response. The extension maintains history of all prompt executions per file.

## Architecture

### Project Structure

```
prompt-studio/
├── src/
│   ├── extension.ts          # Extension entry point & activation
│   ├── sidebarProvider.ts    # Main UI webview and message handling
│   ├── llmProviders.ts       # LLM API integrations (OpenAI, Anthropic, Google)
│   ├── historyManager.ts     # SQLite-based history storage
│   ├── models.ts             # Model definitions and configurations
│   ├── promptRunner.ts       # Legacy prompt execution (deprecated)
│   ├── testManager.ts        # Legacy test management (deprecated)
│   ├── webview.ts           # Legacy webview (deprecated)
│   └── test/                # Test suites
├── package.json             # Extension manifest and configuration
├── tsconfig.json           # TypeScript configuration
├── README.md               # User documentation
├── TESTING.md             # Testing guide
└── AGENTS.md              # This file
```

### Key Components

#### 1. Extension Entry (`extension.ts`)

- Activates the extension
- Registers the sidebar view provider
- Initializes LLM manager and history manager
- Manages extension lifecycle

#### 2. Sidebar Provider (`sidebarProvider.ts`)

- **Primary UI component** - This is the main interface users interact with
- Implements `vscode.WebviewViewProvider`
- Contains all HTML/CSS/JavaScript for the sidebar UI
- Handles bidirectional communication between webview and extension
- Key responsibilities:
  - File selection and management
  - Model selection
  - Prompt execution
  - History display
  - API key configuration

#### 3. LLM Provider Manager (`llmProviders.ts`)

- Manages API integrations for all supported providers
- Handles HTTP requests to LLM APIs
- Implements provider-specific logic:
  - **OpenAI**: GPT-3.5, GPT-4 models
  - **Anthropic**: Claude models (Sonnet, Opus, Haiku)
  - **Google**: Gemini models
- Returns normalized response format
- Handles errors and token counting

#### 4. History Manager (`historyManager.ts`)

- SQLite database for persistent storage
- Stores prompt history per file
- Schema:
  ```sql
  - id: INTEGER PRIMARY KEY
  - filePath: TEXT (indexed)
  - fileName: TEXT
  - timestamp: INTEGER
  - prompt: TEXT (user prompt)
  - response: TEXT (AI response)
  - systemPrompt: TEXT (file contents)
  - provider: TEXT (openai/anthropic/google)
  - model: TEXT (model identifier)
  - tokensUsed: INTEGER
  ```

#### 5. Models Configuration (`models.ts`)

- Central registry of all available models
- Model metadata (name, context window, cost per token)
- Used to populate model dropdown in UI

## Features

### 1. Multi-File System Prompts

Users can combine multiple files into a single system prompt:

- **Current File**: Selected from dropdown of open files
- **Additional Files**: Added via file picker, can be reordered via drag-and-drop
- Files are combined with markdown headers: `# filename.txt\n\n[content]`
- Order: Current file first, then additional files in display order

### 2. Multiple LLM Providers

- **OpenAI**: gpt-3.5-turbo, gpt-4, gpt-4-turbo, gpt-4o, gpt-4o-mini
- **Anthropic**: claude-3-5-sonnet, claude-3-opus, claude-3-sonnet, claude-3-haiku
- **Google**: gemini-1.5-pro, gemini-1.5-flash, gemini-1.0-pro

### 3. History Management

- Per-file history storage
- Dropdown to select previous executions
- Collapsible sections for:
  - System prompt (file contents at time of execution)
  - User prompt
  - AI response
- Copy to clipboard and open in new tab actions
- Clear history per file
- Load previous prompts back into editor

### 4. API Key Management

- Secure storage in VS Code settings (global)
- Configuration modal in sidebar
- Keys stored per provider:
  - `promptStudio.openai.apiKey`
  - `promptStudio.anthropic.apiKey`
  - `promptStudio.google.apiKey`

### 5. State Persistence

- Selected model persists across sessions
- Prompt text persists across sessions
- Uses webview state API (`vscode.getState()` / `vscode.setState()`)

## Message Flow

The extension uses a message-passing architecture between the webview (UI) and extension host:

### Webview → Extension Messages

```typescript
// Get available models (checks API keys)
{ type: 'getAvailableModels' }

// Get current open file
{ type: 'getCurrentFile' }

// Get list of open files
{ type: 'getOpenFiles' }

// Select different current file
{ type: 'selectCurrentFile', filePath: string }

// Add additional files
{ type: 'addFiles' }

// Execute prompt
{
  type: 'runPrompt',
  provider: string,
  model: string,
  prompt: string,
  userPrompt: string,
  systemPrompt: string,
  filePath: string,
  fileName: string
}

// API key management
{ type: 'saveApiKeys', keys: { openai?, anthropic?, google? } }
{ type: 'getApiKeys' }

// History management
{ type: 'getHistory', filePath?: string }
{ type: 'clearHistory', filePath: string }

// Utility
{ type: 'openInNewTab', content: string, title: string }
```

### Extension → Webview Messages

```typescript
// Current file info
{ type: 'currentFile', filePath: string, fileName: string, content: string }

// Open files list
{ type: 'openFiles', files: Array<{filePath, fileName}> }

// Available models
{ type: 'availableModels', models: Array<{provider, model, label}> }

// Loading state
{ type: 'loading', loading: boolean }

// Prompt response
{ type: 'response', response: {content, provider, model, tokensUsed?, error?} }

// Error
{ type: 'error', error: string }

// History entries
{ type: 'history', entries: Array<HistoryEntry> }

// API keys retrieved
{ type: 'apiKeys', keys: {openai, anthropic, google} }

// API keys saved
{ type: 'apiKeysSaved', success: boolean, error?: string }

// Files added
{ type: 'filesAdded', files: Array<{filePath, fileName, content}> }
```

## Development Guidelines

### Adding a New LLM Provider

1. **Update `llmProviders.ts`**:

   ```typescript
   // Add provider type
   type LLMProvider = 'openai' | 'anthropic' | 'google' | 'newprovider';

   // Add API configuration
   private getApiConfig(provider: LLMProvider) {
     // Add new provider case
   }

   // Implement provider-specific logic
   private async runNewProviderPrompt(request: PromptRequest)
   ```

2. **Update `models.ts`**:

   ```typescript
   const MODELS = {
     newprovider: [
       {
         id: "model-id",
         name: "Model Display Name",
         contextWindow: 128000,
         costPer1MTokens: { input: 3.0, output: 15.0 },
       },
     ],
   };
   ```

3. **Add configuration in `package.json`**:

   ```json
   "configuration": {
     "properties": {
       "promptStudio.newprovider.apiKey": {
         "type": "string",
         "default": "",
         "description": "API key for New Provider"
       }
     }
   }
   ```

4. **Update UI in `sidebarProvider.ts`**:
   - Add key input in configuration modal HTML
   - Update `sendAvailableModels()` to check new provider key
   - Update `saveApiKeys()` and `sendApiKeys()` to handle new provider

### Adding a New Feature

1. **Backend (Extension Host)**:

   - Add handler in `sidebarProvider.ts` message switch
   - Implement functionality
   - Send response back to webview

2. **Frontend (Webview)**:

   - Add UI elements in `_getHtmlForWebview()` HTML
   - Add event handlers in JavaScript section
   - Send messages to extension host
   - Handle response messages

3. **Example: Adding Export Feature**:

   ```typescript
   // In sidebarProvider.ts message handler
   case "exportHistory":
     await this.exportHistory(data.filePath);
     break;

   // In webview JavaScript
   function exportHistory() {
     vscode.postMessage({
       type: 'exportHistory',
       filePath: currentFilePath
     });
   }
   ```

### Code Style

- **TypeScript**: Use strict type checking
- **Async/Await**: Prefer over promises
- **Error Handling**: Always use try-catch for async operations
- **VS Code APIs**: Use built-in APIs when available (e.g., `vscode.workspace.fs` over Node.js `fs`)
- **Webview Security**: Never use `eval()`, sanitize user input
- **Comments**: Document complex logic and API integrations

### Testing

- Unit tests in `src/test/suite/`
- Run tests: `npm test`
- Integration tests focus on:
  - Message passing between webview and extension
  - LLM provider integrations
  - History database operations
  - State persistence

See `TESTING.md` for detailed testing guide.

## Common Tasks

### Debugging the Webview

1. Open extension in debug mode (F5)
2. Open Command Palette: "Developer: Open Webview Developer Tools"
3. Inspect console logs, network requests, and DOM

### Modifying the UI

All UI code is in `sidebarProvider.ts` in the `_getHtmlForWebview()` method:

- **HTML**: Within the template string
- **CSS**: In `<style>` tag
- **JavaScript**: In `<script>` tag
- Uses VS Code CSS variables for theming (e.g., `var(--vscode-foreground)`)

### Database Schema Changes

1. Update schema in `historyManager.ts` constructor
2. Increment database version
3. Add migration logic in `createTables()`
4. Test with existing database

### Adding Configuration Options

1. Add in `package.json` under `contributes.configuration.properties`
2. Access via `vscode.workspace.getConfiguration('promptStudio')`
3. Update via `config.update(key, value, ConfigurationTarget.Global)`

## Key Implementation Details

### File Selection Strategy

- **Current File**: Selected from dropdown of currently open tabs
- Updates `currentFilePath` and `currentFileContent` in webview state
- When file changes, if History tab is active, automatically refreshes history

### Prompt Execution Flow

1. User enters prompt and clicks "Run"
2. Webview sends `runPrompt` message with all context
3. Extension validates API key for selected provider
4. Makes HTTP request to provider API
5. Normalizes response format
6. Saves to history (if successful)
7. Sends response back to webview
8. Webview displays response

### History Storage

- SQLite database in extension storage directory
- Indexed by `filePath` for fast lookups
- History entries are immutable (no updates, only insert/delete)
- Clearing history deletes all entries for a specific file

### State Management

- **Webview State**: Model selection, prompt text (persists across sessions)
- **Extension State**: Database connection, LLM manager (in-memory)
- **VS Code Settings**: API keys, user preferences (persisted globally)

## Future Enhancement Ideas

- [ ] Export history as JSON/CSV
- [ ] Prompt templates library
- [ ] Token usage analytics and cost tracking
- [ ] Batch processing multiple prompts
- [ ] Diff view for comparing responses
- [ ] Support for streaming responses
- [ ] Custom model configurations
- [ ] Prompt versioning and branching
- [ ] Collaborative prompt sharing
- [ ] Integration with git for prompt version control

## Troubleshooting

### Common Issues

1. **Models not showing**: Check API keys are configured correctly
2. **History not loading**: Check database file permissions
3. **Webview blank**: Check for JavaScript errors in webview console
4. **API errors**: Verify API key format and provider status

### Debug Logging

Add console logs in strategic places:

```typescript
// Extension host
console.log("[PromptStudio]", "message");

// Webview
console.log("[Webview]", "message");
```

Check Output panel: "View > Output" → Select "Extension Host" or webview console.

## Resources

- [VS Code Extension API](https://code.visualstudio.com/api)
- [Webview API Guide](https://code.visualstudio.com/api/extension-guides/webview)
- [OpenAI API Docs](https://platform.openai.com/docs)
- [Anthropic API Docs](https://docs.anthropic.com)
- [Google AI API Docs](https://ai.google.dev/docs)

## Contributing Guidelines for AI Agents

When contributing to this project:

1. **Read this entire document first** to understand architecture
2. **Maintain consistency** with existing code style and patterns
3. **Test changes thoroughly** before submitting
4. **Update documentation** when adding features
5. **Consider backwards compatibility** when modifying schemas or APIs
6. **Use descriptive commit messages** that explain the "why"
7. **Ask clarifying questions** if requirements are unclear

## Getting Help

If you're an AI agent working on this project and need clarification:

- Review the README.md for user-facing documentation
- Check TESTING.md for testing procedures
- Examine existing code for implementation patterns
- Look at package.json for extension configuration
- Review VS Code extension samples for API usage examples

---

**Last Updated**: November 2025
**Maintainer**: Original developer + AI contributors
**License**: See LICENSE file
