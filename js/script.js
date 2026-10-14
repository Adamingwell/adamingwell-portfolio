console.log("Deliverable 01 script initialized.");

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("submit-btn");
  const input = document.getElementById("student-email");

  if (btn && input) {
    btn.addEventListener("click", () => {
      if (!input.value.trim()) {
        alert("Please enter an email address.");
      } else {
        alert("Submission received for: " + input.value);
        input.value = "";
      }
    });
  }
});