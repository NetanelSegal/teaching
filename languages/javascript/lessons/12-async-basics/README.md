# Lesson 12: Async Basics & The Event Loop ⏳

## Goal
Understand the non-blocking nature of JavaScript, how the **Event Loop** manages tasks, and why we need asynchronous patterns to keep our applications responsive.

## Hook 🪝
### The "Frozen" Browser
Have you ever clicked a button on a website and nothing happened for several seconds? Or tried to scroll and the page was stuck? 

In JavaScript, if you run a heavy task (like calculating a million numbers) in a normal "synchronous" way, you **block the main thread**. Because JavaScript is single-threaded, it can't handle your click or scroll until that calculation is finished.

**Asynchronous Programming** is the solution. It allows us to start a long-running task and tell JavaScript: *"Go ahead and keep the UI responsive; just let me know when you're done."*

## Theory 📚

### 1. The Event Loop: How it Works
JavaScript executes code in a specific environment called the **JavaScript Engine**. To handle async tasks without stopping, it uses three main parts:

1.  **The Call Stack**: Where your code is currently running. If a function is here, JS is busy.
2.  **Web APIs**: Where async tasks (like `setTimeout` or `fetch`) go to wait. They don't block the stack!
3.  **The Callback Queue**: Once an async task is finished, its "callback" function waits here.
4.  **The Event Loop**: A constant monitor. It waits until the **Call Stack is empty**, then it takes the first function from the **Callback Queue** and pushes it onto the stack to be run.

### 2. Timers: `setTimeout` and `setInterval`
- **`setTimeout(fn, delay)`**: Schedules a function to run once after `delay` milliseconds.
- **`setInterval(fn, delay)`**: Schedules a function to run repeatedly every `delay` milliseconds.
- **`clearTimeout` / `clearInterval`**: Essential for stopping these tasks to prevent memory leaks or unwanted behavior.

### 3. Callback Hell (The Why)
Before modern JS, we used "Callbacks" (functions passed into other functions) to handle async results. But if you have many tasks that depend on each other, you end up with "Pyramid of Doom":

```javascript
getData(function(a) {
    getMoreData(a, function(b) {
        getEvenMoreData(b, function(c) {
            console.log(c); // This is Callback Hell!
        });
    });
});
```
This is hard to read, hard to debug, and the reason why **Promises** and **Async/Await** were invented.

## Lab 🧪
Practice asynchronous timing and the event loop:
1.  **Blocking vs Non-Blocking**: Run a heavy loop and see how it affects a `setTimeout`.
2.  **Countdown**: Create a timer that stops itself at 0.
3.  **Nested Callbacks**: Experience "Callback Hell" by nesting three `setTimeout` calls.


## External Resources
- [Scheduling: setTimeout and setInterval](https://javascript.info/settimeout-setinterval)
- [The Event Loop: microtasks and macrotasks](https://javascript.info/event-loop)
- [Video: What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
