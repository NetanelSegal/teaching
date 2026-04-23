// Solutions for 20-functions-callbacks

// Exercise 1: The Messenger
function createMessage(text, sender = "Guest") {
  return `${sender} says: ${text}`;
}
console.log(createMessage("Hello!")); // Guest says: Hello!
console.log(createMessage("Hi!", "Alice")); // Alice says: Hi!


// Exercise 2: Declaration vs Expression
// isEven(); // Works due to hoisting
// isOdd(); // Fails (ReferenceError) - expressions are not hoisted

function isEven(n) { return n % 2 === 0; }
const isOdd = function(n) { return n % 2 !== 0; };


// Exercise 3: Concise Math
const add = (a, b) => a + b;
const square = n => n * n;
const getFullYear = () => 2024;


// Exercise 4: The String Formatter
const formatName = (first, last) => `${last.toUpperCase()}, ${first[0].toUpperCase()}${first.slice(1).toLowerCase()}`;
console.log(formatName("john", "doe")); // DOE, John


// Exercise 5: The Transformer
function transform(num, action) {
  return action(num);
}

console.log(transform(10, n => n * 2));   // 20
console.log(transform(10, n => n ** 2));  // 100
console.log(transform(10, n => -n));      // -10


// Exercise 6: The User Validator
function validateUser(username, onSuccess, onFailure) {
  if (username.length > 5) onSuccess();
  else onFailure();
}

validateUser("admin", () => console.log("Too short"), () => console.log("Error")); // Error
validateUser("administrator", () => console.log("Success"), () => console.log("Error")); // Success


// Exercise 7: Custom Filter
function myFilter(arr, testFunc) {
  const result = [];
  for (let item of arr) {
    if (testFunc(item)) {
      result.push(item);
    }
  }
  return result;
}

const numbers = [5, 12, 8, 20, 3];
const filtered = myFilter(numbers, n => n > 10);
console.log(filtered); // [12, 20]
