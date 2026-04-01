// Object

// ------------------------------------------------------------
// 1) Basic Syntax
// ------------------------------------------------------------
const user = {
  id: 1,
  firstName: "John",
  email: "john.smith@example.com",
  birthYear: 1988,
  country: "Germany",
  sayHello: function () {
    console.log(`Hello! Mey name is ${this.firstName}.`);
  },
};

// - Dot vs Bracket Notation
console.log(user.firstName);
console.log(user["firstName"]); // [] need expression() of string

const keyCountry = "country";
console.log(user.keyCountry); // returns undefined, Undefined property cannot be used
console.log(user[keyCountry]); // Germany

// ------------------------------------------------------------
// 2) Object Methods & `this` Keyword
// ------------------------------------------------------------
const product = {
  id: 1,
  productName: "Gummibärchen (Klassik)",
  brand: "Haribo",
  price: 1.29,
  category: "Süßigkeiten",
  inStock: true,
  stockQuantity: 500,
  isVegan: false,
  isBio: false,
  weightGram: 200,
  // ✅ Method: Function Expression
  calcAmount: function (quantity) {
    return quantity * this.price; // this === product
  },
  // ✅ Alternative:
  printProductInfo() {
    console.log(
      `[${this.productName}] brand: ${this.brand}, category: ${this.category}, stock: ${this.inStock ? this.stockQuantity : 0}`,
    );
  },
  // ❌ Arrow function: does not refer to the object that calls this method
  getProductName: () => {
    console.log(this); // {}
    return this.productName;
  },
};

console.log(product.calcAmount(4)); // 5.16
product.printProductInfo(); // [Gummibärchen (Klassik)] brand: Haribo, category: Süßigkeiten, stock: 500
console.log(product.getProductName()); // undefined

// ------------------------------------------------------------
// 3) Essential Object Methods & Iteration
// ------------------------------------------------------------
const score = {
  math: 65,
  biology: 85,
  geography: 80,
  science: 74,
  chemistry: 68,
};

// - Object.keys x map
const subjects = Object.keys(score).map((key) => key.toUpperCase());

// - Object.values x reduce
const totalScore = Object.values(score).reduce((acc, cur) => acc + cur, 0);

// Object.entries x array.methods
const highScores = Object.entries(score)
  .filter(([_key, value]) => value >= 80)
  .map(([key, value]) => `${key}: ${value}`);

console.log("SUBJECTS", subjects); // SUBJECTS [ 'MATH', 'BIOLOGY', 'GEOGRAPHY', 'SCIENCE', 'CHEMISTRY' ]
console.log("TOTALSCORE", totalScore); // TOTALSCORE 372
console.log("HIGHSCORES", highScores); // [ 'biology: 85', 'geography: 80' ]

// Object.hasOwn, Object.freeze のコードもここに
// Object.assign();
const scoreOther = {
  history: 82,
  physical: 60,
  english: 70,
};
const allScores = Object.assign({}, score, scoreOther); // create new object
// or const allScores = { ...score, ...scoreOther };
console.log(allScores);

// Object.hasOwn();
console.log(Object.hasOwn(score, "physics")); // false

// Object.freeze();
const CONFIG = {
  apiUrl: "https://example.com/",
  theme: "dark",
};

Object.freeze(CONFIG);
CONFIG.theme = "light"; // Error throws when "strict mode"!
console.log(CONFIG.theme); // dark

// ------------------------------------------------------------
// 4) Modern Syntax (ES6+)
// ------------------------------------------------------------
const currentYear = new Date().getFullYear();

const car = {
  model: "X3",
  brand: "bmw",
  firstRegistrationYear: 2025,
  fuelType: "Plug-in-Hybrid",
  color: "Arctic Race Blue metallic",
  price: 71840,
  // getYearsOftheCar: function () {
  //   return currentYear - this.firstRegistrationYear;
  // },
};

// - Destructuring
const { model, brand } = car;

const loggingProductInfo = ({ model, brand, color, option = "" }) => {
  // The part of option can also be written option: ${option?.optionName ?? "default"}
  console.log(`Model: ${model}
  Brand: ${brand}
  color: ${color}
  option: ${option ? option.optionName : "default"}
  `);
};

loggingProductInfo(car);

// - Spread syntax (...)
const carExtra = { ...car, option: { optionName: "Seat extension" } };
loggingProductInfo(carExtra); // option: Seat extension

// - Optional Chaining (?.) & Nullish Coalescing (??)
let carOption = car.option?.optionName ?? "default";
console.log(carOption);

carOption = carExtra.option?.optionName ?? "default";
console.log(carOption);

// 💡 Method will not be called when it does not exist
console.log(car.getYearsOftheCar?.()); // undefined, NOT calling

// - Computed Property
const keyVehicleCondition = "vehicleCondition";
const usedCar = { ...car, [keyVehicleCondition]: "Used" };
console.log(usedCar[keyVehicleCondition]); // Used

// ------------------------------------------------------------
// 5) Common Pitfalls (Trap & Solutions)
// ------------------------------------------------------------
// - Mutating objects in Functions
const currentYearPitfall = new Date().getFullYear();
const originalUser = { name: "Tom", birthYear: 1995 };

// ❌ BAD:
const updateAgeBad = function (user) {
  user.age = currentYear - user.birthYear; // Mutating
  return user;
};

// ✅ GOOD:
const updateAgeGood = function (user) {
  return { ...user, age: currentYearPitfall - user.birthYear };
};

const updatedUser = updateAgeGood(originalUser);
console.log(
  `[Original User Age] ${originalUser.age}, [Updated User Age] ${updatedUser.age}`,
);
// Output: [Original User Age] undefined, [Updated User Age] 31

// - The Shallow Copy Trap
const john = {
  name: "John",
  address: { city: "Berlin", zip: "10115" },
};

// ❌ BAD: spread syntax copies only until one level
// const john2 = { ...john };
// john2.address.city = 'Tokyo'; // Munipulates original object as well

// ✅ GOOD:
const john3 = { ...john, address: { ...john.address, city: "Tokyo" } };
console.log(
  `John's city: ${john.address.city}, John3's city: ${john3.address.city}`,
);
// Output: John's city: Berlin, John3's city: Tokyo

const state = {
  user: {
    name: "Tom",
    address: {
      city: "Berlin",
    },
  },
};

// ❌ Bad:
// const newState = {
//   ...state,
// };
// newState.user.address.city = 'Munich'; // Mutating

// ✅ GOOD:
const newState = {
  ...state,
  user: { ...state.user, address: { ...state.user.address, city: "Munich" } },
};
console.log("State: " + state.user.address.city); // State: Berlin
console.log("New State: " + newState.user.address.city); // New State: Munich

// - Using destructuring as a delete
const item = { id: 21, productName: "Microwave", price: 60, reviews: 4.8 };

// ❌ BAD:
// delete item.reviews;

// ✅ GOOD:
const { reviews, ...restOfItem } = item;
console.log(restOfItem); // { id: 21, productName: 'Microwave', price: 60 }

// - Using destructuring as a delete
const userBeforeDelete = {
  name: "Anna",
  age: 20,
};

const { age, ...rest } = userBeforeDelete;
console.log(userBeforeDelete.age); // 20, original data still has this key-value pair

// ✅ GOOD:
const userAfterDelete = rest;
console.log(userAfterDelete); // { name: 'Anna' }

// - Truthiness of Empty Objects
const fetchResponse = () => ({});
const response = fetchResponse();

// ❌ BAD:
if (response) {
  // console.log(response.data.userId); // 💣 Cannot read properties of undefined
}

// ✅ GOOD:
if (response?.data) {
  console.log("Success:", response.data.userId);
} else {
  console.log("Data not found or empty response.");
}

// - Trap "this" + "destructuring"
const testUser = {
  name: "Anna",
  greet() {
    return `Hello ${this.name}`;
  },
};

// const { greet } = testUser;  destructuring
// console.log(greet()); Hello undefined or Error throws (Cannot read properties of undefined) in strict mode
// What is happend? -> The method is called without object that it calls -> "this" is NOT exist

// ✅ GOOD:
console.log(testUser.greet()); // Hello Anna
// Alternative:
const greet = testUser.greet.bind(testUser);
console.log(greet()); // Hello Anna

// - Mutating with map
const users = [
  { name: "A", score: 10 },
  { name: "B", score: 20 },
];

// ❌ Bad: Original data is changed in map method
const updatedUsersBad = users.map((user) => {
  user.score += 10; // Mutating
  return user;
});

// ✅ GOOD:
const updatedUsersGood = users.map((user) => {
  return { ...user, score: user.score + 10 }; // returns new object
});

// - reduce x reference
const items = [
  { category: "A", value: 1 },
  { category: "A", value: 2 },
];

// ❌ Bad: cases side effect
// const grouped = items.reduce((acc, item) => {
//   if (!acc[item.category]) {
//     acc[item.category] = [];
//   }

//   acc[item.category].push(item);
//   return acc;
// }, {});

// console.log(grouped);
// grouped['A'][0].value = 999;

// console.log(items[0].value);

// ✅ GOOD:
const grouped = items.reduce((acc, item) => {
  // returns new object
  return {
    ...acc,
    [item.category]: [...(acc[item.category] ?? []), { ...item }],
  };
}, {});

grouped["A"][0].value = 999;

console.log(items[0].value); // 1
console.log(grouped); // { A: [ { category: 'A', value: 999 }, { category: 'A', value: 2 } ] }

// - Object comparison
const a = { x: 1 };
const b = { x: 1 };

// ❌ Bad: "else" executed, object references to the address in memory
if (a === b) {
  console.log("same");
} else {
  console.log("different");
}

// 🆗: But Not all cases can be coverd
console.log(JSON.stringify(a) === JSON.stringify(b));
console.log(Object.hasOwn(a, "x") && Object.hasOwn(b, "x") && a.x === b.x);

// - Can NOT aboid error with Optional chaining
const data = {
  user: { name: null },
};

// ❌ Bad: if name is null or undefined, then error throws
// console.log(data.user?.name.length);

// ✅ GOOD:
console.log(data.user?.name?.length ?? 0);

// - Trap when setting default value：?? vs ||
const config = {
  retryCount: 0,
};

// ❌ Bad: 0 is falsy value -> assigned 3
const retryBad = config.retryCount || 3;
console.log(retryBad); // 3

// ✅ GOOD: ?? applies only null or undefined
const retryGood = config.retryCount ?? 3;
console.log(retryGood); // 0

// - Freeze can lock the properties only until one level
const SETTINGS = {
  theme: { accentColor: "#FF5ABD", baseColoer: "#6d6d6d" },
};
Object.freeze(SETTINGS);

SETTINGS.theme.accentColor = "#4d7777"; // can be changed🙀
console.log(SETTINGS);

// ------------------------------------------------------------
// 6) Mini Exercise: Real-World Scenarios
// ------------------------------------------------------------
/*
Challenge 1: Object.keys() + filter()
[Scenario] Check the user's permissions.
Please create a new array containing only the "key names" of permissions that are set to `true`.
Expected results: ["admin", "editor"]
*/
const permissions = {
  admin: true,
  viewer: false,
  editor: true,
  guest: false,
};

const activePermissions = Object.keys(permissions).filter(
  (key) => permissions[key],
);
console.log(activePermissions);

/*
Challenge 2: Object.values() + reduce()
[Scenario] You have sales data for each category this month.
Calculate the "Total Amount" of all sales.
Expected Result: 12500
*/
const monthlySales = {
  electronics: 5000,
  clothing: 3000,
  food: 4500,
};

const totalSales = Object.values(monthlySales).reduce(
  (acc, cur) => acc + cur,
  0,
);
console.log(totalSales);

/*
Challenge 3: Object.entries() + map()
[Scenario] To display a user's profile as a list on the screen,
create an array containing strings in the format "key name: value".
Expected result: ["name: Anna", "age: 28", "country: Canada"]
*/
const userProfile = {
  name: "Anna",
  age: 28,
  country: "Canada",
};

const formattedProfile = Object.entries(userProfile).map(
  ([key, value]) => `${key}: ${value}`,
);
console.log(formattedProfile);

/*
Challenge 4: Object.hasOwn() (or hasOwnProperty) + Object.freeze()
[Scenario] There is a "system setting (config)" that must never be rewritten.
1. Freeze (lock) this object.
2. Then, check if a key named `theme` exists within the setting, and output the result as a boolean.
*/
const systemConfig = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
};

// 1. lock the object
Object.freeze(systemConfig);

systemConfig.timeout = 10000; // Error throws when "strict mode"!
console.log(systemConfig.timeout); // 5000

// 2. Check if the `theme` key exists
const hasTheme = Object.hasOwn(systemConfig, "theme");
console.log(hasTheme); // false になるはず

/*
Challenge 5: Object.assign() (Merge settings)
[Scenario] Override the app's "default settings" with the user's selected "custom settings" to create the final settings object.
Expected result: { volume: 80, difficulty: "hard", showSubtitles: true }
*/
const defaultSettings = {
  volume: 50,
  difficulty: "normal",
  showSubtitles: true,
};

const userSettings = {
  volume: 80,
  difficulty: "hard",
};

const finalSettings = Object.assign({}, defaultSettings, userSettings); // immutable
console.log(finalSettings);
