import { expect, request, test } from "@playwright/test";

const OAUTH_CONFIG = {
  tokenURL: "https://test.api.amadeus.com/v1/security/oauth2/token",
  clientId: "pUYP1Wr0MJmKmt3uSwI7fwcmYjcN7tub",
  grantType: "client_credentials",
  clientSecret: "VoRGUvlUWMsaFYsZ",
};

let accessToken: string;

// Fetching access_token
test.beforeEach("amadeous Oauth2.0 test", async ({ request }) => {
  const response = await request.post(OAUTH_CONFIG.tokenURL, {
    form: {
      grant_type: OAUTH_CONFIG.grantType,
      client_id: OAUTH_CONFIG.clientId,
      client_secret: OAUTH_CONFIG.clientSecret,
    },
  });

  expect(response.status()).toBe(200);
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  accessToken = jsonResponse.access_token;
  console.log("Fetched token is: ", accessToken);
});

test("TC: GET location data @oauth", async ({ request }) => {
  let baseURL = "https://test.api.amadeus.com";
  let endPointURL = "/v1/reference-data/locations";
  let queryParam = {
    subType: "CITY,AIRPORT",
    keyword: "MUC",
    countryCode: "DE",
  };
  console.log(`${baseURL}${endPointURL}`);

  let locationResponse = await request.get(`${baseURL}${endPointURL}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    params: queryParam,
  });
  expect(locationResponse.status()).toBe(200);
  const locationResponseJson = await locationResponse.json();
  console.log("Response:\n", locationResponseJson);
  console.log('---------------');
  console.log(locationResponseJson.data[0].type);
  
  
});
