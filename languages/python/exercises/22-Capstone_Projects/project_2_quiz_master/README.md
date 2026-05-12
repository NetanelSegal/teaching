# Project 2: The Quiz Master

## 🌟 The Challenge
Are you a trivia expert? Build a robust quiz application that dynamicallly reads questions from a file. You'll master Object-Oriented Programming (OOP) by creating Quiz and Question classes, handle randomization to keep things fresh, and implement a leaderboard system to track high scores.

## 🗺️ Step-by-Step Learning Path

### Step 1: Research & Discovery
- **Concept Focus:** OOP (Classes/Methods), Randomization, Path Management.
- **Internal Reference:** [Lesson 15: Classes](../../../lessons/15-OOP_Basics/), [Lesson 06: Functions](../../../lessons/06-Functions/)
- **External Docs:** [Python random module](https://docs.python.org/3/library/random.html), [Python pathlib](https://docs.python.org/3/library/pathlib.html)

### Step 2: Environment & Scaffolding
1. Create a virtual environment: `python -m venv .venv`
2. Activate it and install dependencies: `pip install -r ../../../requirements.txt`
3. Ensure your structure follows the ORT standard:
   - `src/core.py` (Logic - Quiz and Question classes)
   - `src/utils.py` (Helpers - File loading)
   - `main.py` (Game Entry Point)

### Step 3: Designing the Data Model
- Define how your data looks. (e.g., "What properties does a 'Question' have? Text, Options, Correct Answer, Hint.")
- Implement these as Classes in `src/core.py`.

### Step 4: Building the "Brains" (Core Logic)
- Implement the primary functionality in `src/core.py`.
- **Engineering Standard:** Use the `Quiz` class to manage the score and current question index. Keep the UI logic out of these classes.

### Step 5: The Interface (Wiring it up)
- Implement the user interaction in `main.py`.
- Import your classes and orchestrate the flow: Load questions -> Shuffle -> Ask -> Check Answer -> Show Final Score.

### Step 6: Defensive Engineering
- Identify 3 ways a user could break your app (e.g., questions file is missing, JSON is malformed, user enters an invalid option index).
- Implement `try/except` blocks and input validation.

### Step 7: Validation
- Create a test in `tests/` for your scoring logic and question loading.
- Run `pytest` to verify everything works.

## 🚀 Going Beyond (Stretch Goals)
- **Timed Quiz:** Add a timer for each question to increase the difficulty.
- **Difficulty Levels:** Categorize questions by difficulty and allow users to choose their level.
- **Multiplayer Mode:** Allow two users to take turns and compare their scores at the end.

## 📚 Standard Resources
- [Project Roadmap](../../../projects/roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)
