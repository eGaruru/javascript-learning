# JavaScript Truthy-Falsy

## What I learned

- In JavaScript, every value is either truthy or falsy
- In a Boolean context, values are treated as `true` or `false`

> 💡 A Boolean context is any place where JavaScript expects a true or false value (e.g., `if`, `while`, `!`, logical operators)

## Advantages of Truthy and Falsy Values

- Can be checked if a value exists or is not empty using just `if (value)`
- `&&` and `||` can be used to write guard conditions and default values
- Useful for form input, API responses (and conditional rendering in React!)

### Truthy Values

- A truthy value is a value that is considered true when encountered in a Boolean context
- All values ​​except falsy values(`false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`) are true

### Falsy Values

- A falsy value is a value that is considered false when encountered in a Boolean context
- Falsy values are in following: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`

### Common use cases

- `if (value)` to check existence
- `value && doSomething()` guard pattern
- `value || defaultValue` default for falsy values
- `value ?? defaultValue` default only for null/undefined

### ⚠ Common pitfalls

- `0`, `""` are falsy (be careful with `||`)
- `[]` and `{}` are truthy
- `NaN` is falsy, but `NaN === NaN` is always false

## Files

- index.js
  - Simple examples of truthy values and falsy values
- README.md
  - Explanation of this folder
