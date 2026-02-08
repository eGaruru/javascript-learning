// JavaScript Operators

// ------------------------------------------------------------
// 1) Arithmetic Operators-
// ------------------------------------------------------------

const x = 10;
const y = 5;

// +	Addition
const sum = x + y; // 15

// -	Subtraction
const difference = x - y; // 5

// *	Multiplication
const product = x * y; // 50

// **	Exponentiation (ES2016)
const power = x ** 2; // 10 * 10 = 100

// /	Division
const quotient = x / y; // 2

// %	Modulus (Remainder)
const remainder = x % y; // 0

// ++	Increment
// let z = x++; Error: x is a constant
let z = 10;
let zAssigned = z++; // assigns the value before increment
console.log(z, zAssigned); // 11, 10
zAssigned = ++z; // z is incremented first, then assigned
console.log(z, zAssigned); // 12, 12

// --	Decrement
let w = 10;
let wAssigned = w--; // assigns the value before decrement
console.log(w, wAssigned); // 9, 10
wAssigned = --w; // w is decremented first, then assigned
console.log(w, wAssigned); // 8, 8

// ------------------------------------------------------------
// 2) Assignment Operators-
// ------------------------------------------------------------

// =
const a = 1;
const b = a + 1; // 2

// +=
let c = 10;
c += 5; // c = c + 5
console.log(c); // 15

let text = "Hello, ";
text += "World!"; // text = text + "World!"
console.log(text); // Hello, World!

// -=
let d = 10;
d -= 5; // d = d - 5
console.log(d); // 5

// *=
let e = 10;
e *= 5; // e = e * 5
console.log(e); // 50

// **=
let f = 2;
f **= 3; // f = f ** 3(2 * 2 * 2)
console.log(f); // 8

// /=
let g = 10;
g /= 2; // g = g / 2
console.log(g); // 5

// %=
let h = 10;
h %= 3; // h = h % 3
console.log(h); // 1

// &&= AND Assignment
let i = true;
let j = (i &&= 10); // assigns 10 because i is truthy
console.log(j); // 10

i = false;
j = i &&= 20; // assigns false (no reassignment happens)
console.log(j); // false

// ||= OR Assignment
let k = false;
let l = (k ||= 20);
console.log(l); // 20

k = true;
l = k ||= 30; // assigns true and not 30
console.log(l); // true

// ??= Nullish Coalescing Assignment(ES2020)
let m;
m ??= 100;
console.log(m); // 100

m = null;
m ??= 100;
console.log(m); // 100

m = 0;
m ??= 100;
console.log(m); // 0

m = 1;
m ??= 100;
console.log(m); // 1

m = "Hello";
m ??= 100;
console.log(m); // Hello

// ------------------------------------------------------------
// 3) Comparison Operators-
// ------------------------------------------------------------

// == equal to
const isEqual = 2 == 2; // true
const isEqualLoose = 2 == "2"; // true
console.log(isEqual);
console.log(isEqualLoose);

// === equal value and equal type
const isStrictEqual = 2 === 2; // true
const isStrictEqualFalse = 2 === "2"; // false
console.log(isStrictEqual);
console.log(isStrictEqualFalse);

// != not equal
const isNotEqual = 2 != 3; // true
const isNotEqualLoose = 2 != "2"; // false
console.log(isNotEqual);
console.log(isNotEqualLoose);

// !== not equal value or not equal type
const isStrictNotEqual = 2 !== 3; // true
const isStrictNotEqualTrue = 2 !== "2"; // true
console.log(isStrictNotEqual);
console.log(isStrictNotEqualTrue);

// > greater than
const isGreater = 3 > 2; // true
const isGreaterFalse = 2 > 3; // false
console.log(isGreater);
console.log(isGreaterFalse);

// < less than
const isLess = 2 < 3; // true
const isLessFalse = 3 < 2; // false
console.log(isLess);
console.log(isLessFalse);

// >= greater than or equal to
const isGreaterOrEqual = 3 >= 2; // true
const isGreaterOrEqualEqual = 2 >= 2; // true
const isGreaterOrEqualFalse = 2 >= 3; // false
console.log(isGreaterOrEqual);
console.log(isGreaterOrEqualEqual);
console.log(isGreaterOrEqualFalse);

// <= less than or equal to
const isLessOrEqual = 2 <= 3; // true
const isLessOrEqualEqual = 2 <= 2; // true
const isLessOrEqualFalse = 3 <= 2; // false
console.log(isLessOrEqual);
console.log(isLessOrEqualEqual);
console.log(isLessOrEqualFalse);

// strings are compared based on Unicode values (not dictionary order)
const isUnicodeLess = "apple" < "banana"; // true
const isUnicodeGreater = "banana" > "apple"; // true
const isNotUnicodeGreater = "apple" > "banana"; // false
console.log(isUnicodeLess);
console.log(isUnicodeGreater);
console.log(isNotUnicodeGreater);

// Compareing different types
console.log(5 > "3"); // true "3" is converted to number 3
console.log("5" > 10); // false "5" is converted to number 5
console.log("abc" < "abd"); // true
console.log("apple" > 2); // false "apple" is converted to NaN
console.log("20" > "3"); // false "2" is less than "3" in string comparison
console.log(1 > ""); // true "" is converted to 0
console.log(NaN === NaN); // false NaN is not equal to anything, including itself
console.log(null == undefined); // true only with loose equality
console.log(null === undefined); // false

// ------------------------------------------------------------
// 4-1) Logical Operators
// ------------------------------------------------------------

// && AND
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false (right side is not evaluated)

// || OR
console.log(true || false); // true (right side is not evaluated)
console.log(false || true); // true
console.log(false || false); // false

// ! NOT
console.log(!true); // false
console.log(!false); // true
console.log(!"true"); // false
console.log(!0); // true

// AND returns the first falsy value or the last value
console.log("Hello," && "World!"); // World!
console.log({} && "World!"); // World!
console.log("" && "World!"); // ""
console.log(false && "World!"); // false

// OR returns the first truthy value or the last value
console.log(0 || "Guest"); // Guest
console.log("User" || "Guest"); // User
console.log([] || "Guest"); // []
console.log(true || "Guest"); // true
console.log(false || undefined); // undefined

// Short-Circuit -------
function logAndReturn(value) {
  console.log("evaluated ->", value);
  return value;
}

// AND
console.log(false && logAndReturn("right side")); // false (right not evaluated, function is not executed)
console.log(true && logAndReturn("right side"));

// OR
console.log(true || logAndReturn("right side")); // true (right not evaluated, function is not executed)
console.log(false || logAndReturn("right side"));

// ------------------------------------------------------------
// 4-2) Logical Operators(Continued) - Practical Use of
// ------------------------------------------------------------

// A) Guard pattern
function processData(data) {
  if (!data) {
    console.log("No data found!"); // Stops execution if data is falsy
    return;
  }
  console.log("Processing:", data);
}

let loginUser = null;
processData(loginUser && loginUser.userName); // safe: right side not evaluate
loginUser = { userName: "eGaruru" };
processData(loginUser && loginUser.userName); // Processing: eGaruru

const user = {}; // {} is truthy
processData(user && user.userName); // userName is undefined -> No data found!

// B) Toggling a boolean value
function switchVisible(isVisible) {
  return !isVisible;
}

let isVisible = true;
isVisible = switchVisible(isVisible);
console.log("Menu is visible: " + isVisible);

// C) check the length, avoid to display 0
const items = [];
if (!items.length) {
  console.log("No items found");
}

// D) Setting default value
function greet(firstName) {
  // If firstName is falsy, it uses "Guest"
  const name = firstName || "Guest";
  console.log(`Hello, ${name}!`);
}

greet(); // Hello, Guest!
greet("eGaruru"); // Hello, eGaruru!

function setHitPoint(restPoint) {
  // If restPoint is null or undefined -> 100
  const hp = restPoint ?? 100;

  // NaN or "" -> 100
  if (hp === "" || Number.isNaN(Number(hp))) return 100;

  // convert "0" to 0
  return Number(hp);
}

console.log(setHitPoint(null)); // 100
console.log(setHitPoint(undefined)); // 100
console.log(setHitPoint("0")); // 0
console.log(setHitPoint("")); // 100
console.log(setHitPoint("aaa")); // 100
console.log(setHitPoint(55)); // 55
console.log(setHitPoint(0)); // 0

// E) Double NOT (!!) to force Boolean type
console.log(!!0); // false
console.log(!!"0"); // true

const cartItems = 0;
const hasItems = !!cartItems; // 0 (falsy) -> !0 (true) -> !true (false)
console.log("Has cartItems:" + hasItems); // false

const currentUserName = "eGaruru";
const hasName = !!currentUserName; // Convert string to true
console.log("Has currentUserName:", hasName); // Has currentUserName: true

// ------------------------------------------------------------
// 5) Typeof Operator
// ------------------------------------------------------------

// typeof always returns a string
console.log(typeof typeof 1); // Expected output: string

// number
console.log(typeof NaN === "number"); // true "Not-A-Number" is number

// Number("text") results in NaN, and typeof NaN is "number"
console.log(typeof Number("text") === "number");
console.log(typeof Number("7") === "number"); // true

// string
typeof "" === "string";
typeof "bla" === "string";
typeof `template literal` === "string";
console.log(typeof "1" === "string"); // true
console.log(typeof String(1) === "string"); // true, String() converts all value to string

// boolean
console.log(typeof Boolean(1) === "boolean"); // true, Boolean() converts value true/false based on value
console.log(typeof !!1 === "boolean"); // !!1 -> true -> typeof true

// Expect output: object
console.log(typeof {});
console.log(typeof []);
console.log(typeof null);

// Expect output: function
console.log(typeof function () {});
console.log(typeof class Person {});
console.log(typeof Number.isNaN);

// new operator creates an object (or function object), not a primitive
console.log(typeof new Date()); // object
console.log(typeof new Function()); // function

// typeof has higher precedence than arithmetic operators
typeof 777 + " foo"; // "number foo" -> typeof is evaluted first, then + operator connects as string
typeof (777 + " foo"); // "string" -> the data type of expressions is evaluted  with Parentheses

// ------------------------------------------------------------
// 6) Conditional (ternary) operator
// ------------------------------------------------------------

// basics
const isConditionTrue = true;
const result = isConditionTrue ? "exprIfTrue" : "exprIfFalse";
console.log("result ->", result); // result -> exprIfTrue

const age = 17;
const canDriving =
  18 <= age ? "You can drive🚗" : "You must be waiting to drive...";
console.log("Can I drive? ->", canDriving); // Can I drive? -> You must be waiting to drive...

// Handling falsy values (similar to logical operators)
function welcomMessage(loginUser) {
  const userName = loginUser ? loginUser.name : "Anonymous";
  return `Welcome, ${userName}! How is it going?`;
}

console.log("messageText:", welcomMessage({ name: "Garuru" })); // Garuru
console.log("messageText:", welcomMessage(null)); // Anonymous
console.log("messageText:", welcomMessage(undefined)); // Anonymous
console.log("messageText:", welcomMessage(0)); // Anonymous
console.log("messageText:", welcomMessage("")); // Anonymous

// Replace if/else
let isIfExprUsed = true;
if (isIfExprUsed) {
  console.log("This is if else statement");
} else {
  console.log("This is not if else statement");
}

isIfExprUsed = false;
console.log(
  isIfExprUsed ? "This is if else statement" : "This is not if else statement",
);

// ⚠ Avoid nesting(but can be chained)
// Not Recommended --- (↓This example code is quoted from MDN)
// function example() {
//   return condition1
//     ? value1
//     : condition2
//       ? value2
//       : condition3
//         ? value3
//         : value4;
// }

// Good --- (↓This example code is quoted from MDN)
function example() {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }
}
