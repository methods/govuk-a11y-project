//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();
const checkAge = require("./assets/javascripts/routes/check-age");
const clearData = require("./assets/javascripts/routes/clear-data");
const checkScore = require("./assets/javascripts/routes/check-score");

// Add your routes here
//this works with get also - why use post here?
router.post("/age-answer", function (req, res) {
  checkAge(req, res);
});

router.get("/calculate-score", function (req, res) {
  checkScore(req, res);
});

router.post("/clear-data", function (req, res) {
  clearData(req, res);
});
