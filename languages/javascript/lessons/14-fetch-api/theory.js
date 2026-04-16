/**
 * Theory: Fetch API & Promises
 * 
 * Fetch allows us to get data from external servers.
 */

const API_URL = 'https://jsonplaceholder.typicode.com/posts/1';

// 1. Basic Fetch with .then()
fetch(API_URL)
    .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json(); // Convert response to JSON
    })
    .then(data => {
        console.log("Data received via .then:", data.title);
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });

// 2. Modern Fetch with async/await
async function getPostData() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("HTTP Error " + response.status);
        
        const data = await response.json();
        console.log("Data received via async/await:", data.body);
    } catch (error) {
        console.error("Async Error:", error);
    }
}

getPostData();

// 3. Sending Data (POST request)
async function createPost() {
    const newPost = { title: 'JS is Fun', body: 'Learning Fetch API', userId: 1 };
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost)
    });
    
    const result = await response.json();
    console.log("Post Created:", result);
}
