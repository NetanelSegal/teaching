// Lesson 10: Arrays - Comprehensive Theory

// 1. Basics & Stack/Queue
let users = ["John", "Pete", "Mary"];

users.push("Bill");    // Adds to end: ["John", "Pete", "Mary", "Bill"]
users.pop();           // Removes from end: ["John", "Pete", "Mary"]
users.unshift("Joe");  // Adds to start: ["Joe", "John", "Pete", "Mary"]
users.shift();         // Removes from start: ["John", "Pete", "Mary"]

// 2. Structural Methods
// splice(index, deleteCount, ...items)
let arr = ["I", "study", "JavaScript", "right", "now"];
arr.splice(0, 3, "Let's", "dance"); // ["Let's", "dance", "right", "now"]

// slice(start, end)
let sub = arr.slice(1, 3); // ["dance", "right"] (original arr is unchanged)

// 3. Searching
let fruits = ["Apple", "Orange", "Apple", "Mango"];
console.log(fruits.indexOf("Apple"));   // 0
console.log(fruits.includes("Mango"));  // true

let employees = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" }
];

let pete = employees.find(item => item.id === 2);
console.log(pete.name); // "Pete"

// 4. Transformation (Functional)
// map: transform each element
let names = employees.map(item => item.name); // ["John", "Pete", "Mary"]

// filter: filter elements
let someUsers = employees.filter(item => item.id < 3); // [{id:1...}, {id:2...}]

// reduce: aggregate into one value
let numbers = [1, 2, 3, 4, 5];
let result = numbers.reduce((sum, current) => sum + current, 0); // 15

// 5. Utility
// split & join
let tags = "html,css,js";
let tagArr = tags.split(","); // ["html", "css", "js"]
let tagStr = tagArr.join("; "); // "html; css; js"

// reverse & sort
let messy = [1, 15, 2];
messy.sort((a, b) => a - b); // [1, 2, 15] (Correct numeric sort)
messy.reverse();             // [15, 2, 1]

// Check type
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false
