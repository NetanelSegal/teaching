/**
 * Lab: Events Deep Dive - Solutions
 */

// MISSION 1: The Smart Todo List (Delegation) 🧠
const todoList = document.getElementById('todo-list');

todoList.addEventListener('click', (event) => {
    const item = event.target.closest('.todo-item');
    if (item && todoList.contains(item)) {
        item.classList.toggle('done');
    }
});


// MISSION 2: The Bubbling Trap (Propagation) 🛑
const outerBox = document.getElementById('outer-box');
const innerBox = document.getElementById('inner-box');

outerBox.addEventListener('click', () => {
    console.log("Outer Box Clicked! (This should not happen if you click the red box)");
});

innerBox.addEventListener('click', (event) => {
    event.stopPropagation(); // STOP BUBBLING
    console.log("Inner Box Clicked! (Event stopped here)");
});
