// Import the function to test
const { isValidDOB } = require("../javascripts/testing.js");

describe("Validate date of birth", () => {
  // Test case: valid date of birth
  test("Valid date of birth should return true", () => {
    const day = "01";
    const month = "01";
    const year = "1990";
    const result = isValidDOB(day, month, year);
    expect(result).toBe(true);
  });

  // Test case: invalid date of birth with incorrect format
  test("Invalid date of birth with incorrect format should return false", () => {
    const day = "1";
    const month = "1";
    const year = "90";
    const result = isValidDOB(day, month, year);
    expect(result).toBe(false);
  });

  // Test case: invalid date of birth with out-of-range year
  test("Invalid date of birth with out-of-range year should return false", () => {
    const day = "01";
    const month = "01";
    const year = "3000";
    const result = isValidDOB(day, month, year);
    expect(result).toBe(false);
  });

  // Test case: invalid date of birth with is not a date
  test("Invalid date of birth with is not a date should return false", () => {
    const day = "a";
    const month = "b";
    const year = "c";
    const result = isValidDOB(day, month, year);
    expect(result).toBe(false);
  });
});
