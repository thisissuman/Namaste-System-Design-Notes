# Communication Overview

If the frontend needs to communicate with the backend, several techniques are available. Each technique varies in its approach, frequency of data retrieval, and use case.

---

### Short Polling
- **Description**: Continuously checks with the backend at regular intervals to see if new data is available.
- **Use Case**: Best when data changes frequently and updates are expected regularly.

---

### Long Polling
- **Description**: Queries the backend to check if data is ready; if not, it waits until data becomes available, delivering it as soon as it's ready.
- **Use Case**: Ideal for scenarios where updates are less frequent but needed as soon as they are available.

---

### WebSocket
- **Description**: Establishes a continuous connection between the frontend and backend, allowing real-time data flow without waiting for a new request.
- **Use Case**: Used in applications that require instant updates, such as chat applications or live notifications.

---

### Server-Sent Events (SSE)
- **Description**: Delivers continuous data updates from the server to the client without requiring repeated requests.
- **Use Case**: Useful for streaming updates, such as live news feeds or real-time analytics.

---

### Webhooks
- **Description**: Sends data to a specified endpoint only when a specific event occurs. Once data is retrieved, any leftover data is transferred to another specified recipient.
- **Use Case**: Ideal for automated workflows, such as notifying third-party services when a specific action occurs.

--- 
