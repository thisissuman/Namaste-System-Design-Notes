# CORS (Cross-Origin Resource Sharing)

Cross-Origin Resource Sharing (CORS) is a security feature that controls how resources on a web server can be accessed by requests from other origins (different domains, subdomains, or ports). CORS prevents unauthorized websites from accessing sensitive information and ensures that only trusted domains can request certain resources.

For example, if a site `def.com` tries to access data from an API hosted on `abc.com`, it won’t be allowed unless `abc.com` explicitly permits it. CORS headers are used by servers to indicate which domains, HTTP methods, and headers are allowed access.

## Main Components of CORS

### 1. Same-Origin Policy (SOP)

The Same-Origin Policy is a security measure that restricts how resources are shared between different origins. Under SOP, a web page can only request resources from the same domain, protocol, and port unless explicit permission is given.

For example:

| Origin              | Source                   | Permission |
|---------------------|--------------------------|------------|
| localhost:4000      | localhost:4001           | ❌ Denied  |
| http://a.com        | http://a.com             | ✅ Allowed |
| http://a.com        | http://subdomain.a.com   | ❌ Denied  |

Without CORS, any attempt to access resources across different origins would be blocked by SOP.

### 2. Cross-Origin Requests

A cross-origin request occurs when a website requests resources from a different origin. This includes differences in:

- **Protocol** (e.g., HTTP vs HTTPS)
- **Domain** (e.g., `a.com` vs `subdomain.a.com`)
- **Port** (e.g., `localhost:3000` vs `localhost:4000`)

### 3. CORS Headers

The server can specify which cross-origin requests are allowed by setting specific CORS headers in the response. Key CORS headers include:

- **Access-Control-Allow-Origin**: Specifies which origins can access the resource. A wildcard (`*`) allows all origins.
  
  Example:
  ```http
  Access-Control-Allow-Origin: https://example.com

### Access-Control-Allow-Methods: Specifies which HTTP methods (e.g., GET, POST) are allowed for the resource.

Example:

Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Lists the headers allowed in requests. This is often used to permit custom headers.

Example:

Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: Indicates if the response can include credentials, such as cookies, for cross-origin requests.

Example:


Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: Specifies headers that should be accessible to the requesting code.

Example:


### Access-Control-Expose-Headers: X-Custom-Header
Example of a CORS Request
Suppose you’re building an application on http://app.com that needs to fetch data from http://api.example.com. You would configure the server on api.example.com to include CORS headers allowing access from app.com.


HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://app.com
Access-Control-Allow-Methods: GET, POST
Access-Control-Allow-Headers: Content-Type, Authorization
With this setup, http://app.com can safely request resources from http://api.example.com.

### Practical Scenario
A frontend application hosted on http://myapp.com needs to request data from a REST API at https://api.myapp.com. If CORS headers aren’t configured on api.myapp.com, the browser will block the request due to SOP. By adding the proper Access-Control-Allow-Origin header, api.myapp.com can explicitly grant access to requests from myapp.com.

Additional Interview Insights
When preparing for an interview, be ready to discuss:

### Preflight Requests: Browsers automatically issue an OPTIONS request (a preflight) to check if the server allows certain HTTP methods and headers. This is especially common with non-simple requests like POST, DELETE, or requests with custom headers.

### Security Implications: CORS helps prevent unauthorized websites from accessing user data, but misconfigured CORS can lead to security vulnerabilities. Avoid using * (allow all origins) in production settings unless necessary, as it opens up your server to potential cross-origin exploits.

### Troubleshooting CORS Errors: Understanding common errors, like "No 'Access-Control-Allow-Origin' header present," is essential. Misconfigurations in the server’s CORS headers or discrepancies in HTTP/HTTPS protocols often cause these errors.

### In summary, CORS is critical in web security, controlling how resources are shared across domains. Proper configuration protects user data and ensures secure communication between different origins.