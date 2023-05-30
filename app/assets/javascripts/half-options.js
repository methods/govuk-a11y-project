//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

// Function to remove half of the options
function removeHalfOptions(button, options) {
  //TODO: why doesn't hidden attribute work on gov button?
  button.style.display = "none";
  options.forEach((option) => {
    const input = option.querySelector(".govuk-radios__input");
    // Hide all options except the correct one
    if (input.id !== "question-one-3") {
      option.style.display = "none";
    }else{
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

export default removeHalfOptions;