# JavaScript Operator Precedence

## What I learned

- JavaScript evaluates expressions based on operator precedence
- Operators also have associativity (left-to-right or right-to-left)
- It is important to have a rough understanding of which operator is evaluated first

### Operator precedence

- JavaScript has a clearly defined `operator precedence` [MDN-Table](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#%E4%B8%80%E8%A6%A7%E8%A1%A8)
- In general, operators are evaluated in the following order: Arithmetic > Comparison > Logical > Assignment (This is a simplified rule)

- Parentheses `()` have the highest precedence

> 💡 Use parentheses actively to avoid bugs and improve readability

### Associativity

- Operators have an evaluation order
- Arithmetic operators(`+ - * / %`) are evaluated from left to right
  - `**` is evaluated from right to left
- Comparison operators are evaluated from left to right
- Logical operators are evaluated from left to right
- Assignment operators are evaluated from right to left

### Precedence vs Associativity

- Precedence determines **which operator is evaluated first**
- Associativity determines **the order of evaluation when operators have the same precedence**

### Short-circuit evaluation

- Logical operators (AND`&&`, OR`||`) use short-circuit evaluation
- Expressions may stop evaluating before reaching the end
  - `false && someFunction()` → `someFunction()` is NOT executed

  - `true || someFunction()` → `someFunction()` is NOT executed

### Common pitfalls

- `a && b || c` can be confusing without parentheses
- **Always use parentheses when mixing logical operators**
  - `(a && b) || c`
  - `a && (b || c)`

## Files

- index.js
  - Simple examples of operator precedence
- README.md
  - Explanation of this folder
