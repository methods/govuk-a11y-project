// Import the function to test
const { isValidName } = require("../javascripts/testing.js");

describe("Validate name", () => {
  // Test case: valid name
  test("Valid name should return true", () => {
    const name = "John Doe";
    const result = isValidName(name);
    expect(result).toBe(true);
  });

  // Test case: invalid name with numbers
  test("Invalid name with numbers should return false", () => {
    const name = "John Doe123";
    const result = isValidName(name);
    expect(result).toBe(false);
  });

  // Test case: invalid name with special characters
  test("Invalid name with special characters should return false", () => {
    const name = "John@Doe";
    const result = isValidName(name);
    expect(result).toBe(false);
  });

  // Test case: invalid name with symbols
  test("Invalid name with symbols should return false", () => {
    const name = "John#Doe";
    const result = isValidName(name);
    expect(result).toBe(false);
  });
});
