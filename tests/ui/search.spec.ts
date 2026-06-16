import { test, expect } from "../../src/fixtures/pagefixtures";
import { CsvHelper } from "../../src/utils/CsvHelper";

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goToLoginPage();
  await loginPage.doLogin(process.env.USERNAME!, process.env.PASSWORD!);
});

const productData: Record<string, string>[] = CsvHelper.readCsv("src/data/product.csv");
for (const row of productData) {
  test(`TC: Verify Search with Product: ${row.searchkey} : ${row.productname}`, async ({
    accountPage,
    searchResultsPage,
    page
  }) => {
    await accountPage.doSearch(row.searchkey);
    await page.waitForTimeout(2_000); // static wait added as sometimes search results takes some time to load
    expect(await searchResultsPage.getSearchResultCount()).toBe(Number(row.resultcount));
  });
}

for (const row of productData) {
  test(`TC: Verify Product Details Page Landing ${row.searchkey} : ${row.productname}`, async ({
    accountPage,
    searchResultsPage,
    page,
  }) => {
    console.log("product: ", row.productname);

    await accountPage.doSearch(row.searchkey);
    await searchResultsPage.selectProduct(row.productname);
    expect(await page.title()).toBe(row.productname);
  });
}
