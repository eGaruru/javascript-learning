// JavaScript Operator Precedence

// ------------------------------------------------------------
// 1) Precedence
// ------------------------------------------------------------
// basic
console.log(1 + 2 * 3); // 2 * 3 -> 6 + 1 -> 7
console.log((1 + 2) * 3); // 1 + 2 -> 3 * 3 -> 9

// typeof
console.log(typeof 2 + 3); // number3 typeof 2 -> number + 3 -> string coertion
console.log(typeof (2 + 3)); // number can be checked type of expression

// Evaluation order vs precedence
function left() {
  console.log("left operand is evaluated");
  return 10;
}

function right() {
  console.log("right operand is evaluated");
  return 5;
}

console.log(left() + right() * 2);
// Logs:
// left operand evaluated
// right operand evaluated
// 20
// first, all operands are called from left to right: operand evaluation order
// then calculate right:5 * 2 -> left:10 + 10 -> 20

// ------------------------------------------------------------
// 2) Associativity
// ------------------------------------------------------------

// Right associativity example (**) --- (↓This example echo function is quoted from MDN)
function echo(name, num) {
  console.log(`Evaluating the ${name} side`);
  return num;
}

console.log(echo("left", 4) ** (echo("middle", 3) ** echo("right", 2)));
// what is happend?
// first, all operands are called from left to right: operand evaluation order
// then, calculate 3 ** 2 -> 4 ** 9 -> 262144 // associativity

console.log(echo("left", 4) ** echo("middle", 3) / echo("right", 2));
// first, all operands are called from left to right: operand evaluation order
// then, calculate 4 ** 3 -> 64 / 2 -> 32 // associativity

// ------------------------------------------------------------
// 3) Short-circuit + precedence (&&, ||, ??, ?.)
// ------------------------------------------------------------
// (↓This example A/B/C functions are quoted from MDN)
function A() {
  console.log("called A");
  return false;
}
function B() {
  console.log("called B");
  return false;
}
function C() {
  console.log("called C");
  return true;
}

console.log(C() || (B() && A()));
// Logs:
// called C
// true
// what is happend?
// first C() is evaluated -> true
// || returns first truthy value, NOT evaluated B() && A()

console.log((A() && B()) || C());
// Logs:
// called A
// called C
// true
// what is happend?
// A() is evaluated -> false, && returns first falsy value or last truthy value
// NOT evaluated B() but false || C() -> C() is evaluated

// simple practice
console.log(true || (false && true)); // true, but right side(false && true) is NOT evaluated
console.log((false && true) || true); // true, but && *true* is NOT evaluated
console.log(0 || (1 && 2)); // 0 || 2 -> 2

console.log(true || 2 * 3); // true
console.log(false || 2 * 3); // false || (2 * 3) -> 6

console.log(true && 1 < 2); // true;
console.log(true && 3 < 2); // false;
console.log(false && 1 < 2); // false;
console.log(null ?? (0 || 5)); // 5
console.log(undefined ?? (1 || 5)); // 1
console.log(0 ?? (1 || 5)); // 0

let a = null;
console.log(a?.b.c); // undefined

a = undefined;
console.log(a?.b.c); // undefined

a = { b: { c: {} } };
console.log(a?.b.c); // {}

// console.log(null || undefined ?? "A"); syntax error
console.log((null || undefined) ?? "A"); // A
console.log(null || (undefined ?? "A")); // A

// && and || return not only boolean
console.log(("A" && "B") || "C"); // "B"
console.log(("" && "B") || "C"); // "C"

// ------------------------------------------------------------
// 4) Ternary precedence with logical operators
// ------------------------------------------------------------
console.log(true ? false : true ? "A" : "B"); // false
// what is happend?
// Grouping from associativity -> true ? false : (true ? "A" : "B")
// true returns false

let x = true;
let y = false;
let z = false;

// ❌ Hard to read
// const result = x && y || z;

// ✅ Clear
const result = (x && y) || z;

// ❌ Avoid nesting
// const message = isLoggedIn ? isAdmin ? "Admin" : "User" : "Guest";

// ✅ Clearer
let message;
let isLoggedIn = true;
let isAdmin = false;
if (!isLoggedIn) {
  message = "Guest";
} else if (isAdmin) {
  message = "Admin";
} else {
  message = "User";
}
console.log(message); // User
