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
// 3) Short-circuit + precedence (&& / ||)
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
// 出力:
// called C
// true

// ------------------------------------------------------------
// 4) Ternary precedence with logical operators
// ------------------------------------------------------------
