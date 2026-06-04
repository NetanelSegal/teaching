/**
 * POMODORO TIMER - SOLUTION
 */

const WORK_TIME = 25 * 60;
const BREAK_TIME = 5 * 60;

let timeLeft = WORK_TIME;
let isRunning = false;
let isWorkTime = true;
let timerId = null;

const timerDisplay = document.getElementById('timer');
const statusDisplay = document.getElementById('status');
const startPauseBtn = document.getElementById('start-pause');
const resetBtn = document.getElementById('reset');
const modeBtns = document.querySelectorAll('.mode-btn');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    
    timerDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;
    document.title = `${formattedMinutes}:${formattedSeconds} - Pomodoro`;
}

function toggleTimer() {
    if (isRunning) {
        pauseTimer();
    } else {
        startTimer();
    }
}

function startTimer() {
    isRunning = true;
    startPauseBtn.textContent = 'Pause';
    
    timerId = setInterval(() => {
        timeLeft--;
        updateDisplay();
        
        if (timeLeft === 0) {
            handleTimerCompletion();
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerId);
    timerId = null;
    isRunning = false;
    startPauseBtn.textContent = 'Start';
}

function handleTimerCompletion() {
    alert(isWorkTime ? "Work session finished! Time for a break." : "Break over! Back to work.");
    const nextMode = isWorkTime ? 'break' : 'work';
    setMode(nextMode);
}

function setMode(mode) {
    pauseTimer();
    
    isWorkTime = (mode === 'work');
    timeLeft = isWorkTime ? WORK_TIME : BREAK_TIME;
    
    // Update UI Elements
    statusDisplay.textContent = isWorkTime ? 'Work Time' : 'Break Time';
    
    // Update Navigation Buttons
    modeBtns.forEach(btn => {
        if (btn.dataset.mode === mode) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update Theme Color
    const themeColor = isWorkTime ? '#e74c3c' : '#2ecc71';
    document.documentElement.style.setProperty('--primary', themeColor);
    
    updateDisplay();
}

function resetTimer() {
    setMode('work');
}

// Event Listeners
startPauseBtn.addEventListener('click', toggleTimer);
resetBtn.addEventListener('click', resetTimer);

modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        setMode(btn.dataset.mode);
    });
});

// Initialize
updateDisplay();
