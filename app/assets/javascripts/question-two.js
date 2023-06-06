const hintBtn = document.querySelector("#hint");

// Add event listener to form submission and hint button

hintBtn.addEventListener("click", () => visitLink());

function visitLink() {
  hintBtn.style.display = "none";
}
