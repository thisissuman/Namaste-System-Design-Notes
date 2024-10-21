# Overview of Web Security Concepts

## 1. XSS (Cross-Site Scripting Attack)
- Occurs when user input is not properly handled or sanitized.
- Attackers inject malicious scripts into web applications, which are then executed in the browser of other users.
- **Prevention**: Sanitize and validate all user input, use Content Security Policy (CSP), and escape special characters in HTML.

## 2. CSRF (Cross-Site Request Forgery)
- Attacker tricks a user into performing actions on a website without their consent, often through phishing emails or malicious links.
- This attack forces the user’s browser to send unwanted requests to a different site where the user is authenticated.
- **Prevention**: Use anti-CSRF tokens, check HTTP referrers, and validate the origin of the request.

## 3. Authentication/Authorization
- Weak handling of authentication or authorization can lead to vulnerabilities such as token leakage or unauthorized access to sensitive areas (e.g., admin pages).
- **Prevention**: Implement strong authentication mechanisms (e.g., OAuth), use secure tokens (JWT), and enforce role-based access control (RBAC).

## 4. Input Validation/Sanitization
- Proper input validation is essential to prevent various types of attacks such as SQL Injection, XSS, and more.
- **Prevention**: Sanitize and validate all inputs at both the server and client sides, ensuring only valid and safe data is processed.

## 5. HTTPS
- HTTPS ensures secure communication between the client and server by encrypting data.
- **Benefits**: Protects data integrity, prevents man-in-the-middle attacks, and assures users that the site is secure.
- **Prevention**: Use HTTPS for all web communications, ensure SSL certificates are up to date.

## 6. Security Headers
- HTTP Security headers protect web applications from various attacks.
- **Examples**: `X-Content-Type-Options`, `X-Frame-Options`, `Content-Security-Policy`, and `Strict-Transport-Security`.
- **Prevention**: Properly configure security headers to prevent issues such as clickjacking and XSS.

## 7. Iframe Protection
- Attackers can load malicious sites in an iframe to trick users.
- **Prevention**: Use the `X-Frame-Options` header to prevent your site from being embedded in iframes by malicious sites.

## 8. Dependency Injection
- Using outdated or vulnerable third-party dependencies can lead to security risks.
- **Prevention**: Regularly update dependencies, use tools like `npm audit`, and avoid insecure libraries.

## 9. Client-Side Storage
- Storing sensitive information in local storage or IndexedDB can be risky.
- **Prevention**: Avoid storing sensitive data in client storage or encrypt it if necessary.

## 10. Compliance
- Websites must adhere to regulatory frameworks such as GDPR (General Data Protection Regulation) and PIPEDA (Personal Information Protection and Electronic Documents Act).
- **Prevention**: Ensure the site complies with legal standards for data privacy and protection.

## 11. SSRF (Server-Side Request Forgery)
- Occurs when an attacker tricks the server into making requests to internal or external services.
- **Prevention**: Validate and sanitize user inputs that trigger server requests and restrict internal network access from external requests.

## 12. SSJI (Server-Side JavaScript Injection)
- Involves injecting malicious JavaScript into the server, leading to potential data compromise or server manipulation.
- **Prevention**: Sanitize server-side code and validate inputs to prevent injection of unintended data.

## 13. Feature Flag
- Feature flags control the accessibility of certain features within an application.
- **Prevention**: Ensure that unauthorized users cannot enable or disable features, implement strict access controls for feature management.

## 14. Subresource Integrity (SRI)
- Protects against the use of compromised third-party resources (e.g., scripts, styles).
- **Prevention**: Use Subresource Integrity (SRI) attributes to ensure that third-party resources haven’t been tampered with.

## 15. CORS (Cross-Origin Resource Sharing)
- CORS controls access to resources on a server from a different origin.
- **Prevention**: Properly configure CORS headers to allow or restrict access to sensitive resources from other origins.

---

This overview covers key web security concepts and common vulnerabilities that can affect web applications. Each section includes strategies to mitigate these risks and secure web environments.
