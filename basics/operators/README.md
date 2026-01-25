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

- `== === != !== > < >= <=`
- Use to compare two values
- Always return boolean values, `true` or `false`
- Very useful when taking decisions based on conditions(if / else, for / while)
- The result can be used directly in conditions or stored in a variable
- Strings are compared alphabetically(Unicode)

- `==` vs `===`, `!=` vs `!==`
  - `==`, `!=` only compare values ​​and does not take into account differences in data types
  - `===`, `!==` compare values and data types, judge strictly

> 💡 Best practice: Always use `===`, `!==` by default to avoid to misjudgment

- Comparing different types
  - When using `==`, JavaScript performs type coercion (automatic type conversion)
  - For `>` and `<`:
    - If both values are strings → string (Unicode) comparison
    - Otherwise → values are converted to numbers
  - Empty string converts to `0`
  - A non-numeric string converts to NaN which is always false

### ⚠ How string comparison works

When comparing strings using `>` or `<`, JavaScript compares characters based on their Unicode values, not dictionary order

- Uppercase letters come before lowercase letters (`"A" < "a"` → true)
- `"20" > "3"` is false because it compares strings, not numbers

### ⚠ Special cases

- `NaN` is not equal to anything, even itself  
  `NaN === NaN` → false

- `null` and `undefined` are equal only with `==`  
  `null == undefined` → true  
  `null === undefined` → false

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
