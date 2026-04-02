# Loops & Iteration

## What I learned

- How to use loops and process data in the loop
- How to choose between `for`, `while`, `do...while` and array methods

## Loops

**Why we need loops?**

- Without Loops, the same code needs to be written repeatedly, making maintenance difficult
- Loops automate repetitive processes and make code more maintainable

> 💡 loops (`for`,`while`, `do...while`) are also the control structure like `if...else` and `switch`

### `for` loop

- **When to use:**
  - When you know exactly how many times process needs to be repeated in advance

- A 'for' loop consists of three parts: `initialization + conditions + updates`
  1. Initialize: e.g, `let i = 0;`
  2. Condition: e.g, `i < array.length;`
  3. Updating state: e.g, `i++;` or `i--;`

- **Basic Syntax**

```js
for (let i = 1; i < 10; i++) {
  console.log(`Count: ${i + 1}`);
}
```

### `while` and `do...while` loop

- **When to use:**
  - When you do NOT know the exact number of iterations
  - When you want to keep looping during the condition is true

  > 💡 `do...while`: when you want to run a code block **at least once**

- A 'while' loop consists of three parts
  1. Initialize: e.g, `let num = 0;` **Out of the while loop**
  2. Condition: e.g, `while(condition)`
  3. Updating state: e.g, `num += 1;` **In the while loop**

- A 'do...while' loop consists of three parts
  1. Initialize: e.g, `let i = 0;` **Out of the while loop**
  2. Updating state: e.g, `do{ statement }`
  3. Condition: e.g, `while(condition)`

- **Basic Syntax**

```js
const getRandomInt = function (max) {
  // Math.random() * max: 0 <= random < max
  return () => Math.trunc(Math.random() * max) + 1;
};

const getRandomDice = getRandomInt(6);

// - while
let numWhile = getRandomDice(); // Initialize

// When num is 6 at the beginning, while loop is NOT executed
while (numWhile !== 6) {
  numWhile = getRandomDice(); // Updating state
  console.log(`Current Number: ${numWhile}`);
  if (numWhile === 6) console.log("Stop looping");
}

// 👉 When the condition is **false** at the beginning, while loop is not executed

// - do...while
let numDoWhile = 6; // Initialize

do {
  numDoWhile = getRandomDice(); // Updating state
  console.log(`Current Number: ${numDoWhile}`);
  if (numDoWhile === 6) console.log("Stop looping");
} while (numDoWhile !== 6);

// 👉 The loop will always be executed at least once
```

## Files

- index.js
  - Simple examples of loops
- README.md
  - Explanation of this
