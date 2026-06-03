# Local Community Event Portal (HTML, CSS & JavaScript)

This module contains a prototype for a local community event portal built using HTML5, CSS3, and JavaScript (with jQuery). It allows users to view past and upcoming events, filter events by category, view location-based details, watch event promo videos, and register for events.

## Structure and Files
- `index.html`: The main web page structure, featuring sections for Home, Community Bulletin, Past Events, Event Promo Video, and Event Registration.
- `styles.css`: Styling for the page, containing navigation layouts, responsive grids, custom typography (Roboto font integration), forms, and print-friendly styling rules.
- `main.js`: Local storage preference handling, dynamic event loading from `events.json`, search filter functionality, form character limit counters, geolocation queries, and custom field displays.
- `events.json`: Structured mock dataset for various community events.
- `help.html`: A secondary page displaying FAQs and support information.

## How to Run
Open `index.html` in any web browser to view the application. Since the page uses standard browser APIs (Geolocation, Local Storage, and XMLHttpRequests for fetching `events.json`), it is recommended to run it using a local development server (e.g., VS Code's Live Server or Python's `http.server`) to avoid CORS issues when loading JSON files.
