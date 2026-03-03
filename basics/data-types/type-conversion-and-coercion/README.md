# JavaScript Type Conversion and Coercion

## What I learned

- In JavaScript, there are two ways a data type can be converted to another data type
- Understanding the difference is crucial for writing predictable code

> 💡 What is the difference?
> Type Conversion: Explicitly converting it yourself
> Type Coercion: JavaScript converts data type behind automatically

### Type Conversion(Explicit)

- JavaScript fundamentally converts values to one of three primitive data types

| Target Type | Code Example              | Common Use Case                          |
| :---------- | :------------------------ | :--------------------------------------- |
| **String**  | `String(value)`           | Concatenating strings, displaying UI     |
| **Number**  | `Number(value)`, `+value` | Arithmetic or comparison expressions     |
| **Boolean** | `Boolean(value)`          | Making decisions in `if/else` statements |

> ⚠ **Good to know (The null/undefined pitfalls):**
> Null and undefined cannot be converted to
> `Number(null)` results in `0`, whereas `Number(undefined)` results in `NaN`

### Type Coercion(Implicit)

- If different data types are used together in an expression, JavaScript will implicitly coerce one data type to match the other

- **String and Number**
  - The `+` operator coerces operands to **strings** when at least one operand is a string
    - Example: `"I am " + 23 + " years old"` ➔ `23` is coerced to a string
  - The `-`, `*`, and `/` operators coerce operands to **numbers**, even if they are strings
    - Example: `"23" - "10" - 3` ➔ `"23"` and `"10"` are coerced to numbers, resulting in `10`

## Files

- index.js
  - Simple examples of type Conversion and coercion
- README.md
  - Explanation of this folder
