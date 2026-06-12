import { Locator, Page } from "@playwright/test";

export class BasePage {
  protected readonly page: Page;

  // Common Locators across all pages

  protected readonly logo: Locator;
  protected readonly searchBox: Locator;
  protected readonly searchBtn: Locator;
  protected readonly footerLinks: Locator;
  protected readonly currencyDropdown: Locator;
  protected readonly cartBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.getByRole("img", { name: "naveenopencart" });
    this.searchBox = page.getByRole("textbox", { name: "Search" });
    this.searchBtn = page.locator("#search button");
    this.footerLinks = page.locator("footer a"); // 16 footer links (elements)
    this.currencyDropdown = page.locator("#form-currency");
    this.cartBtn = page.locator("button #cart-total");
  }

  // Common Actions/methods

  async isLogoVisible(): Promise<boolean> {
    return await this.logo.isVisible();
  }

  async isSearchBoxVisible(): Promise<boolean> {
    return await this.searchBox.isVisible();
  }

  async getFootersCount(): Promise<number> {
    return await this.footerLinks.count();
  }

  async getPageFooters(): Promise<string[]> {
    return await this.footerLinks.allInnerTexts();
  }

  async isCurrencyLinkVisible(): Promise<boolean> {
    return await this.currencyDropdown.isVisible();
  }

  async isCartBtnVisible(): Promise<boolean> {
    return await this.cartBtn.isVisible();
  }

  // Page level generic methods

  async getPageTitile(): Promise<string> {
    return await this.page.title();
  }

  getPageUrl(): string {
    return this.page.url();
  }

  captureScreenshot(ssname: string) {
    this.page.screenshot({ path: `reports/screenshot/${ssname}`, fullPage: true });
  }
}
