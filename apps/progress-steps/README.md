# JavaScript Project (Udemy: 50 Projects In 50 Days - Day 2)

## 📝 Description

A small JavaScript application built by following Day 2 of the Udemy course  
“50 Projects In 50 Days - HTML, CSS & JavaScript”.

## 🎯 Purpose

- Practice DOM manipulation with JavaScript
- Understand event handling in the browser
- Improve UI behavior implementation step by step

## 🚀 Features

- Interactive UI based on user actions(push Button)
- Switch between enabled and disabled based on state
- Improved UX when clicking
- By the length of the progress bar and the color of the circle, can be understood how far progressed

## 🧩 Key Concepts Learned

- State management with the `active` class
- DOM selection (`querySelector`, `querySelectorAll`)
- Event listeners (`addEventListener`)
- NodeList manipulation and use index from list(`circles.forEach(circle, **idx**)` for adding/removing classes)
- Updating UI based on state (circle, progress bar, button) and calculate state value and NodeList.length
- Property of EL `disabled` toggle
- Color management with CSS variables

## 🛠 Tech Used

- HTML
- CSS
- JavaScript (ES6+)

## 📂 Project Structure

```text
progress-steps/
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

## 🔍 Custom Improvements & Debugging Notes

While following the Udemy course, I encountered an unexpected behavior in the progress bar logic

### ❗Issue

When clicking the Next button for the first time, the progress jumped from **Step 1** directly to **Step 3** instead of moving to Step 2

### 💣 Cause

- The progress calculation relied on this selector:
- `document.querySelectorAll('.active')`

- This caused issues because:
  1. The selector searched the entire document
  2. Browser extensions injected additional elements with the .active class
  3. As a result, the number of .active elements was greater than expected

> 👉 The root cause was overly broad DOM querying.

### ✅ Solution

1. 【Choosed】 Refactored the logic and caluculate with state variable `currentActive`

- `progress.style.width =
((currentActive - 1) / (circles.length - 1)) * 100 + '%'`

2. Refactored the querySelector, narrow your search criteria

- `const actives = document.querySelectorAll('.circle.active')`

### ✨ Learning Points

Generic class names like .active can easily conflict with external elements

- DOM queries should be scoped or avoided when possible

- UI state should be controlled by explicit state variables, **not inferred from the DOM**

## 💡 Notes

This project is part of my JavaScript fundamentals training.

- Detailed notes: [`notes/apps/progress-step.md`](../../notes/apps/progress-step.md)
