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