//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();

// Add your routes here
router.post("/age-answer", function (req, res) {
  // Make a variable and give it the value from 'age'
  const age = req.session.data["age"];
  // Convert variable to number type and check whether the variable matches a condition
  if (+age >= 18) {
    // Send user to next page
    res.redirect("/question-one");
  } else {
    // Send user to ineligible page
    res.redirect("/ineligible");
  }
});

router.post("/clear-data", function (req, res) {
  req.session.data = {};
  res.redirect("/info-page");
});
