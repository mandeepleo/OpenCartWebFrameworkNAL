import { test } from "@playwright/test";

// intercept network calls while navigating to a url

test("Intercept Test", async ({ page }) => {
  page.route("**/*", async (route) => {
    console.log(route.request().method(), route.request().url());
    await route.continue();
  });
  await page.goto("https://naveenautomationlabs.com/opencart/index.php");
});
