# Lesson 15: Async / Await (Clean Code) 🧹

## Goal
Master the modern, standard way of writing asynchronous JavaScript. Learn to use the `async` and `await` keywords to write asynchronous code that is as readable as synchronous code, handle errors elegantly with `try/catch`, and optimize performance with parallel execution.

## Hook 🪝
### The "Wait" Word
In the previous lessons, we used `.then()` and `.catch()` to handle Promises. While powerful, chaining many `.then()` calls can still look messy and confusing.

What if you could literally tell JavaScript: *"Wait for this data to arrive before moving to the next line"*? 

That's exactly what `async/await` does. It doesn't change how Promises work; it's **"Syntactic Sugar"** that makes them incredibly easy to read and write.

## Theory 📚

### 1. The `async` Keyword
You can place `async` before any function declaration. This does one simple thing: it ensures that the function **always returns a Promise**.
```javascript
async function hello() {
  return "Hello!"; // Automatically wrapped in a Promise
}
```

### 2. The `await` Keyword
Inside an `async` function, you can use `await`. It makes JavaScript wait until that Promise settles and returns its result.
```javascript
async function getData() {
  const response = await fetch(url); // Wait here!
  const data = await response.json(); // Wait here too!
  console.log(data);
}
```
**Important**: `await` only works inside `async` functions!

### 3. Error Handling with `try/catch`
Since `async/await` makes code look synchronous, we can use the standard `try/catch` blocks we use for normal logic errors. This is much cleaner than `.catch()` chains.

```javascript
async function safeFetch() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Status Error");
    const data = await response.json();
  } catch (err) {
    console.error("Something went wrong:", err.message);
  }
}
```

### 4. Concurrency: `Promise.all()`
If you need to fetch three things, don't `await` them one by one (which is slow). Fetch them in **parallel**!
```javascript
const [user, posts, comments] = await Promise.all([
  fetchUser(),
  fetchPosts(),
  fetchComments()
]);
```

## Lab 🧪
Modernize your code:
1.  **The Refactor**: Change a `.then()` chain into an `async` function.
2.  **Robust Fetching**: Use `try/catch` and `response.ok` together for the ultimate fetch function.
3.  **Parallel Power**: Fetch data from two different APIs at the same time using `Promise.all()`.


## External Resources
- [Async/await - javascript.info](https://javascript.info/async-await)
- [Promise API (Promise.all)](https://javascript.info/promise-api)
- [MDN: Making asynchronous programming easier with async and await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
