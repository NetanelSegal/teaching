# Lesson 3: DOM Basics 🌐

## Goal

Understand the Document Object Model (DOM) as the bridge between your static HTML and dynamic JavaScript. Learn to select and modify elements, styles, and classes.

## Hook 🪝

Every interactive feature you love—Facebook's "Like" button, Instagram's "Heart," or a simple Dark Mode toggle—works because of the DOM. Without it, JavaScript would just be a logic engine with no way to "talk" to the user. The DOM turns your HTML document into a "Tree" that JavaScript can climb, read, and change in real-time.

## Theory 📚

### 1. What is the DOM?

The **Document Object Model** is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.

- **The Window**: The global object containing everything (browser tab).
- **The Document**: The root of the DOM tree.
- **Nodes**: Everything is a node (Elements, Text, Comments).

### 2. Selecting Elements (The "Finders")

To change something, you first have to find it:

- `**getElementById`**: Fastest way to find a unique element.
- `**querySelector**`: The most flexible. Uses CSS selectors (`.class`, `#id`, `div > p`). Returns the **first** match.
- `**querySelectorAll`**: Returns a **NdodeList** of all matches. You can loop through it using `.forEach()`.

### 3. Modifying Content

- `**textContent`**: Changes the text inside an element (safe from XSS).
- `**innerHTML**`: Changes the HTML inside (powerful but use with caution).

### 4. Modifying Styles & Classes

- `**style` property**: Changes inline styles (e.g., `el.style.color = "red"`).
- `**classList`**: The professional way to change styles by adding/removing CSS classes:
  - `add()`, `remove()`, `toggle()`, `contains()`.

### 5. Basic Events

Interaction starts with an "Event Listener":

```javascript
element.addEventListener('click', () => {
  // Logic goes here
});
```

## Lab 🧪
Open `lab/index.html` in your browser and complete the missions in `lab/exercises.js`. No guessing required—the HTML structure is already there for you!


## External Resources

- [DOM Tree](https://javascript.info/dom-nodes)
- [Searching: getElement*, querySelector*](https://javascript.info/searching-elements-dom)
- [Styles and Classes](https://javascript.info/styles-and-classes)

