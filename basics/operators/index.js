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

// Compareing different types---
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
// 4) Logical Operators-
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

// Ternary Operator---
