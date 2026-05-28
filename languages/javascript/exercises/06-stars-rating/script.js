function createStars() {
    const starsContainer = document.querySelector('.stars-container');

    for (let i = 0; i < 5; i++) {
        starsContainer.innerHTML +=
            `<svg class="star" fill="white" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="fillGradient${i}">
                        <stop offset="0%" stop-color="#ffdd04" />
                        <stop offset="0%" stop-color="transparent" />
                    </linearGradient>
                </defs>

                <path stroke="#ffdd04" stroke-width="1px" fill="url(#fillGradient${i})"
                    d="M16.926 20.2a1 1 0 0 1-.466-.115l-4.471-2.352-4.471 2.348a1 1 0 0 1-1.451-1.054l.854-4.98L3.3 10.521a1 1 0 0 1 .555-1.706l5-.727 2.237-4.531A1 1 0 0 1 11.989 3a1 1 0 0 1 .9.558l2.236 4.53 5 .727a1 1 0 0 1 .555 1.706l-3.618 3.527.854 4.98a1 1 0 0 1-.99 1.172z" />
            </svg>`;
    }

}

function createStopsForGradient(prec = 100) {
    return `<stop offset="${prec}%" stop-color="#ffdd04" />
            <stop offset="${prec}%" stop-color="transparent" />;`;
}

createStars();

const stars = document.querySelectorAll('.star');
stars.forEach((s, i) => {
    s.addEventListener('click', (e) => {
        stars.forEach((s2, j) => {
            const linearGradientELement = s2.children[0].children[0];
            if (j < i) {
                linearGradientELement.innerHTML = createStopsForGradient(100);
            } else {
                linearGradientELement.innerHTML = createStopsForGradient(0);
            }
        });

        const starRect = s.getBoundingClientRect();
        const starLeftDistance = starRect.left;
        const starWidth = starRect.width;

        const clickPositionX = e.x - starLeftDistance;
        const clickPrecentage = clickPositionX / starWidth * 100;

        const currentClickedStartGradient = s.children[0].children[0];
        currentClickedStartGradient.innerHTML = createStopsForGradient(clickPrecentage);
    });
});

