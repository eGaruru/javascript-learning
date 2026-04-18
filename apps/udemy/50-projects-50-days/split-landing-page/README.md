# JavaScript Project (Udemy: 50 Projects In 50 Days - Day 7)

## 📝 Description

A small JavaScript application built by following Day 7 of the Udemy course  
“50 Projects In 50 Days - HTML, CSS & JavaScript”.

## 🎯 Purpose

- Practice DOM manipulation with vanilla JavaScript
- Understand event handling in the browser
- Improve UI behavior implementation step by step

## 🚀 Features

- **A split landing page whose width changes based on mouse position**: container element is added/removed hover class based on the mouse position

## 🧩 Key Concepts Learned

### CSS

- **Custom properties**
  - can define specific values ​​that can be reused throughout a style sheet

    ```css
    /* Entirety */
    :root {
      --left-bg-color: rgba(87, 84, 236, 0.7);
      --right-bg-color: rgba(43, 43, 43, 0.8);
    }

    /* Narrowed scope of custom property */
    section {
      --section-bg-light: #fff;
      --section-bg-dark: #000;
    }

    /* Use custum property with var() */
    .split.left::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: var(--left-bg-color);
    }
    ```

- **State Name**
  - Define the appearance of a particular state
  - Can see the style in any state

### JavaScript

- **mouseenter/mouseleave**
  - Controls adding or removing hover class based on the mouse position
  - Element position, NOT visual position

> 💡 Important point

> - **CSS: Define the appearance of the state**
> - **JS: Add/remove the "state name"**

## 🛠 Tech Used

- HTML
- CSS
- JavaScript (ES6+)

## 📂 Project Structure

```text
split-landing-page/
├── ps.jpg
├── xbox.jpg
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
