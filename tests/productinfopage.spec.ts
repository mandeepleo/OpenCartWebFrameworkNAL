import { test, expect } from "../src/fixtures/pagefixtures";
import { CsvHelper } from "../src/utils/CsvHelper";

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goToLoginPage();
  await loginPage.doLogin(process.env.USERNAME!, process.env.PASSWORD!);
});

test("TC: Company logo exist on Product Info Page", async ({ productInfoPage }) => {
  expect(await productInfoPage.isLogoVisible()).toBeTruthy();
});

test("TC: Verify footers are visible on product info page", async ({ productInfoPage }) => {
  expect(await productInfoPage.getFootersCount()).toBe(16);
});

test(`TC: Verify Product Image Count`, async ({ accountPage, searchResultsPage, productInfoPage }) => {
  await accountPage.doSearch("macbook");
  await searchResultsPage.selectProduct("MacBook Pro");
  const imageCount = await productInfoPage.getProductImagesCount();
  console.log("Total product images count: ", imageCount);
  expect(imageCount).toBe(4);
});

const productInfoData: Record<string, string>[] = CsvHelper.readCsv("src/data/productInfo.csv");
for (const row of productInfoData) {
  test(`TC: Verify Product Information | SearchKey: ${row.searchkey}`, async ({
    searchResultsPage,
    productInfoPage,
    accountPage,
  }) => {
    await accountPage.doSearch(row.searchkey);
    await searchResultsPage.selectProduct(row.name);
    const actualProductInfoMap = await productInfoPage.getProductInfo();
    expect.soft(actualProductInfoMap.get("Product Header")).toBe(row.header);
    expect.soft(actualProductInfoMap.get("Product Images Count")).toBe(Number(row.imagescount));
    expect.soft(actualProductInfoMap.get("Brand")).toBe(row.brand);
    expect.soft(actualProductInfoMap.get("Product Code")).toBe(row.code);
    expect.soft(actualProductInfoMap.get("Reward Points")).toBe(row.rewardpoints);
    expect.soft(actualProductInfoMap.get("Availability")).toBe(row.availability);
    expect.soft(actualProductInfoMap.get("Product Price")).toBe(row.price);
    expect.soft(actualProductInfoMap.get("Ex Tax")).toBe(row.extax);
  });
  // }
}

test("TC: Add product to cart and verify added successfully", async ({
  accountPage,
  searchResultsPage,
  productInfoPage,
  page,
}) => {
  await accountPage.doSearch("macbook");
  await searchResultsPage.selectProduct("MacBook Pro");
  await productInfoPage.fillProductQty(2);
  await productInfoPage.addToCart();
  await page.waitForTimeout(500); // static wait added as successAlert is takes some time to get visible
  expect(await productInfoPage.addToCartSuccessAlertVisible()).toBeTruthy();
});

test("TC: Add product to cart and go to Cart Page and verify page title", async ({
  accountPage,
  searchResultsPage,
  productInfoPage,
  cartPage,
  page,
}) => {
  await accountPage.doSearch("htc");
  await searchResultsPage.selectProduct("HTC Touch HD");
  await productInfoPage.fillProductQty(1);
  await productInfoPage.addToCart();
  await productInfoPage.goToCartPage();
  expect(await cartPage.getPageTitile()).toBe("Shopping Cart");
});
