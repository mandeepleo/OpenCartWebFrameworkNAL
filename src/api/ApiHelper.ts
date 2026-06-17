import { APIRequestContext } from "@playwright/test";

export class ApiHelper {
  private readonly request: APIRequestContext;
  private readonly baseUrl: string;

  constructor(request: APIRequestContext, baseUrl: string) {
    this.request = request;
    this.baseUrl = baseUrl;
  }

  // GET
  public async get(endPoint: string, headers?: Record<string, string>) {
    let response = await this.request.get(`${this.baseUrl}${endPoint}`, {
      headers: headers,
    });
    console.log(await response.json()); // prints response on console

    return {
      status: response.status(),
      body: await response.json(),
      statusText: response.statusText(),
    };
  }

  // POST
  public async post(endPoint: string, payload: object, headers?: Record<string, string>) {
    let response = await this.request.post(`${this.baseUrl}${endPoint}`, {
      headers: headers,
      data: payload,
    });
    console.log(await response.json()); // prints response on console

    return {
      status: response.status(),
      body: await response.json(),
      statusText: response.statusText(),
    };
  }

  // PUT
  public async put(endPoint: string, payload: object, headers?: Record<string, string>) {
    let response = await this.request.put(`${this.baseUrl}${endPoint}`, {
      headers: headers,
      data: payload,
    });
    console.log(await response.json()); // prints response on console

    return {
      status: response.status(),
      body: await response.json(),
      statusText: response.statusText(),
    };
  }

  // DELETE
  public async delete(endPoint: string, headers?: Record<string, string>) {
    let response = await this.request.delete(`${this.baseUrl}${endPoint}`, {
      headers: headers,
    });

    return {
      status: response.status(),
      statusText: response.statusText(),
    };
  }
}
