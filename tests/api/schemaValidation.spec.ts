import { test, expect } from "@playwright/test";
import Ajv from "ajv";
import { JsonHelper } from "../../src/utils/JsonHelper";

// import json payload and schema from external json file

const payload = JsonHelper.readJson("src/data/newBooking.json");
const schema = JsonHelper.readJson("src/data/newBookingSchema.json");

// this test create a new user and validates the response schema
test("TC: Schema Validation @schema", async ({ request }) => {
  const bookingResponse = await request.post("https://restful-booker.herokuapp.com/booking", {
    headers: { "Content-Type": "application/json" },
    data: payload,
  });

  const responseJson = await bookingResponse.json();
  console.log(responseJson);
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const result = validate(responseJson); // validating responseJson against schema
  // console.log(result);
  // validating schema of the POST response
  expect(result, JSON.stringify(validate.errors)).toBeTruthy(); //JSON.stringify(validate.errors) is optional; it prints the error text if validation fails
});
