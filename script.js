// ==============================
// 🎉 Part 1: Event Handling
// ==============================
const msgBtn = document.getElementById("msg-btn");
const msgOutput = document.getElementById("msg-output");

msgBtn.addEventListener("click", () => {
  msgOutput.textContent = "Button clicked! 🎉 JavaScript event works!";
});

// ==============================
// 🎮 Part 2: Interactive Elements
// ==============================

// 1) Light/Dark Mode Toggle
const themeBtn = document.getElementById("toggle-theme");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 2) Counter Game
let counter = 0;
const counterValue = document.getElementById("counter-value");
document.getElementById("inc-btn").addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});
document.getElementById("dec-btn").addEventListener("click", () => {
  counter--;
  counterValue.textContent = counter;
});
document.getElementById("reset-btn").addEventListener("click", () => {
  counter = 0;
  counterValue.textContent = counter;
});

// ==============================
// 📋✅ Part 3: Form Validation
// ==============================
const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const formSuccess = document.getElementById("form-success");

// Helper function to check email pattern
function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// Form submit handler
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent actual submission
  let isValid = true;

  // Validate name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate email
  if (!isValidEmail(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate password
  if (passwordInput.value.trim().length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // Show success if valid
  if (isValid) {
    formSuccess.textContent = "✅ Form submitted successfully!";
    form.reset();
  } else {
    formSuccess.textContent = "";
  }
});
