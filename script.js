document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Stops the page from reloading and jumping to the top!

      let isValid = true;
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const errorRegion = document.getElementById("form-errors"); // Optional ARIA live region

      // Simple validation check
      if (!nameInput.value.trim() || !emailInput.value.trim()) {
        isValid = false;
        if (errorRegion) {
          errorRegion.textContent = "Please fill out all required fields before submitting.";
        } else {
          alert("Please fill out all required fields.");
        }
      } else {
        if (errorRegion) {
          errorRegion.textContent = "";
        }
        alert("Thank you! Your message has been sent successfully.");
        form.reset();
      }
    });
  }
});