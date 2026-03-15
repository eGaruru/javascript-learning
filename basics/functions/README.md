# Functions

## What I learned

- What is a function?
- In JavaScript, there are 3 function types

## What is a function?

A function is a reusable block of code

> 💡 In JavaScript, functions are also values. They can be stored in variables and passed to other functions.

### Function types

1. Function Declaration

Features:

- It can be called even on a line before it is defined (hoisting)
- It is loaded before the code is executed

```js
// hoisting
const avg = calcAverage(10, 9, 8);

function calcAverage(a, b, c) {
  return (a + b + c) / 3;
}
```

2. Function Expression

Features:

- A function is assigned to a variable
- **It can be called after it is declared**

```js
// Cannot be called before the function is declared
// const avg = calcAverage(10, 9, 8);

const calcAverage = function (a, b, c) {
  return (a + b + c) / 3;
};

const avg = calcAverage(10, 9, 8);
```

3. Arrow Function

Features:

- It is also a function expression(ES6/ES2015~)
- If the function body has only one expression, the `return` keyword can be omitted
- **It can be called after it is declared**
- Arrow functions do not have their own `this`

```js
// Cannot be called before the function is declared
// const avg = calcAverage(10, 9, 8);

// Implicit return (No {} and no `return` keyword needed)
const calcAverage = (a, b, c) => (a + b + c) / 3;
const avg = calcAverage(10, 9, 8);

// When there are multiple lines (block body), the `return` keyword is REQUIRED
const getWinner = (scorePlayer1, scorePlayer2) => {
  if (scorePlayer1 > scorePlayer2) {
    return "Player 1 Wins!";
  } else if (scorePlayer2 > scorePlayer1) {
    return "Player 2 Wins!";
  } else {
    return "It's a draw!";
  }
};
```

> 💡 Most function types can be converted into another, but keep in mind that Arrow Functions behave differently in some advanced scenarios (like object methods)

### Function Anatomy

- **Function Body**: `{}` is called the function body
- **Parameter**: the place holder of function, like local variables
- **Argument**: the actual data(values) that is put in the place holder when calling a function
- **Return**: when return is executed, the function outputs a value and immediately stops execution
- **Calling / Running / Invoking**: Execute it by enclosing it in parentheses, like `functionName();`

> ⚠ Without (), the function is not executed: Instead, it refers to the function itself.

### ⚠ Common pitfalls

```js
// 1. Forgetting to call the function
const logger = (actionName) =>
  console.log(`Action[${actionName}] get started logging--------`);

// ❌ Not executed!!!
// logger("update"); DO NOT forget calling function

// 2. Unreachable code after `return`
const loggingException = function (exception) {
  const exceptionTypes = {
    TypeError: "TypeError",
    ReferenceError: "ReferenceError",
    SyntaxError: "SyntaxError",
    RangeError: "RangeError",
  };

  const exceptionType = exceptionTypes[exception] ?? "Unknown Error";
  return exceptionType; // function exits immediately and outputs a value

  // ❌ Unreachable code: This will NEVER be executed
  console.log(`Exception type[${exceptionType}] is happened----`);
};

// 3. Printing a function that has no return value
console.log(logger("delete"));
// Output:
// Action[delete] started logging-------- (from inside the function)
// undefined (when function returns any value, return undefined automatically)

// Printing the function reference
console.log(logger);
// Output: [Function: logger]
```

## Files

- index.js
  - Simple examples of functions
- README.md
  - Explanation of this folder
