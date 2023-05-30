//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

// Function to handle form submission
function onSubmit(event,answer) {
  // Prevent form submission
  event.preventDefault();
  //checked if the user has selected an option
  if (answer.checked) {
    // go to the next question
    event.target.submit();
  } 
  // Check this error message with Nathan console.error Error: Not implemented: navigation (except hash changes)
  // else {
  //   // go to the final score page
  //   window.location.href = "/final-score";
  // }
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

// Export the function for testing
module.exports = { removeHalfOptions, onSubmit };
