# Core Java: Exception Handling Module

This module demonstrates how to manage runtime errors and enforce business rules using Java's robust exception handling model, including standard try-catch blocks and custom user-defined exceptions.

## Exercises Checklist
1. `TryCatchExample.java`: Illustrates defensive programming using `try-catch` blocks to catch and handle arithmetic errors (like division by zero) and prevent program crashes.
2. `CustomException/`:
   - `InvalidAgeException.java`: A custom Checked Exception subclassing the base `Exception` class to represent custom validation failures.
   - `Main.java`: Exercises the custom exception by checking user-input age and throwing/catching `InvalidAgeException` if the input violates age restrictions.

## Compilation and Execution
To compile and execute, navigate to this directory. Note that the custom exception files are declared in the package `CustomException`.

### Standard Try-Catch Example:
```bash
javac TryCatchExample.java
java TryCatchExample
```

### Custom Exception Package Example:
Compile both files in the package directory:
```bash
javac CustomException/*.java
java CustomException.Main
```
