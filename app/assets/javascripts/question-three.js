import askTheAudience from "./ask-audience.js";


const hintBtn = document.querySelector("#ask-the-audience");
const accordion = document.querySelector("#govuk-accordion");


hintBtn.addEventListener("click", () => askTheAudience(hintBtn, accordion));

