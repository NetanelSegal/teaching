/**
 * Smart Task Dashboard - Solution
 */

let tasks = [
    { id: 1, title: 'Learn DOM Traversal', priority: 'High', completed: false },
    { id: 2, title: 'Master Event Delegation', priority: 'Medium', completed: true },
];

const taskGrid = document.querySelector('#task-grid');
const taskForm = document.querySelector('#task-form');
const filterButtons = document.querySelectorAll('.filter-btn');
const statsDisplay = document.querySelector('#stats');

function render(data) {
    taskGrid.replaceChildren();

    if (data.length === 0) {
        taskGrid.innerHTML = '<div class="empty-state">No tasks found. Time to relax! ☕</div>';
    } else {
        const html = data.map(task => `
            <div class="task-card priority-${task.priority} ${task.completed ? 'completed' : ''}" data-id="${task.id}">
                <h3>${task.title}</h3>
                <p>Priority: ${task.priority}</p>
                <div class="task-actions">
                    <button class="btn-sm btn-complete">${task.completed ? 'Undo' : 'Complete'}</button>
                    <button class="btn-sm btn-delete">Delete</button>
                </div>
            </div>
        `).join('');
        taskGrid.innerHTML = html;
    }

    // Update Stats
    const total = tasks.length;
    const done = tasks.filter(t => t.completed).length;
    statsDisplay.textContent = `Total: ${total} | Done: ${done}`;
}

// Add Task
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(taskForm);
    
    const newTask = {
        id: Date.now(),
        title: formData.get('title'),
        priority: formData.get('priority'),
        completed: false
    };

    tasks.push(newTask);
    taskForm.reset();
    render(tasks);
});

// Event Delegation (Actions)
taskGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.task-card');
    if (!card) return;

    const id = Number(card.dataset.id);

    if (e.target.classList.contains('btn-delete')) {
        tasks = tasks.filter(t => t.id !== id);
    } 
    
    if (e.target.classList.contains('btn-complete')) {
        const task = tasks.find(t => t.id === id);
        if (task) task.completed = !task.completed;
    }

    render(tasks);
});

// Filtering
filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // UI Update
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Logic
        const filter = btn.dataset.filter;
        if (filter === 'All') {
            render(tasks);
        } else {
            const filtered = tasks.filter(t => t.priority === filter);
            render(filtered);
        }
    });
});

// Initial Render
render(tasks);
