# Object

## What I learned

- What an object is and what the difference between objects and arrays is
- The most commonly used and famous methods of working with objects

👉 **Important points**

- `Objects` are unordered collections (**key**-based), using `{}`(curly braces)
- `Arrays` are ordered collections (**index**-based), `[]`(square brackets)

## What is an Object?

An object is a reference type in JavaScript that stores data as key-value pairs:

- The object is a container that stores labeled boxes
- It manages related data using **key: value** pairs

### Important features of object

- Using `{}`(curly braces) to create object
- **key: value** is called `property`
- What the object needs is **the key**, values are accessed with key from anywhere
  - The order of data is NOT important for an object

#### How should I use properly?

- Want to manage the named data ➡ Use **Object**
- There is a meaning in order of data ➡ Use **Array**

```js
// Basic
const user = {
  userId: 1,
  userName: "John",
  email: "john.smith@example.com",
  birthYear: 1988,
  country: "Germany",
};
```

### Dot Notation vs Bracket Notation

There is two ways which access the value of object

| Feature       | **Dot** Notation (`obj.prop`)          | **Bracket** Notation (`obj['prop']`)                 |
| :------------ | :------------------------------------- | ---------------------------------------------------- |
| Appearance    | Using a period (.) to connect property | When using string literals, DO NOT forget `""`, `''` |
| property      | Only confirmed key can be used         | Expression can be used(value must be string)         |
| Best practice | Recommended to use default             | Want to get property dynamically using a variable    |

```js
// Dot Notation
const user = {
  userId: 1,
  userName: "John",
  email: "john.smith@example.com",
  birthYear: 1988,
  country: "Germany",
};

const country = user.country;

// Undefined property cannot be used
// const userAge = user.age;
// console.log(userAge); // returns undefined

// Bracket Notation
const selectedKey = "email";
user[selectedKey] = inputFormEmail;
```

### Object Methods & `this`

1. **What are methods?**

- Object methods are functions that are stored as **values of properties**
- A function must be declared with **Function Expression**

```js
const ichiro = {
  firstName: "ichiro",
  lastName: "tanaka",
  birthYear: 1990,
  // This is the method: Use "Function Expression"
  sayHello: function () {
    console.log(`Hello, I am ${this.firstName}`);
  },
};
```

2. **Why RECOMMENDED Function Expression for methods?**

- A object has **key-value pairs**(property)
  ➡ As a value of property should be set **expression** (can be evaluated)
  - ❌ **Function Declaration** is a statement, NOT expression
  - ❌ **Arrow function** is a expression, but `this` inside an arrow function doesn't refer to the object that calls the method
  - ✅ Function Expression is a expression and `this` inside refer to the object that calls the method

3. **What is `this`?**

- `this` inside of a method is **the object that calls the method**:
- Can use the information that object already has on hand in a function (DONOT REPEAT YOURSELF)
- Can automatically handle changes in object names (SAFLY)

```js
const ichiro = {
  firstName: "ichiro",
  lastName: "tanaka",
  birthYear: 1990,
  sayHello: function () {
    console.log(`Hello, I am ${this.firstName}`); // this === ichiro
  },
  calcAge: function () {
    this.age = currentYear - this.birthYear; // can store a new property in the method
    return this.age;
  },
};

const max = {
  firstName: "max",
  lastName: "mustermann",
  birthYear: 1999,
  sayHello: function () {
    console.log(`Hello, I am ${this.firstName}`); // this === max
  },
  calcAge: function () {
    this.age = currentYear - this.birthYear;
    return this.age;
  },
};
```

👉 Function Expression:

this = the object that calls the method (dynamic binding)

👉 Arrow Function:

this = inherited from the surrounding scope (lexical this)

- (where a arrow function is declared -> js files -> be created in global -> `this` === `window` in Browser)

### Essential Object Methods

- `Object.keys()`: returns **an array** of the keys from properties `["firstName", "lastName", "birthYear"]`

  → Use when you want to know how many keys the object has or use keys as menu labels or UI elements

- `Object.values()`: returns **an array** of the values from properties `["ichro", "tanaka", 1990]`

  → Use when you want to calculate total values or aggregate data

- `Object.entries()`: returns **an array** of key-value pairs from properties `[["key1", value1], ["key2", value2]]`

  → Use when you need both key and value to display as a list

- `Object.assign(target, source)`: **copies properties** from multiple source objects to a target object

  → Use when you want to summarize multiple objects or overwrite default values

  ⚠ **Mutates** the target object

- `Object.hasOwn(obj, "key")`: returns a **boolean** indicating whether the object directly contains the specified key

  → Use when you want to check if a specified key exists in the object safely

- `Object.freeze()`: **prevents** adding, removing, or changing properties (shallow freeze)

  → Use when you want to protect data that would be problematic if someone changed it during the program

  ⚠ Only freezes the first level (nested objects can still be mutated)

```js
// Object.keys()
const biology = {
  mammals: ["Human", "Blue Whale", "Red Fox"],
  birds: ["Peregrine Falcon", "Emperor Penguin", "Common Raven"],
  reptiles: ["Green Sea Turtle", "Komodo Dragon", "King Cobra"],
  amphibians: ["American Bullfrog", "Axolotl", "Fire Salamander"],
  fish: ["Great White Shark", "Atlantic Bluefin Tuna", "Clownfish"],
  insects: ["Monarch Butterfly", "Honeybee", "Stag Beetle"],
};

// 1. Count the number of length
const biologyCategoryCount = Object.keys(biology).length; //
console.log(biologyCategoryCount); // 6

// 2. Take out only keys and convert to uppercase
const biologyCategoriesUppercase = Object.keys(biology).map((key) =>
  key.toUpperCase(),
);
console.log(biologyCategoriesUppercase); // [ 'MAMMALS', 'BIRDS', 'REPTILES', 'AMPHIBIANS', 'FISH', 'INSECTS' ]

// Object.values(): it is used often with reduce
const monthlyExpenses = { rent: 600, food: 250, utility: 60 };
const total = Object.values(monthlyExpenses).reduce((acc, cur) => acc + cur, 0);
console.log(`I spent this month ${total} €💸`); // I spent this month 910 €💸

// Object.entries(): it is used often in loop and process both key/value
const userProfile = { name: "Anna", role: "Admin", status: "Active" };
const formatted = Object.entries(userProfile).map(
  ([key, value]) => `${key.toUpperCase()}: ${value}`,
);
console.log(formatted); // [ 'NAME: Anna', 'ROLE: Admin', 'STATUS: Active' ]

// Object.assign()
const defaultSettings = {
  theme: "light",
  fontSize: "14px",
  showNotifications: true,
};
const userSettings = { theme: "dark", showNotifications: false };
const currentSettings = Object.assign({}, defaultSettings, userSettings); // with {}, defaultSettings will be NOT changed

console.log(defaultSettings); // { theme: 'light', fontSize: '14px', showNotifications: true }
console.log(currentSettings); // { theme: 'dark', fontSize: '14px', showNotifications: false }
// ↓ currently most used spread syntax
const updatedSettings = { ...defaultSettings, ...userSettings };

// Object.hasOwn(obj, "key")
const user = { name: "Lisa", country: "Germany" };

console.log(Object.hasOwn(user, "name")); // true
console.log(Object.hasOwn(user, "country")); // true
console.log(Object.hasOwn(user, "address")); // false

// Object.freeze()
const CONFIG = { column: 3, row: 5 };
Object.freeze(CONFIG); // Protect data from changing

// CONFIG.column = 4; Cannot change the property
// CONFIG.cell = 1; Cannot add new property

console.log(CONFIG.column); // 3
```

## Files

- index.js
  - Simple examples of object
- README.md
  - Explanation of this folder
