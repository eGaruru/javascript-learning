// Expression and Statement

// ------------------------------------------------------------
// 1) Expression: produces a value
// ------------------------------------------------------------

// ↓ ⚠ Single expression becomes expression statement automatically
// 12
// 3 + 4 + 5
// "Hello, World"
// Math.random()

// produce a value -> can be output
console.log(12);
console.log(3 + 4 + 5);
console.log("Hello, World");

// calling function is expression
console.log(Math.random()); // produces a random number
console.log(console.log()); // console.log() returns undefined

// ------------------------------------------------------------
// 1.5) Expression Statement
// ------------------------------------------------------------

// expression + ; -> expression statement
// The expression is evaluated but the result is not stored
1 + 2 + 3;
21;
("Please wait a moment");
3 > 2;
Math.floor(2.3);

// ------------------------------------------------------------
// 2) Statement: performs an action
// ------------------------------------------------------------

// Declaration
const user = {};
let userName = "";
let action = "";

// If...else
if (!userName) {
  action = "create";
} else {
  action = "update";
}

// Switch
switch (action) {
  case "create":
    logger("create");
    break;
  case "update":
    logger("update");
    break;
  case "delete":
    logger("delete");
    break;
}

// Function Declaration (Statement)
function logger(action) {
  console.log(`Action: ${action}, start logging------`);
}

function greet1(firstName) {
  return `Hi, ${firstName}! How is it going?`;
}

// Function Expression assigned to a variable (variable declaration is a statement)
const greet2 = function (firstName) {
  return `Hi, ${firstName}! How is it going?`;
};

const greet3 = (firstName) => `Hi, ${firstName}! How is it going?`;

// Block statement
{
  let statement = "block";
}

// ------------------------------------------------------------
// 3) ⚠ Common Pitfall
// ------------------------------------------------------------
const age = 20;
const isDrivingAge = age >= 18;

// ❌ if/switch -> statement: console.log( if (...) { } )
// Error: Argument expression expected.
// console.log(
//   if (isDrivingAge) {
//   console.log(`You are ${age}, can drive now :)`);
// } else {
//   console.log(`You are ${age}, can drive after ${18 - age} years!`);
// });

// Error: Expression expected.
// const message = `${if(age >= 18){}}`

// ✅ ternary -> expression: console.log( condition ? A : B )
console.log(
  isDrivingAge
    ? `You are ${age}, can drive now :)`
    : `You are ${age}, can drive after ${18 - age} years!`,
);

// ------------------------------------------------------------
// 4) Mini Exercise
// ------------------------------------------------------------
100; // Expression returns a value 100

let x = 10; // Statement -> Declaration

// Expression: Assignment is also an expression -> can console.log(x = 20);
x = 20;

// Statement -> Performs an action
if (true) {
}

5 > 3; // Expression: returns a value true

console.log("Hello"); // Expression: returns a value undefined

// Statement -> Instruction "returns a value"
// return 5; SyntaxError: Illegal return statement
function example() {
  return 5; // Statement
}

// 💡 Check Points
// Is it an Expression? -> produces a value, it can be put in ${}
// Is it a Statement? → controls execution or performs an action
