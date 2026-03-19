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
- Index of the array starts from `0`(0 origin), first element will be accessed `array[0]`
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

// An array can different data type values
const SurpriseBox = ["cat", 1980, , true, null, undefined];
```

### Basic Manipulation

- `push`, `unshift`: add element to the array, returns the length of array after manipulation
- `pop`, `shift`: remove element from the array, returns the value of array that is removed

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

## Files

- index.js
  - Simple examples of array
- README.md
  - Explanation of this folder
