import { test, expect } from "../../src/fixtures/pagefixtures";
import { JsonHelper } from "../../src/utils/JsonHelper";

test.beforeEach(async ({ registerPage }) => {
  await registerPage.goToRegisterPage();
});

test("TC: Register Page Title Test", async ({ registerPage }) => {
  expect(await registerPage.getRegisterPageTitle()).toBe("Register Account");
});

const registerUserJson = JsonHelper.readJson("src/data/registerData.json");
for (const data of registerUserJson) {
  test.skip(`TC: Register New User | Firstname: ${data.firstname} `, async ({ registerPage, registeredPage, page }) => {
    await registerPage.registerUser(
      data.firstname,
      data.lastname,
      data.email,
      data.telephone,
      data.password,
      data.confirmPass,
    );
    await page.pause();
    expect(await registeredPage.getRegisteredSuccessLabel()).toBeTruthy();
  });
}
