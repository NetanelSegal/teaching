# Lesson 2: Data Types (The 8 Building Blocks)

## Goal

Master all 8 data types in JavaScript, understand the difference between Primitives and Objects, and use `typeof` correctly.

## The "Why?"

JavaScript is "dynamically typed," meaning a variable can hold a string, then a number. But the *values* themselves have types. Understanding these is critical for math, logic, and data storage.

## In-Depth Explanations

### 1. The 8 Data Types at a Glance


| Category       | Type        | Detailed Explanation                                                           |
| -------------- | ----------- | ------------------------------------------------------------------------------ |
| **Primitives** | `Number`    | For both integers and floating-point numbers. Includes `Infinity` and `NaN`.   |
|                | `BigInt`    | For integers of arbitrary length (needed for very large numbers).              |
|                | `String`    | For strings. A string may have zero or more characters.                        |
|                | `Boolean`   | For `true` and `false`.                                                        |
|                | `null`      | For unknown values – a standalone type that has a single value `null`.         |
|                | `undefined` | For unassigned values – a standalone type that has a single value `undefined`. |
|                | `Symbol`    | For unique identifiers.                                                        |
| **Complex**    | `Object`    | For more complex data structures and entities.                                 |


---

### 2. Deep Dive: The Types

#### Number & Special Values

- `**NaN`**: Represents a computational error. It's "sticky" – any further mathematical operation on `NaN` returns `NaN`.
- `**Infinity*`*: Greater than any number. `1 / 0` yields `Infinity`.

#### BigInt (The "n" suffix)

Regular numbers can't safely exceed `2^53 - 1`. BigInts are created by appending `n` to the end of an integer literal.

```javascript
const bigInt = 123456789012345678901234567890n;
```

#### String (3 Types of Quotes)

1. **Double quotes**: `"Hello"`
2. **Single quotes**: `'Hello'`
3. **Backticks**: `Hello` — These are "extended functionality" quotes. They allow you to embed variables and expressions into a string by wrapping them in `${…}`.

#### Boolean (Logical type)

Only has two values: `true` and `false`. Used for yes/no, on/off, etc.

#### The "null" Value

In JS, `null` is **not** a "reference to a non-existing object." It’s just a special value which represents "nothing", "empty" or "value unknown".

#### The "undefined" Value

The meaning of `undefined` is "value is not assigned". If a variable is declared, but not assigned, then its value is `undefined`.

#### Objects and Symbols

- **Objects** are used to store collections of data. Primitives (above) can only store a single thing (a string, a number, etc.).
- **Symbols** are used to create unique identifiers for objects.

---

### 3. The `typeof` Operator

The `typeof` operator returns the type of the argument as a string.

**Special Cases:**

- `typeof null` returns `"object"`. This is an error in the language, kept for compatibility. `null` is NOT an object.
- `typeof alert` returns `"function"`. Functions are objects, but `typeof` treats them specially.

## Diverse & Key Examples

### Example 1: Template Literals

```javascript
let name = "John";
// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!
// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3
```

### Example 2: `null` vs `undefined`

```javascript
let age = null; // We explicitly say: we don't know the age.
let x; // JS says: I don't have a value for this yet.
```

### Example 3: `NaN` Behavior

```javascript
alert( "not a number" / 2 ); // NaN
alert( NaN + 1 ); // NaN
```

## External Resources

- [Data types - javascript.info](https://javascript.info/types)

---

## Practice

Go to the `lab/` folder and complete the exercises in `exercises.js`.