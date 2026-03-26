// Lesson 8: Arrays (Basics) - Theory

// 1. Creation
let fruits = ["Apple", "Banana"];

// 2. Methods
fruits.push("Pear");    // ["Apple", "Banana", "Pear"]
fruits.pop();           // ["Apple", "Banana"]
fruits.unshift("Kiwi"); // ["Kiwi", "Apple", "Banana"]
fruits.shift();         // ["Apple", "Banana"]

// 3. Length property
console.log(fruits.length); // 2

// 4. Iteration (for...of)
for (let fruit of fruits) {
  console.log(fruit);
}

// 5. Iteration (classic for)
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 6. Arrays are Objects
console.log(typeof []); // "object"
// They are special objects with numeric keys and a 'length' property.
