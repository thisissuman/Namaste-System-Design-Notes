# Network Communication Protocol

## HTTP (Hypertext Transfer Protocol)
- HTTP is the communication protocol used for web browsing.
- It ensures the client reaches the destination (web server) via defined communication rules.
- **TCP Connection**: 
  - Establishes a connection to check if the data is available and if the connection can be formed.
  
## TCP (Transmission Control Protocol)
- TCP defines the path through which data is transmitted, ensuring reliable delivery (guaranteed).
- **Three-Way Handshake**:
  1. **SYN**: Initiates the connection.
  2. **SYN + ACK**: Acknowledges the connection request.
  3. **Acknowledgement**: Confirms the connection and guarantees no packet loss during transmission.

## UDP (User Datagram Protocol)
- UDP defines a path for data transmission but does not guarantee delivery, making it faster than TCP.
  - Example: **WhatsApp Voice Call**

## HTTP/3 (QUIC)
- HTTP/3 uses **UDP** to improve performance and speed.
- Features **Header Compression** for faster data transmission.
  - Example use cases: **Virtual Reality**, **IoT**

## HTTPS (Hypertext Transfer Protocol Secure)
- **HTTPS** ensures secure communication by encrypting and decrypting data between both ends.
- Prevents data interception during transmission.
  - Example use case: **Video Streaming**

## WebSocket
- WebSocket uses an **HTTP Upgrade** mechanism: it starts with an HTTP connection and then upgrades to WebSocket.
- It supports **Full Duplex** communication, allowing the client and server to send data anytime.
  - Example use case: **Live Chat**

## SMTP (Simple Mail Transfer Protocol)
- SMTP is used to send emails via an SMTP server.

## FTP (File Transfer Protocol)
- FTP is used to transfer large files from one server to another.
  - Supports **Upload/Download** of files.
