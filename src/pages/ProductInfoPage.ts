import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductInfoPage extends BasePage {
  // locators
  private readonly productHeader: Locator;
  private readonly productImages: Locator;
  private readonly productMetadata: Locator;
  private readonly productPricing: Locator;
  private dataMap: Map<string, string | number>;
  private readonly productQtyTextBox: Locator;
  private readonly addToCartBtn: Locator;
  private readonly addToCartSuccessAlert: Locator;
  private readonly cartLink: Locator;

  // constructor
  constructor(page: Page) {
    super(page); // call the parent class constructor to initialize the page property
    this.productHeader = page.locator("h1");
    this.productImages = page.locator("div#content li img");
    this.productMetadata = page.locator("div.col-sm-4 ul.list-unstyled:nth-of-type(1) li");
    this.productPricing = page.locator("div.col-sm-4 ul.list-unstyled:nth-of-type(2) li");
    this.dataMap = new Map<string, string | number>();
    this.productQtyTextBox = page.getByRole("textbox", { name: "Qty" });
    this.addToCartBtn = page.getByRole("button", { name: "Add to Cart" });
    this.addToCartSuccessAlert = page.locator(".alert.alert-success.alert-dismissible");
    this.cartLink = page.getByRole("link", { name: "shopping cart" });
  }

  // public methods (actions that can be performed on the login page)
  async getProductHeader(): Promise<string> {
    return await this.productHeader.innerText();
  }

  async getProductImagesCount(): Promise<number> {
    await this.productImages.first().waitFor({ state: "visible" }); // so that count starts only after images are loaded
    return await this.productImages.count();
  }

  private async getProductMetaData(): Promise<void> {
    // private method
    const metaData: string[] = await this.productMetadata.allInnerTexts();
    for (let data of metaData) {
      let meta = data.split(":");
      let metaKey = meta[0].trim();
      let metaVal = meta[1].trim();
      this.dataMap.set(metaKey, metaVal);
    }
  }

  private async getProductPricingData(): Promise<void> {
    // private method
    const priceData: string[] = await this.productPricing.allInnerTexts();
    let productPrice = priceData[0].trim();
    let productExTax = priceData[1].split(":")[1].trim();
    this.dataMap.set("Product Price", productPrice);
    this.dataMap.set("Ex Tax", productExTax);
  }

  /**
   *
   * @returns this method returns the actual product data: header, images, metedata, pricing data
   */
  async getProductInfo(): Promise<Map<string, string | number>> {
    this.dataMap.set("Product Header", await this.getProductHeader());
    this.dataMap.set("Product Images Count", await this.getProductImagesCount());
    await this.getProductMetaData();
    await this.getProductPricingData();
    return this.dataMap;
  }

  async fillProductQty(qty: number): Promise<void> {
    await this.productQtyTextBox.fill(String(qty));
  }

  async addToCart(): Promise<void> {
    await this.addToCartBtn.click(); //
  }

  async addToCartSuccessAlertVisible(): Promise<boolean> {
    return await this.addToCartSuccessAlert.isVisible();
  }

  async goToCartPage(): Promise<void> {
    await this.cartLink.click();
  }
}
