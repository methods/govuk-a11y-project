const checkAge = require("../javascripts/routes/check-age");

describe("Redirects depending on age", () => {
  test("Redirects to rules if age is 18 or over", () => {
    const req = {
      session: {
        data: {
          age: "18",
        },
      },
    };
    const res = {
      redirect: jest.fn(),
    };
    checkAge(req, res);

    expect(res.redirect).toHaveBeenCalledWith("/check-details");
  });

  test("Redirects to ineligible if age is under 18", () => {
    const req = {
      session: {
        data: {
          age: "17",
        },
      },
    };
    const res = {
      redirect: jest.fn(),
    };
    checkAge(req, res);

    expect(res.redirect).toHaveBeenCalledWith("/ineligible");
  });
});
