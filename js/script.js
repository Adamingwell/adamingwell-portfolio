// Software Systems 152-110-100: Interactive Client Script
document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submit-btn");
  const emailInput = document.getElementById("student-email");
  const statusMsg = document.getElementById("status-message");

  if (submitBtn && emailInput && statusMsg) {
    submitBtn.addEventListener("click", () => {
      const emailValue = emailInput.value.trim();

      if (emailValue === "" || !emailValue.includes("@")) {
        statusMsg.style.color = "#f472b6"; // magenta warning
        statusMsg.textContent = "Please provide a valid email address.";
      } else {
        statusMsg.style.color = "#34d399"; // emerald confirmation
        statusMsg.textContent = `Subscription confirmed for: ${emailValue}`;
        emailInput.value = "";
      }
    });
  }
});