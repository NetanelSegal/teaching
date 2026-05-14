# Capstone Project: Smart Task Dashboard 🚀

## Goal
Build a fully functional, data-driven Task Management Dashboard. This project combines everything you've learned: DOM selection, traversal, manipulation, events, event delegation, and dynamic rendering.

## The Challenge
You are tasked with building a "Task Board" where users can:
1.  **Create Tasks**: Use a form to add a task with a title and priority (High, Medium, Low).
2.  **Read Tasks**: Display all tasks as interactive cards.
3.  **Update Tasks**:
    *   Toggle a task as "Complete" (should change its styling).
    *   Edit a task title.
4.  **Delete Tasks**: Remove a task from both the data array and the UI.
5.  **Filter Tasks**: Use buttons to filter by priority or search by title.

## Project Architecture
- **State**: Maintain a global array of task objects: `let tasks = [{ id: 1, title: 'Buy milk', priority: 'High', completed: false }]`.
- **Render Function**: A single `render()` function that reads the `tasks` array and updates the DOM.
- **Event Delegation**: Use a single event listener on the task container to handle all "Complete", "Edit", and "Delete" clicks.

## Key Technical Requirements
- Use `replaceChildren()` to clear the container.
- Use `innerHTML` + Template Literals for the task cards.
- Use `closest()` for event delegation.
- Use `FormData` to handle the task creation form.
- Use `dataset` to store IDs on the HTML elements.

## Starter Code
Navigate to the `starter/` directory. You will find:
- `index.html`: The layout and styling.
- `app.js`: Where you will write your logic.

## Mission Steps
1.  **Render First**: Get the initial tasks showing on the screen.
2.  **Add Feature**: Make the form work.
3.  **Delete Feature**: Implement the delete button using event delegation.
4.  **Complete Feature**: Toggle the `completed` property and re-render.
5.  **Bonus**: Implement the search and priority filters.
