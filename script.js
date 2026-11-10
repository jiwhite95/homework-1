document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevents page reload

    // Grab inputs matching your exact about.html IDs
    const nameInput = document.getElementById("full-name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    // Grab ARIA live error/status spans
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");
    const formStatus = document.getElementById("form-status");

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formStatus.textContent = "";

    let isValid = true;

    // Validate Full Name
    if (!nameInput.value.trim()) {
      nameError.textContent = "Please enter your full name.";
      isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      emailError.textContent = "Please enter your email address.";
      isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      messageError.textContent = "Please enter a message before sending.";
      isValid = false;
    }

    // Show confirmation if everything is valid
    if (isValid) {
      formStatus.textContent = "Thank you! Your message has been sent.";
      form.reset();
    }
  });
});