import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class RegisteredPage extends BasePage {
  private readonly registeredSucesssLabel: Locator;

  constructor(page: Page) {
    super(page);
    this.registeredSucesssLabel = page.getByRole("heading", { name: "Your Account Has Been Created!" });
  }

  async getRegisteredSuccessLabel(): Promise<boolean> {
    return this.registeredSucesssLabel.isVisible();
  }
}
