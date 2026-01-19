# JavaScript Data Types

## What I learned

- In JavaScript, values are either objects or primitives.
- JavaScript has 7 primitive data types:
  1. `number` — represents numeric values (integers and decimals)
  2. `string` — represents text (use `""` or `''`)
  3. `boolean` — represents `true` or `false`
  4. `undefined` — a declared variable that has **not yet been assigned a value**
  5. `null` — an **intentional** empty value, set by the developer
  6. `symbol` — a unique and immutable value (ES2015)
  7. `BigInt` — for integers too large for the `number` type (ES2020)

- Primitive types are immutable and cannot be changed.
  - A new value can be assigned, but the original value itself cannot be modified.
  - Objects, arrays, and functions are mutable.

- JavaScript has dynamic typing:
  - Data types are determined automatically when values are assigned.
  - Variables do not have fixed types.
  - Values have types, not variables.

- Check the type of a value using the `typeof` operator.
  - The output of `typeof` is always a string.

  ⚠ `typeof null` returns `"object"`

## Files

- index.js
  - Simple examples of data types
- README.md
  - Explanation of this folder
