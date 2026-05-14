/**
 * Theory: Forms & Input Events
 */

const form = document.querySelector('#example-form');
const input = document.querySelector('#name-input');
const feedback = document.querySelector('.feedback');

// 1. Live Feedback with 'input' event
input.addEventListener('input', (e) => {
    const value = e.target.value;
    feedback.textContent = `You are typing: ${value}`;
    
    // Live Validation Example
    if (value.length < 3) {
        input.style.borderColor = 'red';
    } else {
        input.style.borderColor = 'green';
    }
});

// 2. The 'change' event (fires when focus is lost or checkbox toggled)
const newsletter = document.querySelector('#newsletter');
newsletter.addEventListener('change', (e) => {
    console.log("Newsletter preference changed:", e.target.checked);
});

// 3. Form Submission & FormData
form.addEventListener('submit', (e) => {
    e.preventDefault(); // STOP THE PAGE REFRESH!
    
    console.log("Form submitted via JS!");
    
    // The Professional Way to get data
    const formData = new FormData(form);
    
    // Option A: Get specific fields
    const name = formData.get('username'); 
    
    // Option B: Get EVERYTHING as a simple object
    const allData = Object.fromEntries(formData);
    
    console.log("Final Data Object:", allData);
    
    form.reset(); // Clear the form
});
