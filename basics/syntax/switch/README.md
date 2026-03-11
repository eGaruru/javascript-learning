# Switch Statement

## What I learned

- How to make decisions in code
- When should I use switch statements

> 💡 JavaScript supports two conditional statements: `if...else` and `switch`

## Switch statement

- `switch` is a **control structure** (control flow statement)
  - Regular code → Executes in order from top to bottom
  - `switch` evaluates an expression once and executes code blocks based on matching cases
  1. The `switch` statement evaluates the expression first
  2. It searches for the `case` which matches the result of the expression
  3. It executes the statements after the matched case until a `break` statement is found

- `case`: Specifies the value to be compared
  - It is compared using the **strict equality operator (`===`)** internally
- `break`: The command to exit the switch block. The first matching case executes its statements until it hits a `break`
- `default` (optional): Executes if none of the cases match (similar to the role of `else` in `if...else`)

> 💡 Because `switch` uses **strict comparison**, be careful not to forget the `break` statement
> ⚠ If there is no `break`, it executes the next case too (**fall-through**)

### Basic Syntax

```js
// expression -> result of an expression or a value
switch (expression) {
  case caseExpression1:
    statement1;
    break; // stops execution and exits the switch
  case caseExpression2:
    statement2;
    break;
  // …
  default:
    statementDefault; // executes if no cases match
}

// Grouping the same processes (Fall-through)
switch (expression) {
  case caseExpression1:
  case caseExpression2:
    statement1or2; // Executes if expression matches case1 OR case2
    break;
  case caseExpression3:
    statement3;
    break;
  default:
    statementDefault;
}
```

### Common use cases

- Useful and readable when you want to compare one value against multiple possible values

- Can also be used for range comparisons using `switch (true)`

```js
// 1. For exact value matching
const loadingStatus = "success";
let message = "";

switch (loadingStatus) {
  case "loading":
    message = "Your data is loading, please wait a moment...";
    break;
  case "success":
    message = "Your data is loaded successfully!";
    break;
  case "error":
    message = "Something went wrong, please try again.";
    break;
  default:
    message = "Unknown status.";
}

// 2. Range Comparison
const score = 85;

switch (true) {
  case score >= 90:
    console.log("Very Good!");
    break;
  case score >= 80:
    console.log("Good");
    break;
  case score >= 70:
    console.log("Satisfactory");
    break;
  case score >= 60:
    console.log("Pass");
    break;
  default:
    console.log("Fail");
}
```

### Switch vs If...else

- A switch statement is an alternative way of writing complicated `if...else` statements, especially when checking a single variable against multiple exact values

| Feature         | Switch                                   | If...else                           |
| :-------------- | :--------------------------------------- | :---------------------------------- |
| Best used for   | Fixed values (enum / string / number)    | Boolean conditions / Complex logic  |
| Comparison type | Strict equality (===)                    | All logical operators (<, >, &&, `) |
| Readability     | Easier to read for many specific values  | Can become nested and hard to read  |
| Flexibility     | Less flexible (evaluates one expression) | Highly flexible                     |

### ⚠ Appendix: Alternatives to Switch (Object Mapping)

- Alternative to switch
  - [`if...else`](../if-else/README.md)
  - `object mapping`

- Instead of using switch, modern JavaScript often uses Object Mapping (or Object Literals) for cleaner and more maintainable code

```js
// Rewriting with object literals
const day = "monday";

// 1. Define activities as an object
const activities = {
  monday: "Study German",
  tuesday: "Study programming",
  wednesday: "Apply for a job",
  thursday: "Study German",
  friday: "Study programming",
  saturday: "Enjoy the weekend",
  sunday: "Enjoy the weekend",
};

// 2. Get the value (set a fallback/default value using || or ??)
const myPlan = activities[day] ?? "Not a valid day";

console.log(myPlan);

// Executing functions using object mapping
const action = "update";

const taskManager = {
  create: () => console.log("Create a new task..."),
  update: () => console.log("Update the selected task..."),
  delete: () => console.log("Delete the selected task..."),
};

// Execute. If it doesn't exist, execute an empty function to prevent errors
(taskManager[action] ?? (() => console.log("This action is invalid")))();
```

## Files

- index.js
  - Simple examples of switch statement
- README.md
  - Explanation of this folder
