document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth", // Display mode (you can change it)
    locale: "en", // Language (you can change it)
    events: [
      {
        title: "Event 1", // Event title
        start: "2024-02-22", // Event start date
      },
      {
        title: "Event 2", // Event title
        start: "2024-02-23", // Event start date
      },
      // Add more events as needed
    ],
  });

  calendar.render();
});
