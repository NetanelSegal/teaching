// Lesson 7 Lab: Objects (Basics) - Solution

// Task 1: Basic Object
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user); // { surname: "Smith" }

// Task 2: Check for Emptiness
function isEmpty(obj) {
  for (let key in obj) {
    return false; // if the loop starts, there's at least one property
  }
  return true;
}
console.log(isEmpty({})); // true
console.log(isEmpty({ name: "John" })); // false

// Task 3: Sum Object Properties
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum); // 390

// Task 4: Multiply Numeric Properties
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}
let menu = { width: 200, height: 300, title: "My menu" };
multiplyNumeric(menu);
console.log(menu); // { width: 400, height: 600, title: "My menu" }
