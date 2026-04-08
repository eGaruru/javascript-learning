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

// ------------------------------------------------------------
// 6) Mini Exercise
// ------------------------------------------------------------
console.log("\n--- 6) Mini Exercise ---");

// 🏋️‍♂️ Exercise 1: The "Early Exit"
// [MISSION]
// This loop first finds the first user in the `users` array whose role is "admin", prints that user's name to the console, and then immediately terminates.

const users = [
  { id: 1, name: "Alice", role: "viewer" },
  { id: 2, name: "Bob", role: "editor" },
  { id: 3, name: "Charlie", role: "admin" },
  { id: 4, name: "Dave", role: "admin" },
  { id: 5, name: "Eve", role: "viewer" },
];

for (const user of users) {
  if (user.role === "admin") {
    console.log(user.name);
    break;
  }
}

// Expected output: Charlie

// Alternative:
// for (const user of users) {
//   if (user.role !== "admin") continue;
//   console.log(user.name);
//   break;
// }

// 🏋️‍♂️ Exercise 2: API Retry Simulation
// [MISSION]
// The following function, simulateApiCall(), returns true (success) or false (failure) with a 50% probability.
// Use a while loop to write logic that repeats the API call until it succeeds, or until it reaches a maximum of 3 times (maxRetries).

const simulateApiCall = () => Math.random() > 0.5;
let attempts = 0;
const maxRetries = 3;
let isSuccess = false;

// ( condition ) is true -> continue looping
while (!isSuccess && attempts < maxRetries) {
  attempts++;
  isSuccess = simulateApiCall();

  console.log(
    `Attempt ${attempts}...${isSuccess ? "Success! Data fetched." : "Failed"}`,
  );
}

if (!isSuccess) {
  console.log("Max retries reached. Please try again later.");
}

// Example of expected output:
// "Attempt 1... Failed"
// "Attempt 2... Success! Data fetched."
// (If it fails after 3 attempts, "Max retries reached. Please try again later.")

// 🏋️‍♂️ Exercise 3: Payload Cleanup (Thorough cleaning before sending data)
// [MISSON]
// Create a new object called cleanData from the following formData object, excluding properties whose values ​​are null, undefined, or "" (empty string).

const formData = {
  userName: "JohnDoe",
  email: "john@example.com",
  phoneNumber: "",
  age: 28,
  address: null,
  referralCode: undefined,
};

// - Using for loop
const cleanData = {};
for (const key in formData) {
  const value = formData[key];
  if (value === null || value === undefined || value === "") continue;

  // Alternative: when all falsy values are target to clean up
  // if (!formData[key]) continue;

  cleanData[key] = value;
}

console.log(cleanData);

// - Alternative: Using reduce()
const cleanDataReduce = Object.entries(formData).reduce((acc, [key, value]) => {
  const isEmpty = value === null || value === undefined || value === "";
  if (isEmpty) return acc;

  // Mutation
  acc[key] = value;
  return acc;

  // Immutation
  // return {
  //   ...acc,
  //   [key]: value,
  // };
}, {});

console.log(cleanDataReduce);

// Expected output:
// { userName: 'JohnDoe', email: 'john@example.com', age: 28 }

// 🏋️‍♂️ Exercise 4: The Pagination Scraper (Logic for retrieving all data)
// [MISSION]
// Write a while loop that uses the following fetchPageFromAPI function to retrieve all data and adds the total number of items to totalItems.
// After the loop finishes, output the final number of data items retrieved to the console.

// --- Preparation (Mock Function) ---
// Function to retrieve data from the API (pass the current page number)
const fetchPageFromAPI = (page) => {
  // *Do not change the contents of this function.
  if (page >= 3) {
    // Data runs out on page 3 (hasNext becomes false)
    return { itemsCount: 5, hasNext: false };
  }
  // Pages 1 and 2 each have 10 items
  return { itemsCount: 10, hasNext: true };
};
// --- Write the following below ---
let currentPage = 1;
const maxPages = 5;
let isNextPageAvailable = true;
let totalItems = 0;

while (isNextPageAvailable && currentPage <= maxPages) {
  const { itemsCount, hasNext } = fetchPageFromAPI(currentPage);
  totalItems += itemsCount;
  isNextPageAvailable = hasNext;
  currentPage++;
}

console.log(`Total item fetched: ${totalItems}`);

// Expected output:
// "Total items fetched: 25"
