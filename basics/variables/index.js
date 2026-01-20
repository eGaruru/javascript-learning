// Variables

// var example
var firstName = "Emiko";
console.log(firstName); // Expected output: Emiko
firstName = "Emily";
console.log(firstName); // Expected output: Emily

// let example
let age = 30;
console.log(age); // Expected output: 30
age = 31;
console.log(age); // Expected output: 31

// const example
// const country; // Error: Missing initializer in const declaration
const country = "Japan";
console.log(country); // Expected output: Japan
// country = "Germany"; // Error: Assignment to constant variable.

// scope example
if (true) {
  let city = "Berlin";
  var currentJob = "Frontend Developer";
}
// console.log(city); // Error: city is not defined
console.log(currentJob); // Expected output: Frontend Developer

// without declaration (example - do not use)
nextJob = "Fullstack Developer";
console.log(nextJob); // Expected output: Fullstack Developer
