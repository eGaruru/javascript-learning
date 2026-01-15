# JavaScript Variables

## What I learned

- JavaScript provides three ways to declare variables: let, const, var
- Difference between let, const and var
  let: Use let only when a value must change
  Use 'let' when a variable needs to change later.
  Reassigning or mutating a variable is perfectly valid with let.
  Useful when declaring empty variables that will recive a value later.

  const: Use const by default
  Use 'const' for values that should never change.
  Variables declared with const are immutable(cannot be reassigned).
  Cannot declare empty const variables - an initial value is required.

  var: Should be avoided
  The old way of declaring variables (pre-ES6).
  Works similarly to let on the surface, but behaves differently under the hood.
  Has function scope and can cause unexpected behavior.

- Basic scope behavior

## Files

- index.js: simple examples of variables
