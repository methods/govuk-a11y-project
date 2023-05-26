const request = require("supertest");
const router = require("../../routes");
const express = require("express");

const app = express();
app.use(router);

describe("POST /clear-data", () => {
  describe("when Start Again button is clicked", () => {
    it("should clear session data", async () => {
      const response = await request(app).post("/clear-data").send();
      // expect(response).toBe("/info-page");
      // expect(response.body).toEqual({});
      // // You can also verify if the session data is cleared
      expect(response.session).toEqual({});
    });
  });
});

// describe("POST /clear-data", () => {

//   describe("when passed a username and password", () => {
//     test("should respond with a 200 status code", async () => {
//       const response = await request(app).post("/clear-data").send();
//       expect(response.statusCode).toBe(200)
//     })
//   })

// })
