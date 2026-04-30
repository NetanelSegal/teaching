/**
 * Lab: Forms & Inputs - Solutions
 */

// MISSION 1: Live Character Counter ✍️
const bio = document.getElementById('bio');
const charCounter = document.getElementById('char-counter');

bio.addEventListener('input', (e) => {
    const len = e.target.value.length;
    charCounter.textContent = `Characters: ${len} / 50`;
    charCounter.style.color = len > 50 ? 'red' : 'gray';
});


// MISSION 2: Password Shield 🛡️
const pass = document.getElementById('pass');
const passError = document.getElementById('pass-error');

pass.addEventListener('input', (e) => {
    if (e.target.value.length > 0 && e.target.value.length < 6) {
        passError.style.display = 'block';
    } else {
        passError.style.display = 'none';
    }
});


// MISSION 3: The Registration 🚀
const regForm = document.getElementById('reg-form');
const result = document.getElementById('result');

regForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(regForm);
    const name = formData.get('fullName');
    const plan = formData.get('plan');

    result.innerHTML = `
        <p class="success-msg">
            Thanks ${name}! You are now on the <strong>${plan}</strong> plan.
        </p>
    `;

    regForm.reset();
});
