/**
 * Theory: Async / Await
 * 
 * Syntactic sugar for working with Promises.
 */

const API_BASE = 'https://jsonplaceholder.typicode.com';

// 1. Basic Async / Await
console.log("--- 1. Simple Await ---");
async function getSingleUser() {
    const response = await fetch(`${API_BASE}/users/1`);
    const user = await response.json();
    console.log("User 1:", user.name);
}

getSingleUser();


// 2. Error Handling (The Professional Way)
console.log("\n--- 2. Try / Catch ---");
async function getBrokenData() {
    try {
        const response = await fetch(`${API_BASE}/invalid-page`);
        
        // Always check response.ok!
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Caught in async/await:", error.message);
    }
}

getBrokenData();


// 3. Parallel Execution (Promise.all)
console.log("\n--- 3. Parallel Fetching ---");
async function getMultipleResources() {
    console.time("Parallel");
    
    try {
        // Instead of awaiting them one by one, we start all at once
        const [postsResponse, todosResponse] = await Promise.all([
            fetch(`${API_BASE}/posts?_limit=5`),
            fetch(`${API_BASE}/todos?_limit=5`)
        ]);

        const posts = await postsResponse.json();
        const todos = await todosResponse.json();

        console.log(`Fetched ${posts.length} posts and ${todos.length} todos.`);
    } catch (error) {
        console.error("Parallel fetch failed:", error);
    }
    
    console.timeEnd("Parallel");
}

getMultipleResources();
