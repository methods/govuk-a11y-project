const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();
const request = require("supertest");

describe("POST /clear-data", () => {
  it("should clear session data and redirect to /info-page", async () => {
    const response = await request(router).post("/clear-data").send();
    expect(response.status).toBe(302);
    expect(response.header.location).toBe("/info-page");
    expect(response.body).toEqual({});
    // You can also verify if the session data is cleared
    expect(req.session.data).toEqual({});
  });
});
