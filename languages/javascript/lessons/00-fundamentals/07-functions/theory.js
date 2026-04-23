// Lesson 7: Functions - Theory

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

// 5. Callback Functions
// A callback is a function passed into another function as an argument.
function processInput(name, callback) {
  console.log(`Processing ${name}...`);
  callback(name);
}

processInput("Alice", (n) => console.log(`Finished processing ${n}!`));

// Example with multiple callbacks
function checkAccess(age, onAllowed, onDenied) {
  if (age >= 18) {
    onAllowed();
  } else {
    onDenied();
  }
}

checkAccess(
  20,
  () => console.log("Access granted!"),
  () => console.log("Access denied!")
);
