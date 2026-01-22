// Variables

// var
var firstName = "Emiko";
console.log(firstName); // Expected output: Emiko
firstName = "Emily";
console.log(firstName); // Expected output: Emily

// let
let age = 30;
console.log(age); // Expected output: 30
age = 31;
console.log(age); // Expected output: 31

// const
// const country; // Error: Missing initializer in const declaration
const country = "Japan";
console.log(country); // Expected output: Japan
// country = "Germany"; // Error: Assignment to constant variable.

// scope
if (true) {
  let city = "Berlin";
  var currentJob = "Frontend Developer";
}
// console.log(city); // Error: city is not defined
console.log(currentJob); // Expected output: Frontend Developer

// without declaration ( DO NOT use)
nextJob = "Fullstack Developer";
console.log(nextJob); // Expected output: Fullstack Developer

// declare multiple variables -------------------------------------------
let x, y;
console.log(x, y); // Expected output: undefined undefined

let userName = "Alex",
  birthYear = 1990,
  city = "New York";
console.log(userName, birthYear, city); // Expected output: Alex 1990 New York

// const userId, email; Error: Missing initializer in const declaration

const PI = 3.14, // const requires initialization
  GRAVITY = 9.8;

// naming rules --------------------------------------------------

// naming conventions ---------------------------------------------
