# FT-WEB-101 — Task 1: Profile Page

**Student Name:** Ahmed Mahmoud Ahmed Elhossieny  
**Student ID:** 224101285  
**Course:** Field Training I (`FT-WEB-101`) — Fall 2026–2027  
**University:** New Mansoura University, Faculty of Computer Science & Engineering  

## Project Structure

```text
FT-WEB-101-Task1-224101285/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── me.jpg
└── README.md
```

## Features Implemented

- **Semantic HTML Structure:** Uses `<header>`, `<main>`, and `<footer>` with a single `<h1>` heading and student info comment at the top of `index.html`.
- **Navigation Bar:** Built with Flexbox (`display: flex`), showing the student name on the left and section links (`About`, `Skills`, `Contact`) on the right.
- **Profile Section:** Displays `images/me.jpg` with descriptive `alt` text and a brief bio.
- **Skills & Hobbies Cards:** Three cards arranged in a row using Flexbox with `gap` and hover styling.
- **Visitor Form:** Includes `Name` and `Email` inputs with matching `<label for="...">` and `id` attributes, prevents page reload on submit, rejects empty emails, and displays a personalized greeting.
- **Dark Mode Toggle:** Single `<button id="theme-toggle">` that toggles `body.dark` in `js/script.js` using CSS custom properties defined on `:root` and `body.dark`.
- **Footer:** Single copyright line.

## Technologies Used

- HTML5
- CSS3 (Flexbox & CSS Variables)
- Vanilla JavaScript
