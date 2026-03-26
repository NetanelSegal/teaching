// Lesson 7: Interaction - Theory

// 1. Alert (Message)
alert("This is an alert!");

// 2. Prompt (Input)
// Returns string or null
let name = prompt("What is your name?", "John Doe");
console.log("Name is:", name);

// 3. Confirm (Decision)
// Returns true or false
let isAdult = confirm("Are you over 18?");
console.log("Is adult:", isAdult);

// Nuance: Prompt result is a string!
let ageStr = prompt("How old are you?");
console.log(typeof ageStr); // "string"
let age = Number(ageStr); // Must convert for math
console.log(age + 10);
