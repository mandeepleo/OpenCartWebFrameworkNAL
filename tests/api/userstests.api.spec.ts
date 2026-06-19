import { test, expect } from "../../src/fixtures/apifixtures";

const TOKEN = process.env.API_TOKEN!;
let AUTH_HEADER = { Authorization: `Bearer ${TOKEN}` };
let newUserData = {
  name: "New Test User",
  email: `user${Date.now()}@newmail.com`,
  gender: "male",
  status: "active",
};
let updatedUserData = {
  name: "Updated User",
  email: `user${Date.now()}@newmail.com`,
  gender: "male",
  status: "inactive",
};
let userId: number;

// using test.describe.serial to run grouped tests in serial mode
// this will override fullyParaller: true configured in playwright.conifg.ts

// test.describe.serial or parallel methods are deprecated!!!
// it is better to make the tests isolated so they can be run independently.
// Playwright official documentation: https://playwright.dev/docs/api/class-test#deprecated

test.describe.serial("gorest.co.in api CRUD tests", async () => {
  test("GET ALL - Get all users", async ({ apiHelper }) => {
    let response = await apiHelper.get("public/v2/users/", AUTH_HEADER);
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
  });

  test("POST - Create User", async ({ apiHelper }) => {
    let response = await apiHelper.post("public/v2/users/", newUserData, AUTH_HEADER);
    userId = response.body.id; //  updating global userId variable
    console.log("Created user with ID:", userId);
    expect(response.status).toBe(201);
    expect(response.statusText).toBe("Created");
    expect(response.body.email).toBe(newUserData.email);
  });

  test("GET - Retrieve created user", async ({ apiHelper }) => {
    let response = await apiHelper.get(`public/v2/users/${userId}`, AUTH_HEADER);
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
  });

  test("PUT - Update User", async ({ apiHelper }) => {
    let response = await apiHelper.put(`public/v2/users/${userId}`, updatedUserData, AUTH_HEADER);
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.body.email).toBe(newUserData.email);
  });

  test("DELETE - Delete user", async ({ apiHelper }) => {
    let response = await apiHelper.delete(`public/v2/users/${userId}`, AUTH_HEADER);
    expect(response.status).toBe(204);
    expect(response.statusText).toBe("No Content");
  });
});
