// Lesson 1: Hello World & Variables - Theory

// 1. Outputting data
console.log("Hello, World!"); // Prints "Hello, World!" to the console

// 2. Variables (let)
// Use 'let' for values that can change.
let user = "John";
console.log("Original user:", user);

user = "Jane"; // Reassigning the value
console.log("Updated user:", user);

// 3. Constants (const)
// Use 'const' for values that should not change.
const pi = 3.14159;
console.log("The value of PI is:", pi);

// pi = 3.14; // ERROR: Assignment to constant variable.

// 4. Multiple variables
let admin, name; // Declare two variables
name = "Alice";
admin = name; // Copy the value from 'name' to 'admin'
console.log("Admin name is:", admin);

// 5. Naming
// Correct:
let myMessage = "Hello";
let $ = 1; // '$' can be a name
let _ = 2; // '_' can be a name

// Incorrect:
// let 1a = 5; // ERROR: cannot start with a digit
// let my-name = "John"; // ERROR: hyphens are not allowed
