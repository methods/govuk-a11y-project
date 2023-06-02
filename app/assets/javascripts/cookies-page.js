const successMessage = document.querySelector("#message-success");
const cookieForm = document.querySelector("#cookie-form");
const saveBtn = document.querySelector("#save-cookie-settings");

function showMessage() {
    successMessage.removeAttribute("hidden");
    cookieForm.setAttribute("hidden", "true");
}

saveBtn.addEventListener("click", showMessage);