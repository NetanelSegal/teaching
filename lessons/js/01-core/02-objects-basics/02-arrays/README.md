# Lesson 8: Arrays (Basics)

## Goal
Learn how to store ordered collections of data using Arrays. Master basic array operations like adding, removing, and iterating over elements.

## The "Why?"
While Objects are great for storing named properties (like a User), **Arrays** are essential for ordered lists. Think of a list of products in a cart, a list of messages in a chat, or a list of students in a class. Order matters here!

## In-Depth Explanations

### 1. Creating an Array
```javascript
let fruits = ["Apple", "Orange", "Plum"];
```

### 2. Accessing Elements
Arrays use **Zero-based indexing**.
- First element: `fruits[0]`
- Last element: `fruits[fruits.length - 1]`

### 3. Basic Methods (The Stack/Queue)
- **`push`**: Adds an item to the **end**.
- **`pop`**: Removes an item from the **end**.
- **`shift`**: Removes an item from the **beginning**.
- **`unshift`**: Adds an item to the **beginning**.

### 4. Array Length
The `length` property is automatic. It's actually the greatest numeric index plus one.

## Diverse & Key Examples

### Example 1: Arrays can store anything
```javascript
let arr = [ 
  'Apple', 
  { name: 'John' }, 
  true, 
  function() { console.log('hello'); } 
];

console.log(arr[1].name); // "John"
arr[3](); // "hello"
```

### Example 2: The `for...of` loop
The modern way to iterate over array values.
```javascript
let fruits = ["Apple", "Orange", "Plum"];

for (let fruit of fruits) {
  console.log(fruit);
}
```

### Example 3: Multi-dimensional Arrays (Matrices)
```javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[1][1]); // 5 (center element)
```

## External Resources
- [Arrays - javascript.info](https://javascript.info/array)

---
## Practice
Go to the `lab/` folder and complete the exercises in `exercises.js`.
