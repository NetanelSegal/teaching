/**
 * Exercise 13: Promises (The New Standard)
 * 
 * Goal: Master the states, creation, and consumption of Promises.
 */

// --- PART 1: Creating & Consuming ---

/**
 * Exercise 1: The Wait Utility
 * 1. Create a function 'delay(ms)' that returns a Promise.
 * 2. It should resolve after the specified milliseconds.
 * 3. Use it to log "Wait over!" after 2.5 seconds.
 */
// Write your code below:


/**
 * Exercise 2: Simulated Login
 * 1. Create a function 'login(username, password)'.
 * 2. It should return a Promise.
 * 3. If username is 'admin' and password is '1234', resolve with "Welcome, Admin!".
 * 4. Otherwise, reject with "Invalid Credentials".
 * 5. Test both cases using .then() and .catch().
 */
// Write your code below:


// --- PART 2: Promise Chaining ---

/**
 * Exercise 3: Math Pipeline
 * 1. Create a promise that resolves with the number 5.
 * 2. Chain a .then() that adds 10.
 * 3. Chain another that multiplies by 2.
 * 4. Chain another that subtracts 4.
 * 5. Log the final result (Expected: 26).
 */
// Write your code below:


/**
 * Exercise 4: Callback to Promise
 * Refactor the following function to return a Promise instead:
 */
function getDataOld(callback) {
    setTimeout(() => {
        callback("Secret Data Found!");
    }, 1000);
}
// Write your code below:
