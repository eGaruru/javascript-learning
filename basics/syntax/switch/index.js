// Switch statement

// ------------------------------------------------------------
// 1) Basics Syntax
// ------------------------------------------------------------

const day = "monday";

switch (day) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log("Weekday💻"); // Grouping Monday to Friday
    break;
  case "saturday": // Fall-through intentionally
  case "sunday":
    console.log("Weekend😸");
    break;
  default: // optional
    console.log("Not a valid day");
}

// ------------------------------------------------------------
// 2) Switch vs If...else
// ------------------------------------------------------------

// When want a value to be compared with multiple values...
const myPet = "cat";
let emoji = "";

// switch is more readable
switch (myPet) {
  case "dog":
    emoji = "🐶";
    break;
  case "cat":
    emoji = "😺";
    break;
  case "rabbit":
    emoji = "🐰";
    break;
  case "hamster":
    emoji = "🐹";
    break;
  case "fish":
    emoji = "🐠";
    break;
  case "turtle":
    emoji = "🐢";
    break;
  case "bird":
    emoji = "🦜";
    break;
  default:
    emoji = "I do not have a pet";
}

if (myPet === "dog") {
  emoji = "🐶";
} else if (myPet === "cat") {
  emoji = "😺";
} else if (myPet === "rabbit") {
  emoji = "🐰";
} else if (myPet === "hamster") {
  emoji = "🐹";
} else if (myPet === "fish") {
  emoji = "🐠";
} else if (myPet === "turtle") {
  emoji = "🐢";
} else if (myPet === "bird") {
  emoji = "🦜";
} else {
  emoji = "I do not have a pet";
}

console.log(`Hi, I am Garuru, ${myPet ? "my pet is " : ""}${emoji}.`);

// Appendix: object mapping
const pets = {
  dog: "🐶",
  cat: "😺",
  rabbit: "🐰",
  hamster: "🐹",
  fish: "🐠",
  turtle: "🐢",
  bird: "🦜",
};

const petEmoji = pets[myPet] ?? "I do not have a pet";
console.log(`Hi, I am Garuru, ${myPet ? "my pet is " : ""}${petEmoji}.`);

// ------------------------------------------------------------
// 3) Common practical pattern
// ------------------------------------------------------------

// 1. For exact value matching
const loadingStatus = "success";
let message = "";

switch (loadingStatus) {
  case "loading":
    message = "Your data is loading, please wait a moment...";
    break;
  case "success":
    message = "Your data is loaded successfully!";
    break;
  case "error":
    message = "Something went wrong, please try again.";
    break;
  default:
    message = "Unknown status.";
}

console.log(message);

// 2. Range Comparison
const score = 85;
const isPassed = score >= 60;
let result = "";

switch (true) {
  case score >= 90:
    result = "Very Good!";
    break;
  case score >= 80:
    result = "Good";
    break;
  case score >= 70:
    result = "Satisfactory";
    break;
  case score >= 60:
    result = "Pass";
    break;
  default:
    result = "Fail";
}

console.log(
  `Your score is ${score}(${result}). ${isPassed ? "Congratulations!!" : "Try again..."}`,
);

// ------------------------------------------------------------
// 4) ⚠ Common Pitfall
// ------------------------------------------------------------

// a.) DO NOT forget "break"
const alphabet = "b";
switch (alphabet) {
  case "a":
    console.log("apple");
    break;
  case "b": // Execution starts from here
    console.log("banana");
  // No break
  case "c":
    console.log("cat");
    break; // Execution Stops here and exits from switch statement
  case "d":
    console.log("dog");
    break;
  default:
    console.log("default");
}
// Output:
// banana
// cat

// b.) Block Scope in Switch: switch statements share a single lexical scope
// (↓This example code is quoted from MDN)
const action = "say_hello";

// ❌ "Uncaught SyntaxError: Identifier 'message' has already been declared"
// switch (action) {
//   case "say_hello":
//     // does not mean create scope
//     const message = "hello";
//     console.log(message);
//     break;
//   case "say_hi":
//     const message = "hi";
//     console.log(message);
//     break;
//   default:
//     console.log("Empty action received.");
// }

// ✅ Fix: Use block scope {} inside the case to isolate variables
switch (action) {
  case "say_hello": {
    const message = "hello";
    console.log(message);
    break;
  }
  case "say_hi": {
    const message = "hi";
    console.log(message);
    break;
  }
}
