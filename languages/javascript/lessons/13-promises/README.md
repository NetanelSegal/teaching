# Lesson 13: Promises (The Bridge) 🌉

## Goal
Master the foundational tool of modern asynchronous JavaScript: The **Promise**. Learn to create, consume, and chain asynchronous operations without falling into Callback Hell.

## Hook 🪝
### The Fast Food Analogy
Think of a **Promise** like ordering a burger at a fast-food counter.
1.  **Pending**: You've ordered and paid. You have a receipt (the Promise). You don't have the burger yet, but you've been "promised" it.
2.  **Fulfilled**: Your order number is called. You get the burger! Everything went well.
3.  **Rejected**: The waiter tells you they're out of meat. You get an error message instead of a burger.

A Promise is an object representing the **eventual completion (or failure)** of an asynchronous operation and its resulting value.

## Theory 📚

### 1. The 3 States of a Promise
- **`pending`**: Initial state, neither fulfilled nor rejected.
- **`fulfilled`**: Meaning that the operation was completed successfully.
- **`rejected`**: Meaning that the operation failed.

### 2. Creating a Promise
We use the `Promise` constructor. It takes a "executor" function with two arguments: `resolve` and `reject`.

```javascript
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Success! 🎉");
  } else {
    reject("Failure! ❌");
  }
});
```

### 3. Consuming a Promise
- **`.then()`**: Runs when the promise is **fulfilled**.
- **`.catch()`**: Runs when the promise is **rejected**.
- **`.finally()`**: Runs regardless of the outcome (perfect for "cleanup" like stopping a loader).

### 4. Promise Chaining
One of the best features of Promises is that `.then()` returns a **new Promise**. This allows us to chain operations sequentially:

```javascript
doTaskOne()
  .then(result1 => doTaskTwo(result1))
  .then(result2 => doTaskThree(result2))
  .catch(error => console.error(error));
```

## Lab 🧪
Connect your code to the world:
1.  **The Wait Utility**: Create a function `wait(ms)` that returns a Promise.
2.  **Simulated API**: Build a promise that randomly succeeds or fails.
3.  **Chaining Challenge**: Chain three promises together to process data.


## External Resources
- [Promise - javascript.info](https://javascript.info/promise-basics)
- [Promises chaining](https://javascript.info/promise-chaining)
- [Error handling with promises](https://javascript.info/promise-error-handling)
