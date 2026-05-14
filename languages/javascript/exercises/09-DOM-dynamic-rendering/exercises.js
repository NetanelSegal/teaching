/**
 * Exercise 09: Dynamic List Rendering
 * 
 * Goal: Master the "Render Function" pattern and handle dynamic updates.
 */

const users = [
    { id: 1, name: 'Alice Johnson', role: 'Admin' },
    { id: 2, name: 'Bob Smith', role: 'User' },
    { id: 3, name: 'Charlie Brown', role: 'Moderator' },
    { id: 4, name: 'Diana Prince', role: 'User' },
    { id: 5, name: 'Edward Norton', role: 'Admin' },
];

/**
 * MISSION 1: Basic Render
 * 1. Select the #user-list container.
 * 2. Create a function 'render(users)' that:
 *    - Clears the container using .replaceChildren().
 *    - Uses .forEach() and .innerHTML to render each user as:
 *      <div class="list-item">
 *          <span>${user.name}</span>
 *          <span class="badge">${user.role}</span>
 *      </div>
 */
// TODO: Your code here


/**
 * MISSION 2: Live Search
 * 1. Select the #search-input.
 * 2. Add an 'input' event listener.
 * 3. Every time the user types:
 *    - Filter the 'users' array based on the name (case-insensitive).
 *    - Call your render() function with the filtered results.
 */
// TODO: Your code here


/**
 * MISSION 3: Sorting
 * 1. Select #sort-btn.
 * 2. When clicked, toggle the sorting of the 'users' array by name (A-Z / Z-A).
 * 3. Re-render the list.
 */
// TODO: Your code here
