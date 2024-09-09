// Armenian month names mapped to English month names
const armenianMonths = {
  "հունվար": "january",
  "փետրվար": "february",
  "մարտ": "march",
  "ապրիլ": "april",
  "մայիս": "may",
  "հունիս": "june",
  "հուլիս": "july",
  "օգոստոս": "august",
  "սեպտեմբեր": "september",
  "հոկտեմբեր": "october",
  "նոյեմբեր": "november",
  "դեկտեմբեր": "december"
};

// Get the current date
const currentDate = new Date();
const currentDay = currentDate.getDate();
const formattedDay = currentDay < 10 ? '0' + currentDay : currentDay; // Format day as "dd"
const currentMonthIndex = currentDate.getMonth(); // Get the current month index (0-based)
const monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
const currentMonth = monthNames[currentMonthIndex]; // Get the current month in English
console.log(formattedDay);
// Get the month name from the <h1> tag (in Armenian)
const pageMonthArmenian = document.querySelector('h1#name').textContent.toLowerCase().trim(); // Get the Armenian month

// Compare the Armenian month name with the current month in English using the mapping
if (armenianMonths[pageMonthArmenian] === currentMonth) {
  // Highlight today's date in the list of day links
  const dayLinks = document.querySelectorAll('a.day-link');
let dayLink = null;

// Loop through all day-links to find the one with matching text content
dayLinks.forEach(link => {
  if (link.textContent.trim() === formattedDay) {
    dayLink = link;
  }
});

if (dayLink) {
  dayLink.classList.add('highlight');
} 
}
