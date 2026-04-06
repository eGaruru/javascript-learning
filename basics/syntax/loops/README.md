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

### `for` vs `while` vs `do...while`

|            | When                                                                              |
| :--------- | :-------------------------------------------------------------------------------- |
| for        | When you know the exact number of iterations or need an index                     |
| while      | When you do not know the exact number of iterations                               |
| do...while | When you do not know the exact number of iterations but need to run at least once |

### 💡 Which Loop Should I Use?

1. To transform an array → `map()`
   - Return a new array
2. To filter by a condition → `filter()`
   - Return a new filtered array
3. To sum, etc. → `reduce()`
   - Accumulates values into a single result
4. To only perform side effects → `forEach()`
   - Does not return a value
5. To perform a special conditional loop → `while`
   - Flexible but requires careful condition management
6. To require an index → `​​for`
   - Useful for index-based operations
7. To perform a process at least once → `do...while`
   - Guarantee at least one execution

### Modern Syntax(ES6+)

These provide cleaner and more readable alternatives to traditional loops

- Not need to update state of variables
- Not need index to take a value from an array

- **`for...of`**
  - Get the **values**: For looping iterable objects like **Arrays** (strings, Maps, Sets)
  - Syntax: `for (variable of iterable) { statement }`

```js
const numbers = [1, 2, 3, 4];
for (const num of numbers) {
  console.log(num);
}
// Output:
// 1
// 2
// 3
// 4
```

👉 Use `for...of` or array methods (`map`, `forEach`) for arrays instead

- **`for...in`**
  - Get the **keys**: For looping the enumerable properties of an **Object**
  - Syntax: `for (variable in object){ statement }`

```js
const user = { id: 1, firstName: "Jiro", country: "Japan" };
for (const key in user) {
  console.log(`[User Info] ${key}: ${user[key]}`);
}
// Output:
// [User Info] id: 1
// [User Info] firstName: Jiro
// [User Info] country: Japan
```

👉 `for...in` is not recommended for arrays because it iterates over keys (indexes as strings)

### ⚠️ Common Pitfalls

- Infinite loops cased by...
  1. incorrect consitions(especially in `for`)
  2. forgetting to update loop variables(especially in `while` and `do...while`)

- Use `for...of` and `for...in` appropriately
  1. `for...of` → **Array**(strings, Maps, Sets)
  2. `for...in` → **Object**

## Files

- index.js
  - Simple examples of loops
- README.md
  - Explanation of this
