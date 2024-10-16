# GRPC Overview

**gRPC** (Google Remote Procedure Call) is an open-source framework developed by Google to facilitate efficient communication between systems, supporting features like load balancing and authentication. It allows functions on the server to be executed directly from the client, creating a seamless interaction between distributed services.

### How it Works
Client function <--> Client Hub <--> RPC Runtime <--> RPC Runtime <--> Server Hub <--> Server function


## Key Features

- **Protocol Buffers (Protobuf)** - An IDL (Interface Definition Language) for data serialization.
- **HTTP/2 Protocol** - Enables gRPC’s single, long-lived connection and bidirectional data flow.
- **Serialization/Deserialization** - Uses Protobuf to serialize data as binary for faster communication.
- **.proto Files** - Human-readable files with a `.proto` extension (using proto3 syntax) are compiled into code for specific languages (Java, Python, Go) to handle data encoding and decoding.

### Example Workflow
1. `.proto` file (Human-readable format)
2. Auto-generated code for the client and server (Java/Python/Go)
3. **Serialization** - Encodes data for efficient binary transfer

---

## Benefits of gRPC

- **Performance**: Binary data and HTTP/2 protocol make gRPC calls up to 10x faster than REST.
- **Lower Resource Usage**: Consumes less CPU and is efficient for mobile applications.
- **Streaming Support**: Supports client, server, and bidirectional streaming.
- **Code Generation**: Automates code generation across multiple languages, allowing easy integration.
- **Service Discovery**: Facilitates dynamic service discovery for efficient network handling.

---

## Sample Architecture

Browser <- REST / gRPC Client -> Express Server <- Protobuf / gRPC -> gRPC Server



## Advantages

- **High Performance**: With HTTP/2 and binary data transfer, it performs significantly faster than REST.
- **Enhanced Security**: Stronger support for secure communication channels.
- **Efficient Streaming**: Supports continuous data flow in multiple directions.
- **Cross-Language Compatibility**: Generated code can be run in various languages.
- **Service Discovery**: Allows clients to dynamically discover services.

---

## Disadvantages

- **Binary Data**: Data is not human-readable, which can complicate debugging.
- **Browser Support**: Limited support in web browsers.
- **No Edge Caching**: Cannot leverage edge caching due to the internal use of HTTP POST.
- **Steeper Learning Curve**: Requires familiarity with Protobuf and gRPC architecture, which can make onboarding slower.


##  do npm run client and npm run server to start this