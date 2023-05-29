//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

function checkAge(req, res) {
  // Make a variable and give it the value from 'age'
  const age = req.session.data["age"];
  // Convert variable to number type and check whether the variable matches a condition
  if (+age >= 18) {
    // Send user to next page
    res.redirect("/rules");
  } else {
    // Send user to ineligible page
    res.redirect("/ineligible");
  }
}

module.exports = checkAge;
