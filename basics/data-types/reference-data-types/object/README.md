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

### Iterating Objects

- Object.keys(obj)
- Object.values(obj)
- Object.entries(obj)

> 💡 Often used with map / forEach

### Modern Syntax

- **Optional chaining (?.)**:

  Safely access nested properties. If a property does not exist, it stops and returns undefined instead of throwing an error

- **Nullish coalescing (??)**:

  Returns the right-hand value only when the left-hand value is `null` or `undefined`

- **Destructuring assignment**:

  Split the elements of an object and assign them to multiple variables

- **Spread syntax (...)**:

  Copies properties into a new object (shallow copy) or merges objects

- **Computed property**:

  Use a variable or expression as a dynamic property key

```js
// Optional Chaining
const product = {
  id: 1,
  name: "Gummibärchen (Klassik)",
  brand: "Haribo",
  price: 1.29,
};

// ❌ Error: cannot read property
// const category = product.location.productionArea;

// ❌ Can check if the property exist and return value... but LONG!
// const category = product.location && product.location.productionArea;

// ✅ Return immediately when property does not exist and return undefined
const category = product.location?.productionArea; // No error will be thrown
console.log(category); // undefined

// also works with functions
product.getLocation?.(); // No executed

// Nullish coalescing ??
const defaultLocation = product.location ?? "main factory"; // set default value

// Appendix || vs ??
const value1 = 0 || 10; // 10 ❌
const value2 = 0 ?? 10; // 0  ✅

// Optional Chaining x Nullish coalescing
const productionArea = product.location?.productionArea ?? "main factory";
// 💡 Only applies to null or undefined (NOT 0, "", false)

// Destructuring assignment
// 1. Split properties to same variable names
const user = {
  id: 1,
  firstName: "Max",
  email: "max0001@example.com",
  tel: "+0000000000",
  country: "Germany",
};
const { id, firstName, country } = user; // can assign only essential data
console.log(id, firstName, country);

// 2. Use Destructuring assignment to parameters of function
// ❌ It violates the DRY principle! user.name/user.country
// const printUser = function(user) { 💡Can be improve
//   console.log(`NAME: ${user.name}, COUNTRY: ${user.country}`);
// };

// ✅ Parameter will be written { property names }
const printUser = function ({ firstName, country }) {
  console.log(`[User Info] name: ${firstName}, country: ${country}`);
};

printUser(user); // [User Info] name: Max, country: Germany

// 3. Default value
const { nickName = "Guest" } = user;
console.log(nickName); // Guest

// 4. Rename
const { firstName: userName } = user;
console.log(userName); // Max

// Spread syntax(shallow copy)
const updatedUser = {
  ...user,
  email: "max.müller@example.com",
  country: "Japan",
};

console.log(updatedUser);

// Computed property
const key = "email";
const obj = {
  [key]: "test@example.com",
};
```

## ⚠ Common pitfalls

- Dot Notation CANNOT use a variable
- Use `this` to access properties inside the same object (DRY!)
- Mutating objects in Functions
- Truthiness of Empty Objects
- The Shallow Copy Trap
- Comparison of object
- I want to delete some keys from an object
- NOT use Arrow Function as methods
- Code that depends on `order` will break

```js
const ichiro = {
  firstName: "ichiro",
  lastName: "tanaka",
  birthYear: 1990,
  sayHello: function () {
    console.log(`Hello, I am ${this.firstName}`);
  },
  calcAge: function () {
    this.age = currentYear - this.birthYear;
    return this.age;
  },
};

const keyCountry = "country";

// ❌ Dot Notation CANNOT use a variable
// ichiro.keyCountry = "Japan";

// ✅ Use Bracket Notation for variables
ichiro[keyCountry] = "Japan";

// ❌ Use 'this' to access properties inside the same object (DRY!)
const user = {
  firstName: "Jürgen",
  sayHello: function () {
    // console.log(`Hello, I am ${user.firstName}`); ❌ BAD: tightly coupled (hardcoded variable)
    console.log(`Hello, I am ${this.firstName}`); // ✅ GOOD: dynamic reference
  },
};

// Mutating objects in Functions
// ❌ Munipulates original object
const currentYear = new Date().getFullYear();
const updateAge = function (user) {
  user.age = currentYear - user.birthYear;
  return user;
};

// ✅ Returns a new object and does not manipulate original object
const updateAge = function (user) {
  return { ...user, age: currentYear - user.birthYear };
};

// Truthiness of Empty Objects
const fetchDate = () => ({});
const result = fetchDate();
// ❌ {} will be evaluated as a truthy value!!
// if (result) {
//   console.log("Finish fetching the data sucsessfully!");
//   createUser(result.data); // 💣 crash!!
// } else {
//   console.log("Something went wrong...");
// }

// 🆗 1.) Check if object exists with the length of keys
// ⚠ Even if object exists, properties inside may still be undefined
if (Object.keys(result).length !== 0) {
  console.log("Finish fetching the data sucsessfully!");
  createUser(result.data);
} else {
  console.log("Something went wrong...");
}

// ✅ 2.) RECOMMENDED! Check if object exists with Optinal chaining
if (result?.data) {
  console.log("Finish fetching the data sucsessfully!");
  createUser(result.data);
} else {
  console.log("Something went wrong...");
}

// The Shallow Copy Trap
// ⚠ Spread syntax only copies ONE level (shallow copy)
const john = {
  id: 1,
  firstName: "John",
  email: "john.smith@example.com",
  birthYear: 1988,
  address: { city: "Berlin" },
  sayHello: function () {
    console.log(`Hello! Mey name is ${this.firstName}.`);
  },
};

// ❌ Munipulates original object as well,
// const john2 = { ...john };
// john2.address.city = 'Tokyo';
// console.log(john.address.city); // Tokyo, causes side effects (unexpected bugs)
// console.log(john2.address.city); // Tokyo

const john2 = { ...john, address: { ...john.address, city: "Tokyo" } };
console.log(john.address.city); // Berlin
console.log(john2.address.city); // Tokyo

// Comparison of object: Object will be compared with address (reference)
const obj1 = { a: 1 };
const obj2 = { a: 1 };

console.log(obj1 === obj2); // false 🙀 Refer to different addresses (references) in memory

// ⚠ Not reliable: order of keys matters, and some values are not serialized
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true
// Example
const a = { x: 1, y: 2 };
const b = { y: 2, x: 1 };
console.log(JSON.stringify(a)); // {"x":1,"y":2}
console.log(JSON.stringify(b)); // {"y":2,"x":1}
console.log(JSON.stringify(a) === JSON.stringify(b)); // false (Because the order is different!)

// 💡 Appendix: In React, executes RE-render becaus of the changed address in memory

// I want to delete some keys from an object
const item = {
  id: 21,
  productName: "Microwave",
  amount: 1,
  price: 60,
  reviews: 4.8,
};

// ❌ Manipulates original object
// delete item.reviews;

const { reviews, ...restOfItem } = item;
console.log(restOfItem); // { id: 21, productName: 'Microwave', amount: 1, price: 60 }

// NOT use Arrow Function as methods
const person = {
  firstName: "Lisa",
  birthYear: 2002,
  address: { country: "Germany", city: "Frankfrut" },
  job: "teacher",
  // ❌ Arrow functions do NOT have their own 'this' (lexical this)
  // introduce: () =>{
  //   console.log(
  //     `Hi, I am ${this.firstName}.
  //     I work in ${this.address.city} as a ${this.job}.
  //     Nice to meet you!`,
  //   );
  // }
  // ✅ Function Ecpression or this way can refer to the object as expected
  introduce() {
    console.log(
      `Hi, I am ${this.firstName}.
I work in ${this.address.city} as a ${this.job}.
Nice to meet you!`,
    );
  },
};

person.introduce();

// Code that depends on "order" will break
const objKeysNum = { 4: "d", 2: "b", 3: "c", 1: "a" };
console.log(objKeysNum); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// 💡 An object's key is like a DICTIONARY, not a list (something with a specific order)
```

## Files

- index.js
  - Simple examples of object
- README.md
  - Explanation of this folder
