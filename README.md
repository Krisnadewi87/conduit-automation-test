# CONDUIT - QA AUTOMATION - PLAYWRIGHT

Automated testing project using Playwright for the Conduit Realworld Example platform.

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (LTS version recommended) - [Download Node.js](https://nodejs.org/)
- **Git** - [Download Git](https://git-scm.com/)

## Getting Started

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
# git clone https://github.com/Onebyone-2024/ifb-qa.git
```

Navigate to the project directory:

```bash
cd conduit-test-playwright
```

### 2. Install Dependencies

Install the required Node.js dependencies:

```bash
npm install
```

### 3. Install Playwright Browsers

Download the necessary browsers for Playwright:

```bash
npx playwright install
```

### 4. Run Tests

Execute the test suite:

```bash
npx playwright test
```

### 5. Generate HTML Report

To generate and view an HTML report of the test results:

```bash
npx playwright show-report
```

## Project Structure

```
conduit-test-playwright/
├── tests/              # Test files
├── playwright.config.js # Playwright configuration
├── package.json        # Project metadata and dependencies
├── README.md           # Project documentation
└── ...                 # Other files and folders
```

## Playwright Commands

Here are some useful Playwright commands:

- **Run all tests:**

  ```bash
  npx playwright test
  ```

- **Run a specific test file:**

  ```bash
  npx playwright test tests/example.spec.js
  ```

- **Run test in UI Mode:**

  ```bash
  npx playwright test --ui
  ```

- **Run tests in headed mode:**

  ```bash
  npx playwright test --headed
  ```

- **Debug tests:**
  ```bash
  npx playwright test --debug
  ```

## Configuration

Modify the `playwright.config.js` file to customize the Playwright configuration, such as test timeout, browser settings, and more.

## Contributing

If you wish to contribute to this project, feel free to create a pull request or open an issue in the repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Node.js Documentation](https://nodejs.org/en/docs/)
