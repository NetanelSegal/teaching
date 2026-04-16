/**
 * Theory: Async Basics
 * 
 * Asynchronous code allows JS to perform tasks without stopping the main program.
 */

// 1. setTimeout - Running code after a delay
console.log("Start");

setTimeout(() => {
    console.log("2 seconds have passed!");
}, 2000);

console.log("End"); 
// Output: Start -> End -> 2 seconds have passed!

// 2. setInterval - Running code repeatedly
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Interval count: ${count}`);
    
    if (count === 5) {
        clearInterval(intervalId); // Stops the interval
        console.log("Interval stopped.");
    }
}, 1000);

// 3. Simple Callbacks (The old way of handling async)
function processData(callback) {
    console.log("Processing...");
    setTimeout(() => {
        callback("Data Ready!");
    }, 1500);
}

processData((message) => {
    console.log(message);
});
