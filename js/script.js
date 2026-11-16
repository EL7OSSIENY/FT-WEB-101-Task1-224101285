const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

const visitorForm = document.getElementById("visitor-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const formMessage = document.getElementById("form-message");

visitorForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const visitorName = nameInput.value.trim();
  const visitorEmail = emailInput.value.trim();

  if (visitorEmail === "") {
    formMessage.textContent = "Please enter your email address.";
    return;
  }

  if (visitorName === "") {
    formMessage.textContent = "Hello! Thanks for leaving your email.";
  } else {
    formMessage.textContent = "Hello, " + visitorName + "! Thanks for visiting.";
  }
});
