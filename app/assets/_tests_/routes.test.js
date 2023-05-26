const request = require("supertest");
const router = require("../../routes");
// const govukPrototypeKit = require("govuk-prototype-kit");
// const router = govukPrototypeKit.requests.setupRouter();


// describe("POST /clear-data", () => {
//   it("should clear session data and redirect to /info-page", async () => {
//     const response = await request(router).post("/clear-data").send({});
//     // console.log(response);
//     // expect(response.status).toBe(302);
//     expect(response.header.location).toBe("/info-page");
//     expect(response.body).toEqual({});
//     // You can also verify if the session data is cleared
//     expect(req.session.data).toEqual({});
//   });
// });

describe("POST /clear-data", () => {

  describe("when passed a username and password", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(router).post("/clear-data").send({});
      expect(response.statusCode).toBe(200)
    })
  })

})
