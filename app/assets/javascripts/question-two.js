import onSubmit from './submit-button.js'

const questionCheck = document.querySelector("#question-form");
const hintBtn = document.querySelector("#hint");
const options = document.querySelectorAll(".govuk-checkboxes__item");
const option1 = document.querySelector("#question-two");
const option2 = document.querySelector("#question-two-3");
const option3 = document.querySelector("#question-two-5");

let isCorrectCheck;

function answerCheck() {
  console.log(options);
}


// Add event listener to form submission and 50/50 button
questionCheck.addEventListener("submit", (event)=>onSubmit(event,answerCheck));

