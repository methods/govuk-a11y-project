//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();
const checkAge = require("./assets/javascripts/models/check-age");
const clearData = require("./assets/javascripts/models/clear-data");
// const saveCookie = require("./assets/javascripts/models/save-cookie-settings");

// Add your routes here
//this works with get also - why use post here?
router.post("/age-answer", function (req, res) {
  checkAge(req, res);
});

router.post("/save-cookie-settings", function (req, res) {
  console.log(req.session.data['cookie-settings']);
});

router.post("/clear-data", function (req, res) {
  clearData(req, res);
});


