//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

function checkAge(req, res) {
  const dobDay = req.session.data['dob-day'];
  const dobMonth = req.session.data['dob-month'];
  const dobYear = req.session.data['dob-year'];
  const dobInput = `${dobMonth}-${dobDay}-${dobYear}`; // Rearrange the format to MM-DD-YYYY
  
  const dob = new Date(dobInput);
  const currentDate = new Date();
  
  const ageDiffMs = currentDate - dob; // Calculate the age difference in milliseconds
  const ageDate = new Date(ageDiffMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  //Saves age in session data object
  req.session.data['age'] = age;

  // Convert variable to number type and check whether the variable matches a condition
  if (+age >= 18) {
    // Send user to next page
    res.redirect("/check-details");
  } else {
    // Send user to ineligible page
    res.redirect("/ineligible");
  }
}

module.exports = checkAge;
