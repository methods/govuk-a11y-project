const clearData = require("../javascripts/routes/clear-data");

describe("When Clear Data button is pressed", () => {
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
  test("clears data from session", () => {
    clearData(req, res);
    expect(req.session.data).toEqual({ "full-name": "John Smith", age: "18" }); // This is the same as the above
  });

  test("redirect to /rules path", () => {
    expect(res.redirect).toBeCalledWith("/rules");
  });
});
