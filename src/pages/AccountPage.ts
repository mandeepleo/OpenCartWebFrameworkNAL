import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class AccountPage extends BasePage {
  // page locators
  private readonly logoutLink: Locator;
  private readonly headers: Locator;

  // page constructor
  constructor(page: Page) {
    super(page); // call the parent class constructor to initialize the page property
    this.logoutLink = page.getByRole("link", { name: "Logout" });
    this.headers = page.getByRole("heading", { level: 2 });
  }

  // page methods
  async isLogoutLinkVisible(): Promise<boolean> {
    return await this.logoutLink.isVisible();
  }
  async getAccountPageHeaders(): Promise<string[]> {
    return await this.headers.allInnerTexts();
  }

  async doSearch(searchKey: string): Promise<void> {
    console.log("Search key is:", searchKey);
    await this.searchBox.fill(searchKey); // searchBox is coming from BasePage.ts
    await this.searchBtn.click(); // searchBtn is coming from BasePage.ts
  }
}
