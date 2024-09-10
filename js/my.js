// my.js
document.addEventListener('DOMContentLoaded', function() {
  // Get the current date
  const today = new Date();

  // Get current day and month
  const currentDay = today.getDate();
  const currentMonth = today.toLocaleString('default', { month: 'long' }).toLowerCase(); // e.g., 'september'

  // Get the page name from the URL
  const pageName = window.location.pathname.split('/').pop().split('.').shift().toLowerCase();

  // Convert day to a two-digit string if needed (e.g., '10')
  const dayString = currentDay.toString().padStart(2, '0');

  // Check if the current month matches the page name
  if (currentMonth === pageName) {
    // Get all the day links
    const dayLinks = document.querySelectorAll('.day-link');

    // Loop through the links to find the one matching today's date
    dayLinks.forEach(link => {
      if (link.textContent === dayString) {
        // Add the highlight class to the matching link
        link.classList.add('highlight');
      }
    });
  }
});
