// Variables

// var example
var firstName = "Emiko";
firstName = "Emily";
console.log(firstName);

// let example
let age = 30;
age = 31;
console.log(age);

// const example
const country = "Japan";
// country = "Germany"; // Error
console.log(country);

// scope example
if (true) {
  let city = "Berlin";
  var job = "Frontend Developer";
}

// console.log(city); // Error
console.log(job);
