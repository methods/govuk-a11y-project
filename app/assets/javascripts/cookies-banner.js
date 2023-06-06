const container = document.querySelector(".govuk-cookie-banner");

const cookieMessage = document.querySelectorAll(
  "div.govuk-cookie-banner__message"
);
const cookieMessageArray = Array.from(cookieMessage);

const cookieBtns = document.querySelectorAll(
  "div.govuk-button-group > button"
);
const btnsArray = Array.from(cookieBtns);

btnsArray.map((btn, key) => {
  btn.setAttribute("id", "cookie-btn-" + key);
});
cookieMessageArray.map((btn, key) => {
  btn.setAttribute("id", "cookie-message-" + key);
});

const cookieBanner = document.getElementById("cookie-message-0");
const acceptMessage = document.getElementById("cookie-message-1");
const rejectMessage = document.getElementById("cookie-message-2");

const acceptButton = document.getElementById("cookie-btn-0");
const rejectButton = document.getElementById("cookie-btn-1");
const hideAcceptButton = document.getElementById("cookie-btn-2");
const hideRejectButton = document.getElementById("cookie-btn-3");


function acceptCookie() {
  cookieBanner.setAttribute("hidden", "true");
  acceptMessage.removeAttribute("hidden");
}

function rejectCookie() {
  cookieBanner.setAttribute("hidden", "true");
  rejectMessage.removeAttribute("hidden");
}

function removeBanner() {
  container.setAttribute("hidden", "true");
}

acceptButton.addEventListener("click", acceptCookie);
rejectButton.addEventListener("click", rejectCookie);
hideAcceptButton.addEventListener("click", removeBanner);
hideRejectButton.addEventListener("click", removeBanner);