import removeHalfOptions from "./half-options.js";

const hintBtn = document.querySelector("#fifty-fifty");
const options = document.querySelectorAll(".govuk-radios__item");

// Add event listener to form submission and 50/50 button
hintBtn.addEventListener("click", () => removeHalfOptions(hintBtn, options));


