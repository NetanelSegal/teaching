/**
 * Theory: Fetch API & Networking
 * 
 * Fetch allows us to communicate with servers using HTTP requests.
 */

const API_BASE = 'https://jsonplaceholder.typicode.com';

// 1. Basic GET Request
console.log("--- 1. Basic GET ---");
fetch(`${API_BASE}/posts/1`)
    .then(response => {
        console.log("Raw Response Object:", response);
        return response.json(); // .json() also returns a Promise!
    })
    .then(data => {
        console.log("Parsed Data:", data.title);
    });


// 2. The Correct Way to Handle Errors
console.log("\n--- 2. Robust Error Handling ---");
function safeFetch(url) {
    fetch(url)
        .then(response => {
            // fetch ONLY rejects on network failure.
            // We must manually check for HTTP errors (404, 500, etc.)
            if (!response.ok) {
                throw new Error(`Request Failed with status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => console.log("Success:", data))
        .catch(error => console.error("Caught Error:", error.message));
}

safeFetch(`${API_BASE}/non-existent-page`); // This will trigger our error check


// 3. POST Request (Sending Data)
console.log("\n--- 3. POST Request ---");
function createPost() {
    const newPost = {
        title: 'Learning Fetch',
        body: 'Networking is essential!',
        userId: 1
    };

    fetch(`${API_BASE}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Essential for servers to understand the body
        },
        body: JSON.stringify(newPost) // Convert JS object to JSON string
    })
    .then(response => response.json())
    .then(result => console.log("Server responded to POST:", result));
}

createPost();
