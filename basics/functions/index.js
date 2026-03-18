// JavaScript Functions

// ------------------------------------------------------------
// 1) Basic syntax
// ------------------------------------------------------------

// Function Declaration
function calcAverage1(a, b, c) {
  return (a + b + c) / 3;
}

// Function Expression
const calcAverage2 = function (a, b, c) {
  return (a + b + c) / 3;
};

// Arrow Function
const calcAverage3 = (a, b, c) => (a + b + c) / 3;

// ------------------------------------------------------------
// 1.5) Hoisting
// ------------------------------------------------------------

const msgCelebration = {
  birthday: "Happy Birthday! Wishing you a year filled with love and joy.",
  passTheExam:
    "Congratulations on passing your exam! Your hard work really paid off.",
  wedding:
    "Best wishes on your special day! Wishing you a lifetime of happiness.",
  graduation:
    "Happy Graduation! I'm so proud of your achievements and excited for your future.",
  promotion: "Congrats on your promotion! You truly deserve this success.",
  newBaby:
    "Welcome to the world, little one! Congratulations to the new parents.",
  newJob:
    "Congratulations on your new role! Best of luck in your next chapter.",
  anniversary:
    "Happy Anniversary! Wishing you many more years of happiness together.",
};

// ✅ Hoisting: Function declarations are hoisted with their definitions
console.log(getMessage("Anna", "wedding", msgCelebration));

function getMessage(firstName, type, messages) {
  const name =
    firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  return `Dear ${name}: ${messages[type]}`;
}

// Function expressions are NOT hoisted in the same way
// ❌ Cannot be called before the function is declared
// console.log(getMessageExp("Anna", "wedding", msgCelebration));

const getMessageExp = function (firstName, type, messages) {
  const name =
    firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  return `Dear ${name}: ${messages[type]}`;
};

// OK
console.log(getMessageExp("Anna", "wedding", msgCelebration));

// ❌ Cannot be called before the function is declared
// console.log(getMessageArrow("Anna", "wedding", msgCelebration));

const getMessageArrow = (firstName, type, messages) => {
  const name =
    firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  return `Dear ${name}: ${messages[type]}`;
};

// OK
console.log(getMessageArrow("Anna", "wedding", msgCelebration));

// ------------------------------------------------------------
// 2) Reference vs Calling
// ------------------------------------------------------------

const loggingException = function (exception) {
  const exceptionTypes = {
    TypeError: "TypeError",
    ReferenceError: "ReferenceError",
    SyntaxError: "SyntaxError",
    RangeError: "RangeError",
  };

  const exceptionType = exceptionTypes[exception] ?? "Unknown Error";
  console.log(`Exception type[${exceptionType}] occurred----`);
  return exceptionType;
};

console.log(loggingException); // [Function: loggingException]
console.log(loggingException("SyntaxError")); // SyntaxError
// Without (), you reference the function
// With (), you execute the function

// ------------------------------------------------------------
// 3) Common Pitfall
// ------------------------------------------------------------

// Arrow Function
const calcAmount = (bill) => bill * 0.1 + bill; // no return needed
const calcAmount2 = (bill) => {
  bill * 0.1 + bill; // when using {}, return is required
};

console.log(calcAmount(15), calcAmount2(15)); // 16.50 undefined

// ------------------------------------------------------------
// 4) First-Class Function
// ------------------------------------------------------------

function createMessage(firstName) {
  return `Hello, ${firstName}!`;
}
// returned from other functions
function createGreeting() {
  return (firstName, fn) => fn(firstName); // returning a function
}

// assigned to variables
const greet = createGreeting();

// passed as arguments
console.log(greet("Garuru", createMessage)); // Hello, Garuru!

// ------------------------------------------------------------
// 5) Mini Exercise
// ------------------------------------------------------------
/*
Challenge 1: Simple Callback
1. Create a function `double` that takes a number and returns it doubled.
2. Create a function `transformer` that takes a number and a function as arguments and displays the result of applying the function to the number.
*/
const double = (num) => num * 2;
const transformer = (num, fn) => fn(num);

console.log(transformer(10, double)); // 20

/*
Challenge 2: A function that returns a function (Factory Function)
1. Create a function called `createGreeter` that takes a greeting (e.g., "Hello") as an argument and returns a new function.
2. The returned function should then take a name as an argument and display it together with the initial greeting.
 */

// Currying: returning a function step by step
const createGreeter = (greet) => (name) => `${greet} ${name}`;

const japaneseGreeter = createGreeter("こんにちは");
console.log(japaneseGreeter("Garuru")); // こんにちは Garuru

// Appendix: Calling Currying
console.log(createGreeter("こんにちは")("Garuru")); // こんにちは Garuru

/*
Challenge 3: Calculator (Function as a Value)
1. Create separate functions for addition and subtraction.
2. Store them in an object (e.g., const mathOps = { add: ..., sub: ... }).
3. Extract the functions from the object and try running them.
*/

const addNum = (a, b) => a + b;
const subNum = (a, b) => a - b;
const mathOps = { add: addNum, sub: subNum };

console.log(mathOps.add(10, 12)); // 22
console.log(mathOps.sub(10, 12)); // -2

// Extra Excerceise
// 🏋️‍♂️ Challenge 1: The Custom Array Processor (Callback)

// Mixer/Blender
const processArray = function (array, fn) {
  // The same behavier with array.map(fn);
  const resArray = [];
  array.forEach((item) => resArray.push(fn(item)));
  return resArray;
};

// Blade
const addTen = (num) => num + 10;
const makeString = (num) => `Number: ${num}`;

// Ingredients
const numbers = [1, 2, 3];

console.log(processArray(numbers, addTen)); // [11, 12, 13]
console.log(processArray(numbers, makeString)); // ['Number: 1', 'Number: 2', 'Number: 3']

// 🏋️‍♂️ Challenge 2: The Multiplier Factory (Returned from Functions)
// Base of machine
const createMultiplier = (multiplier) => (num) => multiplier * num;

// Different types of machine
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(triple(5)); // 15
console.log(quadruple(5)); // 20

// 🏋️‍♂️ Challenge 3: String Formatter Toolbox (Stored in Objects)
// Toolbox of functions for text
const textTools = {
  uppercase: (str) => str.toUpperCase(),
  exclaim: (str) => str + "!!!",
};

console.log(textTools.uppercase("hello")); // HELLO
console.log(textTools.exclaim("wow")); // wow!!!
