# SRI (Subresource Integrity)

## What is Subresource Integrity (SRI)?

Subresource Integrity (SRI) is a security feature that ensures the integrity and safety of external resources (such as scripts or stylesheets) loaded from third-party sites, like Content Delivery Networks (CDNs). SRI helps verify that these resources haven't been tampered with, protecting users from potentially malicious alterations.

### Why Use SRI?

Consider a scenario where your website (`a.com`) loads resources from a trusted external source, such as a CDN (`b.com`). While the resource may be reliable, there is always a chance that it could be compromised on the CDN. By using SRI, you ensure that your website only loads the exact version of the resource you expect, alerting the browser if the file has been altered.

### How SRI Works with an Example (e.g., Bootstrap)

Using SRI involves several steps:

1. **Browser Downloads the Resource**: When your browser requests an external resource (e.g., `bootstrap.min.css`), it checks the integrity attribute provided in your HTML.

2. **Generate a Cryptographic Hash**: You generate a hash of the resource's content using SHA-256, SHA-384, or SHA-512. This hash acts like a fingerprint for the exact version of the file.

3. **Specify Hash and Algorithm**: In the HTML, you include this hash in the `integrity` attribute of the `<script>` or `<link>` tag, along with the algorithm used to generate it.

4. **Browser Verifies Hash**: When the resource loads, the browser generates a hash of the downloaded file and compares it with the integrity attribute in your HTML. If the hashes match, the resource is safe; if they don’t, the browser blocks it, preventing the tampered resource from loading.

### Practical Example

Here’s an example of loading Bootstrap’s CSS from a CDN with SRI:


<link rel="stylesheet" href="https://cdn.example.com/bootstrap.min.css"
      integrity="sha384-abc123xyz" crossorigin="anonymous"> 


In this example:

#### The integrity attribute contains the hash (sha384-abc123xyz) that the browser will compare against.
#### The crossorigin="anonymous" attribute allows cross-origin resource sharing without credentials.
Benefits of SRI
Using SRI provides two main benefits:

#### Protects Against Compromised Third-Party Resources: If someone injects malicious code into the CDN's resource, the browser detects the mismatch in the hash and blocks the resource.

#### Detects Unintended Updates: If a resource is updated (e.g., a new version of Bootstrap), the hash will change. SRI ensures your website is aware of this, letting you update the integrity attribute as needed.

Additional Tools
#### SRI Hash Generators: Online tools are available to generate SRI hashes for you. Simply upload the file or paste the URL, and the tool will provide the integrity attribute.

Final Notes
#### Using SRI from Trusted Sources: If the third-party provider offers an integrity attribute, it is generally secure to rely on it, but you can verify it by generating your own hash if needed.
#### By using SRI, you enhance the security of your site by ensuring only verified resources load, safeguarding against tampering or unauthorized content changes.






