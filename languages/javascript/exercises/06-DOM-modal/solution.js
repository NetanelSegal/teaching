const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');

openBtn.addEventListener('click', () => {
    modal.classList.add('active');
    overlay.classList.add('active');
});

const closeModal = () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
};

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
