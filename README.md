# Prompt Studio

A Visual Studio Code extension for running prompts to major LLM providers (OpenAI, Anthropic, Google), writing tests for prompts, and comparing results across test runs.

## Features

- 🚀 **Multi-Provider Support**: Run prompts on OpenAI, Anthropic (Claude), and Google (Gemini) models
- 📱 **Sidebar GUI**: Dedicated sidebar panel for quick access to prompt running
- 📝 **Interactive UI**: Beautiful webview interface for crafting and testing prompts
- 📁 **File Context**: Automatically includes current file content in prompts
- 🎯 **Smart Model Filtering**: Only shows models for which you have API keys configured
- 🧪 **Prompt Testing**: Create reusable tests for your prompts
- 📊 **Result Comparison**: Compare results across multiple test runs to track changes
- ⚙️ **Advanced Options**: Configure temperature, max tokens, and system prompts
- 💾 **Test Management**: Save and organize your prompt tests

## Installation

### Option 1: Development/Testing Mode (Recommended for Development)

1. Clone this repository

   ```bash
   git clone <repository-url>
   cd prompt-studio
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Compile the extension

   ```bash
   npm run compile
   ```

4. Open the project in VS Code

   ```bash
   code .
   ```

5. Press `F5` (or Run → Start Debugging)
   - This opens a new VS Code window with the extension loaded
   - The extension will be active only in this development window
   - Make changes, recompile, and press `F5` again to test

### Option 2: Install as VSIX (Recommended for Regular Use)

1. Clone and build the extension

   ```bash
   git clone <repository-url>
   cd prompt-studio
   npm install
   npm run compile
   ```

2. Package the extension

   ```bash
   # Install vsce if you haven't already
   npm install -g @vscode/vsce

   # Package the extension
   vsce package
   ```

   This creates a `prompt-studio-0.1.0.vsix` file

3. Install the VSIX in VS Code

   - **Option A**: Via Command Palette

     1. Open VS Code
     2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
     3. Type "Extensions: Install from VSIX"
     4. Select the generated `.vsix` file

   - **Option B**: Via Command Line

     ```bash
     code --install-extension prompt-studio-0.1.0.vsix
     ```

   - **Option C**: Via Extensions View
     1. Open Extensions view (`Cmd+Shift+X` or `Ctrl+Shift+X`)
     2. Click the `...` menu at the top
     3. Select "Install from VSIX..."
     4. Select the `.vsix` file

4. Reload VS Code when prompted

5. The extension is now installed and will appear in your extensions list!

### Verifying Installation

After installation, you should see:

- 🚀 **Prompt Studio icon** in the Activity Bar (left sidebar)
- Extension listed in Extensions view (`Cmd+Shift+X`)
- Available commands when you open Command Palette:
  - "Prompt Studio: Run Prompt"
  - "Prompt Studio: Create Test"
  - "Prompt Studio: Run Tests"
  - "Prompt Studio: Compare Results"

### Uninstalling

To uninstall the extension:

1. Open Extensions view (`Cmd+Shift+X` or `Ctrl+Shift+X`)
2. Find "Prompt Studio"
3. Click the gear icon
4. Select "Uninstall"

## Configuration

Before using Prompt Studio, you need to configure your API keys in VS Code settings:

1. Open VS Code Settings (`Cmd+,` on Mac, `Ctrl+,` on Windows/Linux)
2. Search for "Prompt Studio"
3. Enter your API keys:
   - `promptStudio.openai.apiKey` - Your OpenAI API key
   - `promptStudio.anthropic.apiKey` - Your Anthropic API key
   - `promptStudio.google.apiKey` - Your Google AI API key

You can also configure these in your `settings.json`:

```json
{
  "promptStudio.openai.apiKey": "sk-...",
  "promptStudio.anthropic.apiKey": "sk-ant-...",
  "promptStudio.google.apiKey": "..."
}
```

## Usage

### Sidebar Panel (Quick Access)

1. Click the 🚀 Prompt Studio icon in the Activity Bar (left sidebar)
2. The sidebar shows:
   - **Current File**: The active file in your editor (updates automatically)
   - **Model Selector**: Choose from available models (filtered by your API keys)
   - **Prompt Input**: Enter your instruction or question
   - **System Prompt**: Optional system message to guide the model
   - **Run Button**: Execute the prompt with file context included
3. View the LLM response directly in the sidebar

**Note**: The current file content is automatically included in the prompt, so you can ask questions about your code without copying/pasting.

### Running Prompts (Command Palette)

1. Open the Command Palette (`Cmd+Shift+P` on Mac, `Ctrl+Shift+P` on Windows/Linux)
2. Type "Prompt Studio: Run Prompt"
3. Use the interactive UI to:
   - Select your LLM provider (OpenAI, Anthropic, or Google)
   - Choose a model
   - Enter your prompt and optional system prompt
   - Configure advanced options like temperature and max tokens
   - Click "Run Prompt" to get results

### Creating Tests

1. Open the Command Palette
2. Type "Prompt Studio: Create Test"
3. Follow the prompts to:
   - Name your test
   - Add a description
   - Select provider and model
   - Enter the prompt to test
   - Optionally add a system prompt

### Running Tests

1. Open the Command Palette
2. Type "Prompt Studio: Run Tests"
3. Select which tests to run (you can select multiple)
4. View results in a formatted markdown document

### Comparing Results

1. Open the Command Palette
2. Type "Prompt Studio: Compare Results"
3. Select two test runs to compare
4. View a side-by-side comparison of results

## Supported Models

### OpenAI

- GPT-4
- GPT-4 Turbo
- GPT-3.5 Turbo

### Anthropic

- Claude 3 Opus
- Claude 3 Sonnet
- Claude 3 Haiku

### Google

- Gemini Pro
- Gemini Pro Vision

## Development

### Building

```bash
npm run compile
```

### Testing

The extension includes a comprehensive test suite covering all major components:

#### Test Suites

1. **Extension Tests** (`extension.test.ts`)

   - Extension activation
   - Command registration
   - Configuration validation

2. **LLM Provider Tests** (`llmProviders.test.ts`)

   - Provider initialization
   - API key handling
   - Error handling
   - Multi-provider support

3. **Prompt Runner Tests** (`promptRunner.test.ts`)

   - Prompt execution
   - Parameter handling
   - Response validation
   - Edge cases (empty prompts, special characters, etc.)

4. **Test Manager Tests** (`testManager.test.ts`)

   - Test creation and structure
   - Test result validation
   - Test run management
   - Multiple provider support

5. **Integration Tests** (`integration.test.ts`)
   - End-to-end workflows
   - Component interaction
   - Concurrent execution
   - State isolation

#### Running Tests

```bash
# Run all tests
npm test

# Compile and run tests
npm run pretest && npm test

# Watch mode for development
npm run watch
```

#### Test Coverage

The test suite includes:

- ✅ 50+ unit and integration tests
- ✅ All major components tested
- ✅ Error handling and edge cases
- ✅ Multi-provider scenarios
- ✅ Concurrent execution tests
- ✅ Configuration validation

### Packaging

```bash
npm install -g vsce
vsce package
```

## Requirements

- Visual Studio Code ^1.85.0
- Node.js and npm
- API keys for the LLM providers you want to use

## Known Issues

- None at this time

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC

## Release Notes

### 0.1.0

Initial release:

- Multi-provider LLM support (OpenAI, Anthropic, Google)
- Interactive prompt runner UI
- Test creation and management
- Test run comparison
- Advanced prompt configuration options
