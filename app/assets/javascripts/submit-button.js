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
  } else {
    // go to the final score page
    window.location.href = "/final-score";
  }
}


export default onSubmit;