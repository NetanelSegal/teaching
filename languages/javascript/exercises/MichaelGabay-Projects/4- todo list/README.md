# To-Do List Task - Step-by-Step Guide

## 📋 Task Description

Build a functional To-Do List application with the following features:

- Add new tasks
- Mark tasks as completed/incomplete
- Delete tasks
- Filter tasks by status (All, Active, Completed)
- Display task count (active and completed)

## 🎯 Learning Objectives

- DOM manipulation
- Event handling
- State management
- Array methods (filter, map, find, push, etc.)
- LocalStorage for data persistence
- CSS styling and animations

## 📝 Step-by-Step Instructions

### Step 1: Get DOM Elements

Get references to all the HTML elements you'll need to interact with:

```javascript
const taskInput = document.getElementById("taskInput")
const addButton = document.getElementById("addButton")
const taskList = document.getElementById("taskList")
const filterButtons = document.querySelectorAll(".filter-button")
const taskCount = document.getElementById("taskCount")
```

**What this does:** Connects your JavaScript to the HTML elements so you can read values and update the page.

---

### Step 2: Initialize State

Create variables to store your application's data:

```javascript
let tasks = [] // Array to store all tasks
let currentFilter = "all" // Current filter state: 'all', 'active', or 'completed'
```

**What this does:** Sets up the data structure. Each task will be an object with:

- `id`: unique identifier (use `Date.now()`)
- `text`: the task description
- `completed`: boolean (true/false)

---

### Step 3: Implement `addTask()` Function

Create a function to add new tasks to the list:

```javascript
function addTask() {
  // 1. Get the input value and trim whitespace
  // 2. Check if input is empty - show alert if so
  // 3. Create a new task object with id, text, and completed properties
  // 4. Add the task to the tasks array
  // 5. Clear the input field
  // 6. Save tasks to localStorage
  // 7. Re-render the task list
}
```

**Hint:** Use `taskInput.value.trim()` to get the text, and `Date.now()` for a unique ID.

---

### Step 4: Implement `toggleTask(id)` Function

Create a function to mark a task as completed or incomplete:

```javascript
function toggleTask(id) {
  // 1. Find the task in the tasks array using the id
  // 2. Toggle the completed property (!task.completed)
  // 3. Save tasks to localStorage
  // 4. Re-render the task list
}
```

**Hint:** Use `tasks.find()` to locate the task by id.

---

### Step 5: Implement `deleteTask(id)` Function

Create a function to remove a task from the list:

```javascript
function deleteTask(id) {
  // 1. Filter out the task with the matching id
  // 2. Update the tasks array
  // 3. Save tasks to localStorage
  // 4. Re-render the task list
}
```

**Hint:** Use `tasks.filter()` to create a new array without the deleted task.

---

### Step 6: Implement Filter Functionality

Create functions to filter tasks based on their completion status:

```javascript
function filterTasks(filter) {
  // 1. Update currentFilter variable
  // 2. Update the active class on filter buttons
  //    - Remove 'active' from all buttons
  //    - Add 'active' to the clicked button
  // 3. Re-render the task list
}

function getFilteredTasks() {
  // Return the appropriate tasks based on currentFilter:
  // - 'all': return all tasks
  // - 'active': return tasks where completed === false
  // - 'completed': return tasks where completed === true
}
```

**Hint:** Use `filterButtons.forEach()` to update button classes, and `tasks.filter()` to filter the array.

---

### Step 7: Implement `createTaskElement()` and `renderTasks()` Functions

First, create a helper function to create a single task element using DOM methods:

```javascript
function createTaskElement(task) {
  // 1. Create the list item element: document.createElement('li')
  // 2. Set className to 'task-item'
  // 3. Add 'completed' class if task.completed is true
  // 4. Create checkbox element: document.createElement('input')
  //    - Set type to 'checkbox'
  //    - Set className to 'task-checkbox'
  //    - Set checked property based on task.completed
  //    - Add event listener for 'change' event that calls toggleTask(task.id)
  // 5. Create task text span: document.createElement('span')
  //    - Set className to 'task-text'
  //    - Set textContent to task.text (this automatically escapes HTML)
  // 6. Create delete button: document.createElement('button')
  //    - Set className to 'delete-button'
  //    - Set textContent to 'Delete'
  //    - Add event listener for 'click' event that calls deleteTask(task.id)
  // 7. Append checkbox, taskText, and deleteButton to the list item
  // 8. Return the list item element
}
```

Then, create the main render function:

```javascript
function renderTasks() {
  // 1. Clear existing tasks: taskList.innerHTML = ''
  // 2. Get filtered tasks using getFilteredTasks()
  // 3. Check if there are no tasks to show
  //    - If empty, create an empty state message element
  //    - Create a list item with class 'empty-state'
  //    - Set appropriate message text
  //    - Append to taskList
  // 4. If there are tasks:
  //    - Loop through filteredTasks using forEach()
  //    - Call createTaskElement(task) for each task
  //    - Append the returned element to taskList using appendChild()
  // 5. Update the task count display
  //    - Count active tasks (completed === false)
  //    - Count completed tasks (completed === true)
  //    - Update taskCount.textContent
}
```

**Key DOM methods you'll use:**

- `document.createElement(tagName)` - Creates a new element
- `element.appendChild(child)` - Adds a child element
- `element.className` or `element.classList.add()` - Sets/adds CSS classes
- `element.textContent` - Sets text content (automatically escapes HTML, safer than innerHTML)
- `element.addEventListener(event, handler)` - Adds event listeners

---

### Step 8: Add Event Listeners

Connect your functions to user interactions:

```javascript
// Add task when button is clicked
addButton.addEventListener("click", addTask)

// Add task when Enter key is pressed in input
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask()
  }
})

// Filter tasks when filter buttons are clicked
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterTasks(button.dataset.filter)
  })
})
```

**Note:** Since we're using `createElement` and `addEventListener`, we don't need inline event handlers or global functions. The event listeners are attached directly to the elements when they're created.

---

### Step 9 (Bonus): Add LocalStorage Persistence

Save tasks so they persist when the page is refreshed:

```javascript
// Load tasks when page loads
function loadTasks() {
  const savedTasks = localStorage.getItem("tasks")
  if (savedTasks) {
    tasks = JSON.parse(savedTasks)
  }
  renderTasks()
}

// Save tasks whenever they change
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}
```

Call `saveTasks()` after every task modification (add, toggle, delete).  
Call `loadTasks()` at the end of your script to initialize the app.

---

## ✅ Testing Checklist

- [ ] Can add new tasks by clicking "Add Task" button
- [ ] Can add new tasks by pressing Enter key
- [ ] Empty input shows an alert
- [ ] Tasks appear in the list after adding
- [ ] Can mark tasks as completed using checkbox
- [ ] Completed tasks show with strikethrough and reduced opacity
- [ ] Can unmark completed tasks
- [ ] Can delete tasks
- [ ] "All" filter shows all tasks
- [ ] "Active" filter shows only incomplete tasks
- [ ] "Completed" filter shows only completed tasks
- [ ] Filter buttons highlight when selected
- [ ] Task count displays correct numbers
- [ ] Tasks persist after page refresh (if localStorage is implemented)

---

## 🎨 Styling Notes

The CSS is already provided. You just need to:

1. Make sure task items have the correct classes
2. Add the 'completed' class when a task is done
3. Add the 'active' class to the selected filter button

---

## 💡 Tips

- Test each function separately as you build it
- Use `console.log()` to debug and see what's in your variables
- Check the browser console for any errors
- Start with basic functionality, then add features incrementally
- Look at the complete solution (`solution.html`) if you get stuck

---

## 🚀 Extension Ideas (After Completing Basic Requirements)

- Edit existing tasks
- Drag and drop to reorder tasks
- Due dates and priorities
- Categories/tags for tasks
- Dark mode toggle
- Export/import tasks

Good luck! 🎉
