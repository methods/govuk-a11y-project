//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();
const checkAge = require("./assets/javascripts/routes/check-age");
const clearData = require("./assets/javascripts/routes/clear-data");

// Add your routes here
router.post("/age-answer", function (req, res) {
  checkAge(req, res);
  console.log(req.session.data);
});

router.post("/clear-data", function (req, res) {
  clearData(req, res);
  console.log(req.session.data);
});