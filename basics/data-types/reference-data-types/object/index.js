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
// Planning

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
