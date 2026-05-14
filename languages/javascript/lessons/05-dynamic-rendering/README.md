# Lesson 5: Dynamic Rendering 🎨

## Goal
Learn how to build "Data-Driven" user interfaces by rendering JavaScript arrays and objects directly to the DOM.

## Hook 🪝
Imagine you are building Netflix. Would you hardcode thousands of movie cards in HTML? Of course not. You have a massive list (an array) of movies, and you write **one** function that takes that data and "renders" it to the screen. If the data changes (a new movie is added), the UI updates automatically. This is the "Single Source of Truth" pattern—your data drives your UI.

## Real-World Scenario: The Notification Center 🔔
Imagine a "Notification Center" like the one in Facebook or macOS. Every time you get a like, a comment, or an invite, a new object is added to an array. Your `renderNotifications()` function is then called to:
1. Clear the old notifications.
2. Check if the array is empty (show "You're all caught up!").
3. Loop through the new array and build the notification list.

## Self-Learning Path 🧭
To master this lesson on your own, follow these steps in order:
1. **Understand Data vs UI**: Read the "Single Source of Truth" concept below.
2. **The "Replace" Pattern**: Learn why we clear containers before rendering.
3. **Try both Methods**: Experiment with `createElement` (safe) and `innerHTML` (fast).
4. **Mission Time**: Complete the Lab exercises, starting from Mission 1.

## Theory 📚

### 1. The Render Function
The most important pattern in frontend development is wrapping your rendering logic in a function.
```javascript
function renderProducts(data) {
    const container = document.querySelector('#product-grid');
    
    // MODERN Standard: replaceChildren() 
    // This is faster and cleaner than container.innerHTML = ''
    container.replaceChildren(); 
    
    // Loop and render...
}
```

### 2. Method A: The Clean & Secure Way (`document.createElement`)
Using `createElement` is the safest method. It prevents **XSS (Cross-Site Scripting)** because it treats data as text, not as code.
```javascript
data.forEach(item => {
    const div = document.createElement('div');
    div.className = 'card';
    div.textContent = item.name; // textContent is SECURE!
    container.append(div);
});
```

### 3. Method B: The Fast Way (Template Literals + `innerHTML`)
This is the modern standard for complex layouts. It's much easier to read and write, but **BE CAREFUL**: Never use `innerHTML` with data from users (like comments or usernames) without sanitizing it first, or you risk getting hacked!
```javascript
const html = data.map(item => `
    <div class="card">
        <h3>${item.name}</h3>
        <p>$${item.price}</p>
    </div>
`).join('');

container.innerHTML = html;
```

### 4. Why `innerHTML = ''` is old news?
While `innerHTML = ''` works, modern browsers provide `element.replaceChildren()`. It's more performant and explicitly tells the browser to "dump everything inside and start fresh."

## Lab 🧪
Open `lab/index.html` in your browser and complete the missions in `lab/exercises.js`. You will build a dynamic shopping cart and a filterable user list!

## External Resources
- [Modifying the document](https://javascript.info/modifying-document)
- [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
