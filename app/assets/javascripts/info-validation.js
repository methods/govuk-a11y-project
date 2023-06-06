const form = document.querySelector(".form");
const firstNameField = form.elements.name;
const surnameField = form.elements.surname;
const dobDayField = form.elements["dob-day"];
const dobMonthField = form.elements["dob-month"];
const dobYearField = form.elements["dob-year"];
const ageField = document.querySelector("#dob");

form.addEventListener("submit", (e) => validate(e));


function validate(event) {
  firstNameField.value = firstNameField.value.charAt(0).toUpperCase() + firstNameField.value.slice(1);
  surnameField.value = surnameField.value.charAt(0).toUpperCase() + surnameField.value.slice(1);
  const firstNameValue = firstNameField.value.trim();
  const surnameValue = surnameField.value.trim();
  const dobDayValue = dobDayField.value.trim();
  const dobMonthValue = dobMonthField.value.trim();
  const dobYearValue = dobYearField.value.trim();
  // Validate First Name
  if (!isValidName(firstNameValue)) {
    event.preventDefault();
    showError(firstNameField, "Enter a valid first name");
  }

  // Validate Surname
  if (!isValidName(surnameValue)) {
    event.preventDefault();
    showError(surnameField, "Enter a valid surname");
  }

  // Validate Date of Birth
  if (dobDayValue === "" || dobMonthValue === "" || dobYearValue === "") {
    event.preventDefault();
    showError(ageField, "Enter your date of birth");
    showError(dobDayField);
    showError(dobMonthField);
    showError(dobYearField);
  } else if (!isValidDOB(dobDayValue, dobMonthValue, dobYearValue)) {
    event.preventDefault();
    showError(ageField, "Enter a valid date of birth");
    showError(dobDayField);
    showError(dobMonthField);
    showError(dobYearField);
  }
}

function showError(field, message) {
  const errorId = `${field.id}-error`;
  const errorElement = document.getElementById(errorId);

  if (errorElement) {
    errorElement.textContent = message;
  } else {
    const errorElement = document.createElement("div");
    errorElement.id = errorId;
    errorElement.classList.add("govuk-error-message");
    errorElement.textContent = message;
    field.parentNode.appendChild(errorElement);
  }

  field.classList.add("govuk-input--error");
}

function isValidName(name) {
  // Allow only alphabets, hyphens, and spaces
  const regex = /^[A-Za-z\s-]+$/;
  return regex.test(name);
}

function isValidDOB(day, month, year) {
  // Check if the date is a valid date
  const regex =
    /^(0?[1-9]|[12][0-9]|3[01])[- /.](0?[1-9]|1[012])[- /.](19|20)\d\d$/;
  return regex.test(`${day}-${month}-${year}`);
}
