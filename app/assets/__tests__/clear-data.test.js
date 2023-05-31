const clearData = require("../javascripts/routes/clear-data");

describe("When Clear Data button is pressed", () => {
  const req = {
    session: {
      data: {
        name: "John",
        surname: "Smith",
        age: "18",
      },
    },
  };
  const res = {
    redirect: jest.fn(),
  };
  test("clears data from session", () => {
    clearData(req, res);
    expect(req.session.data).toEqual({
      name: "John",
      surname: "Smith",
      age: "18",
    });
  });


  test("redirect to /rules path", () => {
    expect(res.redirect).toBeCalledWith("/rules");
  });
});
