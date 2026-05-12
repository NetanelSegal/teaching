# Project 1: The CLI Budget Tracker

## 🌟 The Challenge
Take control of your finances! Build a professional command-line tool to manage your personal expenses. You'll learn how to store data persistently using JSON, perform calculations on complex data structures, and create a user-friendly interface for adding, viewing, and filtering your spending.

## 🗺️ Step-by-Step Learning Path

### Step 1: Research & Discovery
- **Concept Focus:** Persistence with JSON, Data Filtering, List/Dict Management.
- **Internal Reference:** [Lesson 08: Dictionaries](../../../lessons/08-Dictionaries_and_Sets/), [Lesson 17: File I/O](../../../lessons/17-File_IO_and_Serialization/)
- **External Docs:** [Python json module](https://docs.python.org/3/library/json.html), [Real Python: Reading and Writing Files](https://realpython.com/read-write-files-python/)

### Step 2: Environment & Scaffolding
1. Create a virtual environment: `python -m venv .venv`
2. Activate it and install dependencies: `pip install -r ../../../requirements.txt`
3. Ensure your structure follows the ORT standard:
   - `src/core.py` (Logic - Expense management)
   - `src/utils.py` (Helpers - JSON loading/saving)
   - `main.py` (CLI Interface)

### Step 3: Designing the Data Model
- Define how your data looks. (e.g., "What attributes does an 'Expense' have? amount, category, date, description.")
- Implement these as Dictionaries or a simple Class in `src/core.py`.

### Step 4: Building the "Brains" (Core Logic)
- Implement the primary functionality in `src/core.py`.
- **Engineering Standard:** Keep functions "pure." Your core logic should handle a list of expenses and return filtered results or totals without doing any `print()` calls.

### Step 5: The Interface (Wiring it up)
- Implement the user interaction in `main.py`.
- Import your logic and helpers to create a loop where users can interact with their budget data.

### Step 6: Defensive Engineering
- Identify 3 ways a user could break your app (e.g., entering text for an amount, corrupted JSON file, selecting a non-existent category).
- Implement `try/except` blocks and input validation.

### Step 7: Validation
- Create a test in `tests/` to verify your total calculation and filtering logic.
- Run `pytest` to verify everything works.

## 🚀 Going Beyond (Stretch Goals)
- **Monthly Budgeting:** Set a monthly spending limit and alert the user when they exceed it.
- **Visual Summary:** Use a simple library like `plotext` to show a bar chart of spending by category directly in the terminal.
- **Search Functionality:** Add a way to search for expenses by description using keywords.

## 📚 Standard Resources
- [Project Roadmap](../../../projects/roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)
