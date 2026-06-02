# Core Java: Multithreading Module

This module demonstrates concurrent programming abstractions in Java, starting from standard low-level thread creation to thread pools, Callables, and modern Java virtual threads.

## Exercises Checklist
1. `ThreadDemo.java`: Showcases the basics of multithreading using standard Java thread classes (`extends Thread` and `implements Runnable`).
2. `ExecutorCallableExample.java`: Shows task execution scheduling using `ExecutorService`, retrieving computation results asynchronously from a `Callable` using `Future`.
3. `VirtualThreadsExample.java`: Demonstrates the usage of lightweight virtual threads introduced in modern Java (JDK 21+), running concurrent tasks efficiently.

## Compilation and Execution
To compile and execute any of these files, navigate to this directory and run:
```bash
javac FileName.java
java FileName
```
For example, to run the Virtual Threads Example:
```bash
javac VirtualThreadsExample.java
java VirtualThreadsExample
```
