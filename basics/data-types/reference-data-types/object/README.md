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
- `Object.values()`: returns **an array** of the values from properties `["ichro", "tanaka", 1990]`
- `Object.entries()`: returns **an array** of key-value pairs from properties `[["key1", value1], ["key2", value2]]`
- `Object.assign(target, source)`: **copies properties** from multiple source objects to a target object
- `Object.hasOwn(obj, "key")`: returns a **boolean** indicating whether the object directly contains the specified key
- `Object.freeze()`: **prevents** adding, removing, or changing properties (shallow freeze)

## Files

- index.js
  - Simple examples of object
- README.md
  - Explanation of this folder
