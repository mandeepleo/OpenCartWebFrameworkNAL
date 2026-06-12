import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
  // locators
  private readonly productHeader: Locator;
  private readonly chekcoutBtn: Locator;

  // constructor
  constructor(page: Page) {
    super(page); // call the parent class constructor to initialize the page property
    this.productHeader = page.locator("h1");
    this.chekcoutBtn = page.locator("a.btn.btn-primary");
  }

  // public methods (actions that can be performed on the login page)
  async getCartPageTitle(): Promise<string> {
    return (await this.page.title()).trim();
  }

  async clickOnCheckoutBtn(): Promise<void> {
    await this.chekcoutBtn.click();
  }
}
