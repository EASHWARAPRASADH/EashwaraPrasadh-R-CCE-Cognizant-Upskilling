# SQL Database Module

This module contains a set of 25 database query exercises based on a schema for a local community event portal. The exercises demonstrate standard relational database design, table relationships, aggregation, filtering, subqueries, and table joins.

## Database Schema
The database consists of the following tables (defined and populated in `setup.sql`):
1. **Users**: Stores user information such as name, email, city, and registration date.
2. **Events**: Details community events, including the title, description, city, start/end dates, status ('upcoming', 'completed', 'cancelled'), and the organizer.
3. **Sessions**: Details specific event sessions with titles, speakers, and start/end times.
4. **Registrations**: Tracks which users have registered for which events, along with their registration dates.
5. **Feedback**: Contains ratings (1 to 5) and textual feedback from users on events.
6. **Resources**: Stores URLs for documents, images, and links related to events.

## Exercises List
- `setup.sql`: Creates the schema tables and inserts a sample dataset of users, events, sessions, registrations, feedback, and resources.
- `exercise_01.sql` to `exercise_25.sql`: Solutions to specific database queries, ranging from basic joins to advanced groupings:
  1. *User Upcoming Events*: Show a list of all upcoming events a user is registered for in their city, sorted by date.
  2. *Top Rated Events*: Identify events with the highest average rating (min 10 feedback submissions).
  3. *Unused Event Resources*: Find events that have uploaded resources but no feedback.
  4. *Active Event Organizers*: List users who have organized at least 3 events.
  5. *Multi-Session Speakers*: Find speakers who are scheduled to present in multiple sessions.
  6. *User Event Attendance History*: Show all events a user has registered for in the past, including attendance status.
  7. *Monthly Registrations Count*: Count registrations per month.
  8. *Average Feedback Rating per Organizer*: Calculate the average feedback rating for all events organized by each user.
  9. *Events with Overlapping Sessions*: Detect events that have sessions with overlapping time slots.
  10. *Most Popular Event Categories*: List categories with the highest number of registrations.
  11. *Users with No Event Activity*: Find users who have neither organized nor registered for any events.
  12. *Total Revenue per Paid Event*: Calculate the total revenue generated for each paid event (using registration fees if applicable).
  13. *Most Active Event Cities*: List cities with the highest count of upcoming events.
  14. *Feedback Sentiment Summary*: Group feedback by rating to count positive (4-5), neutral (3), and negative (1-2) responses.
  15. *Speakers with Multi-City Schedules*: Find speakers hosting sessions in multiple cities.
  16. *Events and Resource Counts*: List events alongside the count of pdf, image, and link resources associated with them.
  17. *Average Registrations per Event Status*: Show the average registrations count for upcoming vs completed events.
  18. *Users Registered for Multiple Events on Same Day*: Identify users who registered for multiple events on the same calendar date.
  19. *Highly Rated Events with PDF Resources*: List events with average rating > 4.5 that have PDF resources uploaded.
  20. *Event Feedback Completion Rate*: Calculate the percentage of registered users who submitted feedback for each completed event.
  21. *Users Who Only Register for Free Events*: Find users who have registered for free events but never for paid ones.
  22. *Average Duration of Event Sessions*: Calculate the average duration of sessions in minutes per event.
  23. *Organizers with Highest Active Registrations*: Rank organizers based on the total registrations for their upcoming events.
  24. *Most Common Feedback Keywords*: Find common words in feedback comments (optional text processing).
  25. *Events Without Sessions*: List events that have no sessions scheduled.

## Running the Scripts
To set up the database and test the query scripts:
1. Connect to your MySQL/MariaDB client:
   ```bash
   mysql -u root -p
   ```
2. Import the schema and sample dataset:
   ```sql
   SOURCE setup.sql;
   ```
3. Run any individual exercise file to see its output:
   ```sql
   SOURCE exercise_01.sql;
   ```
