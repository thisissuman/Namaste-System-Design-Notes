# Accessibility

## What is Accessibility?

Accessibility ensures that people with disabilities can use the web. This includes perceiving, understanding, navigating, interacting, and contributing to the web. The goal is to eliminate barriers that may prevent people with disabilities from accessing information.

## Why is Accessibility Important?

Web accessibility is crucial because it allows people with disabilities to use the web effectively. It ensures inclusivity and equal access to information and services.

## Assistive Technology (AT)

Assistive technology should be accessible to everyone, including those who cannot speak, see, or hear.

### Examples of Assistive Technology:
- **Keyboard only**: For users who cannot use a mouse.
- **Screen readers**: Convert text and interface elements into speech or braille.
- **Mouse & Pointer devices**: For users with limited mobility.
- **Touch gestures**: For users who rely on touch interfaces.
- **Screen magnifier**: For users with visual impairments.

## Accessibility Standards

### WCAG (Web Content Accessibility Guidelines)
- **Level A**: Partial compliance
- **Level AA**: Moderate compliance
- **Level AAA**: Maximum compliance

### WebAIM (Web Accessibility in Mind)
- **Perceivable**: How users can perceive the content.
- **Operable**: How users can operate the content.
- **Understandable**: How users can understand the content.
- **Robust**: How users can interact with the content.

## Screen Readers

Screen readers are software tools that read digital content aloud, enabling people with visual impairments to use computers and mobile devices.

### Key Features:
- Reads screen content aloud
- Provides keyboard navigation
- Supports multiple languages
- Adjustable speech settings

### Examples:
- VoiceOver
- TalkBack
- NVDA
- ChromeVox

## Accessibility in HTML

- **Document structure**: Use semantic HTML (e.g., `<header>`, `<footer>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<aside>`, `<figure>`, `<figcaption>`).
- **Input labels**: Use `<label>`, `placeholder`, `<legend>`.
- **Tables**: Use `<caption>`, `summary`, `headers`, `scope`.
- **Focus management**: Use `tabindex`, `autofocus`.
- **Keyboard navigation**: Use `tab`, `shift+tab`, `enter`, `space`, `esc`.
- **Images**: Use `alt`, `title`.
- **Audio & Video**: Use captions, transcripts, controls.
- **Forms**: Use labels, placeholders, instructions, validation.
- **Functional images**: Use `<button>`, `<link>`, `<form>`.
- **CSS class hidden**: Use to hide elements visually but keep them accessible.

### ARIA (Accessible Rich Internet Applications)
- **Roles**: Define the type of element (e.g., `role="button"`).
- **Properties**: Define characteristics (e.g., `aria-checked`).
- **States**: Define the state (e.g., `aria-busy`).

## Focus Management

- **Tab Navigation**: Use `<a>`, `<button>`, `<input>`, `<select>`, `<textarea>`.
- **Keyboard Navigation**: Use shortcuts like `tab`, `shift+tab`, `enter`, `space`, `esc`.
- **Skip Links**: Use `<a href="#main">Skip to main content</a>`.
- **Active Element**: Manage focus when modals are opened/closed.
- **Tab Traps**: Ensure focus is trapped inside modals when open.

## Color & Contrast

- Use high contrast colors.
- Avoid red on green, green on red.
- Do not rely on color alone to convey information.
- Ensure readability at 400% zoom.

## Accessibility Tools

- **Automated Testing Tools**: AXE, Espresso, eslint-plugin-jsx-ally.
- **Manual Tools**: Lighthouse, Deque Axe.
- **Out of the Box**: Material UI, Shadcn UI, React-aria.

## Techniques

- Use semantic HTML.
- Add labels to form elements.
- Keep zoom pinch alive.
- Show focus location.
- Provide text for non-text content.
- Caption & describe media.
- Use WAI-ARIA.
- Use consistent navigation and labels.

## Testing for Accessibility

- Zoom to 400%.
- Check keyboard navigation.
- Use a screen reader with the monitor off.
- Run a Lighthouse accessibility report.
- Deactivate CSS and test usability.

## How to Fix Accessibility Issues

1. **Add proper alt text to images**:
   ```html
   <img src="logo.png" alt="Company logo showing a blue mountain">
   ```

2. **Use semantic HTML elements**:
   ```html
   <!-- Instead of: -->
   <div class="nav">
   <!-- Use: -->
   <nav>
   ```

3. **Add proper form labels**:
   ```html
   <label for="email">Email address:</label>
   <input type="email" id="email" name="email">
   ```

4. **Ensure sufficient color contrast**:
   ```css
   /* Instead of: */
   color: #777; /* on white */
   /* Use: */
   color: #595959; /* on white (meets WCAG AA) */
   ```

5. **Make keyboard navigation work**:
   ```html
   <button onKeyPress={handleClick} onClick={handleClick}>
     Submit
   </button>
   ```

6. **Add ARIA labels where needed**:
   ```html
   <button aria-label="Close menu" onClick={closeMenu}>
     <span class="icon">×</span>
   </button>
   ```

7. **Provide text alternatives for media**:
   ```html
   <video controls>
     <source src="video.mp4" type="video/mp4">
     <track kind="captions" src="captions.vtt">
   </video>
   ```

8. **Fix heading hierarchy**:
   ```html
   <h1>Main title</h1>
   <h2>Section title</h2>
   <h3>Subsection title</h3>
   ```

9. **Make focus visible**:
   ```css
   :focus {
     outline: 3px solid #4A90E2;
   }
   ```

10. **Add skip links**:
    ```html
    <a href="#main-content" class="skip-link">
      Skip to main content
    </a>
    ```

## Interview Questions

1. What is web accessibility and why is it important?
2. Can you explain the different levels of WCAG compliance?
3. How do screen readers work and why are they important?
4. What are ARIA roles and how do they enhance accessibility?
5. How would you test a website for accessibility?
6. What are some common accessibility issues and how can they be fixed?
7. How does color contrast affect accessibility?
8. What tools can be used to test for accessibility?
9. How can keyboard navigation be implemented in a web application?
10. What is the purpose of skip links and how are they implemented?