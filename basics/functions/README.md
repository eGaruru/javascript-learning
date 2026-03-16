# Functions

## What I learned

- What is a function?
- In JavaScript, there are 3 function types
- The concept of **First-Class Functions** (Functions are values!)

## What is a function?

- A function is a reusable block of code
- Functions are also values
- They can be stored in variables, passed as arguments to other functions, and returned from functions

### Function types

#### 1. Function Declaration

**Basic syntax:**

- `function fn(){}`

**Features:**

- It can be called even on a line before it is defined (hoisting)
- It is loaded before the code is executed

```js
// hoisting
const avg = calcAverage(10, 9, 8);

function calcAverage(a, b, c) {
  return (a + b + c) / 3;
}
```

#### 2. Function Expression

**Basic syntax:**

- `const fn = function(){}`

**Features:**

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

#### 3. Arrow Function

**Basic syntax:**

- `const fn = ()=>{}`

**Features:**

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
- **Parameter**: a placeholder for values passed into a function, like local variables
- **Argument**: the actual data(values) that is put in the place holder when calling a function
- **Return**: when return is executed, the function outputs a value and immediately stops execution
- **Calling / Running / Invoking**: Execute it by enclosing it in parentheses, like `functionName();`

> ⚠ Without (), the function is not executed: Instead, it refers to the function itself

### First-Class Functions

In JavaScript, functions are treated as values
This concept is called **First-Class Functions**

- assigned to variables
- passed as arguments
- returned from other functions

```js
// returned from other functions
const sayGreeting = function () {
  return (greetingMessage, timeSlot, firstName) =>
    console.log(`${greetingMessage(timeSlot)} ${firstName}`);
};

const greeting = function (timeSlot) {
  const timeSlots = {
    morning: "Good morning!",
    afternoon: "Good afternoon!",
    evening: "Good evening!",
  };

  const greet = timeSlots[timeSlot] ?? "Hello!";
  return greet;
};

// assigned to variables
const greet = sayGreeting();

// passed as arguments
greet(greeting, "evening", "Garuru"); // Output: Good evening! Garuru
```

> 💡 **First-Class Citizens**: It can be treated the same way as other basic data types (such as primitive data types)

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
// undefined (If a function does not explicitly return a value, it returns `undefined`)

// Printing the function reference
console.log(logger);
// Output: [Function: logger]
```

## Files

- index.js
  - Simple examples of functions
- README.md
  - Explanation of this folder
