# Core Java: JDBC Module

This module demonstrates database integration in Java using the Java Database Connectivity (JDBC) API. It covers connection setup, statement execution, and the implementation of a basic Data Access Object (DAO) design pattern.

## Exercises Checklist
1. `JDBCExample.java`: Shows how to load a database driver (`com.mysql.cj.jdbc.Driver`), establish a database connection, execute a basic query (`SELECT * FROM students`), and process result sets.
2. `StudentDAO/`:
   - `StudentDAO.java`: Implements a Data Access Object pattern containing methods to insert and update student records in a database table using parameterized `PreparedStatement` interfaces.
   - `Main.java`: Runs and tests the DAO layer operations.

## Compilation and Execution
To compile and run, you need a MySQL database server running and the MySQL Connector/J jar library added to your classpath.

### Compile:
```bash
javac JDBCExample.java StudentDAO/*.java
```

### Run standard JDBC Example:
```bash
java -cp .:mysql-connector-j.jar JDBCExample
```

### Run DAO Package Example:
```bash
java -cp .:mysql-connector-j.jar StudentDAO.Main
```
*(Replace `mysql-connector-j.jar` with the actual path to your MySQL connector jar library)*
