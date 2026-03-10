// JavaScript Type Conversion and Coercion

// ------------------------------------------------------------
// 1) Type Conversion
// ------------------------------------------------------------

// string -> number
const birthYear = "1990";
console.log(typeof birthYear); // string
console.log(typeof Number(birthYear)); // number (💡Note: the original birthYear variable remains a string)
console.log(typeof +birthYear); // number

const userName = "Garuru";
console.log(Number(userName)); // NaN, invalid number
console.log(typeof Number(userName)); // number

// number -> string
const currentYear = 2026;
console.log(typeof String(2026)); // string

// string -> boolean
let input = "";
console.log(Boolean(input)); // false
console.log(typeof Boolean(input)); // boolean
console.log(!!input); // false (Practical way to cast to boolean using double negation)

input = "Hello";
console.log(Boolean(input)); // true
console.log(typeof Boolean(input)); // boolean
console.log(!!input); // true (Practical way to cast to boolean using double negation)

// number -> boolean
let currentMonth = 0;
console.log(Boolean(currentMonth)); // false
console.log(typeof Boolean(currentMonth)); // boolean
console.log(!!currentMonth); // false

currentMonth = 3;
console.log(Boolean(currentMonth)); // true
console.log(typeof Boolean(currentMonth)); // boolean
console.log(!!currentMonth); // true

// ------------------------------------------------------------
// 2) Type Coercion
// ------------------------------------------------------------

console.log("10" + 5); // "105" = coerces to string
console.log("10" - 5); // 5 = coerces to number
console.log("10" * 5); // 50 = coerces to number
console.log("10" / 5); // 2 = coerces to number

// ------------------------------------------------------------
// 3) Common practical pattern
// ------------------------------------------------------------

// form input is always string
const inputAge = "25";
const userAge1 = Number(inputAge);
const userAge2 = +inputAge;

// Equality: == vs ===
const ageString = "18";
const ageNumber = 18;

console.log(ageString == ageNumber); // true (Implicit coercion happens❌)
console.log(ageString === ageNumber); // false, NO (Strict equality, NO coercion✅)

// ------------------------------------------------------------
// 4) Mini exercise
// ------------------------------------------------------------

// practice
console.log("10" - "5" + 2); // Result? => 7
console.log(5 + 2 + "3"); // Result? => 73

/*
// 1. Price obtained from the API (received as a string)
const price = "100";

// 2. Coupon applied by the user (number)
const discount = 20;

// 3. Shipping fee (string)
const shipping = "10";

// [Problem calculation formula]
let total = price + shipping - discount; // "100" + "10" -> "10010" - 20 -> 9990

// 4. Combine with the string to create the final result
const result = total + " yen";

console.log(result); // 9990 yen🙀
console.log(typeof total); // number
*/

// best practice of mini exercise
const price = +"100";
const shipping = +"10";
const discount = 20;
const total = price + shipping - discount; // 100 + 10 - 20
const result = `${total} yen`; // 90 yen😸
console.log(result);
