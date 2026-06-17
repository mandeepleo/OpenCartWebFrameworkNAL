import { test, expect } from "../../src/fixtures/pagefixtures";

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goToLoginPage();
  await loginPage.doLogin(process.env.USERNAME!, process.env.PASSWORD!);
});

test("TC: Checkout", async ({ page, accountPage, searchResultsPage, productInfoPage, cartPage }) => {
  await accountPage.doSearch("htc");
  await searchResultsPage.selectProduct("HTC Touch HD");
  await productInfoPage.fillProductQty(1);
  await productInfoPage.addToCart();
  await productInfoPage.goToCartPage();
  await cartPage.clickOnCheckoutBtn();
});