import { test as baseTest } from "@playwright/test";
import { BasePage } from "../pages/BasePage";
import { LoginPage } from "../pages/LoginPage";
import { AccountPage } from "../pages/AccountPage";
import { SearchResultsPage } from "../pages/SearchResultsPage";
import { RegisterPage } from "../pages/RegisterPage";
import { RegisteredPage } from "../pages/RegisteredPage";
import { ProductInfoPage } from "../pages/ProductInfoPage";
import { CartPage } from "../pages/CartPage";
import { CsvHelper } from "../utils/CsvHelper";

type pageFixtures = {
  basePage: BasePage;
  loginPage: LoginPage;
  accountPage: AccountPage;
  searchResultsPage: SearchResultsPage;
  registerPage: RegisterPage;
  registeredPage: RegisteredPage;
  productInfoPage: ProductInfoPage;
  cartPage: CartPage;
  testData: Record<string, string>[];
};

export let test = baseTest.extend<pageFixtures>({
  basePage: async ({ page }, use) => {
    let basePage = new BasePage(page);
    await use(basePage);
  },

  loginPage: async ({ page }, use) => {
    let loginPage = new LoginPage(page);
    await use(loginPage);
  },

  accountPage: async ({ page }, use) => {
    let accountPage = new AccountPage(page);
    await use(accountPage);
  },

  searchResultsPage: async ({ page }, use) => {
    let searchResultsPage = new SearchResultsPage(page);
    await use(searchResultsPage);
  },

  registerPage: async ({ page }, use) => {
    let registerPage = new RegisterPage(page);
    await use(registerPage);
  },

  registeredPage: async ({ page }, use) => {
    let registeredPage = new RegisteredPage(page);
    await use(registeredPage);
  },

  productInfoPage: async ({ page }, use) => {
    let productInfoPage = new ProductInfoPage(page);
    await use(productInfoPage);
  },

  cartPage: async ({ page }, use) => {
    let cartPage = new CartPage(page);
    await use(cartPage);
  },

  testData: async ({}, use) => {
    let testData = CsvHelper.readCsv("src/data/loginData.csv");
    await use(testData);
  },
});

export { expect } from "@playwright/test";
