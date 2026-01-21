# JavaScript Operators

## What I learned

- JavaScript provides operators,
  - arithmetic
  - assignment
  - comparison
  - logical
  - ternary

> 💡Operators are used to transform values, combine multiple values, or perform various operations on values

## Arithmetic Operators

- `+ - * ** / % ++ --`
- Used for calculations
- `+` can use to combine string
- `++` and `--` are arithmetic operators with side effects (they reassign a new value)
  - They require a mutable variable (`let`) and cannot be used with `const`
  - In an expression, `i++` and `i--` return the value **before** increment/decrement
  - In an expression, `++i` and `--i` return the value **after** increment/decrement

## Assignment Operators

- `= += -= *= **= /= %= &&= ||= ??=`
- Assign values to variables
- The result of the expression is stored in the variable
- Assignment operators always reassign the variable
  - They require a mutable variable (`let`)
  - Logical assignment operators (`&&=`, `||=`, `??=`) conditionally reassign values,
    therefore they cannot be used with `const`

- `&&=` — Assign only if truthy

- `||=` — Assign only if falsy

- `??=` — Assign only if null or undefined

## Comparison Operators

- `=== !== > < >= <=`
- Always return boolean values, `true` or `false`
- Very useful when taking decisions based on conditions
- The result should be stored in a variable

## Logical Operators

- `&& || !`
- Used in conditions

## Ternary Operator

- `condition ? value1 : value2`

> 💡 console.log can display multiple values ​​at the same time

## Files

- index.js
  - Simple examples of operators
- README.md
  - Explanation of this folder
