# DOM Basics 🌐

## Hook 🪝
Ever wondered how websites change content without refreshing the page? Whether it's a dark mode toggle, a live search, or an interactive game, the **Document Object Model (DOM)** is the bridge between your HTML/CSS and JavaScript.

## Theory 📚
The DOM represents the structure of your HTML document as a tree of objects. Each element, attribute, and text snippet is a "node" that JavaScript can select, modify, or delete.

### Key Concepts:
- **Selecting Elements**: `document.querySelector()`, `document.getElementById()`.
- **Modifying Content**: `element.textContent`, `element.innerHTML`.
- **Modifying Style**: `element.style.backgroundColor`.
- **Events**: `element.addEventListener('click', ... )`.

Refer to `theory.js` for code examples.

## Lab 🧪
Open the `lab/` folder to practice:
1.  **Selecting**: Find elements by their ID and Class.
2.  **Changing**: Update the text and color of a button on click.
3.  **Creating**: Add a new list item to an existing `<ul>`.
