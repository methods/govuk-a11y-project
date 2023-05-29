const clearData = require("../javascripts/routes/clear-data");

test("clears data from session", () => {
  const req = {
    session: {
      data: {
        "full-name": "John Smith",
        age: "18",
      },
    },
  };
  const res = {
    redirect: jest.fn(),
  };
  clearData(req, res);
  expect(req.session.data).toEqual({});
});
