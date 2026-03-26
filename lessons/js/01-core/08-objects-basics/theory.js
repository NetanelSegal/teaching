// Lesson 7: Objects (Basics) - Theory

// 1. Creating an object
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

// 2. Accessing properties
console.log(user.name); // Dot notation
console.log(user["age"]); // Bracket notation

// 3. Modifying properties
user.age = 31; // Update
user.city = "Tel Aviv"; // Add new property
delete user.isAdmin; // Delete property

// 4. Checking for property existence
console.log("name" in user); // true
console.log("isDeveloper" in user); // false

// 5. for...in loop
for (let key in user) {
  console.log(`Key: ${key}, Value: ${user[key]}`);
}

// 6. Property value shorthand
function makeUser(name, age) {
  return {
    name, // same as name: name
    age   // same as age: age
  };
}
let obj = makeUser("Alice", 25);
