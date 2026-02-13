# Template Literals

## What I learned

- Template literals were introduced in ES6 (ECMAScript 2015)
- They allow writing more readable and maintainable strings

## Template Literals

- Template literals are a string **syntax** (not a data type)
- They use backticks: `...`
- Placeholders `${expression}` allow embedding variables and expressions directly

## Advantages of Template Literals

### Readability

- As usual
  - `"I'm " + firstName + ", a " + (year - birthYear) + " years old, " + greet + "!"`
  - Need many with `+` for string concatenation
  - Need to think about the structure of the string
  - Need to worry about spaces and quotes

- Template literals
  - `I'm ${firstName}, a ${year - birthYear} years old ${greet}!`
  - No need for string concatenation with `+`
  - Fewer bugs (especially with spaces and quotes)
  - Can technically be written as a single-line string across multiple lines using `\` (backslash)
    - ⚠ but this is not recommended for readability
    - In practice, it is often clearer to use an array and `join()`
    - `const stringText = [text, text, text].join(" ")`
  - Using tags allows template literals to be parsed by functions

### Multiline strings

- As usual
  - Need to use `\n`

- Template literals
  - Line breaks can be written directly

> 💡Practical Notes
>
> - Template literals are used extensively in:
>   - Logging
>   - Error messages
>   - JSX / HTML string generation
> - Tagged templates are useful for:
>   - Escaping (XSS prevention)
>   - SQL query builders
>   - i18n (translation handling)

## Files

- index.js
  - Simple examples of template literals
- README.md
  - Explanation of this
