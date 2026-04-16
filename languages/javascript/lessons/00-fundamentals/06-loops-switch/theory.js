// Lesson 5: Loops & Switch - Theory

// 1. while loop
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

// 2. for loop
// (begin; condition; step)
for (let j = 0; j < 3; j++) {
  console.log(j);
}

// 3. break and continue
for (let k = 0; k < 10; k++) {
  if (k % 2 === 0) continue; // Skip even numbers
  if (k > 7) break;          // Stop if k > 7
  console.log(k);            // 1, 3, 5, 7
}

// 4. switch statement
let grade = 'B';
switch (grade) {
  case 'A':
    console.log("Fantastic!");
    break;
  case 'B':
  case 'C':
    console.log("Good effort");
    break;
  default:
    console.log("Keep studying");
}
