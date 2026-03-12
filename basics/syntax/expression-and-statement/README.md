# Expression and Statement

## What I learned

- What is the difference between an `expression` and a `statement`
- In JavaScript, there are places where only "expressions (values)" are allowed, such as inside template literals
- Expressions: produce values and can be used anywhere a value is expected
- Statements: perform actions and control program flow

## Expression (like words)

An **expression** is a piece of code that produces a value

- **Example:** `3 + 4` is an expression that JavaScript evaluates to `7`
- **Template Literals:** Expressions can be embedded inside `${}`

> 💡 Operations using operators (like math or comparisons) always result in an expression

### Examples

```js
12; // produces 12
3 + 4 + 5; // produces 12
("Hello, World"); // produces "Hello, World"
Math.random(); // produces a random number (Function calls are expressions!)
true && !false; // produces true
user === "Garuru" ? "Welcome" : "Who are you?"; // Ternary operator produces a value

// Since the ternary operator is an expression, it can be embedded:
console.log(`I have a ${hasCat ? "😺" : "🐶"}`);
```

> 💡 Expression Statement(expression + ;)
>
> - In JavaScript, an expression can also become a statement by adding a semicolon
> - `3 + 4;`, `Math.random();`
> - These are called expression statements
> - The expression is evaluated, but the resulting value is not used

## Statement (like sentences)

A **statement** is a piece of code that performs an action

- Unlike expressions, statements cannot be used where a value is expected
- **Example:** an `if...else` statement, a variable declaration

### Examples

```js
// Variable Declaration (Statement)
let userName = "Guest";
const displayMessage = "Nice to meet you!";

// Control Flow (Statements)
if (userName === "Guest") {
  console.log("Please log in");
}

switch (action) {
  case "create":
    createUser();
    break;
  case "update":
    updateUser();
    break;
  case "delete":
    deleteUser();
    break;
}

// Function Declaration (Statement)
function greet() {}
```

## Expression vs Statement

| Feature  | Expression                               | Statement                                                |
| :------- | :--------------------------------------- | :------------------------------------------------------- |
| Role     | Produces/Calculates a value              | Executes an action                                       |
| Analogy  | Like a "word" or "phrase"                | Like a full "sentence"                                   |
| Examples | `5`, `a + b`, `isTrue ? 1 : 0`, `func()` | `if`, `while`, `switch`, `for`, `const/let` declarations |

## Appendix: React JSX

In React JSX, **only expressions can be used** inside curly braces `{}`

```jsx
// ✅ OK (Expression)
{isLoggedIn ? <Dashboard /> : <Login />}

// ❌ Error (Statement)
{if (isLoggedIn) { ... }}
```

## Files

- index.js
  - Simple examples of expressions and statements
- README.md
  - Explanation of this folder
