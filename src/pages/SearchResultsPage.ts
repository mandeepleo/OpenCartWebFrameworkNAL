import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SearchResultsPage extends BasePage {
  // locators
  private readonly searchResult: Locator;

  // constructor
  constructor(page: Page) {
    super(page); // call the parent class constructor to initialize the page property
    this.searchResult = page.locator("div.product-layout");
  }

  // public methods (actions that can be performed on the login page)
  async getSearchResultCount(): Promise<number> {
    return await this.searchResult.count();
  }
  async selectProduct(productName: string): Promise<void> {
    await this.page.getByRole("link", { name: productName }).first().click(); // dynamic locator
  }
}
