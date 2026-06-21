/**
 * POMODORO TIMER - EXERCISE
 * 
 * Your goal is to implement the logic for the Pomodoro Timer.
 * Follow the steps below and use the variables provided.
 */

// 1. Constants for durations (in seconds)
const WORK_TIME = 25 * 60;
const BREAK_TIME = 5 * 60;

// 2. Application State
let timeLeft = WORK_TIME;
let isRunning = false;
let isWorkTime = true;
let timerId = null;

// 3. DOM Elements
const timerDisplay = document.getElementById('timer');
const statusDisplay = document.getElementById('status');
const startPauseBtn = document.getElementById('start-pause');
const resetBtn = document.getElementById('reset');
const modeBtns = document.querySelectorAll('.mode-btn');

/**
 * 4. updateDisplay()
 * Converts `timeLeft` (seconds) into MM:SS format and updates the DOM.
 */
function updateDisplay() {
    // Hint: Use Math.floor() for minutes and % for seconds.
    // Use .toString().padStart(2, '0') for consistent 2-digit formatting.

    // YOUR CODE HERE
}

/**
 * 5. toggleTimer()
 * Starts or Pauses the timer based on the `isRunning` state.
 */
function toggleTimer() {
    if (isRunning) {
        // Stop the interval and update state
        // YOUR CODE HERE
    } else {
        // Start a setInterval that calls a function every 1000ms
        // Inside the interval: 
        // - Decrement timeLeft
        // - Call updateDisplay()
        // - Check if timeLeft === 0 (if so, switch modes automatically)
        // YOUR CODE HERE
    }
}

/**
 * 6. setMode(mode)
 * Manually sets the mode to "work" or "break".
 * This is triggered by clicking the navigation buttons.
 */
function setMode(mode) {
    // 1. Stop the current timer if it's running
    // 2. Update `isWorkTime` based on the mode argument
    // 3. Update `timeLeft` to WORK_TIME or BREAK_TIME
    // 4. Update UI (status text, active button class)
    // 5. Call updateDisplay()

    // YOUR CODE HERE
}

/**
 * 7. resetTimer()
 * Stops the timer and resets everything to initial WORK_TIME state.
 */
function resetTimer() {
    // YOUR CODE HERE
}

// 8. Event Listeners
startPauseBtn.addEventListener('click', toggleTimer);
resetBtn.addEventListener('click', resetTimer);

// Add event listeners to mode navigation buttons
modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const mode = btn.dataset.mode;
        setMode(mode);
    });
});

// Initial display update
updateDisplay();
