# If...else statement

## What I learned

- How to make decisions in code

## If...else statement

- `if...else` is a **control structure** (control flow statement)
  - Regular code → Executes in order from top to bottom
  - if / else → Branches between **which block is executed** based on the condition
- `if...else` executes different blocks based on conditions
  - `if` executes if block when condition is **true**
  - `else if` is evaluated only if all previous conditions were false
  - `else`(optional) executes else block when none of the conditions apply

### Basic Syntax

```js
if(condition){
  statement 1 // runs if condition is true
}

// with else statement, but else is optional
if(condition){
  statement 1
}else{
  statement 2
}

// `else if` is checked only when the previous condition is false
if(condition1){
  statement 1
}else if(condition2){
  statement 2
}else{
  statement 3
}
```

## How conditions work

- Conditions are always evaluated as Boolean(true/false) values
- Truthy and falsy values affect `if...else` behavior

### Common use cases

1. Early Return

- Exit the function immediately if the condition is not met
- Helps reduce nesting and improves readability

```js
function process(data) {
  if (!data) return; // Guard Clause
  console.log("Processing data");
}
```

2. Conditional branching

- Execute different logic based on multiple conditions

```js
let grade;
if (score >= 90) {
  grade = "A";
} else if (score >= 70) {
  grade = "B";
} else {
  grade = "C";
}
```

### If...else vs ternary operator

- `if..else` can be replaced with ternary operator`?:`
  - `const variable = condition ? statement1 : statement2`;
- Display/Value Determination: ternary
- Behavior Switching: if...else

| conditions                 | should be used |
| :------------------------- | :------------- |
| return value               | ternary        |
| branching execution        | if...else      |
| multiple lines             | if...else      |
| simple conditional display | ternary        |

```text
💡 "if...else" or "switch"?
    ● conditions are boolean -> if...else
    ● values are constant(enum / fixed string / number) -> switch
```

### ⚠ Common pitfalls

- Variables declared inside an if/else block are block-scoped (`let`, `const`)
  - Need to be declared outside of if/else block when need to access it
- Avoid deeply nested if/else statements
- Always use `{}` for better readability and to prevent bugs

## Files

- index.js
  - Simple examples of if...else
- README.md
  - Explanation of this
