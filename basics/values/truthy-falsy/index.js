// Truthy and Falsy Values in JavaScript

// ------------------------------------------------------------
// 1) Quick check: examples of truthy / falsy values
// ------------------------------------------------------------

// Truthy values
const truthyValues = [
  true,
  {},
  [],
  42,
  "0", // string
  "false",
  new Date(),
  -42,
  12n,
  3.14,
  -3.14,
  Infinity,
  -Infinity,
];

console.log("truthy examples ->", truthyValues.map(Boolean)); // Expected output: all true

// Falsy values
const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];
console.log("falsy examples ->", falsyValues.map(Boolean)); // Expected output: all false

// ------------------------------------------------------------
// 2) Why it matters (Advantages)
// ------------------------------------------------------------

// Benefit 1: simple existence / non-empty checks
const userName = "eGaruru";
if (userName) console.log("User name exists ->", userName); // Expected output: User name exists -> eGaruru

// Benefit 2: safe guards using short-circuit
let user = undefined;
user && console.log(user.name); // not executed

user = null;
user && console.log(user.name); // not executed

// Benefit 3: default values (careful: || vs ??)
const input = "";
const displayName = input || "Guest"; // "" is falsy -> "Guest"
console.log("Login User ->", displayName); // Expected output: Login User -> Guest

function checkDescription(description) {
  return description ?? "no description"; // `??` only falls back for null/undefined (keeps "" and 0)
}

let description;
let displayMessage = checkDescription(description);
console.log("Description ->", displayMessage); // Expected output: Description -> no description

description = null;
displayMessage = checkDescription(description);
console.log("Description ->", displayMessage); // Expected output: Description -> no description

description = "";
displayMessage = checkDescription(description);
console.log("Description ->", displayMessage); // Expected output: Description ->

description = 0;
displayMessage = checkDescription(description);
console.log("Description ->", displayMessage); // Expected output: Description -> 0

// ------------------------------------------------------------
// 3) Common use cases
// ------------------------------------------------------------

// A) if checks
const email = "";
if (!email) console.log("Email is missing, please input your Email."); // Expected output: Email is missing, please input your Email.

// B) guard pattern
let userSettings;
userSettings && console.log("user settings loaded"); // not executed

// C) default value
const theme = userSettings?.theme || "dark"; // uses || (falsy will fallback)
console.log("theme ->", theme); // dark

// D) nullish coalescing for only null or undefined
const countNum = 0;
console.log("count number with || ->", countNum || 10); // 10 (0 is changed)
console.log("count number with ?? ->", countNum ?? 10); // 0 (keeps 0)

// ------------------------------------------------------------
// 4) ⚠ Common pitfalls
// ------------------------------------------------------------

// Pitfall 1: [] and {} are truthy even when they are empty
console.log("Boolean([]) ->", Boolean([])); // true
console.log("Boolean({}) ->", Boolean({})); // true

// Pitfall 2: NaN behavior
console.log("Boolean(NaN) ->", Boolean(NaN)); // false
console.log("NaN === NaN", NaN === NaN); // false
console.log("Number.isNaN(NaN)", Number.isNaN(NaN)); // true

// Pitfall 3: string numbers vs numbers (coercion)
console.log(`"5" > 3 ->`, "5" > 3); // true (string is coerced to a number)
console.log(`"20" > "3" ->`, "20" > "3"); // false (comparison as a text)

// Pitfall 4: "" is falsy but "0" is truthy
console.log('Boolean("") ->', Boolean("")); // false
console.log('Boolean("0") ->', Boolean("0")); // true

// React note: `items.length && <List />` may render 0 when length is 0 🙀
// Prefer: `items.length > 0 && <List />`
