/**
 * Lab: Traversal & Manipulation - Solutions
 */

// MISSION 0: Profile Editor (Manipulating Existing) 🛠️
const profileName = document.getElementById('profile-name');
const profileStatus = document.getElementById('profile-status');
const updateProfileBtn = document.getElementById('update-profile-btn');
const toggleThemeBtn = document.getElementById('toggle-theme-btn');
const profileCard = document.getElementById('profile-card');

updateProfileBtn.addEventListener('click', () => {
    profileName.textContent = 'Gemini CLI';
    profileStatus.textContent = 'Status: Online';
    profileStatus.style.color = 'green';
});

toggleThemeBtn.addEventListener('click', () => {
    if (profileCard.style.backgroundColor === 'black') {
        profileCard.style.backgroundColor = 'white';
        profileCard.style.color = 'black';
    } else {
        profileCard.style.backgroundColor = 'black';
        profileCard.style.color = 'white';
    }
});


// MISSION 1: Dynamic Fruit List 🍎
const fruitList = document.getElementById('fruit-list');
const addFruitBtn = document.getElementById('add-fruit-btn');
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

addFruitBtn.addEventListener('click', () => {
    const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
    const li = document.createElement('li');
    li.textContent = randomFruit;
    fruitList.append(li);
});


// MISSION 2: User Profiles (Template Literals) 👤
const userContainer = document.getElementById('user-container');
const genUserBtn = document.getElementById('generate-user-btn');

genUserBtn.addEventListener('click', () => {
    const html = `
        <div class="user-card">
            <h3>User: John Doe</h3>
            <p>Role: Developer</p>
        </div>
    `;
    userContainer.innerHTML += html;
});


// MISSION 3: Social Feed (Traversal & Removal) 🗑️
const deleteButtons = document.querySelectorAll('.delete-btn');

deleteButtons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const post = event.target.closest('.post-item');
        if (post) {
            post.remove();
        }
    });
});
