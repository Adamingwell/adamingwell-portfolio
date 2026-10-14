# Software Systems 152-110-100 | Student Portfolio & Knowledge Base

![Build Status](https://img.shields.io/badge/Status-Active%20Development-0284c7?style=for-the-badge)
![Course](https://img.shields.io/badge/Course-Software%20Systems%20152--110--100-7c3aed?style=for-the-badge)
![Deliverable](https://img.shields.io/badge/Deliverable-01%20Checkpoint-c026d3?style=for-the-badge)
![Branch](https://img.shields.io/badge/Grading%20Branch-dev-059669?style=for-the-badge)
![License](https://img.shields.io/badge/Academic-WTC%20Coursework-38bdf8?style=for-the-badge)

---

## Executive Overview
This repository functions as a centralized personal portfolio and live laboratory archive developed for **Software Systems (152-110-100)** at **Western Technical College**, under the instruction of **Hannah Borreson**. 

The application serves two concurrent operational objectives:
1. **Student Engineering Portfolio:** Demonstrates modern frontend design, clean DOM structuring, semantic markup, and responsive UI principles through an eclectic, high-contrast visual architecture.
2. **Coursework Knowledge Base:** Documents foundational competencies acquired across all laboratory checkpoints, including hardware architecture, Git version control, the CSS Box Model, and asynchronous JavaScript DOM manipulation.

---

## Author Profile
* **Student:** Adam Ingwell
* **Institution:** Western Technical College
* **Program:** IT Systems Development / Software Systems
* **Contact:** `ingwella@students.westerntc.edu`
* **GitHub Profile:** [https://github.com/Adamingwell](https://github.com/Adamingwell)
* **Active Repository:** `https://github.com/Adamingwell/adamingwell-portfolio`

---

## Deliverable 01 Compliance Matrix

| Requirement Category | Rubric Specification | Implementation Verification |
| :--- | :--- | :--- |
| **Repository Naming** | Must contain student name without spaces | `adamingwell-portfolio` |
| **Branch Isolation** | Development completed and submitted via `dev` | Active on remote `dev` branch |
| **Root File Placement** | `index.html` & `README.md` in repository root | Verified in `/` |
| **Subdirectory Structure** | Specific folders: `./css`, `./js`, `./images`, `./pages` | Strict 4-folder separation enforced |
| **Heading Hierarchy** | At least one heading (`<h1>` through `<h6>`) | Implemented `<h1>`, `<h2>`, `<h3>`, `<h4>` |
| **Typography & Text** | At least one paragraph (`<p>`) and line break (`<br>`) | Present across Hero and About sections |
| **Hyperlinks** | At least one functional anchor (`<a>` with `href`) | Outbound GitHub profile & internal notes route |
| **Media Assets** | At least one image (`<img>` with `src` and `alt`) | `images/headshot.png` (renders 140x140px) |
| **Structural Containers**| At least one `<div>` tag | Semantic flex/grid wrapper containers |
| **Interactive Form** | At least one `<button>` and `<input>` (typed) | `<input type="email">` and dispatch `<button>` |
| **CSS Properties** | `color`, `background-color`, `font-family`, `font-size`, `width`, `height` | Fully declared in `css/styles.css` |
| **CSS Box Model** | `margin`, `padding`, `border` | Fully demonstrated on all `.card` elements |

---

## Repository Architecture

```text
adamingwell-portfolio/
│
├── index.html                  # Root landing page & student portfolio
├── README.md                   # Repository documentation & compliance matrix
│
├── css/
│   └── styles.css              # Custom styling (Eclectic palette, CSS Box Model)
│
├── js/
│   └── script.js               # Client-side input validation & event listeners
│
├── images/
│   └── headshot.png            # Profile asset rendered via index.html
│
└── pages/
    └── notes.html              # Coursework archive & technical references