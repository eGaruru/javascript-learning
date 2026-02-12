# JavaScript Operator Precedence

## What I learned

- JavaScript evaluates expressions based on operator precedence
- Operators also have associativity (left-to-right or right-to-left)
- It is important to have a rough understanding of which operator is evaluated first

## Operator precedence

- JavaScript has a clearly defined [Operator Precedence Table (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table).
- In general, operators are evaluated in the following order (Simplified):
  1.  **Grouping**: `()`
  2.  **Unary**: `++x`, `!`, `typeof`, `delete`
  3.  **Exponentiation**: `**` (Right-to-left)
  4.  **Multiplicative**: `*`, `/`, `%`
  5.  **Additive**: `+`, `-`
  6.  **Comparison**: `<`, `>`, `===`, `!==`
  7.  **Logical**: `&&`, `||`, `??`
  8.  **Conditional (Ternary)**: `? :`
  9.  **Assignment**: `=`, `+=`, etc.

- Parentheses `()` have the highest precedence

> 💡 Use parentheses `()` actively to prevent bugs and improve readability

## Associativity

- Operators have associativity (grouping direction)
- Associativity determines how operators of the same precedence are grouped
- It defines the **implicit parenthesization`()`**, not the execution order
- It does NOT affect the order in which operands are evaluated

- Arithmetic operators(`+ - * / %`) are left-associative
  - `**` is right-associative
  - e.g. `4 ** 3 ** 2` === `4 ** (3 ** 2)`
- Comparison operators are left-associative
- Logical operators are left-associative
- Conditional operator is right-associative
- Assignment operators are right-associative

### Operand Evaluation Order vs Precedence vs Associativity

- **Operand Evaluation Order**: Always **Left-to-Right** (No exceptions)
- **Precedence**: Determines **which operator is evaluated first**
- **Associativity**: Determines the grouping order when operators have the **same precedence**

### Short-circuit evaluation

- Logical operators (`&&`, `||`, `??`, `?.`) utilize short-circuit evaluation
- first left operand is always evaluated
- Evaluation stops as soon as the result is determined
  - `false && someFunction()` → `someFunction()` is **NOT** executed
  - `true || someFunction()` → `someFunction()` is **NOT** executed
  - `console.log(C() || (B() && A()));` C() returns true, then || stopps expression

> 💡 Most operators evaluate all operands
> Logical operators (`&&`, `||`, `??`, `?.`) may stop evaluation early due to short-circuit behavior

### ⚠ Common pitfalls

- Mixing logical operators without parentheses can be confusing
  - `a && b || c`(hard to read)
- **Best Practice:** Always use parentheses for clarity
  - `(a && b) || c`
  - `a && (b || c)`

## Rule of Thumb

- Always use parentheses when mixing logical operators
- Never rely on implicit grouping for readability
  - `(a && b) || c`
  - `a && (b || c)`
- Do not mix `??` with `&&` or `||` without parentheses, use`()`!
  - `(a || b) ?? c`
  - `a || (b ?? c)`

- If expression looks complex → rewrite using `if/else` statements

## Appendix

### Expression Evaluation Flow

1. All operands are evaluated from left to right.
2. Operator precedence determines how expressions are grouped
3. Associativity determines grouping when operators share the same precedence
4. Operators are applied based on that grouping

## Files

- index.js
  - Simple examples of operator precedence
- README.md
  - Explanation of this folder
