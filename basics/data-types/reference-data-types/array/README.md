# Array

## What I learned

- What an array is and how an array works
- The most commonly used and famous methods of working with arrays

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

- `forEach`: **loop (no return)**
- `map`: **transform array** (returns new array)
- `filter`: **select elements** (returns new array)
- `reduce`: accumulate into single value

```js
// forEach

// map

// filter

// reduce
```

### Modern Syntax

## Files

- index.js
  - Simple examples of array
- README.md
  - Explanation of this folder
