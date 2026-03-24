# Array

## What I learned

- What an array is and how an array works
- The most commonly used and famous methods of working with arrays

👉 **Important points**

- Zero-based index
- Reference data type

## What is an Array?

An array is a type of object in JavaScript (reference type):

- An array is like a box where different data types can be stored
- Use bracket notation to access each element of an array
  - Bracket notation requires an expression (usually a number)
  - The expression is evaluated and internally converted to a string key
- Array indices start from `0` (zero-based indexing), first element will be accessed `array[0]`
- array.length is a number of entire elements in array, last element will be accessed `array[array.length - 1]`

> 💡 A variable can manage values with an array, not necessary writing many variables.

```js
// Basic
const animals = ["dog", "cat", "bird", "rabbit", "bear", "fox"];
const animalFirst1 = animals[0]; // first element
const animalFirst2 = animals["0"]; // first element
const animalLast = animals[animals.length - 1]; // last element
console.log(animalFirst1, animalFirst2, animalLast); // dog dog fox
console.log(animals.length); // 6

// ❌ Can not use .(dot)
// const animalFirst1 = animals.0;

// An array can store different types of values
const SurpriseBox = ["cat", 1980, , true, null, undefined];
```

### Basic Manipulation

- `push`, `unshift`: **add element** to the array, returns the length of array after manipulation
- `pop`, `shift`: **remove element** from the array, returns the value of array that is removed

> ⚠ Those methods manipulate an original array

```js
const fruitBox = [];

/* Add */
// push: add element (at the end)
fruitBox.push("Apple"); // or fruitBox[0] = "Apple" -> returns the length: 1
fruitBox.push("Orange"); // ["Apple", "Orange"]

// unshift: element(at first)
fruitBox.unshift("Peach"); // ["Peach", "Apple", "Orange"] -> returns the length: 3

/* Remove */
// pop: remove element (from the end)
fruitBox.pop(); // ["Peach", "Apple"] -> returns the removed value "Orange"

// shift: element(at first)
fruitBox.shift(); // ["Apple"] -> returns the removed value "Peach"
```

### Essential Methods

- `includes`: returns **boolean**

  → Use when you just want to check if a value exists

- `find`: returns **element** that is matched at first

  → Use when you need the actual element (not index)

- `findIndex`: returns **number(index)** of element that is matched at first

  → Use when you need to update or remove an element later

- `indexOf`: returns **number(index)**, will be used strict comparison `===`

  → Use when you need to update or remove an element later

- `slice`: returns **new array(shallow copy)**
- `splice`: manipulates original array, adds/removes/replaces an element of array
- `concat`: returns **new array(shallow copy)**

```js
// includes
const animals = ["dog", "cat", "bird", "rabbit", "bear", "fox"];
console.log(animals.includes("dog")); // true
console.log(animals.includes("wolf")); // false

// find
const numbers = [1, 10, 34, 56, 72];
console.log(numbers.find((num) => num > 50)); // 56
console.log(numbers.find((num) => num > 100)); // undefined(NOT FOUND)

// findIndex
console.log(numbers.findIndex((num) => num > 50)); // 3 (56)
console.log(numbers.findIndex((num) => num > 100)); // -1(NOT FOUND)

// indexOf
console.log(animals.indexOf("fox")); // 5
console.log(animals.indexOf("crow")); // -1(NOT FOUND)

// slice(creates new array)
const pets = animals.slice(0, 4);
console.log(pets); // ["dog", "cat", "bird", "rabbit"]
const myPet = animals.slice(1, 2);
console.log(myPet); // ["cat"]

// splice(manipulates original array)
animals.splice(4, 0, "elephant"); // adds "elephant" to index 4
console.log(animals); // ["dog", "cat", "bird", "rabbit", "elephant", "bear", "fox"]
animals.splice(5, 1, "wolf"); // replaces an element from index 5 with "wolf"
console.log(animals); // ["dog", "cat", "bird", "rabbit", "elephant", "wolf", "fox"]

// concat(creates new array)
const firstArray = [1, 2, 3, 4, 5];
const secondArray = [6, 7, 8, 9, 10];
console.log(firstArray.concat(secondArray)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### Higher-Order Methods

The callback functions set for these methods use `element`, `index`, and `array` as arguments

- `forEach`: **loop (no return)**, returns always `undefined`

  → Use when you just want to process elements in a loop

  → ⚠ Avoid when you need a new array (use map/filter instead)

- `map`: **transform array** (returns new array)

  → Use when you want the new array after processing

  💡Commonly used in React to render lists

- `filter`: **select elements** (returns new array)

  → Use when you want to select elements based on a condition

`element`: The element currently being processed in the array

`index`: The index of the element currently being processed in the array

`array`: The array on which the method was called

```js
// forEach
const array = ["element1", "element2", "element3"];
array.forEach((el, i, array) =>
  console.log(`index: ${i}, currentElement: ${el}, array: ${array}`),
);
// index: 0, currentElement: element1, array: element1,element2,element3
// index: 1, currentElement: element2, array: element1,element2,element3
// index: 2, currentElement: element3, array: element1,element2,element3

// map(creates new array)
const even = [0, 2, 4, 6, 8, 10];
const odd = even.map((num) => num + 1);
console.log(odd); // [1, 3, 5, 7, 9, 11]

// filter(creates new array)
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

const filteredMonths = months.filter((month) => month.length < 6);
console.log(filteredMonths); // [ 'March', 'April', 'May', 'June', 'July' ]

// Appendix: filter vs find
const numbers = [5, 3, 10, 12, 11, 9, 7];
console.log(numbers.find((num) => num < 10)); // 5 returns first match
console.log(numbers.filter((num) => num < 10)); // [ 5, 3, 9, 7 ] returns all matches
```

The callback functions set for this method use `accumulator`, `currentValue`, and `currentIndex` as arguments

- `reduce`: accumulate into single value

  → Use when you want to transform an array into a single value (e.g. sum, object, grouping)

`accumulator`: This is the value of the previous call to callbackFn

- For the first call, **initial value** or **array[0]** will be used

`currentValue`: The value of the element currently being processed in the array

- For the first call, initial value is set -> **array[0]**, otherwise **array[1]**

`currentIndex`: The index of the current value

- For the first call, initial value is set -> **0**, otherwise **1**

`array`: The array on which the method was called

```js
// reduce
const numbers = [12, 99, 68, 5, 37];
const initialValue = 0;
const sum = numbers.reduce((acc, cur) => acc + cur, initialValue);
console.log(sum); // 221
```

### 💡 Which Method Should I Use? (Decision Guide)

When working with an array, ask yourself **"What do I want as a result?"**

**1. Do I want a NEW ARRAY?**

- ➡ YES, I want to modify/transform every element. 👉 Use **`map()`**
- ➡ YES, I want to keep only the elements that match a condition. 👉 Use **`filter()`**
- ➡ YES, I want to copy a portion of the array. 👉 Use **`slice()`**

**2. Do I want a SINGLE VALUE (not an array)?**

- ➡ YES, I want to calculate a sum, string, or object from the array. 👉 Use **`reduce()`**

**3. Do I want to FIND something?**

- ➡ YES, I just want to know if it exists (true/false). 👉 Use **`includes()`** (or `some()`)
- ➡ YES, I want the actual element itself. 👉 Use **`find()`**
- ➡ YES, I want the index number of the element. 👉 Use **`findIndex()`** (or `indexOf()`)

**4. I don't want a new array or value, I just want to DO SOMETHING (Side effect).**

- ➡ 👉 Use **`forEach()`** (e.g., logging to console, manipulating the DOM)

### Modern Syntax

- **Destructuring assignment**: Split the elements of an array and assign them to multiple variables
- **Spread syntax**: Expand the elements of an array to a specific location (either in an argument or another array)

```js
// Destructuring assignment
const alphabets = ["a", "b", "c", "d", "e", "f", "g"];
const [str1, str2, str3, ...others] = ["a", "b", "c", "d", "e", "f", "g"];
console.log(str1); // a
console.log(str2); // b
console.log(str3); // c
console.log(others); // [ 'd', 'e', 'f', 'g' ]

// Spread syntax
const numbers = [1, 2, 3, 4];
const numbers2 = [...numbers, 5, 6];
console.log(numbers2); // [ 1, 2, 3, 4, 5, 6 ]

const sum = (a, b, c, d) => a + b + c + d;
console.log(sum(...numbers)); // 10

// Appendix: React
const items = ["apple", "banana", "orange"];
const newItems = [...items, "grapes"];
console.log(newItems); // [ 'apple', 'banana', 'orange', 'grapes' ]
```

### ⚠ Mutation vs Non-Mutation

Some array methods mutate the original array:

- Typical **mutating** methods:
  `push`, `pop`, `shift`, `unshift`, `splice`, `fill`, `reverse`

- Typical **Non-mutating** methods (Copying methods):
  `slice`, `concat`, `map`, `filter`

Some mutating methods have alternative approaches (Abstract examples):

| Mutation       | Non-Mutation                             |
| :------------- | :--------------------------------------- |
| `pop()`        | `slice(0, -1)`                           |
| `push(v1, v2)` | `concat([v1, v2])` or `[...arr, v1, v2]` |
| `reverse()`    | `toReversed()` or `[...arr].reverse()`   |
| `sort()`       | `toSorted()`                             |
| `splice()`     | `toSpliced()`                            |

> 💡 There is a comparison table of mutating and Non-mutating methods-> [MDN: Copying Methods and Mutating Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods)

An easy way to change a mutating method into a non-mutating alternative:

- Use `spread syntax`
- Use `slice()`

```js
const arr = [0, 1, 2, 3, 4, 5];

// spread syntax
const arrFill = [...arr].fill(5, 3, 5);
console.log(arr, arrFill); // [0, 1, 2, 3, 4, 5] [0, 1, 2, 5, 5, 5]

// slice
const arrReverse = arr.slice().reverse();
console.log(arr, arrReverse); // [0, 1, 2, 3, 4, 5] [5, 4, 3, 2, 1, 0]
```

### ⚠ Shallow Copy

**Non-mutating methods** (e.g, `map`, `filter`, `slice`...) and **Spread syntax** create shallow copies

This means nested objects are still shared: an easy way to deep copy is `JSON.stringify`(⚠ but cannot always be used)

```js
const shoppingList = [
  { fruit: { list: ["apple", "banana", "orange"] } },
  { vegetables: { list: ["carrot", "tomato", "cucumber"] } },
];

const shoppingListShallow = [...shoppingList];

console.log(
  shoppingList[0]["fruit"]["list"][0],
  shoppingListShallow[0]["fruit"]["list"][0],
);
// Output: apple apple

shoppingList[0]["fruit"]["list"][0] = "peach";

console.log(
  shoppingList[0]["fruit"]["list"][0],
  shoppingListShallow[0]["fruit"]["list"][0],
);
// ⚠ Output: peach peach🙀 Be careful when working with nested data!

const shoppingListDeep = JSON.parse(JSON.stringify(shoppingList));

shoppingList[0]["fruit"]["list"][0] = "pineapple";

console.log(
  shoppingList[0]["fruit"]["list"][0],
  shoppingListShallow[0]["fruit"]["list"][0],
  shoppingListDeep[0]["fruit"]["list"][0], // deep copied
);
// Output: pineapple pineapple peach
```

> 💡 structuredClone() can be used for deep copy in modern JavaScript

## ⚠ Common pitfalls

### 🚫 Avoid Mutation in Functional Methods (**IMPORTANT**)

When using methods like `map`, `filter`, or `reduce`, you should NOT mutate the original data inside the callback function

❌ Bad (mutation inside filter/map):

```js
const result = users.filter((user) => {
  user.age = calcAge(user.birthYear); // ❌ mutation
  return user.age >= 18;
});
```

✅ Good (immutable approach):

```js
// object from array is expanded with spread syntax
const result = users
  .map((user) => ({ ...user, age: calcAge(user.birthYear) }))
  .filter((user) => user.age >= 18);
```

> 💡 Always return a **NEW object** instead of modifying the original

### 🚫 Avoid JSON Deep Copy in Real Applications

A common way to create a deep copy is `JSON.parse(JSON.stringify(obj))`, but it is NOT recommended in real applications

**What is the problem?**:

- Some data types are not properly handled during serialization:
  - Function → removed
  - undefined → removed
  - Symbol → removed
  - Date → converted to string

  👉 This can lead to unexpected bugs in real applications

**How can we create a deep copy?**

1. **RECOMMENDED**: `structuredClone()` is the modern and recommended way to create deep copies

   (⚠ Note: structuredClone() also has limitations [MDN: Supported types](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types))

2. **Alternative**: `spread syntax` creates shallow copy, but you can explicitly control which parts to copy and update

```js
// Shallow layers (spread syntax can be used)
const users = [
  {
    userId: 1,
    userName: "Anna",
    email: "anna.smith@example.com",
    birthYear: 1999,
    country: "Germany",
  },
];

// Wrap with parentheses to return an object (not a block)
const usersCopy = users.map((user) => ({
  ...user, // Expanded object with spread syntax
}));
// ↓ or
// Use return
const usersCopy = users.map((user) => {
  return {
    ...user,
  };
});

usersCopy[0].email = "annaNew@example.com";
console.log(users[0].email); // anna.smith@example.com
console.log(usersCopy[0].email); // "annaNew@example.com"

// Deep layers (spread syntax can be used but need attention)
const products = [
  {
    id: 1,
    name: "laptop",
    company: { name: "companyName1", address: "companyAddress1" },
  },
  {
    id: 2,
    name: "camera",
    company: { name: "companyName2", address: "companyAddress2" },
  },
];

// I want to add new property in company object...
// ❌ BAD
const productsCopy = products.map((item) => ({
  ...item,
}));

productsCopy[0].company.isProduced = true;

console.log(products[0].company); // { name: 'companyName1', address: 'companyAddress1', isProduced: true }
console.log(productsCopy[0].company); // { name: 'companyName1', address: 'companyAddress1', isProduced: true }

// ✅ GOOD (structuredClone)
const productsCopy = structuredClone(products);

productsCopy[0].company.isProduced = true;

console.log(products[0].company); // { name: 'companyName1', address: 'companyAddress1' }
console.log(productsCopy[0].company); // { name: 'companyName1', address: 'companyAddress1', isProduced: true }

// ✅ GOOD (spread syntax) Expand and copy the part you want to change
const productsCopy = products.map((item) => ({
  ...item,
  company: {
    ...item.company, // here
  },
}));

productsCopy[0].company.isProduced = true;

console.log(products[0].company); // { name: 'companyName1', address: 'companyAddress1' }
console.log(productsCopy[0].company); // { name: 'companyName1', address: 'companyAddress1', isProduced: true }
```

## Files

- index.js
  - Simple examples of array
- README.md
  - Explanation of this folder
