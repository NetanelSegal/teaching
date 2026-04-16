// Lesson 2: Data Types - Comprehensive Theory

// 1. Number (Integrals and floating-point numbers)
let n = 123;
let f = 12.345;
console.log(1 / 0); // Infinity
console.log("not a number" / 2); // NaN (Not a Number)

// 2. BigInt (Large integers)
// Created by adding 'n' to the end of an integer
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);

// 3. String (Textual data)
let str = "Hello";
let str2 = 'Single quotes work too';
let phrase = `backticks can embed ${str}`; // Template literals
console.log(phrase);

// 4. Boolean (Logical values)
let nameFieldChecked = true;
let isGreater = 4 > 1; // true

// 5. "null" (A standalone type for "nothing")
let age = null; // Represents an unknown value

// 6. "undefined" (A standalone type for "value not assigned")
let x;
console.log(x); // undefined

// 7. Symbol (Unique identifiers)
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // false (Symbols are always unique)

// 8. Object (Complex data structures)
let user = {
    name: "John",
    age: 30
};
console.log(user.name);

// --- The typeof Operator ---
// Returns the type of a value as a string.

console.log(typeof 0);           // "number"
console.log(typeof 10n);         // "bigint"
console.log(typeof true);        // "boolean"
console.log(typeof "foo");       // "string"
console.log(typeof Symbol("id"));// "symbol"
console.log(typeof {});          // "object"
console.log(typeof undefined);   // "undefined"

// Special Quirks:
console.log(typeof null);        // "object" (Official bug in JS)
console.log(typeof alert);       // "function" (Functions are objects, but typeof is special)
