# JavaScript Project (Udemy: 50 Projects In 50 Days - Day 4)

## 📝 Description

A small JavaScript application built by following Day 4 of the Udemy course  
“50 Projects In 50 Days - HTML, CSS & JavaScript”.

## 🎯 Purpose

- Practice DOM manipulation with vanilla JavaScript
- Understand event handling in the browser
- Improve UI behavior implementation step by step

## 🚀 Features

- **Simple State Management**: Changes UI state based on the `.active` class

- **Automatic input focus**: Improves UX by focusing the input when the search button is clicked

- **Clearly separated roles of CSS and JavaScript**: JavaScript only handles events and class toggling, while CSS controls layout, transitions, and animations

## 🧩 Key Concepts Learned

### HTML

- **Simple structure**: `search` is placed as the parent and `input`, `button` are placed as the child components

### CSS

- **Design for assigning state classes to parents**
  - the parent component has the active class, the child component changes
  - e.g. `.active` class: `input` changes its width, button changes its X position (`translateX`)

- **width + transform** is a tried-and-tested pattern
  - Resize: width
  - Reposition: transform

- How to set elements in center
  - `display: flex`
  - `align-items: center`
  - `height: 100vh`

- Initial view shows only the button
  - The input and button have the same size before the parent gets the `.active` class
  - Transitions are defined in the initial (before-change) CSS

- ⚠ Attention **`outline: none`**
  - `outline: none` is NOT recommended
  - Diminishing the usability for keyboard users
  - Reduce accessibility

### JavaScript

- Toggling the `active` class on the search element based on user interaction (button clicks)
  - No need to separate roles here; simple toggling is sufficient
  - In this case, the search scope is already narrow, so this approach is safe
  - Reference -> [Progress Steps: Custom Improvements & Debugging Notes](./../progress-steps/README.md))

- `input.focus()`
  - User friendly(**Improved UX**), because user can writing text faster

> 💡 **Why toggling matters:**
>
> - Keeps the logic simple and readable
> - Reduces conditional branching
> - Works well when state is binary (open / closed)

## 🛠 Tech Used

- HTML
- CSS
- JavaScript (ES6+)

## 📂 Project Structure

```text
hidden-search/
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

- Add keyboard support
- Improve state handling with JS
- Refactor event handling logic

## 💡 Notes

This project is part of my JavaScript fundamentals training.

- Detailed notes: [`notes/apps/hidden-search.md`](../../notes/apps/hidden-search.md)
