# Network Communication Overview

## Basic Concepts
- When accessing any website, the following occurs:
  - The client (browser) sends a request to the server.
  - The server responds with HTML, which then loads JavaScript and CSS, rendering the UI.
  - **Client Request ↔ Response Server**
- A domain name or IP address is necessary to establish the connection between the client and server.
- Mobile Browser Workflow (e.g., accessing google.com):
  - Mobile device → Cell Tower (Internet) → Phone Company → DNS Server → Retrieves IP address and sends it back to the mobile device.
- For Wi-Fi connections:
  - Mobile Device → Router → Modem → Internet Service Provider (ISP).

## Intermediate Concepts
### Laptop to Router to ISP
- Connection between a laptop and a router can be wired or wireless.
- Fiber optics run to your locality and connect to a hub.

### ISP Workflow
- **ISP → DNS**  
  **ISP → Server → Data Center**
- Domain structure includes multiple levels, which help to locate the specific IP address on the server:
  - **Top Level Domain:** `.`  
  - **Second Level Domain:** (`.org`, `.com`, `.in`)  
  - **Third Level Domain:** (`www`, `sales`, `download`)
- Load distribution is handled by multiple servers.
- Data centers consist of multiple machines responsible for handling IP addresses.
- Global communication happens via satellite, underwater cables, and optical fiber networks, connecting the world.

### ISP Architecture
- **Laptop → Local ISP → Regional ISP → Global ISP**
- Data travels in the form of packets.

## Advanced Concepts
### What Happens When You Hit Enter for a Website (e.g., google.com)?
- **Caching Check**: 
  - First, the browser checks local caches (Service Worker). If not found, it checks:
    - OS Cache
    - Router Cache (stores domain IP addresses)
    - ISP Cache
  - If accessing a website from a different country, the request goes through **Global ISP → Regional ISP**.
  - **Google Peering**: Google's peering system bypasses extra hops and fetches data directly from the local ISP, speeding up the process.
  
- **Parallel Requests**: 
  - Browsers typically make 6-8 parallel requests. Any further requests are queued.
  
- **ICANN**:
  - Governs top-level, second-level, and third-level domains.
  
- **WHOIS**: 
  - Provides information on domain ownership but also offers privacy protection.

### Client-Server Communication Process
- **Client → DNS Lookup → DNS**
- **Client → TCP Handshake**: Ensures the site is available before sending a request.
- **Client → SSL Handshake**: Establishes a secure connection by exchanging certificates.
- **Client → HTTP GET Request**: The client requests data from the server.
  - The server responds in data chunks (e.g., 14KB, 28KB, 56KB).

### SSL Process
- After the TCP handshake, the client requests a secure connection:
  - The server responds with a certificate or key to establish encrypted communication.

## Page Rendering Process
### Loading, Scripting, Rendering, and Painting
- **Loading**: 
  - The browser loads and parses HTML, CSS, and JavaScript.
  - Constructs the **DOM tree** and **CSSOM**, which combine into the **Render Tree**.
  
- **Scripting**: 
  - Handles JavaScript events and event listeners.
  
- **Rendering**: 
  - Converts HTML elements into visual elements displayed on the screen.
  
- **Painting**: 
  - The browser paints the page, rendering the final display on the screen.
