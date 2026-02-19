# JavaScript Project (Udemy: 50 Projects In 50 Days - Day 6)

## 📝 Description

A small JavaScript application built by following Day 6 of the Udemy course  
“50 Projects In 50 Days - HTML, CSS & JavaScript”.

## 🎯 Purpose

- Practice DOM manipulation with vanilla JavaScript
- Understand event handling in the browser
- Improve UI behavior implementation step by step

## 🚀 Features

- **content elements appear with a slide animation when the user scrolls down**: box elements are added/removed `.show` class based on the scroll position

- **The behavior is separated based on even/odd elements**: In CSS, elements are selected and styled differently with `:nth-of-type()`

## 🧩 Key Concepts Learned

### CSS

- **nth-of-type(even)**
  - the elements of even(odd) can be selected and set styles
  - Example:

    ```css
    /* Even paragraphs, even can be replaced 2n */
    p:nth-of-type(even) {
      color: red;
    }

    /* Odd paragraphs, odd can be replaced 2n + 1 */
    p:nth-of-type(odd) {
      color: red;
    }

    /* First paragraph */
    p:nth-of-type(1) {
      font-weight: bold;
    }
    ```

### JavaScript

- **getBoundingClientRect**
  - Get the element's position based on the viewport
    - ⚠ Includes padding and border width
    - `left(x)`, `top(y)`, `right`, `bottom`, `width`, `height`
  - Reference from MDN:
  <p align="left">
  <img src="https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect/element-box-diagram.png" width="400">
  </p>

- **triggerBottom**
  - `const triggerBottom = window.innerHeight / 5 * 4` -> set trigger line at around 80% of the screen
  - `window.innerHeight`: Overall browser window height (including toolbar and address bar)
  - `window.innerWidth`: Overall browser window width
  - ✅ NOT use fixed value -> Responsive

## 🛠 Tech Used

- HTML
- CSS
- JavaScript (ES6+)

## 📂 Project Structure

```text
scroll-animation/
├── index.html
├── style.css
├── script.js
└── README.md
```

## ▶️ How to Run

Open index.html in your browser
(or use VS Code Live Server for convenience)

## 📚 Source

This app was built by following:

[50 Projects In 50 Days - HTML, CSS & JavaScript](https://www.udemy.com/course/50-projects-50-days/)

## 💡 Notes

This project is part of my JavaScript fundamentals training.

- Detailed notes: [`notes/apps/scroll-animation.md`](../../notes/apps/scroll-animation.md)
