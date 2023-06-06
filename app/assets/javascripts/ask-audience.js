
function askTheAudience(button, element) {
    const spanBtns = document.querySelectorAll(".govuk-accordion__section-toggle");
    const spanArray = Array.from(spanBtns);
    button.style.display = "none";
    element.hidden = false;
    spanArray.forEach(btn => btn.style.display = "none");
}

export default askTheAudience;