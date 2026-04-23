# Lesson 10: Arrays (The Ultimate List)

## Goal
Master how to store, manipulate, and transform ordered collections of data using Arrays. This lesson covers everything from basic stack operations to complex functional transformations.

## The "Why?"
While Objects are great for storing named properties (like a User), **Arrays** are essential for ordered lists. Most real-world data arrives as arrays: lists of products, user comments, stock prices, or chat messages. Knowing how to efficiently search and transform these lists is a superpower.

---

## 1. Basics & The Stack
Arrays are zero-indexed and can store any data type.
- **Creation**: `let fruits = ["Apple", "Orange"];`
- **Access**: `fruits[0]` (first), `fruits[fruits.length - 1]` (last).
- **Stack/Queue Operations**:
  - `push(...items)`: Add to the end.
  - `pop()`: Remove from the end.
  - `shift()`: Remove from the beginning.
  - `unshift(...items)`: Add to the beginning.

## 2. Structural & Search Methods
### Splice, Slice & Concat
- **`splice(pos, deleteCount, ...items)`**: The "Swiss Army Knife". It can delete, insert, and replace elements in-place.
- **`slice(start, end)`**: Returns a *new* array containing a portion of the original (non-destructive).
- **`concat(...items)`**: Returns a *new* array joining the original with others.

### Searching
- **`indexOf(item, from)`**: Returns index of item or -1.
- **`includes(item)`**: Returns `true` if item exists.
- **`find(fn)`**: Returns the *first element* that satisfies the testing function.
- **`findIndex(fn)`**: Returns the *index* of the first element that satisfies the test.
- **`some(fn)`** / **`every(fn)`**: Check if at least one or all elements satisfy a condition.

## 3. Iteration & Functional Methods (Higher-Order)
These methods take a **callback function** as an argument.

### `forEach(fn)`
Runs the function for every element. It doesn't return anything.
```javascript
fruits.forEach((item, index) => console.log(`${index}: ${item}`));
```

### `map(fn)`
Creates a **new** array by applying the function to every element. Used for transformation.
```javascript
let lengths = ["Apple", "Plum"].map(s => s.length); // [5, 4]
```

### `filter(fn)`
Creates a **new** array with all elements that pass the test.
```javascript
let longWords = ["Apple", "Plum", "Banana"].filter(s => s.length > 5); // ["Banana"]
```

### `reduce(accumulator, fn, initialValue)`
Reduces the array to a **single value** (e.g., a sum).
```javascript
let sum = [1, 2, 3].reduce((acc, current) => acc + current, 0); // 6
```

## 4. Utility & Sorting
- **`reverse()`**: Reverses the array in-place.
- **`sort(fn)`**: Sorts the array. **Note**: By default, it sorts as strings! For numbers, use `(a, b) => a - b`.
- **`join(glue)`**: Joins all elements into a string.
- **`Array.isArray(value)`**: The reliable way to check if something is an array.

---

## External Resources
- [Array Methods - javascript.info](https://javascript.info/array-methods)
- [MDN Array Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

---
## Practice
Go to the `lab/` folder and complete the exercises in `exercises.js`.
