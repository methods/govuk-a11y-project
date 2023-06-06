const checkAge = require("../javascripts/models/check-age");

describe("Redirects depending on age", () => {
  test("Redirects to check-details if age is 18 or over", () => {
    const req = {
      session: {
        data: {
          'dob-day': '27',
          'dob-month': '3',
          'dob-year': '1980'
        }
      }
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
          'dob-day': '27',
          'dob-month': '3',
          'dob-year': '2017'
        }
      }
    };
    const res = {
      redirect: jest.fn(),
    };
    checkAge(req, res);

    expect(res.redirect).toHaveBeenCalledWith("/ineligible");
  });
});
