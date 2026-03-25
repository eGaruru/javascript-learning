// Array

// ------------------------------------------------------------
// 1) Basic
// ------------------------------------------------------------
// Can be put defferent data types of values
const mixedValues = [0, false, "string", () => {}];

const animals = ["dog", "cat", "bird", "rabbit", "bear", "fox"];

// push returns the number of length after manipulation
let totalAnimals = animals.push("elephant");
console.log(`How many animals are in array?: ${totalAnimals}`); // 7

// unshift returns the number of length after manipulation
totalAnimals = animals.unshift("hamster");
console.log(`How many animals are in array?: ${totalAnimals}`); // 8

// pop returns the removed element from the end
const animalFromEnd = animals.pop();
console.log(`The animal was at the end: ${animalFromEnd}`); // elephant

// pop returns the removed element from the beginning
const animalAtBeginning = animals.shift();
console.log(`The animal was at the beginning: ${animalAtBeginning}`); // hamster

totalAnimals = animals.length;
console.log(`How many animals are in array?: ${totalAnimals}`); // 6

// ------------------------------------------------------------
// 2) Essential Methods
// ------------------------------------------------------------

const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

// includes
console.log(colors.includes("green")); // true
console.log(colors.includes("white")); // false

// find & findIndex
const isLongWord = (str) => str.length > 5;
console.log(colors.find(isLongWord)); // orange
console.log(colors.findIndex(isLongWord)); // 1,

// indexOf
const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numberList.indexOf(5)); // 4
console.log(numberList.indexOf("5")); // -1, "STRICT" comparison

// slice (Non-manipulation)
const rainbow = colors.slice(0, 5); // creates a new array
console.log(rainbow); // ["red", "orange", "yellow", "green", "blue"]

// splice (Manipulation)
rainbow.splice(5, 0, "indigo", "violet"); // add "indigo", "violet" to the array
console.log(`COLORS🎨: ${colors}, RAINBOW🌈: ${rainbow}`);
// COLORS🎨: red,orange,yellow,green,blue,purple,pink, RAINBOW🌈: red,orange,yellow,green,blue,indigo,violet

// concat
const weekday = ["monday", "tuesday", "wednesday", "thursday", "friday"];
const weekend = ["saturday", "sunday"];

console.log(weekday.concat(weekend));
// ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

// ------------------------------------------------------------
// 3) Higher-Order Methods
// ------------------------------------------------------------

const currentYear = new Date().getFullYear();
const users = [
  {
    userId: 1,
    userName: "Anna",
    email: "anna.smith@example.com",
    birthYear: 1999,
    country: "Germany",
  },
  {
    userId: 2,
    userName: "Max",
    email: "Maxxx@example.com",
    birthYear: 2012,
    country: "USA",
  },
  {
    userId: 3,
    userName: "Elena",
    email: "elena.r@example.com",
    birthYear: 2009,
    country: "Germany",
  },
  {
    userId: 4,
    userName: "John",
    email: "john.m@example.com",
    birthYear: 1990,
    country: "USA",
  },
  {
    userId: 5,
    userName: "David",
    email: "david.off@example.com",
    birthYear: 2010,
    country: "Germany",
  },
];

// Problem 1: filter + map (age >= 18, create new array that has only names)
// Expected: ["Anna", "John"]
const calcAge = (birthYear) => currentYear - birthYear;
const adultUsers = users
  .map((user) => ({
    ...user,
    age: calcAge(user.birthYear),
  }))
  .filter((user) => user.age >= 18);

const adultsNames = adultUsers.map((user) => user.userName);
console.log(adultsNames);

const products = [
  {
    id: 1,
    name: "Gummibärchen (Klassik)",
    brand: "Haribo",
    price: 1.29,
    category: "Süßigkeiten",
    inStock: true,
    stockQuantity: 500,
    isVegan: false,
    isBio: false,
    weightGram: 200,
  },
  {
    id: 2,
    name: "Bio-Dunkle Schokolade 70%",
    brand: "Ritter Sport",
    price: 1.49,
    category: "Schokolade",
    inStock: true,
    stockQuantity: 85,
    isVegan: true,
    isBio: true,
    weightGram: 100,
  },
  {
    id: 3,
    name: "Original Nürnberger Elisenlebkuchen",
    brand: "Schmidt",
    price: 14.5,
    category: "Gebäck",
    inStock: false,
    stockQuantity: 0,
    isVegan: false,
    isBio: false,
    weightGram: 250,
  },
  {
    id: 4,
    name: "Vollkorn-Dinkelkekse",
    brand: "Alnatura",
    price: 1.95,
    category: "Kekse",
    inStock: true,
    stockQuantity: 42,
    isVegan: true,
    isBio: true,
    weightGram: 150,
  },
  {
    id: 5,
    name: "Marzipanbrot",
    brand: "Niederegger",
    price: 4.2,
    category: "Marzipan",
    inStock: true,
    stockQuantity: 12,
    isVegan: false,
    isBio: false,
    weightGram: 125,
  },
];

// Problem 2: filter + map
const bioProducts = products.filter((product) => product.isBio);
const productsOnSale = bioProducts.map((product) => ({
  ...product,
  isSale: true,
}));
console.log(products, productsOnSale);
// Only isBio: true and isSale: true
// original array is not changed

// Problem 3: calculate total value with reduce
const numbers = [10, 20, 30, 40];

const initialValue = 0;
const sum1 = numbers.reduce((acc, cur, _i, _arr) => acc + cur, initialValue); // Beginning: initialVal(0) + 10
const sum2 = numbers.reduce((acc, cur, _i, _arr) => acc + cur); // Beginning: 10 + 20
console.log(sum1, sum2); // 100 100

// Problem 4: grouped by country with reduce
const countryGroup = users.reduce((acc, user) => {
  if (!acc[user.country]) {
    acc[user.country] = [];
  }
  acc[user.country].push(user);
  return acc;
}, {});

console.log(countryGroup);

// ------------------------------------------------------------
// 4) Modern syntax
// ------------------------------------------------------------

const greets = [
  "Good Morning!",
  "Good Afternoon!",
  "Good Evening!",
  "Good Night!",
];

// Destructuring assignment
const [msgMorning, msgAfterNoon, msgEvening, msgNight] = greets;
console.log(msgNight); // Good Night!

// Spread syntax
const friends = ["Donkey", "dog"];
const bremer = [...friends, "cat", "chicken"];
console.log(`Die Bremer Stadtmusikanten: ${bremer}`);

/* Appendix: In the case of React */
// Problem 5: add "orange", but NOT manipulate original array
const items = ["apple", "banana"];
const itemsNew = [...items, "orange"];
console.log(`Original: ${items}, New: ${itemsNew}`);

// Problem 6: remove id:2, but NOT manipulate original array
const ids = [{ id: 1 }, { id: 2 }, { id: 3 }];
const filteredIds = ids.filter((item) => item.id !== 2);
console.log(`Original: ${ids[1].id}, New: ${filteredIds[1].id}`);

// Problem 7: modify done = true(id:2), but NOT manipulate original array
const tasks = [
  { id: 1, done: false },
  { id: 2, done: false },
];

const [task1, task2] = tasks;
const tasksNew = JSON.parse(JSON.stringify(tasks)).map((item) => {
  if (item.id !== 2) return item;
  item.done = true;
  return item;
});

console.log(`Original: ${tasks[1].done}, New: ${tasksNew[1].done}`);

// ------------------------------------------------------------
// 5) Mini exercise
// ------------------------------------------------------------
/*
【Tasks】
1. Adding to the end: A new participant, 'Jay', has arrived late. Add him to the end of the list.
2. Adding to the front: Special guest 'Emma' has arrived. Add her to the front (position 0) of the list.
3. Removing from the end: 'Jay' has had to leave due to an urgent matter. Remove him from the list and save his name to the variable `canceledGuest`.
4. Check-in function: Create an arrow function `checkIn` that takes participant names and a list and returns the check-in result.
5. Condition: If the name is included in the list, return "Willkommen, [Name]!"; otherwise, return "Sorry [Name], you are not on the list."
*/

// Initial Data
const attendees = ["Michael", "Steven", "Peter"];

attendees.push("Jay"); // push returns the length
attendees.unshift("Emma"); // unshift returns the length

const canceledGuest = attendees.pop(); // push returns a value at least

// Name and list => Reusable parts
const checkIn = (firstName, list) =>
  list.includes(firstName)
    ? `Willkommen, ${firstName}!`
    : `Sorry ${firstName}, you are not on the list.`;

// TEST DATA 1
console.log(checkIn("Steven", attendees));

// TEST DATA 2
console.log(checkIn("Bob", attendees));

const productsExercise = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 2,
    name: "Coffee Maker",
    price: 80,
    category: "Home Appliances",
    inStock: false,
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 150,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 120,
    category: "Apparel",
    inStock: true,
  },
  {
    id: 5,
    name: "Desk Lamp",
    price: 30,
    category: "Home Appliances",
    inStock: true,
  },
];

/*
Challenge 1: Extracting specific elements
Create a "new array" containing only items that are in stock (inStock: true).
*/

const availableProducts = productsExercise.filter((product) => product.inStock);
console.log(availableProducts);

/*
Challenge 2: Transforming data
Create a new array containing only the names of all products.
Expect value: ["Laptop", "Coffee Maker", "Wireless Headphones", "Running Shoes", "Desk Lamp"]
*/
const productNames = productsExercise.map((product) => product.name);
console.log(productNames);

/*
Challenge 3: Finding a specific element
Find the product object with ID `3`.
*/
const targetProduct = productsExercise.find((product) => product.id === 3);
console.log(targetProduct);

/*
Challenge 4: Accumulating a single value
Calculate the "total price (sum of prices)" for all items.
Expect value: 1580
*/
const initialVal = 0;
const totalPrice = productsExercise
  .map((product) => product.price)
  .reduce((acc, cur) => acc + cur, initialVal);

// another aproach
// const totalPrice = products.reduce((acc, cur) => acc + cur.price, initialVal);

console.log(totalPrice);

/*
Challenge 5: Method Chaining
Create an array containing only the "names" of products in the "Electronics" category.
*/
const electronicsNames = productsExercise
  .filter((product) => product.category === "Electronics")
  .map((product) => product.name);
console.log(electronicsNames);

// ==========================================
// Immutable Practice 🏋️
// ==========================================
const changePrice = (price, percentage) => price * (percentage / 100 + 1);

// 1. A 10% discount will be applied to the price.
const discountProducts = productsExercise.map((product) => ({
  ...product,
  price: changePrice(product.price, -10),
}));

console.log(discountProducts);

// 2. Set `id:2` to `done:true`.
const tasksExercise = [
  { id: 1, done: false },
  { id: 2, done: false },
];

const tasksExerciseCopy = tasksExercise.map((task) =>
  task.id === 2 ? { ...task, done: true } : task,
);

console.log(tasksExercise[1].done, tasksExerciseCopy[1].done);

// 3. Set `id:2` to `quantity: +1`.
const cart = [
  { id: 1, quantity: 1 },
  { id: 2, quantity: 2 },
];

const cartCopy = cart.map((item) =>
  item.id === 2 ? { ...item, quantity: item.quantity + 1 } : item,
);

console.log(cart[1].quantity, cartCopy[1].quantity);

// 4. Only items with a "paid" status will have their price increased by 20%.
const orders = [
  { id: 1, price: 100, status: "paid" },
  { id: 2, price: 200, status: "pending" },
];

const ordersPaid = orders
  .filter((order) => order.status === "paid")
  .map((order) => ({ ...order, price: changePrice(order.price, 20) }));

console.log(ordersPaid);

// 5. Group by country (reduce)
const usersExercise2 = [
  { name: "Anna", country: "Germany" },
  { name: "John", country: "USA" },
  { name: "Mike", country: "Germany" },
];

const groupCountry = usersExercise2.reduce((acc, user) => {
  const country = user.country;

  // returns a new object
  return {
    ...acc,
    [country]: [...(acc[country] ?? []), user.name],
  };
}, {});

console.log(groupCountry);

// ==========================================
// Reduce Practice 🏋️ (Immutable)
// ==========================================

// Calculate the total
const numbersForReduce = [1, 2, 3, 4];
const totalValue = numbersForReduce.reduce((acc, cur) => acc + cur, 0);
console.log(totalValue);

// Calculate the total amount
const productsForReduce = [
  { id: 1, name: "Laptop", price: 1000, inStock: true },
  { id: 2, name: "Mouse", price: 50, inStock: false },
  { id: 3, name: "Keyboard", price: 150, inStock: true },
  { id: 4, name: "Monitor", price: 300, inStock: false },
];

const totalAmount = productsForReduce.reduce(
  (acc, cur) => (cur.inStock ? acc + cur.price : acc),
  0,
);
console.log(totalAmount);

// Count the number of people by country.
const usersForReduce = [
  { id: 1, name: "Alice", country: "Germany" },
  { id: 2, name: "Bob", country: "USA" },
  { id: 3, name: "Carol", country: "Germany" },
  { id: 4, name: "Dave", country: "Japan" },
];

const countUserOfCountry = usersForReduce.reduce((acc, user) => {
  const country = user.country;

  return {
    ...acc,
    [country]: acc[country] ? acc[country] + 1 : 1,
  };
}, {});
console.log(countUserOfCountry);

// Calculate the total amount for each status.
const ordersForReduce = [
  { id: 1, status: "paid", amount: 100 },
  { id: 2, status: "pending", amount: 200 },
  { id: 3, status: "paid", amount: 200 },
];

const totalAmountOfStatus = ordersForReduce.reduce((acc, order) => {
  const status = order.status;

  return {
    ...acc,
    [status]: acc[status] ? acc[status] + order.amount : order.amount,
  };
}, {});

console.log(totalAmountOfStatus);

// Group by category + Add "product"
const productsForReduce2 = [
  { id: 1, name: "MacBook", category: "Electronics" },
  { id: 2, name: "T-Shirt", category: "Apparel" },
  { id: 3, name: "Headphones", category: "Electronics" },
  { id: 4, name: "Jeans", category: "Apparel" },
];

const productsOfCategory = productsForReduce2.reduce((acc, product) => {
  const category = product.category;

  return {
    ...acc,
    [category]: [...(acc[category] ?? []), product],
  };
}, {});

console.log(productsOfCategory);

// Sum the quantity for each ID.
const cartForReduce = [
  { id: 1, name: "Apple", quantity: 1 },
  { id: 2, name: "Banana", quantity: 5 },
  { id: 1, name: "Apple", quantity: 2 },
];

const totalQuantityOfId = cartForReduce.reduce(
  (acc, item) => ({
    ...acc,
    // [item.id]: acc[item.id] ? acc[item.id] + item.quantity : item.quantity
    [item.id]: (acc[item.id] ?? 0) + item.quantity, // ✅ Read easier!
  }),
  {},
);

// MEMO: Mutable
// const totalQuantityOfId = cartForReduce.reduce((acc, item) => {
//   const key = item.id;
//   acc[key] = (acc[key] ?? 0) + item.quantity;
//   return acc;
// }, {});

console.log(totalQuantityOfId);
