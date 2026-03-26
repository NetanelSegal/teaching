// Lesson 6: Functions - Theory

// 1. Function Declaration (Hoisted)
showMessage(); // Works!

function showMessage() {
  console.log("Hello from a Declaration!");
}

// 2. Function Expression (Not Hoisted)
const sayHello = function(name) {
  console.log(`Hello, ${name}!`);
};
sayHello("Alice");

// 3. Arrow Functions (Concise)
const square = n => n * n;
console.log(square(5)); // 25

const add = (a, b) => {
  console.log("Adding...");
  return a + b;
};

// 4. Local vs Outer variables
let userName = 'John';

function showGreeting() {
  let message = 'Hello, ' + userName; // Accesses outer variable
  console.log(message);
}
showGreeting();
