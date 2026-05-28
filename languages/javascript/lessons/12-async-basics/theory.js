/**
 * Theory: Async Basics & The Event Loop
 * 
 * Asynchronous code allows JS to perform tasks without stopping the main program.
 */

// 1. Synchronous vs Asynchronous
console.log("--- 1. Order of Execution ---");
console.log("Step 1: Synchronous");

setTimeout(() => {
    console.log("Step 2: Asynchronous (Timed out)");
}, 0); // Even with 0ms, it goes to the Callback Queue!

console.log("Step 3: Synchronous");
// Output: 1 -> 3 -> 2


// 2. Blocking the Thread (The Problem)
console.log("\n--- 2. Blocking Example ---");
function heavyTask() {
    console.log("Starting heavy task...");
    const start = Date.now();
    while (Date.now() - start < 2000) {
        // Blocks for 2 seconds
    }
    console.log("Heavy task finished!");
}

// If you uncomment this, notice that Step 2 (above) waits for this to finish!
// heavyTask(); 


// 3. Timers (Intervals)
console.log("\n--- 3. Intervals ---");
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Blink ${count}`);
    
    if (count === 3) {
        clearInterval(intervalId);
        console.log("Blinking stopped.");
    }
}, 500);


// 4. Callback Hell (The Motivation)
console.log("\n--- 4. Callback Hell ---");
function stepOne(callback) {
    setTimeout(() => {
        console.log("Step One Done");
        callback();
    }, 1000);
}

function stepTwo(callback) {
    setTimeout(() => {
        console.log("Step Two Done");
        callback();
    }, 1000);
}

// Pyramid of Doom
stepOne(() => {
    stepTwo(() => {
        console.log("Final Step Done");
    });
});
