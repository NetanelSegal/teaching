// Lesson 4: Logic & Control - Theory

// 1. Comparisons
console.log(5 > 4);    // true
console.log("2" > 1);  // true ("2" becomes 2)
console.log(0 === false); // false (Strict equality checks type)

// 2. Conditional Branching
let year = 2024;
if (year < 2024) {
    console.log("In the past");
} else if (year > 2024) {
    console.log("In the future");
} else {
    console.log("This is the current year");
}

// 3. Logical Operators
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
    console.log("The office is closed.");
}

// 4. Nullish Coalescing (??)
// Difference from OR (||): ?? only triggers on null/undefined.
let count = 0;
console.log(count || 10); // 10 (because 0 is falsy)
console.log(count ?? 10); // 0 (because 0 is NOT null or undefined)

// 5. Ternary Operator
let result = (5 > 2) ? "YES" : "NO";
