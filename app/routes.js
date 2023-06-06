//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();
const checkAge = require("./assets/javascripts/models/check-age");
const clearData = require("./assets/javascripts/models/clear-data");
const checkAnswer = require("./assets/javascripts/models/submit-question");

// Add your routes here
//this works with get also - why use post here?
router.post("/age-answer", function (req, res) {
  checkAge(req, res);
});

router.post("/clear-data", function (req, res) {
  clearData(req, res);
});

router.post("/check-answer-one", function (req, res) {
  const name = 'question-one';
  const correctOption = 'Perceptible Information';
  const page = '/question-two';

  checkAnswer(req, res, name, correctOption, page);
});

router.post("/check-answer-two", function (req, res) {
  const name = 'question-two';
  const correctOption = [
    'Providing alternative text for images',
    'Ensuring keyboard accessibility',
    'Implementing responsive design for mobile devices'
  ];
  const page = '/question-three';
  
  checkAnswer(req, res, name, correctOption, page);
});

router.post("/check-answer-three", function (req, res) {
  const name = 'question-three';
  const correctOption = 'accessibility';
  const page = '/final-score';

  checkAnswer(req, res, name, correctOption, page);
});
