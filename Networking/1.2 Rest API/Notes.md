
# REST API Guide

## Overview

### What is REST API?
- REST API stands for **Representational State Transfer**, which defines rules and standards for data transfer between a **client** (e.g., frontend) and a **server** (e.g., backend).  
- It's built on top of **HTTP** and uses it to define how resources are transferred.

### Why REST API?
- Provides a **uniform** way to access and manipulate resources.
- Ensures **stateless** communication, allowing each request to be self-contained and independent.

### Building Blocks:
- **URL**
- **Methods**
- **Headers**
- **Request**
- **Response**
- **Status Codes**

### Tools:
- Build your app using Express.
- Test your API with **Postman**.
- REST APIs can work with **HTTP 1/2/3** protocols.

### Best Practices & Advanced Topics:
- Following industry best practices ensures scalable and maintainable API design.

---

## URL
- [Insert picture here]

---

### What is REST API?
- REST APIs facilitate communication between **Client ↔ Server ↔ Storage**.
- Various API types exist: **REST**, **gRPC**, **GraphQL**.
- REST specifies **how data is represented** and transferred, using HTTP as the underlying protocol.
- In summary:
  - **REST** defines rules and standards for data transfer.
  - **HTTP** provides the foundation and protocol for transferring data.

---

## Benefits of REST API

| Benefit           | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| **Ease of Use**    | Works with libraries like **axios** or **fetch**; flexible for both client and server. |
| **Stateless**      | REST doesn't maintain state, making it scalable and efficient.              |
| **Scalability**    | Supports **vertical** and **horizontal scalability** for real-time data handling. |
| **Flexible Data**  | Works with multiple formats like **JSON** or **XML**.                        |
| **Uniform Interface** | Provides a consistent, predictable URL structure.                          |
| **Caching**        | Can cache data to reduce server load.                                       |
| **Separation of Concerns** | Frontend and backend remain independent (e.g., Java backend, JavaScript frontend). |
| **Interoperability** | REST APIs are language-agnostic, allowing integration across platforms.    |
| **Testing**        | Easy to test during development using tools like Postman.                   |
| **Security**       | Supports **Authentication headers** and security protocols like HTTPS.      |

---

## Request & Response

### Client Request
- **Client <Request ↔ Response> Server**

#### Request Components:
| Component          | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| **HTTP Request Line** | Example: `GET http://127.0.0.1:5500/styles/navigation.css HTTP/1.1`        |
| **HTTP Headers**    | Contains metadata about the request.                                        |
| **HTTP Body**       | May be empty or contain data (e.g., in POST requests).                      |

#### Example Request Headers:
```
Host: 127.0.0.1:5500
Accept: text/css,*/*;q=0.5
Accept-Language: en-GB
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
Connection: Keep-Alive
```

### Server Response
#### Response Components:
| Component           | Description                                                                |
|---------------------|----------------------------------------------------------------------------|
| **HTTP Status Line** | Example: `HTTP/1.1 200 OK`                                                 |
| **HTTP Response Headers** | Contains information about the server response.                          |
| **HTTP Body**        | The actual data returned (e.g., HTML, JSON, etc.).                         |

#### Example Response Headers:
```
Date: 6 Jul 2024
Accept-Ranges: bytes
Content-Length: 2005
Content-Type: text/css; charset=UTF
```

---

## Create Your First Server

1. Initialize your project:
    ```bash
    npm init
    ```
2. Install Express:
    ```bash
    npm install express --save
    ```
3. Create `index.js`:
    ```javascript
    import express from 'express';
    const app = express();
    ```
4. Update `package.json`:
    - Add `"type": "module"` to use ES6 import syntax.
5. Install **nodemon** for auto-restarting:
    ```bash
    npm install nodemon --save
    ```
6. Install **body-parser** for parsing POST request data:
    ```bash
    npm install body-parser --save
    ```
7. Test API with **Postman** by sending POST/GET requests.

---

## TODO App API

### API Paths:
- `https://localhost:5111/api/todo`
- `https://localhost:5111/api/users`

### Features (CRUD):
- **Create Todo** → POST
- **View Todo** → GET
- **Edit Todo** → PUT/PATCH
- **Delete Todo** → DELETE

### HTTP Methods:
| Method  | Action                                  | Description                                                   |
|---------|-----------------------------------------|---------------------------------------------------------------|
| **POST**  | Create                                 | Add a new resource (e.g., Create a new todo).                  |
| **GET**   | Read                                   | Retrieve data (e.g., Get the list of todos).                   |
| **PUT**   | Update                                 | Update the entire resource (requires all data).                |
| **PATCH** | Update partially                       | Update part of the resource (e.g., just the first name).       |
| **DELETE**| Delete                                 | Remove a resource.                                             |
| **HEAD**  | Check response without body            | Validates data before making a full request.                   |
| **OPTIONS**| Security check before actual request  | Ensures the client is allowed to make the request.             |
| **CONNECT**| Establish connection                  | Reduces extra hops for subsequent requests.                    |
| **TRACE** | Diagnostic tool                        | Used for debugging and diagnosis.                              |

---

## HTTP Headers

### Request Headers:
| Header          | Use Case                         | Example                                      |
|-----------------|----------------------------------|----------------------------------------------|
| **Host**        | Target server                    | `host: www.1.api.flipkart.com`               |
| **Origin**      | Originating server               | `origin: www.flipkart.com`                   |
| **Referrer**    | Referring page                   | `referrer: https://example.com/previouspage` |
| **User-Agent**  | Client information               | `Mozilla/5.0 (Windows NT 10.0; Win64; x64)`  |
| **Accept**      | Expected content type            | `application/json`                          |
| **Authorization** | Credentials                      | `Bearer-token`                               |
| **Cookie**      | Stored data                      | `session_id=abc123`                          |
| **Cache-Control**| Cache duration                   | `max-age=3600`                               |

### Response Headers:
| Header          | Use Case                         | Example                                      |
|-----------------|----------------------------------|----------------------------------------------|
| **Date**        | Date of response generation      | `Thu, Nov 30, 2023`                          |
| **Server**      | Server information               | `Apache/2.4.0`                               |
| **Content-Type**| Response content type            | `text/html; charset=UTF-8`                   |
| **Content-Length** | Length of response body         | `256`                                        |
| **Set-Cookie**  | Cookie details                   | `set-cookie: userid=123`                     |
| **Cache-Control** | Caching policies                | `no-cache`                                   |
| **Last-Modified** | Last modified date              | `Wed, 29 Nov 2023`                           |
| **ETag**        | Entity tag for caching           | `W/"123456789"`                              |

---

## Status Codes
- [Insert picture here for Status Codes]

| Code | Meaning                         | Description                                                 |
|------|---------------------------------|-------------------------------------------------------------|
| 200  | OK                              | The request was successful.                                 |
| 201  | Created                         | A new resource was successfully created.                    |
| 204  | No Content                      | The request was successful, but there's no content to return.|
| 400  | Bad Request                     | The server couldn't understand the request due to invalid syntax.|
| 401  | Unauthorized                    | Authentication is required and has failed or hasn't been provided.|
| 403  | Forbidden                       | The client does not have access rights to the content.       |
| 404  | Not Found                       | The server can't find the requested resource.                |
| 500  | Internal Server Error           | The server encountered an error and can't complete the request.|