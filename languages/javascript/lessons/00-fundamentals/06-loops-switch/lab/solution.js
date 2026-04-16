// Lesson 5 Lab: Loops & Switch - Solution

// Task 1: Basic for loop
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Task 2: while loop
let counter = 0;
while (counter < 5) {
  console.log(counter);
  counter++;
}

// Task 3: break and continue
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) continue; // Skip odds
  if (i > 15) break;         // Stop at 15
  console.log(i);
}

// Task 4: switch conversion
let dayNumber = 3;
switch (dayNumber) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  default:
    console.log("Other day");
}
