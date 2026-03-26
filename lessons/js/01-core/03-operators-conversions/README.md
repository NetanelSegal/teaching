# Lesson 3: Basic Operators & Type Conversion

## Goal
Master the mathematical engine of JavaScript and learn how to manage the automatic and manual "morphing" of data types.

## The "Why?"
Data is rarely in the perfect format. A user's age might come from an input field as a **String**, but you need it as a **Number** for math. Understanding these conversions prevents "silent bugs" like `10 + 20 = "1020"`.

## In-Depth Explanations

### 1. Type Conversion Rules
- **String**: `String(true)` -> `"true"`. Happens automatically in `alert(value)`.
- **Boolean**: 
    - **Falsy**: `0`, `""`, `null`, `undefined`, `NaN`.
    - **Truthy**: Everything else (including `"0"`, `" "`, `[]`).
- **Numeric**:
    - `undefined` -> `NaN` (Wait, what? Yes, undefined is not a number).
    - `null` -> `0`.
    - `true / false` -> `1 / 0`.
    - `string` -> Trimmed numeric value. If empty -> `0`. If invalid -> `NaN`.

### 2. Math Operators
- `+` (Addition/Concatenation), `-` (Subtraction), `*` (Multiplication), `/` (Division).
- `%` (Remainder): `5 % 2` is `1`.
- `**` (Exponentiation): `2 ** 3` is `8`.

### 3. The "Plus" and Unary Plus
- **Overloading**: If any operand is a string, `+` performs **Concatenation**.
- **Unary Plus (+)**: Placed before a value, it's the fastest way to convert it to a number.
```javascript
let x = "5";
console.log(+x); // 5 (Number)
```

### 4. Assignment & Modifiers
- **Assignment (`=`)**: It returns a value! `a = b = c = 5`.
- **Modify-and-Assign**: `n += 5` (same as `n = n + 5`). Works with all math operators (`*=`, `/=`, etc.).

### 5. Increment/Decrement
- **Prefix (`++n`)**: Increments and **then** returns the new value.
- **Postfix (`n++`)**: Returns the old value and **then** increments.
```javascript
let counter = 1;
console.log(2 * ++counter); // 4 (counter becomes 2, then multiplied)
console.log(2 * counter++); // 4 (multiplied by 2, then counter becomes 3)
```

## Diverse & Key Examples

### Example 1: The order of operations
```javascript
console.log( "" + 1 + 0 ); // "10" (Concatenation)
console.log( "" - 1 + 0 ); // -1 (Subtraction converts to number)
console.log( true + false ); // 1 (1 + 0)
```

### Example 2: Prefix vs Postfix in action
```javascript
let a = 1, b = 1;
let c = ++a; // c = 2, a = 2
let d = b++; // d = 1, b = 2
```

### Example 3: Modulo for logic
```javascript
// Check if a number is even
let n = 10;
let isEven = (n % 2 === 0);
```

## External Resources
- [Type Conversions - javascript.info](https://javascript.info/type-conversions)
- [Basic operators, maths - javascript.info](https://javascript.info/operators)

---
## Practice
Go to the `lab/` folder and complete the exercises in `exercises.js`.
