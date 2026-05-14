/**
 * Theory: Dynamic Rendering
 * This file demonstrates how to take an array of data and turn it into HTML.
 */

const users = [
    { id: 1, name: 'Alice', role: 'Admin', active: true },
    { id: 2, name: 'Bob', role: 'User', active: false },
    { id: 3, name: 'Charlie', role: 'User', active: true },
];

const container = document.querySelector('#user-container');

/**
 * APPROACH 1: Using document.createElement (Programmatic)
 * Best for: Simple items or when you need to add complex event listeners immediately.
 */
function renderUsersWithCreateElement(data) {
    // 1. MODERN Standard: replaceChildren()
    // Clears the container more efficiently than innerHTML = ''
    container.replaceChildren();

    // 2. Loop over the data
    data.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = `user-card ${user.active ? 'active' : 'inactive'}`;
        
        const h3 = document.createElement('h3');
        // SECURITY TIP: Always use textContent for user-provided data
        h3.textContent = user.name; 
        
        const p = document.createElement('p');
        p.textContent = `Role: ${user.role}`;

        // 3. Assemble and Append
        userDiv.append(h3, p);
        container.append(userDiv);
    });
}

/**
 * APPROACH 2: Using Template Literals + innerHTML (Modern/Fast)
 * Best for: Complex nested HTML structures and most common UI cards.
 * CAUTION: Be careful with XSS when using innerHTML with real user data!
 */
function renderUsersWithInnerHTML(data) {
    // REAL-WORLD SITUATION: Handling the "Empty State"
    if (data.length === 0) {
        container.innerHTML = `<p class="empty-msg">No users found matching your search. 🔍</p>`;
        return;
    }

    // 1. Map the array of objects into an array of HTML strings
    // PRO TIP: In a real app, you would sanitize these values first.
    const htmlArray = data.map(user => `
        <div class="user-card ${user.active ? 'active' : 'inactive'}">
            <h3>${user.name}</h3>
            <p>Role: ${user.role}</p>
            <span class="status">${user.active ? 'Online' : 'Offline'}</span>
        </div>
    `);

    // 2. Join the strings together and inject into the DOM
    container.innerHTML = htmlArray.join('');
}

// Example usage:
// renderUsersWithInnerHTML(users);

/**
 * WHY USE A RENDER FUNCTION?
 * If we want to filter the list (e.g., only active users), we just filter the DATA 
 * and call the function again.
 */
const activeOnly = users.filter(u => u.active);
// renderUsersWithInnerHTML(activeOnly); 
