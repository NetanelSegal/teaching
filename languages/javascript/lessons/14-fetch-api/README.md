# Fetch API 🛰️

## Hook 🪝
Want to build a weather app? A currency converter? A news aggregator? To get real data from the web, your JavaScript needs to talk to a server. The **Fetch API** is how we send and receive data from external APIs.

## Theory 📚
`fetch()` is a modern way to make network requests. It uses **Promises** to handle data that arrives "in the future."

### Key Concepts:
- **The `fetch()` function**: Calling an external URL.
- **Handling JSON**: Converting the response using `.json()`.
- **Promises**: Using `.then()` and `.catch()` (or `async/await`) to manage the asynchronous result.

Refer to `theory.js` for examples of calling public APIs.

## Lab 🧪
Connect your code to the world:
1.  **Basic Get**: Fetch a random joke from a public API.
2.  **Display**: Use the DOM to show the fetched data on your page.
3.  **Error Handling**: Catch a 404 error if the API is down.
