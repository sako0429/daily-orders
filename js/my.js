// Get the current day and format it as "dd"
const currentDay = new Date().getDate();
const formattedDay = currentDay < 10 ? '0' + currentDay : currentDay;

// Get the current month and convert it to lowercase for comparison
const monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
const currentMonth = monthNames[new Date().getMonth()];

// Get the current page's filename
const currentPage = window.location.pathname.split('/').pop().split('.')[0].toLowerCase();

// Check if the current page matches the current month
if (currentPage === currentMonth) {
  // Find the corresponding day-link and add the 'highlight' class
  const dayLink = document.querySelector(`a.day-link[href*="${formattedDay}"]`);
  if (dayLink) {
    dayLink.classList.add('highlight');
  }
}
