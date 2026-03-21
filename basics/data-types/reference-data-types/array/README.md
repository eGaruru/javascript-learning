# Array

## What I learned

- What an array is and how an array works
- The most commonly used and famous methods of working with arrays

👉 **Important points**

- Zero-based index
- Reference data type

## What is an Array?

An array is a type of object in JavaScript (reference type):

- An array is such as a box that different data type values can be stored
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
// push: element(at least)
fruitBox.push("Apple"); // or fruitBox[0] = "Apple" -> returns the length: 1
fruitBox.push("Orange"); // ["Apple", "Orange"]

// unshift: element(at first)
fruitBox.unshift("Peach"); // ["Peach", "Apple", "Orange"] -> returns the length: 3

/* Remove */
// pop: element(at least)
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

### ⚠ Shallow Copy

## Files

- index.js
  - Simple examples of array
- README.md
  - Explanation of this folder
