/* 
  JavaScript Exercises: Arrays (The Complete Guide) - Solutions
*/

// --- PART 1: Basic Operations & Loops ---

// Exercise 1: Create and Access
let colors = ["Red", "Green", "Blue"];
console.log(colors[0]); // "Red"
console.log(colors[colors.length - 1]); // "Blue"

// Exercise 2: Array Modification
let fruits = ["apple", "banana"];
fruits.push("cherry");
fruits.shift();
console.log(fruits); // ["banana", "cherry"]

// Exercise 3: Sum of Array (Manual Loop)
let nums = [10, 20, 30];
let sum = 0;
for (let n of nums) {
  sum += n;
}
console.log(sum); // 60

// Exercise 4: Even Filter (Manual Loop)
let original = [1, 2, 3, 4, 5, 6];
let evens = [];
for (let num of original) {
  if (num % 2 === 0) {
    evens.push(num);
  }
}
console.log(evens); // [2, 4, 6]


// --- PART 2: Advanced Manipulation (Splice & Slice) ---

// Exercise 5: The Stack & Queue
let tasks = ["Email client", "Meeting"];
tasks.push("Lunch");
tasks.unshift("Gym");
tasks.shift();
tasks.pop();
console.log(tasks); // ["Email client", "Meeting"]

// Exercise 6: Splice & Slice
let alphabet = ["A", "B", "C", "D", "E"];
alphabet.splice(2, 2, "X", "Y", "Z"); 
console.log(alphabet); // ["A", "B", "X", "Y", "Z", "E"]
let lastThree = alphabet.slice(-3);
console.log(lastThree); // ["Y", "Z", "E"]


// --- PART 3: Searching & Verification ---

// Exercise 7: User Search
const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true }
];

const bob = users.find(u => u.name === "Bob");
console.log(bob);

const hasInactive = users.some(u => !u.active);
console.log(hasInactive); // true

const allValidIds = users.every(u => u.id > 0);
console.log(allValidIds); // true


// --- PART 4: Transformation (Higher-Order Methods) ---

// Exercise 8: The Map & Filter Combo
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = numbers
  .filter(n => n % 2 !== 0)
  .map(n => n ** 2);
console.log(result); // [1, 9, 25, 49, 81]


// Exercise 9: Reducing to a Total
let cart = [
  { price: 10, qty: 2 }, 
  { price: 5, qty: 4 },
  { price: 20, qty: 1 }
];
let total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
console.log(total); // 60


// --- PART 5: Sorting & Utility ---

// Exercise 10: Advanced Sort
let animals = ["Zebra", "Apple", "Mango", "Banana"];
animals.sort().reverse();
console.log(animals); // ["Zebra", "Mango", "Banana", "Apple"]

let myNums = [100, 2, 25, 10];
myNums.sort((a, b) => a - b);
console.log(myNums); // [2, 10, 25, 100]


// Exercise 11: Split & Join
let str = "red,green,blue,yellow";
let finalStr = str
  .split(",")
  .reverse()
  .join("-");
console.log(finalStr); // "yellow-blue-green-red"
