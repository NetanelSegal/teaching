/**
 * Theory: Events Deep Dive
 */

// 1. Event Object & Prevention
const link = document.querySelector('a');
link.addEventListener('click', (e) => {
    e.preventDefault(); // Stop the link from navigating
    console.log("Navigation prevented!");
});

// 2. Event Bubbling & Delegation
const list = document.querySelector('.task-list');

// Instead of: item.addEventListener(...) for 100 items
// We use ONE listener on the parent:
list.addEventListener('click', (e) => {
    // e.target is what was ACTUALLY clicked (could be a <span> inside the <li>)
    // We use .closest() to find the <li> even if a child was clicked
    const listItem = e.target.closest('li');
    
    if (listItem && list.contains(listItem)) {
        console.log("Clicked item ID:", listItem.dataset.id);
        listItem.classList.toggle('completed');
    }
});

// 3. Form Handling (The Modern Way)
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // STOP THE RELOAD
    
    const formData = new FormData(contactForm);
    
    // Extract values easily
    const data = {
        name: formData.get('userName'),
        email: formData.get('userEmail'),
        message: formData.get('userMessage')
    };
    
    console.log("Form submitted successfully:", data);
    
    // reset the form
    contactForm.reset();
});

// 4. Input Events (Live feedback)
const searchInput = document.querySelector('.search');
searchInput.addEventListener('input', (e) => {
    console.log("User is typing:", e.target.value);
});
