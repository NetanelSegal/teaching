// Lesson 4 Lab: Logic & Control - Solution

// Task 1: Basic Comparisons
console.log(5 > 4); // true
console.log("apple" > "pineapple"); // false (Dictionary order: 'a' < 'p')
console.log(2 == "2"); // true
console.log(2 === "2"); // false

// Task 2: The if statement
let score = 85;
if (score >= 90) {
    console.log("Excellent!");
} else if (score >= 70) {
    console.log("Good job!");
} else {
    console.log("Keep practicing!");
}

// Task 3: Logical Operators
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
    console.log("Welcome, Admin!");
} else if (isLoggedIn) {
    console.log("Welcome, User!");
}

// Task 4: Default Values
let headerText = "";
console.log(headerText || "Hello World"); // "Hello World" (Empty string is falsy)
console.log(headerText ?? "Hello World"); // "" (Empty string is NOT null/undefined)
