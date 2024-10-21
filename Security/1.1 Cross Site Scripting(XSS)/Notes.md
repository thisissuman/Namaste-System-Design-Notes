# XSS (Cross-Site Scripting Attack)
- Attackers inject malicious scripts into web applications, which are then executed in the browser of other users.
- Example: In a vulnerable site like `abc.com`, an attacker can inject malicious code through forms, URLs, or any input field. This injected script will run on the site and allow the attacker to make unauthorized changes.

### Vulnerabilities
- **User session hijacking**: Attackers can steal user cookies, allowing them to hijack active sessions.
- **Unauthorized activities**: Attackers can perform unauthorized actions on behalf of the user (e.g., posting on a user’s social media account).
- **Capturing keystrokes**: Malicious scripts can capture everything the user types, exposing sensitive information like passwords or personal data.
- **Stealing critical information**: Attackers can access and manipulate the Document Object Model (DOM) to capture sensitive data.
- **Phishing attacks**: Attackers can inject forms via scripts that look legitimate, tricking users into submitting their personal information.

### Mitigation
- **List all input points**: Identify all possible input sources where users provide data and sanitize them.
- **Avoid using `innerHTML`**: Use safer alternatives like `innerText` or `textContent` to prevent execution of injected scripts.
- **Escaping user input**: Escape characters such as `<`, `>`, so that they are rendered as text and not executed as code.
- **Use frameworks like React**: React automatically escapes data, which helps prevent XSS.
- **Sanitize data**: Libraries like `DOMPurify` or built-in sanitization functions can encode/decode data and strip out malicious content.
- **CSP (Content Security Policy)**: Use CSP headers to control which scripts are allowed to execute on your site.

---

## Content Security Policy (CSP)
A CSP provides an extra layer of security to prevent XSS and data injection attacks by specifying which resources are trusted.

### Key Features of CSP:
- **Allowed Sources**: Specify trusted sources from which scripts, styles, images, and other resources can be loaded (e.g., only allow scripts from your domain).
- **Script Nonces**: Apply unique nonces (randomly generated values) to inline scripts. This ensures that only authorized inline scripts can execute.
- **Report-Only Mode**: Enables monitoring of potential attacks without blocking any content. If malicious content is detected, reports are sent to a specified endpoint, allowing for tracking and logging of incidents.

---

This overview of XSS and CSP outlines common attack vectors and mitigation techniques that developers can apply to secure web applications from script-based attacks.
