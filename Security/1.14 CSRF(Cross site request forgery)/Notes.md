# CSRF (Cross-Site Request Forgery)

Cross-Site Request Forgery (CSRF) is a type of attack where a malicious website tricks users into performing actions on another website without their consent. This attack can lead to unauthorized actions like transferring funds or changing user data.

## How CSRF Works

1. **Attacker Preparation**: The attacker crafts a request to perform an action (e.g., transfer funds) on the target website.
2. **Request Embedding**: The attacker embeds this request into a hyperlink or form on their site.
3. **User Interaction**: A user, who is already logged into the target site, clicks the link on the attacker’s site.
4. **Unintended Action**: The request is sent to the target website, which authenticates it as if it was made by the user, unknowingly completing the action (e.g., transferring funds).

### Example

Suppose a user is logged into their bank account on `bank.com`. An attacker’s website contains the following form:

```html
<form action="http://bank.com/fundtransfer" method="POST">
    <input type="hidden" name="accId" value="21312">
    <input type="hidden" name="amount" value="10000">
    <input type="submit" value="Click here for a free iPhone!">
</form>

write in below in md format

If the user clicks the submit button, a transfer request is sent to the bank using their logged-in session, potentially transferring money to the attacker’s account without the user’s knowledge.

Why CSRF is Dangerous
HTTP Statelessness: HTTP doesn’t maintain session states, so requests may look the same to the server whether they come from the user or a malicious site.
Automatic Cookies: Browsers automatically send cookies with requests, including those triggered by a CSRF attack, making it easy to perform actions using the user’s session.
Vulnerable Scenarios
GET requests to change data: If sensitive actions are accessible via GET requests, attackers can embed them in images or links.

html
Copy code
<img src="http://bank.com/fundtransfer?accId=21312&amount=10000" />
Hidden Form Data: Attackers can use hidden form fields to submit sensitive data.

html
Copy code
<form action="http://bank.com/fundtransfer" method="POST">
    <input type="hidden" name="accId" value="21312">
    <input type="hidden" name="amount" value="10000">
    <input type="submit" value="Click here for a free prize!">
</form>
Mitigation Techniques
1. Anti-CSRF Token
Generate a unique token for each user session and require it for sensitive actions. The server validates the token with each request.

Example:


// Server sets a CSRF token on form submission
<form action="/submit" method="POST">
    <input type="hidden" name="csrf-token" value="unique-token-here">
    <!-- Other form inputs -->
</form>
2. SameSite Cookies
Set cookies to SameSite=strict, allowing cookies to be sent only on same-origin requests.

Example:


app.use((req, res, next) => {
  res.setHeader('Set-Cookie', 'sessionId=abc123; SameSite=Strict; Secure');
  next();
});
3. Referer Header Validation
Check the Referer header to ensure requests are coming from a trusted origin.

Example:


// Check referer header
if (req.headers.referer === 'https://trusted-site.com') {
    // Process the request
}
4. CAPTCHA
Use CAPTCHA to verify human users, preventing automated CSRF attacks.

5. Content Security Policy (CSP) Header
Implement CSP headers to limit which origins can interact with your site, blocking untrusted requests.

6. Logout and Secure Passwords
Encourage users to log out when they’re done, use complex passwords, and avoid allowing multiple simultaneous logins from different devices.

7. Avoid GET for Sensitive Actions
Never use GET requests for actions that modify data; use POST instead.

Additional Tips for Interviews
Explain Anti-CSRF Token Mechanism: Highlight how tokens help differentiate between legitimate and CSRF requests by requiring a unique token per request.
Discuss SameSite Cookies and Secure Headers: Mention how SameSite cookies prevent cross-origin requests and why Secure headers are crucial for sensitive data.
Best Practices for Sensitive Actions: Emphasize using POST requests and CAPTCHA for sensitive operations.
Know Common Vulnerabilities: Be ready to explain how CSRF exploits automatic authentication cookies and HTTP’s statelessness to perform unauthorized actions.
CSRF is a critical web security concern, and knowing how to prevent it is essential for securing user data and interactions on your web applications.