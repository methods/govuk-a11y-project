//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

// Function to handle form submission
function onSubmit(event,answerCheck) {
  // Prevent form submission
  event.preventDefault();

  //checked if the user has selected an option
  if (answerCheck() == true) {
    // go to the next question
    event.target.submit();
  } 
}

// Function to remove half of the options
function removeHalfOptions(fiftyFifty, options) {
  fiftyFifty.style.display = "none";
  options.forEach((option) => {
    const input = option.querySelector(".govuk-radios__input");
    // Hide all options except the correct one
    if (input.id !== "question-one-3") {
      option.style.display = "none";
    } else {
      option.style.display = "block";
    }
  });
  // Get a random option and show it
  let randomIndex = Math.floor(Math.random() * options.length);
  while (randomIndex === 2) {
    randomIndex = Math.floor(Math.random() * options.length);
  }
  options[randomIndex].style.display = "block";
}

// Function to handle form submission - validate name
function isValidName(name) {
  // Allow only alphabets, hyphens, and spaces
  const regex = /^[A-Za-z\s-]+$/;
  return regex.test(name);
}

// Function to handle form submission - validate date of birth
function isValidDOB(day, month, year) {
  // Check if the date is a valid date
  const regex =
    /^(0?[1-9]|[12][0-9]|3[01])[- /.](0?[1-9]|1[012])[- /.](19|20)\d\d$/;
  return regex.test(`${day}-${month}-${year}`);
}

// Function to handle form submission - show error
function showError(field, message) {
  const errorId = `${field.id}-error`;
  const errorElement = document.getElementById(errorId);

  if (errorElement) {
    errorElement.textContent = message;
  } else {
    const errorElement = document.createElement("div");
    errorElement.id = errorId;
    errorElement.classList.add("govuk-error-message");
    errorElement.textContent = message;
    field.parentNode.appendChild(errorElement);
  }

  field.classList.add("govuk-input--error");
}

// Export the function for testing
module.exports = { removeHalfOptions, onSubmit, isValidName, isValidDOB, showError };
