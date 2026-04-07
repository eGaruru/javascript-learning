// Loops & Iteration

// ------------------------------------------------------------
// 1) Basics Syntax (Comparison of three ways)
// ------------------------------------------------------------
console.log("\n--- 1) Basics Syntax");
const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

// - for
for (let i = 0; i < days.length; i++) {
  console.log(`Today is ${days[i]}`);
}

// - while
let j = 0;
while (j < days.length) {
  console.log(`Today is ${days[j]}`);
  j++; // DO NOT FORGET
}

// - do...while
let k = 0;
do {
  console.log(`Today is ${days[k]}`);
  k++; // DO NOT FORGET
} while (k < days.length);

// ------------------------------------------------------------
// 2) The for Loop
// ------------------------------------------------------------
console.log("\n--- 2) The for Loop ---");

for (let i = 5; 0 <= i; i--) {
  if (i === 0) {
    console.log("Happy New Year!");
    break;
  }
  console.log(i);
}

const movies = [
  "Dancer in the dark",
  "Intersteller",
  "Get out",
  "Song of the sea",
  "Perfect blue",
  "Avatar",
  "Rope",
];

for (let i = 0; i < movies.length; i++) {
  console.log(`Today's screening program is: ${movies[i]}`);
}

// ------------------------------------------------------------
// 3) while and do...while Loops
// ------------------------------------------------------------
console.log("\n--- 3) while & do...while loop ---");

// - while vs do...while
const getRandomInt = function (max) {
  return () => Math.trunc(Math.random() * max) + 1;
};
const rollDice = getRandomInt(6);

let diceNumber = 1;
console.log("--- WHILE ---");

// Never executed when the condition at beginning is false
while (diceNumber !== 1) {
  diceNumber = rollDice();
  console.log(`The roll of the dice is a ${diceNumber}.`);
}

console.log("--- DO...WHILE ---");

// Perform a statement at least once
do {
  diceNumber = rollDice();
  console.log(`The roll of the dice is a ${diceNumber}.`);
} while (diceNumber !== 1);

// ------------------------------------------------------------
// 3) Modern Syntax
// ------------------------------------------------------------
console.log("\n--- 3) Modern Syntax ---");

// - for...of (Arrays/Iterables)
const programmingLanguages = ["JavaScript", "TypeScript", "Python", "Java"];
for (const language of programmingLanguages) {
  console.log(`I want to learn ${language}`);
}

// - for...in (Objects)
const laptop = {
  brand: "Apple",
  model: "MacBook Pro",
  chip: "M3 Max",
  ram: "64GB",
};
for (const key in laptop) {
  console.log(`Key: [${key}] | Value: [${laptop[key]}]`);
}

// ------------------------------------------------------------
// 4) Choosing the Right Tool (Array Methods vs Loops)
// ------------------------------------------------------------
console.log("\n--- 4) Array Methods vs Loops ---");

const prices = [1000, 2000, 3000];

// Task 1 : Double the values of the array
// - for
let doubledArrayFor = [];
for (const price of prices) {
  doubledArrayFor.push(price * 2);
}
console.log("Using 'for': " + doubledArrayFor);

// - forEach
let doubledArrayForEach = [];
prices.forEach((price) => doubledArrayForEach.push(price * 2));
console.log("Using 'forEach': " + doubledArrayForEach);

// - map
const doubledArrayMap = prices.map((price) => price * 2);
console.log("Using 'map': " + doubledArrayMap);

// 👉 In this case, "map()" fits task because map returns new array and result is assigned directly to variable
// for / forEach → mutation
// map → returns new array (immutable)

// Task 2 : Calculate the total value of the array
// - for
let totalPriceFor = 0;
for (const price of prices) {
  totalPriceFor += price;
}
console.log("Using 'for': " + totalPriceFor);

// - reduce
const totalPriceReduce = prices.reduce((acc, cur) => acc + cur, 0);
console.log("Using 'reduce': " + totalPriceReduce);

// 👉 In this case, "reduce()" fits task because reduce returns a single value that the array is accumulated

// ------------------------------------------------------------
// 5) Common pitfalls
// ------------------------------------------------------------
console.log("\n--- 5) Common pitfalls ---");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// - infinite loop

/* Forgetting to update variable state
 let startNum = 0;
 while (startNum < months.length) {
   console.log(`This month is ${months[startNum]}`);
   // ⚠️ STATE MUST BE UPDATED
 }
*/
let startNum = 0;
while (startNum < months.length) {
  console.log(`This month is ${months[startNum]}`);
  startNum++;
}

/* Incorrect conditions
for (let i = 0; i < months.length; i--) { // ⚠️ i MUST BE INCREASED in this case
  console.log(`This month is ${months[startNum]}`);
}
*/

for (let i = 0; i < months.length; i++) {
  console.log(`This month is ${months[i]}`);
}
