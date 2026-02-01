# JavaScript Operators

## What I learned

- JavaScript provides operators,
  - arithmetic
  - assignment
  - comparison
  - logical
  - ternary

> 💡Operators are used to transform values, combine multiple values, or perform various operations on values

> 💡 console.log can display multiple values ​​at the same time

## Arithmetic Operators

- `+ - * ** / % ++ --`
- Used for calculations
- `+` can be used to combine strings
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
  - `==`, `!=` only compare values ​​and do not take into account differences in data types
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
- Used for conditions and control flow
- Logical operators return one of the operands, not just Boolean
  - With non-Boolean operands, they return one of the operands (not a boolean)
  - When Boolean operands are used, the result is a Boolean

- `&&`(AND) returns the first falsy value or the last value
- `||`(OR) returns the first truthy value or the last value
- `!`(NOT) converts a value to Boolean and negates it

### Short-circuit evaluation

- JavaScript stops evaluating as soon as the result is determined
  - **`&&` (AND):** Stops at the first **Falsy** value
    - `false && doSomething()` → `doSomething` is **never** executed
  - **`||` (OR):** Stops at the first **Truthy** value
    - `true || doSomething()` → `doSomething` is **never** executed

> 💡 **Why it matters:** This is commonly used for "Guard Clauses" (to prevent errors) and "Default Values".

### Common use cases

- Guard pattern
  - `value && doSomething()` guard pattern
  - `if (value)` to check existence
- Toggling a boolean value
- Check the number of elements in an array
  - `if (!items.length) doSomething()`
  - `const hasItems = !!cartItems; // 0 (falsy) `
- Setting default value
  - `value || defaultValue` default for falsy values
  - `value ?? defaultValue` default only for null/undefined

### ⚠ Common pitfalls

- console.log() returns undefined
- NaN is not equal to itself
  - 🆖`Number(value) === NaN`
  - 🆗`Number.isNaN(value)`
- `0`, `""` are falsy (**be careful with **`||`)
- `[]` and `{}` are truthy
- Use `??` when 0 or "" are valid values

### What is an Operand?

- An **operand** is the data (the "what") that an operator acts on
- **Example:** `const x = 5 + 8;`
  - `5` and `8` are the **operands**.
  - `+` and `=` are the **operators**.

## Ternary Operator

- `condition ? value1 : value2`

> 💡 **Tip:** Operators can be classified by the number of operands they take:
>
> - **Unary operator:** Takes 1 operand (e.g., `x++`, `!true`)
> - **Binary operator:** Takes 2 operands (e.g., `5 + 8`, `x > y`)
> - **Ternary operator:** Takes 3 operands (e.g., `condition ? a : b`)

## Files

- index.js
  - Simple examples of operators
- README.md
  - Explanation of this folder
