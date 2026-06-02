# Core Java: Networking Module

This module demonstrates network-based communication in Java. It covers using modern HTTP clients for web requests and implementing client-server communication using standard TCP sockets.

## Exercises Checklist
1. `HttpClientExample.java`: Demonstrates the usage of modern Java `HttpClient` (introduced in Java 11) to send GET requests to a remote web service and print HTTP status codes and responses.
2. `TCPClientServer/`:
   - `Server.java`: Implements a basic TCP Server using `ServerSocket` that listens on port `5000` for client connection requests, receives messages, and sends responses back.
   - `Client.java`: Implements a TCP Client using `Socket` that connects to `localhost:5000`, transmits messages, and processes responses.

## Compilation and Execution
To compile and execute, navigate to this directory. Note that the TCP client and server files are declared in the package `TCPClientServer`.

### Standard HTTP Client Example:
```bash
javac HttpClientExample.java
java HttpClientExample
```

### TCP Client-Server Package Example:
Compile both files in the package directory:
```bash
javac TCPClientServer/*.java
```

Start the TCP Server in one terminal window:
```bash
java TCPClientServer.Server
```

Start the TCP Client in another terminal window to transmit messages:
```bash
java TCPClientServer.Client
```
