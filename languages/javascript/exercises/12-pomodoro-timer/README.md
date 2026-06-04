# Exercise: Pomodoro Timer 🍅

## Goal
Build a functional Pomodoro Timer that helps users manage their work intervals (25 minutes) and breaks (5 minutes).

## The "Hook" (Why?)
Have you ever sat down to study or code, only to find yourself scrolling through social media 10 minutes later? The **Pomodoro Technique** is a world-renowned productivity method that uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks. 

In this exercise, you won't just learn how to make a timer; you'll learn how to manage **State** (is the timer running?), handle **Asynchronous Logic** (using `setInterval`), and perform **DOM Updates** to reflect time passing in real-time.

---

## Theory & Concepts

### 1. `setInterval` and `clearInterval`
The heart of any timer is `setInterval`. It executes a function repeatedly, with a fixed time delay between each call.
```javascript
const intervalId = setInterval(() => {
    console.log("Tick!");
}, 1000);

// To stop the timer:
clearInterval(intervalId);
```

### 2. State Management
Your application needs to "remember" certain things:
- How many seconds are left?
- Is the timer currently running?
- Is it currently "Work" time or "Break" time?

### 3. DOM Delegation & Data Attributes
To handle manual switching, we use `data-*` attributes on our navigation buttons. This allows us to identify which mode was clicked without hardcoding values in the logic:
```html
<button class="mode-btn" data-mode="work">Work</button>
<button class="mode-btn" data-mode="break">Break</button>
```

### 4. Formatting Time
Computers like seconds (e.g., `1500`), but humans like `25:00`. You'll need to calculate minutes and seconds:
```javascript
const minutes = Math.floor(totalSeconds / 60);
const seconds = totalSeconds % 60;
const display = `${minutes}:${seconds.toString().padStart(2, '0')}`;
```

---

## Lab Instructions
1.  **Initialize State**: Set up variables for `timeLeft`, `isRunning`, and `timerId`.
2.  **Start/Pause Logic**: Create a function that toggles the timer. If it's not running, start a `setInterval`. If it is running, `clearInterval`.
3.  **The Tick**: Inside the interval, decrement `timeLeft` and update the UI.
4.  **Manual Mode Switching**: Implement a `setMode(mode)` function that:
    - Stops any running timer.
    - Sets the appropriate time for the selected mode.
    - Updates the "Active" class on the navigation buttons.
5.  **Completion**: When `timeLeft` reaches 0, alert the user and switch between "Work" and "Break" modes automatically.
6.  **Reset**: Clear the interval and set everything back to default.

---

## External Resources
- [Scheduling: setTimeout and setInterval (javascript.info)](https://javascript.info/settimeout-setinterval)
- [HTMLElement: dataset property (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
- [String.prototype.padStart() (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)

---

## סיכום (Hebrew Summary)
בתרגיל זה נבנה טיימר פומודורו פונקציונלי הכולל אפשרות ניווט ידנית בין מצבי "עבודה" ו"הפסקה". נלמד להשתמש ב-`setInterval` לניהול זמן, ב-`data attributes` לזיהוי כפתורי הניווט, ובניהול "מצב" (State) כדי לסנכרן בין ה-UI לבין הלוגיקה של הטיימר. דגש מיוחד יושם על עדכון ה-DOM בזמן אמת ועל שינוי עיצוב האפליקציה בהתאם למצב הנבחר.
