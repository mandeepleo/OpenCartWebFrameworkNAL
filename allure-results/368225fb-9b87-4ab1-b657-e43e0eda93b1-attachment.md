# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: registerpage.spec.ts >> TC: Register New User | Firstname: Harnaz 
- Location: tests/registerpage.spec.ts:14:3

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - button "$ Currency " [ref=e7] [cursor=pointer]:
        - strong [ref=e8]: $
        - text: Currency
        - generic [ref=e9]: 
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "" [ref=e13]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/contact
            - generic [ref=e14]: 
          - text: "123456789"
        - listitem [ref=e15]:
          - link " My Account" [ref=e16]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
            - generic [ref=e17]: 
            - text: My Account
        - listitem [ref=e19]:
          - link " Wish List (0)" [ref=e20]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
            - generic [ref=e21]: 
            - text: Wish List (0)
        - listitem [ref=e22]:
          - link " Shopping Cart" [ref=e23]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart
            - generic [ref=e24]: 
            - text: Shopping Cart
        - listitem [ref=e25]:
          - link " Checkout" [ref=e26]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=checkout/checkout
            - generic [ref=e27]: 
            - text: Checkout
  - banner [ref=e28]:
    - generic [ref=e30]:
      - link "naveenopencart" [ref=e33]:
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=common/home
        - img "naveenopencart" [ref=e34]
      - generic [ref=e36]:
        - textbox "Search" [ref=e37]
        - button "" [ref=e39] [cursor=pointer]:
          - generic [ref=e40]: 
      - button " 0 item(s) - $0.00" [ref=e43] [cursor=pointer]:
        - generic [ref=e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=e46]:
    - generic: 
    - list [ref=e48]:
      - listitem [ref=e49]:
        - link "Desktops" [ref=e50]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=20
      - listitem [ref=e51]:
        - link "Laptops & Notebooks" [ref=e52]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=18
      - listitem [ref=e53]:
        - link "Components" [ref=e54]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=25
      - listitem [ref=e55]:
        - link "Tablets" [ref=e56]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=57
      - listitem [ref=e57]:
        - link "Software" [ref=e58]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=17
      - listitem [ref=e59]:
        - link "Phones & PDAs" [ref=e60]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=24
      - listitem [ref=e61]:
        - link "Cameras" [ref=e62]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=33
      - listitem [ref=e63]:
        - link "MP3 Players" [ref=e64]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=34
  - generic [ref=e65]:
    - list [ref=e66]:
      - listitem [ref=e67]:
        - link "" [ref=e68]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=common/home
          - generic [ref=e69]: 
      - listitem [ref=e70]:
        - link "Account" [ref=e71]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
      - listitem [ref=e72]:
        - link "Register" [ref=e73]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/register
    - generic [ref=e74]:
      - generic [ref=e75]: 
      - text: "Warning: E-Mail Address is already registered!"
    - generic [ref=e76]:
      - generic [ref=e77]:
        - heading "Register Account" [level=1] [ref=e78]
        - paragraph [ref=e79]:
          - text: If you already have an account with us, please login at the
          - link "login page" [ref=e80]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/login
          - text: .
        - generic [ref=e81]:
          - group "Your Personal Details" [ref=e82]:
            - generic [ref=e83]: Your Personal Details
            - text: "*"
            - generic [ref=e84]:
              - generic [ref=e85]: "* First Name"
              - textbox "* First Name" [ref=e87]:
                - /placeholder: First Name
                - text: Harnaz
            - generic [ref=e88]:
              - generic [ref=e89]: "* Last Name"
              - textbox "* Last Name" [ref=e91]:
                - /placeholder: Last Name
                - text: Kaur
            - generic [ref=e92]:
              - generic [ref=e93]: "* E-Mail"
              - textbox "* E-Mail" [ref=e95]:
                - /placeholder: E-Mail
                - text: harnazzz@email.com
            - generic [ref=e96]:
              - generic [ref=e97]: "* Telephone"
              - textbox "* Telephone" [ref=e99]:
                - /placeholder: Telephone
                - text: "123456789"
          - group "Your Password" [ref=e100]:
            - generic [ref=e101]: Your Password
            - generic [ref=e102]:
              - generic [ref=e103]: "* Password"
              - textbox "* Password" [ref=e105]:
                - /placeholder: Password
                - text: harnaz
            - generic [ref=e106]:
              - generic [ref=e107]: "* Password Confirm"
              - textbox "* Password Confirm" [ref=e109]:
                - /placeholder: Password Confirm
                - text: harnaz
          - group "Newsletter" [ref=e110]:
            - generic [ref=e111]: Newsletter
            - generic [ref=e112]:
              - generic [ref=e113]: Subscribe
              - generic [ref=e114]:
                - generic [ref=e115] [cursor=pointer]:
                  - radio "Yes" [ref=e116]
                  - text: "Yes"
                - generic [ref=e117] [cursor=pointer]:
                  - radio "No" [checked] [ref=e118]
                  - text: "No"
          - generic [ref=e119]:
            - text: I have read and agree to the
            - link "Privacy Policy" [ref=e120]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information/agree&information_id=3
            - checkbox [checked] [ref=e121]
            - button "Continue" [ref=e122] [cursor=pointer]
      - complementary [ref=e123]:
        - generic [ref=e124]:
          - link "Login" [ref=e125]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/login
          - link "Register" [ref=e126]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/register
          - link "Forgotten Password" [ref=e127]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/forgotten
          - link "My Account" [ref=e128]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
          - link "Address Book" [ref=e129]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/address
          - link "Wish List" [ref=e130]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
          - link "Order History" [ref=e131]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/order
          - link "Downloads" [ref=e132]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/download
          - link "Recurring payments" [ref=e133]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/recurring
          - link "Reward Points" [ref=e134]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/reward
          - link "Returns" [ref=e135]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/return
          - link "Transactions" [ref=e136]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/transaction
          - link "Newsletter" [ref=e137]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter
  - contentinfo [ref=e138]:
    - generic [ref=e139]:
      - generic [ref=e140]:
        - generic [ref=e141]:
          - heading "Information" [level=5] [ref=e142]
          - list [ref=e143]:
            - listitem [ref=e144]:
              - link "About Us" [ref=e145]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=4
            - listitem [ref=e146]:
              - link "Delivery Information" [ref=e147]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=6
            - listitem [ref=e148]:
              - link "Privacy Policy" [ref=e149]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=3
            - listitem [ref=e150]:
              - link "Terms & Conditions" [ref=e151]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=5
        - generic [ref=e152]:
          - heading "Customer Service" [level=5] [ref=e153]
          - list [ref=e154]:
            - listitem [ref=e155]:
              - link "Contact Us" [ref=e156]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/contact
            - listitem [ref=e157]:
              - link "Returns" [ref=e158]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/return/add
            - listitem [ref=e159]:
              - link "Site Map" [ref=e160]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/sitemap
        - generic [ref=e161]:
          - heading "Extras" [level=5] [ref=e162]
          - list [ref=e163]:
            - listitem [ref=e164]:
              - link "Brands" [ref=e165]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/manufacturer
            - listitem [ref=e166]:
              - link "Gift Certificates" [ref=e167]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/voucher
            - listitem [ref=e168]:
              - link "Affiliate" [ref=e169]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=affiliate/login
            - listitem [ref=e170]:
              - link "Specials" [ref=e171]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/special
        - generic [ref=e172]:
          - heading "My Account" [level=5] [ref=e173]
          - list [ref=e174]:
            - listitem [ref=e175]:
              - link "My Account" [ref=e176]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
            - listitem [ref=e177]:
              - link "Order History" [ref=e178]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/order
            - listitem [ref=e179]:
              - link "Wish List" [ref=e180]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
            - listitem [ref=e181]:
              - link "Newsletter" [ref=e182]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter
      - separator [ref=e183]
      - paragraph [ref=e184]:
        - text: Powered By
        - link "OpenCart" [ref=e185]:
          - /url: http://www.opencart.com
        - text: naveenopencart © 2026
```

# Test source

```ts
  1  | import { test, expect } from "../src/fixtures/pagefixtures";
  2  | import { JsonHelper } from "../src/utils/JsonHelper";
  3  | 
  4  | test.beforeEach(async ({ registerPage }) => {
  5  |   await registerPage.goToRegisterPage();
  6  | });
  7  | 
  8  | test("TC: Register Page Title Test", async ({ registerPage }) => {
  9  |   expect(await registerPage.getRegisterPageTitle()).toBe("Register Account");
  10 | });
  11 | 
  12 | const registerUserJson = JsonHelper.readJson("src/data/registerData.json");
  13 | for (const data of registerUserJson) {
  14 |   test(`TC: Register New User | Firstname: ${data.firstname} `, async ({ registerPage, registeredPage, page }) => {
  15 |     await registerPage.registerUser(
  16 |       data.firstname,
  17 |       data.lastname,
  18 |       data.email,
  19 |       data.telephone,
  20 |       data.password,
  21 |       data.confirmPass,
  22 |     );
  23 |     await page.pause();
> 24 |     expect(await registeredPage.getRegisteredSuccessLabel()).toBeTruthy();
     |                                                              ^ Error: expect(received).toBeTruthy()
  25 |   });
  26 | }
  27 | 
```