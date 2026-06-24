import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class RegisterPage extends BasePage {
  private readonly firstNameTextBox: Locator;
  private readonly lastNameTextBox: Locator;
  private readonly emailTextBox: Locator;
  private readonly telephoneTextBox: Locator;
  private readonly passwordTextBox: Locator;
  private readonly confirmPasswordTextBox: Locator;
  private readonly newsletterRadioNo: Locator;
  private readonly policyCheck: Locator;
  private readonly continueBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameTextBox = page.getByRole("textbox", { name: "First Name" });
    this.lastNameTextBox = page.getByRole("textbox", { name: "Last Name" });
    this.emailTextBox = page.getByRole("textbox", { name: "E-Mail" });
    this.telephoneTextBox = page.getByRole("textbox", { name: "Telephone" });
    this.passwordTextBox = page.getByLabel("Password", { exact: true });
    this.confirmPasswordTextBox = page.getByRole("textbox", { name: "Password Confirm" });
    this.newsletterRadioNo = page.getByLabel("No");
    this.policyCheck = page.getByRole("checkbox");
    this.continueBtn = page.locator('input[type="submit"]');
  }

  async goToRegisterPage(): Promise<void> {
    await this.page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
  }

  async getRegisterPageTitle(): Promise<string> {
    return await this.page.title();
  }

  async registerUser(
    firstname: string,
    lastname: string,
    email: string,
    telephone: string,
    password: string,
    confirmPass: string,
  ) {
    await this.firstNameTextBox.fill(firstname);
    await this.lastNameTextBox.fill(lastname);
    await this.emailTextBox.fill(email);
    await this.telephoneTextBox.fill(telephone);
    await this.passwordTextBox.fill(password);
    await this.confirmPasswordTextBox.fill(confirmPass);
    await this.newsletterRadioNo.click();
    await this.policyCheck.check();
    await this.continueBtn.click();
  }
}
