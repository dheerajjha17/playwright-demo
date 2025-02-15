# Configuration of Development Environment

Download node js from https://nodejs.org/en/download. Download lts version.
Download vs code from https://code.visualstudio.com/Download.
Download Git from https://git-scm.com/downloads
Install "Playwright Test for VSCode" Extension in VS code editor.

# Playwright Installation
Create a folder and open in VS code
Run command "npm init playwright@latest"
In windows if you face error  C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system Then open window power shell as administrator and run command " Set-ExecutionPolicy -ExecutionPolicy RemoteSigned"
Use following configuration
√ Do you want to use TypeScript or JavaScript? · TypeScript
√ Where to put your end-to-end tests? · tests
√ Add a GitHub Actions workflow? (y/N) · false
√ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true

Project Structure is like following
node_modules - contains libraries
tests - test files reside here. it should be like *.spec.ts
tests-examples - contains test examples.
package.json - file to describe overall project and dev dependenciesto install in project
playwright.config.ts - main config file for playwright

# Test Execution with CLI
npx playwright test -> execute test case headlessly on all browsers defined in playwright.config.ts
npx playwright show-report -> will open index.html file on localhost url
npx playwright test --project=chromium -> executes test cases headlessly only on chrome
npx playwright test --project=chromium --headed - > execute test cases with browser open
npx playwright test {test case file name} -- project=chromium --headed -> execute test cases of specific test file
npx playwright test -g "{test case name}" -- project=chromium --headed -> execute specific test case

# Test execution with UI
npx playwright test --ui

# Tracing and Debugging
npx playwright test --project=chromium --trace on
npx playwright test --project=chromium --debug

