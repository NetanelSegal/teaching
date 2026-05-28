/**
 * Exercise 15: Async / Await & Advanced Fetching
 * 
 * Goal: Master clean asynchronous code and parallel execution.
 */

// --- PART 1: Refactoring to Async/Await ---

/**
 * Exercise 1: The Modern Fetcher
 * 1. Convert the following .then() code into an async function named 'getPost(id)'.
 * 2. It should fetch 'https://jsonplaceholder.typicode.com/posts/[id]'.
 * 3. Log the post title on success.
 */
/*
function getPostOld(id) {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => res.json())
        .then(post => console.log(post.title));
}
*/
// Write your code below:


// --- PART 2: Robust Error Handling ---

/**
 * Exercise 2: Safe User Search
 * 1. Create an async function 'searchUser(username)'.
 * 2. Fetch from 'https://api.github.com/users/[username]'.
 * 3. Use try/catch to handle errors.
 * 4. IMPORTANT: Manually throw an error if response.ok is false.
 * 5. If the user exists, log "User found: [name]".
 * 6. If not, log "User [username] not found!".
 */
// Write your code below:


// --- PART 3: Concurrency (Promise.all) ---

/**
 * Exercise 3: Parallel Profile Fetcher
 * 1. You need to fetch data for 3 different users simultaneously.
 * 2. Use Promise.all() with an array of fetch calls to:
 *    - https://jsonplaceholder.typicode.com/users/1
 *    - https://jsonplaceholder.typicode.com/users/2
 *    - https://jsonplaceholder.typicode.com/users/3
 * 3. Await the result and then log the names of all three users.
 * 4. Use console.time() and console.timeEnd() to see how much faster it is than awaiting one by one.
 */
// Write your code below:


/**
 * Exercise 4: Race Condition Simulation (Optional)
 * 1. Use Promise.race() to fetch from two different APIs.
 * 2. Log whichever one returns first.
 */
// Write your code below:
