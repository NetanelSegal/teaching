/**
 * Lab: Promises
 */

// Exercise 1: The Wait Utility
// 1. Create a function 'wait(ms)' that returns a Promise.
// 2. Use it to print "Hello" after 2 seconds.
// TODO: your code here
const wait = (ms) => new Promise(res => setTimeout(() => res(), ms));

wait(2000).then(() => console.log('hello'));

const afterWait = async () => {
    await wait(2000);
    console.log('hello');
};

afterWait();

// Exercise 2: Simulated Database Fetch
// 1. Create a function 'fetchUser(id)' that returns a Promise.
// 2. If id is 1, resolve with { id: 1, name: 'John Doe' } after 1 second.
// 3. If id is anything else, reject with "User not found" after 1 second.
// 4. Test both cases using .then() and .catch().
// TODO: your code here

// Exercise 3: Chaining Calculations
// 1. Create a promise that resolves with the number 10.
// 2. Chain a .then() that squares the number (100).
// 3. Chain another .then() that adds 50 (150).
// 4. Print the final result.
// TODO: your code here


// Exercise 4: Callback to Promise (Refactoring)
// Refactor the following callback-based function into a Promise-based one:
/*
function getStatus(callback) {
    setTimeout(() => {
        callback("Active");
    }, 500);
}
*/
// TODO: your code here
