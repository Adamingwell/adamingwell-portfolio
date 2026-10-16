document.addEventListener("DOMContentLoaded", () => {
  // 1. querySelector() & Variable Declarations (const / let)
  const submitButton = document.querySelector("#submit-btn");
  const emailField = document.querySelector("#student-email");
  const statusOutput = document.querySelector("#status-message");
  let submissionCount = 0;

  // 2. Email Validation Helper Function
  function isValidEmail(address) {
    return address.includes("@") && address.includes(".");
  }

  // 3. Content Modification Handler Function
  function handleSubscription() {
    const rawInput = emailField.value.trim();

    // 4. Conditional Statement (if / else)
    if (rawInput === "" || !isValidEmail(rawInput)) {
      // Modifying DOM content & styling for invalid state
      statusOutput.textContent = "Error: Please provide a valid email containing an '@' and domain.";
      statusOutput.style.color = "#f472b6"; // Fuchsia warning
    } else {
      submissionCount += 1;
      
      // Modifying DOM content dynamically for valid state
      statusOutput.textContent = `Subscription confirmed (#${submissionCount}): ${rawInput} is now registered.`;
      statusOutput.style.color = "#34d399"; // Emerald success
      
      // Clear input field
      emailField.value = "";
    }
  }

  // 5. Click Event Listener Attached to Button with an ID
  if (submitButton && emailField && statusOutput) {
    submitButton.addEventListener("click", handleSubscription);
  }
});