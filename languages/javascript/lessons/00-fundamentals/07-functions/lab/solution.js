// Lesson 7 Lab: Functions - Solution

// Task 1: Basic Function Declaration
function welcome(name) {
  console.log(`Welcome to JS, ${name}!`);
}
welcome("Yoav");

// Task 2: Function with Return
function multiply(a, b) {
  let product = 0;
  for (let i = 0; i < b; i++) {
    product += a;
  }
  return product;
}
let res = multiply(5, 4);
console.log(res); // 20

// Task 3: Circle Area
const getCircleArea = radius => {
  const area = 3.14 * radius * radius;
  return area;
};
const area = getCircleArea(5);
console.log(`The area is: ${area}`);

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

// Task 5: Callbacks - Basic
function performAction(action, callback) {
  console.log(`Starting action: ${action}`);
  callback(action);
}

performAction("Coding", (action) => {
  console.log(`Action ${action} is done!`);
});

// Task 6: Callbacks - Logic
function calculate(a, b, operation) {
  return operation(a, b);
}

const added = calculate(10, 5, (x, y) => x + y);
const multiplied = calculate(10, 5, (x, y) => x * y);

console.log(`Added: ${added}`);
console.log(`Multiplied: ${multiplied}`);
