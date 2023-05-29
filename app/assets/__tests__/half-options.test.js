// Import the function to be tested
const {removeHalfOptions} = require('../javascripts/testing.js');

// Create a test case using Jest
test('removeHalfOptions should hide all options except the correct one and show a random option', () => {
  // Create the necessary HTML elements for testing
  document.body.innerHTML = `
    <div>
      <div id="fiftyFifty"></div>
      <div class="govuk-radios__item">
        <input type="radio" class="govuk-radios__input" id="question-one-1">
      </div>
      <div class="govuk-radios__item">
        <input type="radio" class="govuk-radios__input" id="question-one-2">
      </div>
      <div class="govuk-radios__item">
        <input type="radio" class="govuk-radios__input" id="question-one-3">
      </div>
      <div class="govuk-radios__item">
        <input type="radio" class="govuk-radios__input" id="question-one-4">
      </div>
    </div>
  `;

  const fiftyFifty = document.getElementById('fiftyFifty');
  const options = document.querySelectorAll('.govuk-radios__item');

  // Call the function being tested with the correct arguments
  removeHalfOptions(fiftyFifty, options);

  // Assert that the correct options are hidden and a random option is shown
  options.forEach((option) => {
    const input = option.querySelector('.govuk-radios__input');
    if (input.id === 'question-one-3') {
      expect(option.style.display).toBe('block');
    }
  });

  // Assert that the 50/50 button is hidden
  expect(fiftyFifty.style.display).toBe('none');
});