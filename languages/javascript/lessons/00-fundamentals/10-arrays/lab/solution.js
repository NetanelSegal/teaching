// Lesson 10 Lab: Arrays - Solutions

// Task 1: Array Operations
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles.shift()); // "Jazz"
styles.unshift("Rap", "Reggae");
console.log(styles); // ["Rap", "Reggae", "Classics", "Rock-n-Roll"]

// Task 2: Manual Iteration
let numbers = [1, 2, 3, 4, 5];
let sumManual = 0;
for (let num of numbers) {
  sumManual += num;
}
console.log(sumManual); // 15

// Task 3: The Swiss Army Knife (Splice)
let arr1 = ["I", "study", "JavaScript", "right", "now"];
arr1.splice(1, 2, "love");
console.log(arr1); // ["I", "love", "right", "now"]

// Task 4: Transformation (Map)
let words = ["apple", "banana", "cherry"];
let caps = words.map(word => word.toUpperCase());
console.log(caps); // ["APPLE", "BANANA", "CHERRY"]

// Task 5: Filtering (Filter)
let nums = [1, 10, 5, 13, 8, 2, 20];
let bigNums = nums.filter(num => num > 10);
console.log(bigNums); // [13, 20]

// Task 6: Searching (Find)
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" }
];
let user2 = users.find(u => u.id === 2);
console.log(user2.name); // "Pete"

// Task 7: Aggregation (Reduce)
let numbers2 = [1, 2, 3, 4, 5];
let sum = numbers2.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// Task 8: Sorting
let items = [1, 2, 15];
items.sort((a, b) => a - b);
console.log(items); // [1, 2, 15]
