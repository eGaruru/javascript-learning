// JavaScript Operators

// Arithmetic Operators---
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

// Assignment Operators---
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

// Comparison Operators---

// Logical Operators---

// Ternary Operator---
