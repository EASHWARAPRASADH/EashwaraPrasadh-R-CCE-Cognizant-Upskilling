# Core Java Assignments

This directory contains assignments for the Core Java programming curriculum. The exercises are structured into 10 sequential modules, progressing from standard programming constructs to advanced application architecture, multithreading, and networking.

## Modules Directory Map

1. **[01-Basics](file:///Users/eash/Downloads/DN_Assignment/Core%20JAVA/01-Basics)**: HelloWorld, variable types, operators, type casting, basic calculator math, factorial calculations, recursive Fibonacci, and balance/transfer trackers.
2. **[02-Control-Flow](file:///Users/eash/Downloads/DN_Assignment/Core%20JAVA/02-Control-Flow)**: Even/odd conditions, grade classifications, leap year checks, guess matching games, and multiplication table grids.
3. **[03-Arrays-Collections](file:///Users/eash/Downloads/DN_Assignment/Core%20JAVA/03-Arrays-Collections)**: Double array math, dynamic `ArrayList` operations (sorting/searching), and `HashMap` mappings.
4. **[04-OOP-Concepts](file:///Users/eash/Downloads/DN_Assignment/Core%20JAVA/04-OOP-Concepts)**: Encapsulated getter/setter models, inheritance overrides, vehicle interfaces, and overloaded addition methods.
5. **[05-Exception-Handling](file:///Users/eash/Downloads/DN_Assignment/Core%20JAVA/05-Exception-Handling)**: Arithmetic safety try-catch handlers and user validation via custom checked exceptions.
6. **[06-File-I-O](file:///Users/eash/Downloads/DN_Assignment/Core%20JAVA/06-File-I-O)**: File writing (`FileWriter`/`BufferedWriter`) and reading (`FileReader`/`BufferedReader`) operations.
7. **[07-Multithreading](file:///Users/eash/Downloads/DN_Assignment/Core%20JAVA/07-Multithreading)**: Concurrent threads, `ExecutorService` pools, `Callable` futures, and modern virtual threads.
8. **[08-JDBC](file:///Users/eash/Downloads/DN_Assignment/Core%20JAVA/08-JDBC)**: Standard SQL drivers connection management and database insert/update operations using the DAO pattern.
9. **[09-Advanced-Concepts](file:///Users/eash/Downloads/DN_Assignment/Core%20JAVA/09-Advanced-Concepts)**: Functional streams, lambda statements, record-based data structures, switch type pattern matching, and constructor/method reflection.
10. **[10-Networking](file:///Users/eash/Downloads/DN_Assignment/Core%20JAVA/10-Networking)**: HTTP web client calls and TCP client-server sockets communication.

## How to Compile and Run
Ensure you have a Java Development Kit (JDK 11 or higher, preferably JDK 21+ for Virtual Threads) installed.

1. Navigate to the module directory:
   ```bash
   cd "Core JAVA/01-Basics"
   ```
2. Compile the Java files:
   ```bash
   javac *.java
   ```
3. Run the target class containing the `main` method:
   ```bash
   java SimpleCalculator
   ```

*Note: For packages like `CustomException` in Module 05, `StudentDAO` in Module 08, and `TCPClientServer` in Module 10, run the execution commands from the parent directory by specifying the fully qualified class name (e.g., `java CustomException.Main`).*
