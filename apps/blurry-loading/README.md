# JavaScript Project (Udemy: 50 Projects In 50 Days - Day 5)

## 📝 Description

A small JavaScript application built by following Day 5 of the Udemy course  
“50 Projects In 50 Days - HTML, CSS & JavaScript”.

## 🎯 Purpose

- Practice DOM manipulation with vanilla JavaScript
- Understand event handling in the browser
- Improve UI behavior implementation step by step

## 🚀 Features

- **Display loading percentage with blur and text opacity changes**: The percentage is displayed on the screen until the image becomes clear

- **Map multiple value ranges**: Convert the loading progress into blur and opacity values and apply them via JavaScript

- **Clearly separated roles of CSS and JavaScript**: JavaScript only handles events and class toggling, while CSS controls layout, transitions, and animations

## 🧩 Key Concepts Learned

### CSS

- **filter / blur / box-shadow**
  - Blur is rendered outside the element bounds
    - ⚠ Blur is cut off at the edge of the element
    - ⚠ White margins or missing parts appear on the edges of the screen
  - ✅ Solution - Make a slightly bigger background

    ```cs
    top: -Xpx;
    left: -Xpx;
    // should be changed with width / height
    width: calc(100% + 2Xpx);  // That depends on how much it has moved upwards and to the left
    height: calc(100% + 2Xpx);
    ```

- **z-index**
  - To place the image behind the text
    - `z-index: -1;`
  - ⚠ Should be set position property
    - `position: absolute;`

### JavaScript

- **setInterval & clearInterval**
  - setInterval: How often the function is executed and repeated endlessly
  - clearInterval: The condition to stop setInterval

- **Map different ratios**
  - convert one range of numbers to another range
  - This mapping function is from [stackoverflow](https://stackoverflow.com/a/23202637)

  ```js
  // Mapping opacity and blur according to the range of the reference (load)
  load = 0 → 100
  opacity = 0 → 1
  blur = 30 → 0
  ```

- **Passing values from JavaScript to CSS**
  - Each role in this case:
  - JS:
    - Advance time
    - Calculate numbers
    - Decide the current state and values

  - CSS:
    - What blur looks like
    - What opacity looks like

## 🛠 Tech Used

- HTML
- CSS
- JavaScript (ES6+)

## 📂 Project Structure

```text
blurry-loading/
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

## 🔧 Planned Improvements

- Use CSS custom properties (CSS variables) for blur and opacity values
- Replace `setInterval` with a time-based animation approach
- Improve accessibility (ARIA labels, reduced motion support)

## 💡 Notes

This project is part of my JavaScript fundamentals training.

- Detailed notes: [`notes/apps/blurry-loading.md`](../../notes/apps/blurry-loading.md)
