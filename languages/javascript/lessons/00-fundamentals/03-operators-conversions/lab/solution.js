// Lesson 3 Lab: Operators & Conversions - Solution

// Task 1: Type Conversions
console.log(Number("100")); // 100
console.log(Boolean(0));    // false
console.log(String(null));  // "null"

// Task 2: Fix the Addition
let a = "10";
let b = "20";
console.log(+a + +b); // 30

// Task 3: Operators
console.log(10 % 3); // 1
console.log(5 ** 2); // 25

// Task 4: Increment/Decrement
let c = 1;
let d = ++c; // d = 2, c = 2
c++;         // c = 3
console.log(c, d); // 3, 2
