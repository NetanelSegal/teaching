// JavaScript Exercises (Lessons 1-3) - SOLUTIONS

// --- PART 1: Variables & Scope ---

// Exercise 1: The "Swap" Challenge
let a = 10;
let b = 20;
let temp = a;
a = b;
b = temp;
console.log("a:", a, "b:", b); // Expected: a: 20 b: 10

// Exercise 2: Constants & Naming
const favoriteLanguage = "JavaScript";
let expertiseLevel = 5;
// favoriteLanguage = "Python"; // TypeError: Assignment to constant variable.
console.log(favoriteLanguage, expertiseLevel);


// --- PART 2: Data Types & Logic ---

// Exercise 3: The "Type Investigator"
console.log(typeof "42");           // "string"
console.log(typeof 42);             // "number"
console.log(typeof 42n);            // "bigint"
console.log(typeof true);           // "boolean"
console.log(typeof undefined);      // "undefined"
console.log(typeof null);           // "object" (JS Bug)
console.log(typeof Symbol("id"));   // "symbol"
console.log(typeof { name: "JS" }); // "object"

// Exercise 4: Template Literals & Multi-line
let city = "Tel Aviv";
let country = "Israel";
let population = 450000;
console.log(`City: ${city}
Country: ${country}
Population: ${population}`);


// --- PART 3: Operators & Conversions ---

// Exercise 5: The "Plus" Confusion
console.log("" + 1 + 0);      // "10"
console.log("" - 1 + 0);      // -1
console.log(true + false);    // 1
console.log(6 / "3");         // 2
console.log("2" * "3");       // 6
console.log(4 + 5 + "px");    // "9px"
console.log("$" + 4 + 5);     // "$45"
console.log("4" - 2);         // 2
console.log("4px" - 2);       // NaN
console.log("  -9  " + 5);    // "  -9  5"
console.log("  -9  " - 5);    // -14
console.log(null + 1);        // 1
console.log(undefined + 1);   // NaN

// Exercise 6: Prefix vs Postfix
let counter = 5;
let result = ++counter + counter++; 
// 1. ++counter: counter becomes 6, returns 6
// 2. counter++: returns 6, then counter becomes 7
// 3. 6 + 6 = 12
console.log(counter); // 7
console.log(result);  // 12

// Exercise 7: The Modulo & Exponentiation
console.log(1234 % 7);    // 2
console.log(2 ** 10);     // 1024
console.log(1234 % 2 === 0 ? "Even" : "Odd"); // "Even"
