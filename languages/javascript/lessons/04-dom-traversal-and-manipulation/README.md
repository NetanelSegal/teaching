# Lesson 4: DOM Traversal & Manipulation 🌳

## Goal
Master the art of navigating the DOM tree and dynamically creating, injecting, and modifying elements to build interactive user interfaces.

## Hook 🪝
Static HTML is like a printed book; once it's on the page, it's "stuck." But modern web apps feel like living organisms—notifications pop up, lists grow as you type, and elements move around. How do we build these "living" structures? By learning how to create "DOM stuff" from scratch and navigate the relationships between elements (parents, children, and siblings).

## Theory 📚

### 1. Traversing the Tree
The DOM is a tree. Sometimes you have an element (like a "Delete" button) and you need to find its parent (the "Card") to remove it.
- **Parent**: `element.parentNode` or `element.closest('.selector')` (searches upwards for the nearest ancestor).
- **Children**: `element.children` (returns a live HTMLCollection).
- **Siblings**: `element.nextElementSibling`, `element.previousElementSibling`.

### 2. Creating "DOM Stuff"
There are two main ways to create new elements:
- **`document.createElement(tagName)`**: The "clean" programmatic way. Highly secure and allows for fine-grained control.
- **`element.insertAdjacentHTML(position, htmlString)`**: The "fast" way. Great for injecting large chunks of HTML. Use positions like `'beforeend'` or `'afterbegin'`.

### 3. Injecting Elements
Once created, you must "attach" the element to the tree:
- **`append()`**: Adds to the end of the parent.
- **`prepend()`**: Adds to the beginning of the parent.
- **`before()` / `after()`**: Adds as a sibling to the current element.

### 4. Data Attributes (`dataset`)
Store extra information directly on HTML elements using `data-*` attributes.
```html
<div class="user" data-id="123" data-role="admin"></div>
```
In JS: `user.dataset.id` returns `"123"`.

## Lab 🧪
Open `lab/index.html` in your browser and complete the missions in `lab/exercises.js`. You will build a dynamic fruit basket, user cards, and a social feed!

## External Resources
- [Walking the DOM](https://javascript.info/dom-navigation)
- [Modifying the document](https://javascript.info/modifying-document)
- [Dataset and attributes](https://javascript.info/dom-attributes-and-properties)
