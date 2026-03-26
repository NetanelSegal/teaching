# Lesson 7: Objects (Basics)

## Goal
Master the most fundamental data structure in JavaScript: the Object. Learn how to create objects, access their properties, and modify them.

## The "Why?"
In the real world, "things" aren't just single numbers or strings. A **User** has a name, an age, an email, and a password. A **Product** has a title, a price, and a description. Objects allow us to group related data into a single entity.

## In-Depth Explanations

### 1. Object Literals
The simplest way to create an object is using curly braces `{...}`.
```javascript
let user = {
  name: "John",
  age: 30
};
```

### 2. Accessing Properties
- **Dot notation**: `user.name` (Most common).
- **Square brackets**: `user["name"]` (Used when the property name is stored in a variable or contains special characters).

### 3. Modifying Objects
Objects are **Mutable**. You can add, change, or delete properties at any time.
- **Add/Update**: `user.isAdmin = true;`
- **Delete**: `delete user.age;`

### 4. The `in` Operator
Checks if a property exists in an object.
```javascript
if ("name" in user) {
  console.log("Property exists!");
}
```

## Diverse & Key Examples

### Example 1: Objects with Multi-word Properties
```javascript
let person = {
  name: "Yoav",
  "likes birds": true // Must use quotes for spaces
};

console.log(person["likes birds"]); // Must use brackets
```

### Example 2: Computed Properties
```javascript
let fruit = "apple";
let bag = {
  [fruit]: 5, // property name is taken from 'fruit' variable
};
console.log(bag.apple); // 5
```

### Example 3: The `for...in` loop
Used to iterate over all keys of an object.
```javascript
let user = { name: "John", age: 30 };
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}
```

## External Resources
- [Objects - javascript.info](https://javascript.info/object)

---
## Practice
Go to the `lab/` folder and complete the exercises in `exercises.js`.
