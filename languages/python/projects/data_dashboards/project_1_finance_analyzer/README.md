# Project 1: The "Dirty" Finance Analyzer

## 🌟 The Challenge
Real-world data is messy. Build a tool that takes a chaotic bank export (CSV) with missing values, duplicates, and inconsistent formats, and transforms it into a clean, structured dataset. You'll use Pandas and NumPy to automate the tedious work of data cleaning and perform initial financial analysis.

## 🗺️ Step-by-Step Learning Path

### Step 1: Research & Discovery
- **Concept Focus:** Data Cleaning, Vectorized Operations, CSV Manipulation.
- **Internal Reference:** [Lesson 23: NumPy](../../lessons/23-NumPy_and_Numerical_Computing/), [Lesson 24: Pandas](../../lessons/24-Pandas_and_Data_Analysis/)
- **External Docs:** [Pandas Documentation](https://pandas.pydata.org/docs/), [NumPy Documentation](https://numpy.org/doc/)

### Step 2: Environment & Scaffolding
1. Create a virtual environment: `python -m venv .venv`
2. Activate it and install dependencies: `pip install -r ../../../requirements.txt`
3. Ensure your structure follows the ORT standard:
   - `src/core.py` (Logic)
   - `src/utils.py` (Helpers)
   - `main.py` (Entry Point)

### Step 3: Designing the Data Model
- Define how your data looks. (e.g., "What columns should the final cleaned CSV have? Date, Category, Amount, Description.")
- Implement these as a schema definition or a list of expected columns in `src/core.py`.

### Step 4: Building the "Brains" (Core Logic)
- Implement the primary functionality in `src/core.py`.
- **Engineering Standard:** Keep functions "pure." Your cleaning functions should take a raw DataFrame and return a clean one without modifying the original.

### Step 5: The Interface (Wiring it up)
- Implement the user interaction in `main.py`.
- Import your logic from `src.core`, load the messy CSV, run the cleaning pipeline, and save the result.

### Step 6: Defensive Engineering
- Identify 3 ways a user could break your app (e.g., CSV has different headers than expected, numeric columns contain text, the file is empty).
- Implement `try/except` blocks and Pandas validation checks.

### Step 7: Validation
- Create a test in `tests/` that passes a small "broken" dataset and verifies the output matches your cleaning rules.
- Run `pytest` to verify everything works.

## 🚀 Going Beyond (Stretch Goals)
- **Auto-Categorization:** Use keyword matching or fuzzy logic to automatically assign categories (e.g., "Amazon" -> "Shopping").
- **Currency Conversion:** Use an API to convert all transactions into a single base currency.
- **Anomaly Detection:** Use NumPy to flag transactions that are 3x higher than your average spending.

## 📚 Standard Resources
- [Project Roadmap](../../roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)
