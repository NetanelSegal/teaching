# Lesson 14: Fetch API & Networking 🛰️

## Goal
Master the primary tool for web communication: The **Fetch API**. Learn how to send and receive data from servers, understand HTTP fundamentals, and handle network errors professionally.

## Hook 🪝
### Connecting to the World
Static websites are like books—they don't change. Modern web apps are like living organisms—they talk to the world.
- A **Weather App** fetches data from a meteorology server.
- **Instagram** fetches your friends' photos from a database.
- **Amazon** sends your order data to a processing server.

The **Fetch API** is the "telephone" your JavaScript uses to make these calls.

## Theory 📚

### 1. HTTP Fundamentals
To talk to a server, we use **HTTP (HyperText Transfer Protocol)**. Every request has:
- **URL**: The address (e.g., `https://api.example.com/users`).
- **Method**: The action we want to perform:
    - **`GET`**: Retrieve data (The default).
    - **`POST`**: Send new data.
    - **`PUT` / `PATCH`**: Update existing data.
    - **`DELETE`**: Remove data.
- **Status Codes**: The server's answer:
    - **`200-299`**: Success!
    - **`400-499`**: Client Error (You did something wrong, e.g., **404 Not Found**).
    - **`500-599`**: Server Error (The server crashed).

### 2. The `fetch()` function
`fetch()` takes a URL and returns a **Promise**.
```javascript
fetch('https://api.example.com/data')
  .then(response => response.json()) // Convert stream to JSON
  .then(data => console.log(data));
```

### 3. Critical: Handling Errors
A major pitfall: **`fetch()` does NOT reject on HTTP errors (like 404 or 500).** It only rejects if the network itself fails (e.g., no internet). You must check the `ok` property:

```javascript
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    return response.json();
  })
  .catch(error => console.error("Network or HTTP Error:", error));
```

### 4. Sending Data (POST)
To send data, we provide an options object as the second argument:
```javascript
fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: "John" })
});
```

## Lab 🧪
Practice real-world networking:
1.  **Public API Get**: Fetch data from the "JSONPlaceholder" API.
2.  **The `ok` Check**: Handle a 404 error correctly using the `response.ok` property.
3.  **POST Request**: Simulate creating a new user on a server.


## External Resources
- [Fetch API - javascript.info](https://javascript.info/fetch)
- [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [HTTP Status Codes Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
