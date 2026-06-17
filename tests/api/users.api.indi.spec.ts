import { test, expect } from "../../src/fixtures/apifixtures";
import { DataGenerator } from "../../src/utils/DataGenerator";

const TOKEN = process.env.API_TOKEN!;
let HEADERS = { Authorization: `Bearer ${TOKEN}` };

// C - POST
// R - POST, GET
// U - POST, PUT
// D - POST, DELETE

// Common createNewUser function to be used by following tests
async function createNewUser(apiHelper: any) {
  let newUserData = {
    name: "New Test User",
    email: `${DataGenerator.generateEmail()}`,
    gender: "male",
    status: "active",
  };
  let response = await apiHelper.post("/public/v2/users", newUserData, HEADERS);
  return response.body;
}

// Below are independent POST, UPDATE and DELETE tests which invoke the above (common) createNewUser() unction
// These tests are not dependent on each other and can be executed in parallel (fullyParellel: true)

test("POST - Create User", async ({ apiHelper }) => {
  // create a user
  let newUserResponse = await createNewUser(apiHelper);
  // GET the user
  let response = await apiHelper.get(`/public/v2/users/${newUserResponse.id}`, HEADERS);
  expect(response.status).toBe(200);
  expect(response.body.name).toBe(newUserResponse.name);
});

test("PUT - Update User", async ({ apiHelper }) => {
  let updateUserData = {
    name: "Updated Name",
    email: `${DataGenerator.generateEmail()}`,
    gender: "male",
    status: "active",
  };
  // create a user
  let newUserResponse = await createNewUser(apiHelper);

  // PUT the user
  let response = await apiHelper.put(`/public/v2/users/${newUserResponse.id}`, updateUserData, HEADERS);
  expect(response.status).toBe(200);
  expect(response.statusText).toBe("OK");
  expect(response.body.email).toBe(updateUserData.email);
});

test("PATCH - Update User", async ({ apiHelper }) => {
  let patchUserData = {
    email: `${DataGenerator.generateEmail()}`,
    status: "inactive",
  };
  // create a user
  let newUserResponse = await createNewUser(apiHelper);

  // PATCH the user
  let response = await apiHelper.patch(`/public/v2/users/${newUserResponse.id}`, patchUserData, HEADERS);
  expect(response.status).toBe(200);
  expect(response.statusText).toBe("OK");
  expect(response.body.email).toBe(patchUserData.email);
});

test("DELETE - Delete user", async ({ apiHelper }) => {
  // create a user
  let newUserResponse = await createNewUser(apiHelper);
  // DELETE the user
  let response = await apiHelper.delete(`/public/v2/users/${newUserResponse.id}`, HEADERS);
  expect(response.status).toBe(204);
  expect(response.statusText).toBe("No Content");
});
