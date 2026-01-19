// Data types

// string
const firstName = "Emiko";
console.log(typeof firstName); // Expected output: string

// number (dynamic typing example)
let age = "30";
console.log(typeof age); // Expected output: string
age = 30;
console.log(typeof age); // Expected output: number

// boolean
const isStudent = false;
console.log(typeof isStudent); // Expected output: boolean

// undefined
let notAssigned;
console.log(typeof notAssigned); // Expected output: undefined

// null
const emptyValue = null;
console.log(typeof emptyValue); // Expected output: object

// symbol
const firstUser = {
  userId: Symbol("userId"),
};
console.log(typeof firstUser.userId); // Expected output: symbol

// BigInt
const hugeNumber = 9007199254740991n;
console.log(typeof hugeNumber); // Expected output: bigint

// typeof always returns a string
console.log(typeof typeof 1); // Expected output: string
