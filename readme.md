# Software Systems 152-110-100 | Student Portfolio & Knowledge Base

**Author:** Adam Ingwell  
**Institution:** Western Technical College  
**Course:** Software Systems (152-110-100)  
**Instructor:** Hannah Borreson  
**Deliverable:** Final Project Deliverable 02 Checkpoint  
**Target Branch:** `dev`  

---

## Project Overview
This website serves as a personal student engineering portfolio and an evolving course knowledge base. It highlights practical competency in semantic HTML5 structure, modular CSS Box Model layouts, Git branch management workflows, and interactive DOM manipulation via external JavaScript. The user interface features an eclectic jewel-toned dark palette (electric cyan, amethyst, fuchsia, cobalt, and emerald) designed for accessibility and high contrast without using orange.

---

## Major Website Pages & Sections

1. **Portfolio Home (`index.html`)**
   * **Hero & Identity:** Professional profile image, academic title, and direct links to GitHub and course notes.
   * **About Me:** Overview of current studies at Western Technical College, software engineering goals, and technical philosophy.
   * **Academic Highlights:** Summaries of completed course labs, including PC hardware workstation architecture (Lab 01) and JavaScript DOM diagnostics (Lab 07).
   * **Developer Dispatch (Interactive):** Form component utilizing external JavaScript for real-time input validation and dynamic page content updates.

2. **Course Knowledge Base (`pages/notes.html`)**
   * **Version Control Notes:** Principles of distributed Git workflows, feature branch isolation, staging, and remote syncing.
   * **CSS Specificity & Box Model:** Reference guide covering selector weights, cascading priority, and box model spacing (margin, border, padding, content).
   * **JavaScript Runtime Mechanics:** Documentation of DOM traversal, strict equality operators (`===`), and event-driven scripting.

---

## JavaScript Deliverable 02 Compliance
* **External Script:** Hosted at `./js/script.js` and loaded before `</body>`.
* **Variables:** Declared using `let` (submission counter) and `const` (DOM element handles).
* **Functions:** Structured execution via `isValidEmail()` and `handleSubscription()`.
* **Element Querying:** Elements retrieved using `document.querySelector('#submit-btn')`.
* **Event Handling:** Explicit `click` event bound to `<button id="submit-btn">`.
* **Decision Logic:** Implemented using `if / else` conditional branches.
* **Content Modification:** Dynamically mutates `#status-message` text and color attributes based on user input.

---

## AI Usage Statement
AI tools were used strictly for code verification, debugging assistance, and testing edge cases during development. All website architecture, semantic HTML structure, custom CSS styling, and JavaScript event logic were written, implemented, and reviewed directly by the student before being verified across local browser environments and pushed via the Git CLI.