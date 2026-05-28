// Solution 1: Delay
setTimeout(() => {
    console.log("Hello, World!");
}, 2000);

// Solution 2: Repeating
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(count);
}, 1000);

// Solution 3: Cancellation
const timeoutId = setTimeout(() => {
    console.log("You will never see this");
}, 5000);
clearTimeout(timeoutId);
