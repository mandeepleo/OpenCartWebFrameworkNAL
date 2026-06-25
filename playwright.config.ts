import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

// Load .env files only for local execution

/**
 * When your Playwright tests are running:
 * On GitHub Actions: GitHub automatically sets the variable GITHUB_ACTIONS to the string "true".
 * On your local machine: The variable is not set, so its value is undefined.
 */

// if (!process.env.GITHUB_ACTIONS) {
//   if (!process.env.ENV) {
//     dotenv.config({ path: "config/.env.qa" });
//   } else {
//     dotenv.config({ path: `config/.env.${process.env.ENV}` });
//   }
// }

const ENV = process.env.ENV || "qa";
console.log("Running tests on Environment: ", ENV);
dotenv.config({ path: `config/.env.${ENV}` });

export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? "50%" : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: "html",
  reporter: process.env.CI
    ? [["html", { outputFolder: "reports/html-report" }], ["github"]]
    : [
        ["html", { outputFolder: "reports/html-report" }],
        ["allure-playwright", { outputFolder: "allure-results" }],
      ],
  timeout: 30_000,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: process.env.BASE_URL,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    headless: process.env.CI ? true : false,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
    // actionTimeout:10_000, // maximum time for each action (like click, fill, etc.) to complete before timing out
    // navigationTimeout: 20_000, // maximum time for page navigation to complete before timing out
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    // {
    //   name: "ui-firefox",
    //   testDir: "tests/ui",
    //   use: { ...devices["Desktop Firefox"] },
    // },

    // {
    //   name: "ui-webkit",
    //   testDir: "tests/ui",
    //   use: { ...devices["Desktop Safari"] },
    // },
    // {
    //   name: "api",
    //   testDir: "tests/api",
    //   use: { ...devices["Desktop Chrome"] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
