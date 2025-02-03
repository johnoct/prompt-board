/* popup.js */
document.addEventListener("DOMContentLoaded", () => {
  const promptItems = document.querySelectorAll(".prompt-item");
  const feedback = document.getElementById("feedback");

  // Show temporary feedback messages to the user.
  function showFeedback(message) {
    feedback.textContent = message;
    feedback.style.opacity = 1;
    setTimeout(() => {
      feedback.style.opacity = 0;
    }, 2000);
  }

  // Attach click listeners to each prompt item.
  promptItems.forEach(item => {
    item.addEventListener("click", async () => {
      const promptText = item.getAttribute("data-prompt");
      try {
        // The Clipboard API requires a user gesture to work.
        await navigator.clipboard.writeText(promptText);
        showFeedback("Prompt copied to clipboard!");
      } catch (error) {
        console.error("Failed to copy prompt:", error);
        showFeedback("Failed to copy. Please try again.");
      }
    });
  });
});
