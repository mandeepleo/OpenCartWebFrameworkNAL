import { test, expect } from "../../src/fixtures/pagefixtures";

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goToLoginPage(); // navigate to the login page
  await loginPage.doLogin("test@email.com", "test");
});

test("TC: Account Page - Title Validation", async ({ accountPage }) => {
  const title = await accountPage.getPageTitile(); // getPageTitle method is coming from BasePage.ts
  console.log("Account Page Title: ", title);
  expect(title).toBe("My Account");
});

test("TC: Account Page - Logout Link Visibility", async ({ accountPage }) => {
  const isLogoutLinkVisible = await accountPage.isLogoutLinkVisible();
  expect(isLogoutLinkVisible).toBeTruthy();
});

test("TC: Account Page - Headers Validation", async ({ accountPage }) => {
  const headers = await accountPage.getAccountPageHeaders();
  console.log("Account Page Headers: \n", headers);
  expect.soft(headers).toHaveLength(4);
  expect.soft(headers).toEqual(["My Account", "My Orders", "My Affiliate Account", "Newsletter"]);
});
