# Lesson 9: Objects (Advanced: this, new, ?.)

## Goal
Master the professional features of JavaScript objects: context (`this`), object constructors (`new`), and safe property access (`?.`).

## In-Depth Explanations

### 1. Object Methods & "this"
Objects usually represent real-world entities. A `user` can `sayHi()`. A function that is a property of an object is called a **Method**.
To access the object's own properties inside a method, we use the keyword `this`.
```javascript
let user = {
  name: "John",
  sayHi() {
    console.log(this.name); // "this" is the current object
  }
};
```
**Nuance**: In JS, `this` is "unbound." Its value is evaluated at call-time.

### 2. Constructor, operator "new"
If you need to create many similar objects (e.g., 100 users), use a **Constructor function**.
- They are named with a capital letter.
- They are executed with the `new` operator.
```javascript
function User(name) {
  this.name = name;
  this.isAdmin = false;
}
let user = new User("Jack");
```

### 3. Optional Chaining (?.)
A modern way to safely access nested properties even if an intermediate property doesn't exist.
```javascript
let user = {}; // user has no address
console.log(user?.address?.street); // undefined (No error!)
```

## Diverse & Key Examples

### Example 1: `this` is not bound
```javascript
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  console.log(this.name);
}

user.f = sayHi;
admin.f = sayHi;

user.f();  // John
admin.f(); // Admin
```

### Example 2: Constructor with methods
```javascript
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function(num) {
    this.value += num;
  };
}
let acc = new Accumulator(1);
acc.read(5);
console.log(acc.value); // 6
```

## External Resources
- [Object methods, "this" - javascript.info](https://javascript.info/object-methods)
- [Constructor, operator "new" - javascript.info](https://javascript.info/constructor-new)
- [Optional chaining '?.' - javascript.info](https://javascript.info/optional-chaining)

---
## Practice
Go to the `lab/` folder and complete the exercises in `exercises.js`.
