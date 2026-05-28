const slider = document.getElementById('my-slider');
const sliderValue = document.getElementById('slider-value');

slider.addEventListener('input', (event) => {
    sliderValue.textContent = event.target.value;
});
