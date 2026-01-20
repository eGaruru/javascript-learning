# JavaScript Variables

## What I learned

- JavaScript provides three ways to declare variables: let, const, var

### `let` — use only when a value must change

- Can be reassigned
- Useful when declaring empty variables that receive a value later

### `const` — use by default

- Requires an initial value
- Cannot be reassigned
- ⚠ Object contents **can** be changed

### ⚠ `var` — should be avoided

- Old way of declaring variables (pre-ES6)
- Has function scope
- Can cause unexpected behavior

### ⚠ Variables without declaration — must be avoided

- Creates an implicit global variable
- The variable becomes a property of the global object
- Can cause unexpected behavior and bugs

> 💡 Best practice: Always use `const` by default, and use `let` only when reassignment is necessary.

## Files

- index.js
  - Simple examples of variables
- README.md
  - Explanation of this folder
