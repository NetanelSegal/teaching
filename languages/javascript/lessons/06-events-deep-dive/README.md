# Lesson 6: Events Deep Dive ⚡

## Goal
Master high-performance event handling, understand the event lifecycle (Bubbling/Capturing), and learn how to manage complex user interactions like forms.

## Hook 🪝
Imagine you have a list with 1,000 items, and each item needs a "Delete" button. If you add 1,000 event listeners, your app will crawl. Professional developers don't do that—they use **Event Delegation**. They add *one* listener to the parent and let the events bubble up. Learning how events "travel" through your HTML is the secret to building fast, scalable web apps.

## Real-World Scenario: The Infinite Scroll ♾️
When you scroll through TikTok or YouTube, new videos are constantly added to the page. If you added an event listener to every single video, your phone would overheat! Instead, developers use **Event Delegation**:
1. They add **one** listener to the main "Feed" container.
2. When you click *any* video, the event bubbles up to the Feed.
3. The Feed checks which video you clicked and plays it.

## Theory 📚

### 1. The Event Object (`e`)
When an event happens, JS passes an object containing all the details:
- `e.target`: The element that actually triggered the event (the "inner" element).
- `e.currentTarget`: The element the listener is attached to.
- `e.preventDefault()`: Stops the default browser behavior (e.g., stops a form from refreshing the page).
- `e.stopPropagation()`: Stops the event from "bubbling up" to parent elements.

### 2. Event Bubbling
Events don't just happen in one place. They "bubble" up from the child to the parent, then to the grandparent, all the way to the `window`.

### 3. Event Delegation
Instead of adding listeners to every single child, we add one to the parent. We then check `e.target` to see which child was clicked. This is much more memory-efficient.

### 4. Form Events
Handling user input is a core part of web dev:
- **`submit`**: Use `e.preventDefault()` to handle data with JS instead of a page reload.
- **`FormData`**: A modern API to easily extract all values from a form.

## Lab 🧪
Open `lab/index.html` in your browser and complete the missions in `lab/exercises.js`. You will master event delegation with a smart Todo list and prevent the "Bubbling Trap"!

## External Resources
- [Introduction to Events](https://javascript.info/introduction-browser-events)
- [Bubbling and Capturing](https://javascript.info/bubbling-and-capturing)
- [Event Delegation](https://javascript.info/event-delegation)
- [FormData API](https://javascript.info/formdata)
