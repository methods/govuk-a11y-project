import removeHalfOptions from './half-options.js'
import onSubmit from './submit-button.js'

const questionCheck = document.querySelector("#question-form");
const fiftyFiftyBtn = document.querySelector("#fifty-fifty");
const options = document.querySelectorAll(".govuk-radios__item");
const answer = document.querySelector("#question-one-3");

// Add event listener to form submission and 50/50 button
questionCheck.addEventListener("submit", (event)=>onSubmit(event,answer));
fiftyFiftyBtn.addEventListener("click", ()=>removeHalfOptions(fiftyFiftyBtn, options));


