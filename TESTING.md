# Testing Documentation for Prompt Studio

## Overview

Prompt Studio includes a comprehensive test suite that ensures the reliability and correctness of all major components. The tests are written using the Mocha testing framework and VS Code's test infrastructure.

## Test Structure

```
src/test/
├── runTest.ts              # Test runner entry point
├── suite/
│   ├── index.ts           # Test suite configuration
│   ├── extension.test.ts  # Extension activation tests
│   ├── llmProviders.test.ts  # LLM provider tests
│   ├── promptRunner.test.ts  # Prompt runner tests
│   ├── testManager.test.ts   # Test manager tests
│   ├── historyManager.test.ts # History manager tests
│   ├── sidebarProvider.test.ts # Sidebar provider tests
│   └── integration.test.ts   # Integration tests
```

## Test Suites

### 1. Extension Tests (`extension.test.ts`)

**Purpose**: Verify extension activation and command registration

**Tests**:

- Extension presence verification
- Extension activation
- Command registration validation
- Configuration property checks

**Key Scenarios**:

- Extension loads correctly
- All commands are registered
- Configuration schema is accessible

### 2. LLM Provider Tests (`llmProviders.test.ts`)

**Purpose**: Test the LLM provider manager and individual provider integrations

**Tests**:

- Provider instance creation
- API key handling and error messages
- Request structure validation
- Multi-provider support
- Response timestamp validation
- Optional parameter handling

**Key Scenarios**:

- Missing API keys handled gracefully
- All providers (OpenAI, Anthropic, Google) supported
- Error responses include helpful information

### 3. Prompt Runner Tests (`promptRunner.test.ts`)

**Purpose**: Verify prompt execution and parameter handling

**Tests**:

- Prompt runner instance creation
- Valid request execution
- Error handling
- Parameter pass-through
- Multi-provider support
- Edge cases (empty prompts, long prompts, special characters)

**Key Scenarios**:

- Prompts execute without throwing errors
- All request parameters are honored
- Special characters handled correctly

### 4. Test Manager Tests (`testManager.test.ts`)

**Purpose**: Validate test creation, storage, and management

**Tests**:

- Test manager instance creation
- Test structure validation
- Optional field handling
- Test result structure
- Test run structure
- Multiple providers in tests
- Error response handling

**Key Scenarios**:

- Tests can be created with minimal or full configuration
- Test results properly structured
- Multiple tests can be run together

### 5. Integration Tests (`integration.test.ts`)

**Purpose**: Verify end-to-end workflows and component interaction

**Tests**:

- LLMProviderManager → PromptRunner integration
- Complete workflow testing
- Sequential provider execution
- Error handling across components
- Concurrent prompt execution
- Component initialization order
- State isolation between components
- Command registration verification
- Configuration integration

**Key Scenarios**:

- Components work together correctly
- Multiple providers can be used sequentially
- Concurrent execution works properly
- Components maintain independent state

## Running Tests

### Quick Start

```bash
# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Run all tests
npm test
```

### Development Workflow

```bash
# Watch mode - automatically recompile on changes
npm run watch

# In another terminal, run tests
npm test
```

### Using VS Code Debug

1. Open the project in VS Code
2. Press `F5` or use Run → Start Debugging
3. Select "Extension Tests" from the launch configuration
4. Tests will run in a new VS Code window

## Test Coverage

### Components Tested

- ✅ Extension activation and lifecycle
- ✅ LLM provider integrations (OpenAI, Anthropic, Google)
- ✅ Prompt execution and response handling
- ✅ Test creation and management
- ✅ History management (storage, retrieval, deletion)
- ✅ Sidebar provider (webview integration)
- ✅ Configuration system
- ✅ Command registration
- ✅ Error handling
- ✅ Concurrent operations
- ✅ State management
- ✅ Per-file history tracking
- ✅ History persistence

### 6. History Manager Tests (`historyManager.test.ts`)

**Purpose**: Test prompt history storage, retrieval, and management

**Tests**:

- History manager instance creation
- Add entry to history
- Add entry with system prompt
- Add entry with error response
- Get history for specific file
- Get all history
- Get history by file
- Delete entry by id
- Clear history for specific file
- Clear all history
- Multiple entries maintain order by timestamp
- Entry IDs are unique
- History persists across multiple operations
- Handles different providers correctly

**Key Scenarios**:

- History entries are stored correctly
- Entries are retrieved by file path
- Timestamps maintain proper ordering (newest first)
- History can be cleared selectively or entirely
- Supports all LLM providers

### 7. Sidebar Provider Tests (`sidebarProvider.test.ts`)

**Purpose**: Test sidebar webview provider functionality

**Tests**:

- SidebarProvider instance creation
- Implements WebviewViewProvider interface
- Has required dependencies
- Can be constructed with all parameters

**Key Scenarios**:

- Sidebar provider initializes correctly
- Dependencies are properly injected
- Integrates with LLMProviderManager and HistoryManager

### Test Statistics

- **Total Test Suites**: 7
- **Total Tests**: 70+
- **Coverage Areas**:
  - Unit tests for individual components
  - Integration tests for component interaction
  - Edge case testing
  - Error handling validation

## Best Practices

### Writing New Tests

1. **Follow the existing structure**:

   ```typescript
   suite("Your Test Suite", () => {
     let component: YourComponent;

     setup(() => {
       component = new YourComponent();
     });

     test("Should do something", () => {
       // Test code
       assert.ok(component);
     });
   });
   ```

2. **Use descriptive test names**:

   - Good: "Should handle missing API key gracefully"
   - Bad: "Test 1"

3. **Test one thing per test**:

   - Each test should verify a single behavior
   - Makes debugging easier

4. **Include both positive and negative cases**:
   - Test success scenarios
   - Test error scenarios
   - Test edge cases

### Mocking External Dependencies

For tests that interact with external APIs (LLM providers), the current implementation:

- Returns error responses when API keys are missing
- Does not make actual API calls during tests
- Validates request/response structures

## Continuous Integration

The test suite is designed to run in CI/CD environments:

```bash
# CI-friendly test command
npm run pretest && npm test
```

### Environment Requirements

- Node.js 16+
- VS Code testing infrastructure
- No external API keys required for basic tests

## Troubleshooting

### Common Issues

1. **Tests fail to compile**

   ```bash
   npm run compile
   # Check for TypeScript errors
   ```

2. **VS Code extension tests fail to launch**

   - Ensure VS Code is closed
   - Try `npm run compile` first
   - Check that `@vscode/test-electron` is installed

3. **Tests timeout**
   - Some tests may take longer due to provider initialization
   - Mocha timeout is configured in test suite

## Future Improvements

Potential enhancements to the test suite:

- [ ] Add code coverage reporting
- [ ] Mock LLM API responses for more thorough testing
- [ ] Add performance benchmarks
- [ ] Test webview UI functionality
- [ ] Add visual regression tests
- [ ] Implement E2E tests with actual API calls (optional)

## Contributing

When adding new features:

1. Write tests first (TDD approach recommended)
2. Ensure all existing tests pass
3. Add tests for new functionality
4. Update this documentation if needed

## Resources

- [VS Code Extension Testing](https://code.visualstudio.com/api/working-with-extensions/testing-extension)
- [Mocha Documentation](https://mochajs.org/)
- [Node.js Assert Module](https://nodejs.org/api/assert.html)
