/**
 * Lab: Async Basics & Event Loop
 */

// Exercise 1: The Event Loop Challenge
// Predict the order of logs (1, 2, 3).
// Then write the code and verify your answer.
// TODO: your code here
/*
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");
*/


// Exercise 2: Blocking vs Non-Blocking
// 1. Create a function 'heavyComputation()' that uses a 'for' loop to count to 1 billion.
// 2. Wrap it in a console.time('sync') / console.timeEnd('sync').
// 3. Before the computation, use setTimeout(..., 0) to log "I am async!".
// Observe when the async log actually appears.
// TODO: your code here


// Exercise 3: Self-Stopping Timer
// Create a countdown that:
// 1. Starts at 10.
// 2. Decrements every 1 second using setInterval.
// 3. When it reaches 0, prints "Liftoff! 🚀" and CLEARs the interval.
// TODO: your code here


// Exercise 4: Callback Hell (Simulation)
// 1. Write a function 'getData(user, callback)' that waits 1 second and then calls the callback.
// 2. Use it to get 'User 1', then inside that callback get 'User 2', then 'User 3'.
// 3. Print each user as you get them.
// TODO: your code here
