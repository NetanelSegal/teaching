// Lesson 6 Lab: Functions - Solution

// Task 1: Basic Function Declaration
function welcome(name) {
  console.log(`Welcome to JS, ${name}!`);
}
welcome("Yoav");

// Task 2: Function with Return
function multiply(a, b) {
  return a * b;
}
let res = multiply(5, 4);
console.log(res); // 20

// Task 3: Arrow Functions
const getCircleArea = radius => 3.14 * radius * radius;
console.log(getCircleArea(5));

// Task 4: Power function
function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
console.log(pow(3, 2)); // 9
console.log(pow(2, 10)); // 1024
