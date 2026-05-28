/**
 * Exercise 09: Solutions
 */

const users = [
    { id: 1, name: 'Alice Johnson', role: 'Admin' },
    { id: 2, name: 'Bob Smith', role: 'User' },
    { id: 3, name: 'Charlie Brown', role: 'Moderator' },
    { id: 4, name: 'Diana Prince', role: 'User' },
    { id: 5, name: 'Edward Norton', role: 'Admin' },
];

const listContainer = document.querySelector('#user-list');
const searchInput = document.querySelector('#search-input');
const sortBtn = document.querySelector('#sort-btn');

let isAscending = true;

function render(data) {
    listContainer.replaceChildren();

    if (data.length === 0) {
        listContainer.innerHTML = '<p style="text-align: center; color: #888;">No users found.</p>';
        return;
    }

    const html = data.map(user => `
        <div class="list-item">
            <span>${user.name}</span>
            <span class="badge">${user.role}</span>
        </div>
    `).join('');

    listContainer.innerHTML = html;
}

// Search Logic
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = users.filter(u => u.name.toLowerCase().includes(term));
    render(filtered);
});

// Sort Logic
sortBtn.addEventListener('click', () => {
    users.sort((a, b) => {
        return isAscending 
            ? a.name.localeCompare(b.name) 
            : b.name.localeCompare(a.name);
    });
    
    isAscending = !isAscending;
    sortBtn.textContent = isAscending ? 'Sort A-Z' : 'Sort Z-A';
    render(users);
});

// Initial Render
render(users);
