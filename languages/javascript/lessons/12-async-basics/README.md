# Async Basics ⏳

## Hook 🪝
Imagine you're at a restaurant. You order food, and the waiter gives you a buzzer. You don't sit staring at the kitchen; you talk to friends, scroll your phone, and wait for the buzzer to go off. That's **Asynchronous Programming**—JavaScript's way of doing multiple things at once without "blocking" the page.

## Theory 📚
JavaScript is single-threaded, meaning it can only do one thing at a time. But some tasks (like waiting for a file to load) take time. Async features allow us to start these tasks and handle the result later.

### Key Concepts:
- **`setTimeout()`**: Running code after a delay.
- **`setInterval()`**: Running code repeatedly at fixed intervals.
- **The Event Loop**: How JS manages multiple tasks.

Refer to `theory.js` for examples.

## Lab 🧪
Practice asynchronous timing:
1.  **Delay**: Print a message after 2 seconds.
2.  **Repeating**: Create a simple timer that counts up every second.
3.  **Cancellation**: Use `clearTimeout` to stop a delayed action.
