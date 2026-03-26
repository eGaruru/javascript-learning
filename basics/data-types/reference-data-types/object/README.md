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

## Files

- index.js
  - Simple examples of object
- README.md
  - Explanation of this folder
