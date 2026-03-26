// Lesson 2: Data Types - Theory

// 1. Number
let n = 123;
let float = 12.345;
console.log(1 / 0); // Infinity
console.log("not a number" / 2); // NaN

// 2. String
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`; // Template literal
console.log(phrase); // "can embed another Hello"

// 3. Boolean
let nameFieldChecked = true;
let isGreater = 4 > 1; // true

// 4. null
let age = null; // Represents "nothing"

// 5. undefined
let x;
console.log(x); // "undefined"

// 6. typeof
console.log(typeof 0); // "number"
console.log(typeof "foo"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof null); // "object" (Wait, what? Yes, this is a known quirk!)
