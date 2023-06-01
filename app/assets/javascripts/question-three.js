import askTheAudience from "./ask-audience.js";
import onSubmit from "./submit-button.js";

const questionCheck = document.querySelector(".question-form");
const hintBtn = document.querySelector("#ask-the-audience");
const accordion = document.querySelector("#govuk-accordion");
const option1 = document.querySelector("#question-three-2")

questionCheck.addEventListener("submit", (event) =>
  onSubmit(event, isCorrectCheck)
);
hintBtn.addEventListener("click", () => askTheAudience(hintBtn, accordion));

function isCorrectCheck() {
    let isCorrect = false;
    if (option1.checked) {
      isCorrect = true;
    }
    return isCorrect;
  }