# Cognizant Upskilling: Core Java, SQL & Bootstrap Assignments

This repository contains upskilling assignments and exercises for Core Java, SQL, and Bootstrap 5.

## Repository Directory Structure

```
.
├── Core JAVA/
│   ├── 01-Basics/                # Variables, type casting, basic calculators, and algorithms
│   ├── 02-Control-Flow/           # Branching logic (if/else), loops, and guessing games
│   ├── 03-Arrays-Collections/    # Arrays, ArrayList, and HashMap collections
│   ├── 04-OOP-Concepts/          # Encapsulation, inheritance, interfaces, and polymorphism
│   ├── 05-Exception-Handling/    # Defensive try-catch blocks and custom checked exceptions
│   ├── 06-File-I-O/              # Text file reading and writing operations
│   ├── 07-Multithreading/        # Threads, Runnable, Futures, Callables, and Virtual Threads
│   ├── 08-JDBC/                  # MySQL JDBC integration and the Data Access Object (DAO) pattern
│   ├── 09-Advanced-Concepts/     # Lambdas, Streams, Records, Switch patterns, and Reflection
│   └── 10-Networking/            # HttpClient web requests and TCP client-server sockets
│
├── SQL/
│   ├── setup.sql                 # Community Event Portal database schema and mock dataset
│   └── exercise_01.sql to 25.sql # 25 exercises covering Joins, Groups, Subqueries, and Views
│
└── Bootstrap5-Exercises/         # 19 Bootstrap 5 component and SASS customization exercises
```

## Modules Overview

### 1. Core Java
A complete suite of 10 modules covering foundational and advanced Java programming concepts. All code is compiled and tested under JDK 23.
*   **Basics & Control Flow**: Foundational logic, operators, calculations, branching, and loops.
*   **OOP & Exceptions**: Design patterns focusing on encapsulation, inheritance, interfaces, method overloading, custom error handling, and checked exceptions.
*   **Data Structures & File I/O**: Operations using standard arrays, dynamic lists, hash maps, and filesystem text readers/writers.
*   **Concurrency & Networking**: Thread executions, futures, lightweight virtual threads, HTTP client requests, and TCP client-server socket communication.
*   **Advanced Features**: Functional programming pipelines using Java streams, lambda expressions, record definitions, pattern matching, and runtime class inspection via reflection.

*For detailed compilation and execution steps, refer to the [Core JAVA README](file:///Users/eash/Downloads/DN_Assignment/Core%20JAVA/README.md) (or individual module READMEs).*

### 2. SQL
Database query development using a MySQL/MariaDB schema simulating a local community event portal.
*   **Setup Script**: Auto-creates tables for `Users`, `Events`, `Sessions`, `Registrations`, `Feedback`, and `Resources`, linking them via primary and foreign key constraints, and loads sample records.
*   **Queries (1-25)**: Exercises covering multi-table joins, aggregates (`COUNT`, `AVG`, `SUM`), subqueries, conditional filter evaluations, and set operations.

*For detailed schema explanations and run instructions, refer to the [SQL README](file:///Users/eash/Downloads/DN_Assignment/SQL/README.md).*

### 3. Bootstrap 5
Hands-on layout and component exercises structured as a student learning progress log.
*   **Setup & Structure**: CDN vs local file setups, file bundles, and folder structures.
*   **Grid Layouts**: Responsive containers, rows, alignment, order shifting, and grid widths.
*   **Components & Forms**: Navbars, nav tabs, cards, button groups, inputs, and floating label panels.
*   **Utilities**: Spacing adjustments, color variables, borders, visibility controls, positioning, and Bootstrap Icons.
*   **Plugins & Customization**: Modals, collapsible accordions, and Sass custom recompilation builds.

*For a detailed index of lessons, refer to the [Bootstrap5-Exercises README](file:///Users/eash/Downloads/DN_Assignment/Bootstrap5-Exercises/README.md).*

---

## Getting Started

### Prerequisites
- **Java**: Java Development Kit (JDK 11 or higher recommended, tested on JDK 23)
- **Database**: MySQL Server 8.0+ or MariaDB
- **Node.js**: Node.js v16+ (only required for compiling custom SASS stylesheets)

### Basic Run Instructions
1. **Core Java**:
   Navigate to the target exercise directory and compile:
   ```bash
   javac HelloWorld.java
   java HelloWorld
   ```
2. **SQL**:
   Log into your database client and import the setup schema before running any queries:
   ```sql
   SOURCE SQL/setup.sql;
   SOURCE SQL/exercise_01.sql;
   ```
3. **Bootstrap 5**:
   Open the target HTML file (e.g. `Bootstrap5-Exercises/Exercise-01-Setup/Ex1.1-CDN-Link/index.html`) in a browser to test.
