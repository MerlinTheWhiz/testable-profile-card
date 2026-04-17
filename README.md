# Testable Profile Card

A responsive, accessible, and highly testable user profile card built with semantic HTML, modern CSS, and vanilla JavaScript. This project cleanly satisfies the Stage 1B task requirements.

## 🚀 Features
- **Semantic HTML**: Structured using descriptive logical tags (`<article>`, `<section>`, `<nav>`, `<figure>`).
- **Accessibility (a11y)**: 
  - Validated to pass WCAG AA color contrast ratios for all visible text.
  - Full keyboard focusability with visible `.focus-visible` styling for interactive links.
  - Descriptive `alt` attributes on imagery and explicit `aria-label` attributes on navigation menus.
  - Live region monitoring (`aria-live="polite"`) for the dynamically updating epoch time widget.
- **Responsiveness**: Fluid layout adopting CSS Flexbox and Grid. Elements stack smoothly onto smaller mobile screens and unfold naturally on desktop viewports.
- **Test-Ready**: Guaranteed, stable test hooks utilizing distinct `data-testid` values for robust E2E testability. 

## 💻 Instructions to Run Locally

Because this simple component is built without a frontend framework, no build-step or complex tooling is required to run it.

1. **Direct Browser Execution**:
   Simply open the `index.html` file using your web browser of choice. Double click the file or drag 'n drop it onto a browser tab.

2. **Using a Local Server**:
   If you have Python installed on your system:
   ```bash
   python -m http.server 3000
   ```
   Or if you use NodeJS/npm:
   ```bash
   npx serve .
   ```
   Then navigate to `http://localhost:3000` or whatever port is output by the prompt.

3. **Using VSCode Live Server Extension**:
   - Open this project folder in Visual Studio Code.
   - Install the "Live Server" extension (by Ritwick Dey) if you haven't already.
   - Right-click `index.html` and select **"Open with Live Server"**, or click the **"Go Live"** button in the bottom right corner of VSCode.

## 🧪 Testing Notes and Hooks

This component intentionally decouples test identifiers from styling mechanisms, offering highly stable testing targets.

### Guaranteed `data-testid` Hooks
You can confidently target the following selectors within your test environments:
* `[data-testid="test-profile-card"]`
* `[data-testid="test-user-name"]`
* `[data-testid="test-user-bio"]`
* `[data-testid="test-user-time"]` - Continuously updates the epoch value
* `[data-testid="test-user-avatar"]`
* `[data-testid="test-user-social-links"]`
* `[data-testid="test-user-hobbies"]`
* `[data-testid="test-user-dislikes"]`

## 🔗 GitHub Repository
- **Github Repo**: https://github.com/MerlinTheWhiz/testable-profile-card
