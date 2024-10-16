# Short Polling

Short polling is a communication technique where the frontend continuously asks the backend if new data is available, typically at regular intervals.

### How it Works
- The client repeatedly sends requests to the server at set intervals.
- Each request is independent, with no persistent connection between requests.
- If data has not changed, the same data may be returned as in previous requests.

### Characteristics
- **Short-Lived Connection**: Each request-response cycle is independent.
- **No Persistent Connection**: The client only receives what is available at the time of each request.
- **Less Resource Utilization**: Does not increase server connections, reducing resource strain.
- **Scaling Limitations**: Frequent polling can become resource-intensive if scaled across many clients.

### Communication Flow
Client --> Request A --> Server Client --> Request B --> Server

markdown
Copy code

### Common Use Cases
- **Real-Time Systems**: Applications needing regular updates, such as dashboards.
- **Notifications**: Checking for updates, like new messages or alerts.
- **Live Scores**: Platforms like Cricbuzz.
- **Analytics Dashboards**: Frequent data updates for metrics tracking.
- **Version Checking**: Detecting if a new version of software is available.

---