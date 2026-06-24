import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  // page locators
  private readonly emailTextBox: Locator;
  private readonly passwordTextBox: Locator;
  private readonly loginBtn: Locator;
  private readonly forgotPasswordLink: Locator;
  private readonly appLogo: Locator;
  private readonly invalidLoginError: Locator;

  // page constructor
  constructor(page: Page) {
    super(page); // call the parent class constructor to initialize the page property
    this.emailTextBox = page.getByRole("textbox", { name: "E-Mail Address" });
    this.passwordTextBox = page.getByRole("textbox", { name: "Password" });
    this.loginBtn = page.locator("input[value='Login']");
    this.forgotPasswordLink = page.getByRole("link", { name: /Forgotten Password/i }).first();
    this.appLogo = page.getByAltText("naveenopencart");
    this.invalidLoginError = page.locator(".alert.alert-danger.alert-dismissible");
  }

  // public methods (actions that can be performed on the login page)
  async goToLoginPage(): Promise<void> {
    await this.page.goto("opencart/index.php?route=account/login");
  }

  async doesForgotPasswordLinkExist(): Promise<boolean> {
    return await this.forgotPasswordLink.isVisible();
  }
  async doLogin(username: string, password: string): Promise<void> {
    console.log("User creds: ", username, "/", password);
    await this.emailTextBox.fill(username);
    await this.passwordTextBox.fill(password);
    await this.loginBtn.click();
  }
  async loginErrorDisplayed(): Promise<boolean> {
    return await this.invalidLoginError.isVisible();
  }
}
