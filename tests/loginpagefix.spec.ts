import { test, expect } from "../src/fixtures/pagefixtures";
import { CsvHelper } from "../src/utils/CsvHelper";
import { JsonHelper } from "../src/utils/JsonHelper";

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goToLoginPage();
});

test("Login Page title test", async ({ loginPage }) => {
  const loginPageTitle = await loginPage.getPageTitile(); // getPageTitle method is inherited from BasePage.ts
  console.log("LoginPage Titile: ", loginPageTitle);
  expect(loginPageTitle).toBe("Account Login");
});

test("Forgot Password Link Exist Test", async ({ loginPage }) => {
  expect(await loginPage.doesForgotPasswordLinkExist()).toBeTruthy();
});

test("Login Test with data from dotenv", async ({ loginPage, accountPage }) => {
  await loginPage.doLogin(process.env.USERNAME!, process.env.PASSWORD!);
  expect.soft(await accountPage.isLogoutLinkVisible()).toBeTruthy();
  expect.soft(await accountPage.getPageTitile()).toBe("My Account"); // getPageTitle method is inherited from BasePage.ts
});

// Data-Driven test (CSV) Approach # 1
// Drawback of this approach: All test data runs as a single test in seqential mode
test("Login Test with data from CSV using testData fixture", async ({ loginPage, testData }) => {
  for (const row of testData) {
    await loginPage.doLogin(row.username, row.password);
    expect(await loginPage.loginErrorDisplayed()).toBeTruthy();
  }
});

// Data-Drivern test (CSV) Approach # 2
// Advantage of this approach: Separate test runs for each set of data in CSV in parallel mode
let testData: Record<string, string>[] = CsvHelper.readCsv("src/data/loginData.csv");
for (const row of testData) {
  test(`Invalid Login Test With: ${row.username} / ${row.password}`, async ({ loginPage }) => {
    await loginPage.doLogin(row.username, row.password);
    expect(await loginPage.loginErrorDisplayed()).toBeTruthy();
  });
}

// Data-Driven test (JSON)
let loginDataJson = JsonHelper.readJson("src/data/loginData.json");
for (const data of loginDataJson) {
  test(`Invalid Login Test With: ${data.username} / ${data.password}`, async ({ loginPage }) => {
    await loginPage.doLogin(data.username, data.password);
    expect(await loginPage.loginErrorDisplayed()).toBeTruthy();
  });
}
