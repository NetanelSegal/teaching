# Project 1: Terminal RPG / Adventure (Logic & CLI)

## 🌟 The Challenge
Embark on a journey of logic! Build a text-based "Terminal RPG" where players navigate through rooms, manage an inventory of items, and engage in turn-based combat with enemies. This project focuses on managing complex game states and building interactive command-line experiences using only Python logic.

## 🗺️ Step-by-Step Learning Path

### Step 1: Research & Discovery
- **Concept Focus:** State Management, Turn-based Logic, Inventory Systems.
- **Internal Reference:** [Lesson 05: Lists & Matrices](../../../lessons/05-Lists_and_Matrices/), [Lesson 08: Dictionaries](../../../lessons/08-Dictionaries_and_Sets/)
- **External Docs:** [Python random module](https://docs.python.org/3/library/random.html), [Colorama (for CLI colors)](https://pypi.org/project/colorama/)

### Step 2: Environment & Scaffolding
1. Create a virtual environment: `python -m venv .venv`
2. Activate it and install dependencies: `pip install -r ../../../requirements.txt`
3. Ensure your structure follows the ORT standard:
   - `src/core.py` (Logic)
   - `src/utils.py` (Helpers)
   - `main.py` (Entry Point)

### Step 3: Designing the Data Model
- Define how your data looks. (e.g., "What attributes does a 'Player' have? HP, Inventory, Current Room.")
- Implement these as Classes or Dictionaries in `src/core.py`.

### Step 4: Building the "Brains" (Core Logic)
- Implement the primary functionality in `src/core.py`.
- **Engineering Standard:** Keep functions "pure." No `input()` or `print()` inside this file. It should take the current state and an action, and return the new state.

### Step 5: The Interface (Wiring it up)
- Implement the user interaction in `main.py`.
- Import your logic from `src.core` and connect it to the user input loop.

### Step 6: Defensive Engineering
- Identify 3 ways a user could break your app (e.g., entering an invalid command, trying to use an item they don't have, moving to a non-existent room).
- Implement `try/except` blocks and input validation.

### Step 7: Validation
- Create a test in `tests/` for your core logic (e.g., combat calculations).
- Run `pytest` to verify everything works.

## 🚀 Going Beyond (Stretch Goals)
- **Save/Load System:** Use the `json` module to allow players to save their progress and resume later.
- **ASCII Art:** Enhance the visuals by adding ASCII art for rooms and enemies.
- **Leveling System:** Implement XP and leveling logic to increase player stats over time.

## 📚 Standard Resources
- [Project Roadmap](../../roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)
