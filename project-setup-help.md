## Create new project

**Create new project folder and open in vscode**

## Install all dependencies of a Node.js project and initializes a new Node:

`npm init -y` [this will create package.json]
In the package.json, change the "type" to "module"

## Install TypeScript

(locally install latest LTS version): `npm install typescript --save-dev`

## Install Playwright

`npm init playwright@latest`

copy tsconfig.json from another project

## Install Allure Reports dependencies

`npm install --save-dev allure-playwright allure-commandline`

**Add the following module in "reporter" section in the playwright.config.ts:**
reporter: [
["html", { outputFolder: "reports/html-report" }],
["allure-playwright", { outputFolder: "allure-results" }],
]

**Add the following in the "scripts" section of the package.json:**
"allure:clean": "rm -rf allure-results allure-report",
"allure:generate": "npx allure generate allure-results --clean -o allure-report",
"allure:open": "npx allure open allure-report",
"allure:report": "npm run allure:generate && npm run allure:open"

## Generate allure report

**use following commands to generate allure report:**
`npm run allure:report`

## Install and configure dotenv

`npm install dotenv`

Create .env.qa , .env.stage and .env file in the "config" (or any other dir) and add your environment variables in the format:
KEY = value

In the playwright.config.ts file, add the following code at the top:

import dotenv from "dotenv";
if (!process.env.ENV) {
dotenv.config({ path: `config/.env` });
} else {
dotenv.config({ path: `config/.env.${process.env.ENV}` });
}

Use process.env.KEY to access the environment variables in your tests or configuration files.

Execute tests using the command:
ENV=qa npx playwright test or ENV=stage npx playwright test

## Import test data from CSV file/s

npm install csv-parse
create csvhelper.ts util file with following code:

    import fs from "fs";
    import { parse } from "csv-parse/sync";

    export class CsvHelper {
        static readCsv(filepath: string): Record<string, string>[] {
            return parse(fs.readFileSync(filepath, "utf-8"), {
                columns: true,
                skip_empty_lines: true,
                trim: true,
            }) as Record<string, string>[];
        }
    }

Directly use the static method - readCsv(csv-path) to read CSV data records in the spec.ts file

## Configure Github Actions with the project

Execute command: `npm init playwright@latest`
When prompt asks "Add a GitHub Actions workflow?" choose Yes. This will add .github folder in the project with playwright.yml file.
Add following flags in the playwright.yml file:
    - name: Install dependencies
        run: npm ci
      - name: Install Playwright Browsers
        run: npx playwright install --with-deps
      - name: Run Playwright tests
        run: npx playwright test

## Configure Jenkins
Install Jenkins

Configure Jenkins job with below test steps:

Step #1
cd /Users/mandeep/Developer/Projects/OpenCartWebFrameworkNAL
npm ci

Step #2
cd /Users/mandeep/Developer/Projects/OpenCartWebFrameworkNAL
npx playwright install --with-deps

Step #3
cd /Users/mandeep/Developer/Projects/OpenCartWebFrameworkNAL
npx playwright test tests/example.spec.ts

In the Post-build actions, add "Publish HTML reports" and provide Playwright html-report folder absolute path

### For Playwright Reports display in browser:
Install HTML Publisher plugin
Run below script in Jenkins > Manage Jenkins > Script Console > Click Run button twice:

`System.setProperty("hudson.model.DirectoryBrowserSupport.CSP", "default-src 'self' 'unsafe-inline' 'unsafe-eval'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;")`

