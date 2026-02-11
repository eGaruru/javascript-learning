// JavaScript Operator Procedence

// ------------------------------------------------------------
// 1) Procedence
// ------------------------------------------------------------
// basic
console.log(1 + 2 * 3); // 2 * 3 -> 6 + 1 -> 7
console.log((1 + 2) * 3); // 1 + 2 -> 3 * 3 -> 9

// typeof
console.log(typeof 2 + 3); // number3 typeof 2 -> number + 3 -> string coertion
console.log(typeof (2 + 3)); // number can be checked type of expression

// Evaluation order vs precedence

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
// first, all operands are called from left to right : order of operand evaluation
// then, calculate 3 ** 2 -> 4 ** 9 -> 262144 // associativity

console.log(echo("left", 4) ** echo("middle", 3) / echo("right", 2));
// first, all operands are called from left to right : order of operand evaluation
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
// first C() is evalueted -> true
// || returns first truhy value, NOT evaluted B() && A()

console.log((A() && B()) || C());
// Logs:
// called A
// called C
// true
// what is happend?
// A() is evalueted -> false, && returns first falsy value or last truthy value
// NOT evalueted B() but false || C() -> C() is evalueted

// simple practice
console.log(true || (false && false)); // true
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

// ------------------------------------------------------------
// 4) Ternary precedence with logical operators
// ------------------------------------------------------------
console.log(true ? false : true ? "A" : "B"); // false
// what is happend?
// Grouping from associativity -> true ? false : (true ? "A" : "B")
// true returns false

// ❌ Avoid nesting
// const message = isLoggedIn ? (isAdmin ? "Admin" : "User") : "Guest";

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
