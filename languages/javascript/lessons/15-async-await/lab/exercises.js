/**
 * Lab: Async / Await
 */

// Exercise 1: Refactoring to Async/Await
// Refactor the following .then() code to use async/await:
/*
function getPost(id) {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => res.json())
        .then(data => console.log(data));
}
*/
// TODO: your code here


// Exercise 2: Robust Fetcher with Try/Catch
// 1. Write an async function 'getUserData(username)'.
// 2. Fetch from: 'https://api.github.com/users/[username]'
// 3. Use try/catch to handle errors.
// 4. Manually throw an error if response.ok is false (e.g., user doesn't exist).
// 5. Log "User: [name]" on success, and "Error: [message]" on failure.
// TODO: your code here


// Exercise 3: Parallel Product Fetcher
// 1. Use Promise.all to fetch from two different APIs simultaneously:
//    - 'https://jsonplaceholder.typicode.com/posts/1'
//    - 'https://jsonplaceholder.typicode.com/posts/2'
// 2. Wait for both to finish.
// 3. Log the titles of both posts.
// TODO: your code here


// Exercise 4: The "Slow" Comparison
// 1. Create an async function that awaits 3 separate fetch calls one by one.
// 2. Create another that uses Promise.all.
// 3. Use console.time() and console.timeEnd() to compare the speed.
// TODO: your code here
