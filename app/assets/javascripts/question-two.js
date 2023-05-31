import onSubmit from './submit-button.js'

const questionCheck = document.querySelector("#question-form");
const hintBtn = document.querySelector("#hint");
const option1 = document.querySelector("#question-two");
const option2 = document.querySelector("#question-two-2");
const option3 = document.querySelector("#question-two-3");
const option4 = document.querySelector("#question-two-4");
const option5 = document.querySelector("#question-two-5");

// Add event listener to form submission and hint button
questionCheck.addEventListener("submit", (event)=>onSubmit(event,isCorrectCheck));
hintBtn.addEventListener("click", () => visitLink())

function isCorrectCheck() {
    let isCorrect = false;
    if (option1.checked && option3.checked && option5.checked && !option4.checked && !option2.checked) {
        isCorrect = true;
    }
    return isCorrect;
}

function visitLink() {
    hintBtn.style.display = "none";
}


