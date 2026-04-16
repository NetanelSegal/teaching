// Lesson 8 Lab: Arrays (Basics) - Solution

// Task 1: Array Operations
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles.shift()); // "Jazz"
styles.unshift("Rap", "Reggae");
console.log(styles); // ["Rap", "Reggae", "Classics", "Rock-n-Roll"]

// Task 2: Sum Input Numbers
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let num of numbers) {
  sum += num;
}
console.log(sum); // 15

// Task 3: Find Max Value
function getMax(arr) {
  let max = arr[0];
  for (let item of arr) {
    if (item > max) max = item;
  }
  return max;
}
console.log(getMax([10, 5, 20, 8])); // 20

// Task 4: Filter Range
function filterRange(arr, a, b) {
  let result = [];
  for (let item of arr) {
    if (item >= a && item <= b) {
      result.push(item);
    }
  }
  return result;
}
console.log(filterRange([1, 5, 3, 8, 10], 2, 6)); // [5, 3]
