import removeHalfOptions from "./half-options.js";
import onSubmit from "./submit-button.js";

const questionCheck = document.querySelector("#question-form");
const hintBtn = document.querySelector("#fifty-fifty");
const options = document.querySelectorAll(".govuk-radios__item");
const option1 = document.querySelector("#question-one-3");

// Add event listener to form submission and 50/50 button
questionCheck.addEventListener("submit", (event) =>
  onSubmit(event, isCorrectCheck)
);
hintBtn.addEventListener("click", () => removeHalfOptions(hintBtn, options));

function isCorrectCheck() {
  let isCorrect = false;
  if (option1.checked) {
    isCorrect = true;
  }
  return isCorrect;
}
