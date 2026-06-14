import { test, expect } from "@playwright/test";

let AUTH_TOKEN = "Bearer 9ba9e02fbb0f6200b2bd13a64829bee29b7bfef9b58c2db4b423d108bc13689b";

test("get all user test @api @getall", async ({ request }) => {
  const response = await request.get("https://gorest.co.in/public/v2/users", {
    headers: { Authorization: AUTH_TOKEN },
  });

  const jsonResponse = await response.json();
  console.log(jsonResponse);
  console.log(response.status());
  console.log(response.statusText());
  console.log(response.ok());
});

// js object
let newUserData = {
  name: "New Test User",
  email: `user${Date.now()}@newmail.com`,
  gender: "male",
  status: "active",
};

test("create user test @api @post", async ({ request }) => {
  const response = await request.post("https://gorest.co.in/public/v2/users/", {
    headers: { Authorization: AUTH_TOKEN },
    data: newUserData,
  });

  const jsonResponse = await response.json();
  console.log(jsonResponse);
  console.log(response.status());
  console.log(response.statusText());
  console.log(response.ok());
});

let updateUserData = {
  name: "New Test User",
  email: `user${Date.now()}@newmail.com`,
  gender: "male",
  status: "active",
};

test("update user test @update", async ({ request }) => {
  const response = await request.put("https://gorest.co.in/public/v2/users/8505728", {
    headers: { Authorization: AUTH_TOKEN },
    data: updateUserData,
  });
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  console.log(response.status());
  console.log(response.statusText());
  console.log(response.ok());
});

test("delete user test @delete", async ({ request }) => {
  const response = await request.delete("https://gorest.co.in/public/v2/users/8505728", {
    headers: { Authorization: AUTH_TOKEN },
    data: updateUserData,
  });

  //   const jsonResponse = await response.json();
  //   console.log(jsonResponse);
  console.log(response.status());
  console.log(response.statusText());
  console.log(response.ok());
});
