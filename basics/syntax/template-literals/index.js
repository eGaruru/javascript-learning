// JavaScript Template Literals

const currentYear = new Date().getFullYear();
const user = {
  firstName: "Taro",
  lastName: "Yamada",
  birthYear: 1990,
};

// ------------------------------------------------------------
// 1) String interpolation with embedded expressions
// ------------------------------------------------------------
// as usual Need to use many '+' and parentheses for embedded expression
// console('I'm'); Need attention to write ' (single quote)
console.log(
  "I'm " +
    user.firstName +
    ", " +
    (currentYear - user.birthYear) +
    " years old.",
);
console.log(
  "Hi, " + (user ? user.firstName : "Guest") + ", what can I do for you today?",
);

// template literals
console.log(
  `I'm ${user.firstName}, ${currentYear - user.birthYear} years old.`,
);

console.log(
  `Hi, ${user ? user.firstName : "Guest"}, what can I do for you today?`,
);
// or
console.log(`Hi, ${user?.firstName ?? "Guest"}, what can I do for you today?`);

// ------------------------------------------------------------
// 2) Multi-line strings
// ------------------------------------------------------------
// as usual
console.log("string text line 1\nstring text line 2\nstring text line 3");
// string text line 1
// string text line 2
// string text line 3

// template literals
console.log(`string text line 1
string text line 2
string text line 3`);
// string text line 1
// string text line 2
// string text line 3

// a single-line string across multiple lines
console.log(`string text line 1 \
string text line 2 \
string text line 3`); // string text line 1 string text line 2 string text line 3
// ↓ in work
const stringText = [
  "string text line 1",
  "string text line 2",
  "string text line 3",
].join(" ");
console.log(stringText); // string text line 1 string text line 2 string text line 3

// ------------------------------------------------------------
// 3) Tagged Template
// ------------------------------------------------------------
function drinkTag(strings, firstName, age) {
  const [str0, str1, str2] = strings;
  const message = age >= 20 ? "You can drink 🍺." : "You can drink 🧋.";

  return `${str0}${firstName}${str1}${age}${str2}${message}`;
}

const drinkSomething = drinkTag`Hello, ${user.firstName}! You are ${currentYear - user.birthYear} years old, `;
console.log(drinkSomething);

// Cross-Site Scripting(XSS) countermeasures
function escapeHTML(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function html(strings, ...values) {
  return strings.reduce((result, str, i) => {
    // result = Interim results, str = currentValue, i = index, "" = initialValue
    const safeValue = i < values.length ? escapeHTML(values[i]) : "";
    return result + str + safeValue;
  }, "");
}

const userInput = `<img src=x onerror=alert(1)>`;
const safedText = html`<p>Hello ${userInput}</p>`;
console.log(safedText);

// SQL
function sql(strings, ...values) {
  return { text: strings.join("?"), values };
}

const userId = 10;
const query = sql`SELECT * FROM users WHERE id = ${userId}`;
console.log(query); // { text: "SELECT * FROM users WHERE id = ?", values: [10] }

//  Appendix
console.log`Hello`; // [ 'Hello' ]
console.log.bind(1, 2)`Hello`; // 2 [ 'Hello' ]

// ------------------------------------------------------------
// 4) Common practical pattern (conditional part)
// ------------------------------------------------------------
const isAdmin = false;
console.log(`Hello ${user.firstName}${isAdmin ? " (admin)" : ""}!`);
