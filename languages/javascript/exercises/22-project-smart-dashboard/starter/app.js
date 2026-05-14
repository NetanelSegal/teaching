/**
 * Smart Task Dashboard - Starter Code
 */

// 1. STATE: Your single source of truth
let tasks = [
    { id: 1, title: 'Learn DOM Traversal', priority: 'High', completed: false },
    { id: 2, title: 'Master Event Delegation', priority: 'Medium', completed: true },
];

// 2. SELECTORS
const taskGrid = document.querySelector('#task-grid');
const taskForm = document.querySelector('#task-form');
const filterButtons = document.querySelectorAll('.filter-btn');
const statsDisplay = document.querySelector('#stats');

// 3. RENDER FUNCTION
function render(data) {
    // TODO: Clear the grid
    // TODO: Loop through data and create HTML cards
    // TODO: Update the stats display
}

// 4. ADD TASK LOGIC
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: Use FormData to get values
    // TODO: Create a new task object with a unique ID
    // TODO: Push to 'tasks' array and call render()
});

// 5. EVENT DELEGATION (Actions)
taskGrid.addEventListener('click', (e) => {
    // TODO: Use e.target and .closest('.task-card')
    // TODO: Handle 'Delete' - filter the array and re-render
    // TODO: Handle 'Complete' - find the task in the array, toggle 'completed', and re-render
});

// 6. FILTERING LOGIC
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // TODO: Update 'active' class on buttons
        // TODO: Filter 'tasks' array by priority and call render()
    });
});

// INITIAL RENDER
render(tasks);
