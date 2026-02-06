# JavaScript Project (Udemy: 50 Projects In 50 Days - Day 3)

## 📝 Description

A small JavaScript application built by following Day 3 of the Udemy course  
“50 Projects In 50 Days - HTML, CSS & JavaScript”.

## 🎯 Purpose

- Practice DOM manipulation with JavaScript
- Understand event handling in the browser
- Improve UI behavior implementation step by step

## 🚀 Features

- **Rotating UI**: When the open button is clicked, the entire content rotates 20 degrees and the navigation appears

- **Fixed Control Button**: Uses `transform-origin: top left` to keep the open/close button fixed during rotation

- **State Management**: Changes UI state based on the `.show-nav` class

- **Interactive Buttons**: Uses Font Awesome icons for an intuitive open/close UI

## 🧩 Key Concepts Learned

### HTML

- **Component Separation**: Dividing the layout into `.container` (main content) and `nav` (navigation)
- **Icon Integration**: Using Font Awesome for intuitive UI controls (open / close)

```text
container
├── circle-container

nav
├── ul
```

### CSS

- `transform-origin`: **change axis of rotate**
  - Fixes the main content to the top-left corner
  - Rotates the layout around the top-left origin
  - Rotation animation is controlled by the `.show-nav` state

- `overflow-x: hidden`
  - Hides horizontal scrolling only

- Creating a half circle
  - circle size: `200px`
  - position: `top: -100px, left: -100px`

- transform + transition-delay
  - Prevents all elements from moving at once
  - Creates a smoother, ordered animation

### JavaScript

- Adds and removes the .show-nav class on the container based on user interaction (button clicks)
- Explicit state control using separate Open / Close buttons
  - Each button has a dedicated role (`add` / `remove`) instead of toggling
  - Improves readability and makes UI behavior easier to understand

> 💡 Important point
>
> - **CSS: How to change**
> - **JS : When to change**

## 🛠 Tech Used

- HTML
- CSS
- JavaScript (ES6+)

## 📂 Project Structure

```text
rotating-navigation/
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

- Detailed notes: [`notes/apps/rotating-navigation.md`](../../notes/apps/rotating-navigation.md)
