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

document.addEventListener('DOMContentLoaded', function () {
  // Get all the necessary elements
  const searchInput = document.getElementById('search-input');
  const categoryTabs = document.querySelectorAll('.tab');
  const promptCards = document.querySelectorAll('.prompt-card');
  const categorySections = document.querySelectorAll('.category-section');
  const copyButtons = document.querySelectorAll('.copy-btn');
  const toast = document.getElementById('feedback');

  // Filter functionality
  function filterPrompts(category) {
    // Show all sections first
    categorySections.forEach(section => section.style.display = 'block');

    if (category === 'all') {
      promptCards.forEach(card => card.style.display = 'flex');
    } else {
      promptCards.forEach(card => {
        if (card.dataset.category === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });

      // Hide empty sections
      categorySections.forEach(section => {
        const visibleCards = section.querySelectorAll('.prompt-card[style="display: flex;"]');
        if (visibleCards.length === 0) {
          section.style.display = 'none';
        }
      });
    }
  }

  // Tab click handlers
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      categoryTabs.forEach(t => t.classList.remove('active'));
      // Add active class to clicked tab
      tab.classList.add('active');
      // Filter prompts based on category
      filterPrompts(tab.dataset.category);
    });
  });

  // Search functionality
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    promptCards.forEach(card => {
      const promptText = card.querySelector('p').textContent.toLowerCase();
      const titleText = card.querySelector('h3').textContent.toLowerCase();

      if (promptText.includes(searchTerm) || titleText.includes(searchTerm)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });

    // Hide empty sections
    categorySections.forEach(section => {
      const visibleCards = section.querySelectorAll('.prompt-card[style="display: flex;"]');
      if (visibleCards.length === 0) {
        section.style.display = 'none';
      } else {
        section.style.display = 'block';
      }
    });
  });

  // Copy functionality
  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.prompt-card');
      const promptTemplate = card.querySelector('.prompt-template').dataset.prompt;
      const topicInput = card.querySelector('.topic-input');
      const topic = topicInput.value.trim();

      // Replace [concept], [topic], [skill/concept], etc. with the user's input
      const finalPrompt = promptTemplate.replace(/\[(.*?)\]/g, topic || '$1');

      navigator.clipboard.writeText(finalPrompt).then(() => {
        // Show toast
        toast.classList.add('show');
        // Hide toast after 2 seconds
        setTimeout(() => {
          toast.classList.remove('show');
        }, 2000);
      });
    });
  });

  // Optional: Auto-copy when pressing Enter in topic input
  document.querySelectorAll('.topic-input').forEach(input => {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const card = input.closest('.prompt-card');
        const copyBtn = card.querySelector('.copy-btn');
        copyBtn.click();
      }
    });
  });
});
