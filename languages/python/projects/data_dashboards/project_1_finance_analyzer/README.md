# Project 1: The "Dirty" Finance Analyzer

## 🌟 The Challenge
Real-world data is messy. Build a tool that takes a chaotic bank export (CSV) with missing values, duplicates, and inconsistent formats, and transforms it into a clean, structured dataset. You'll use Pandas and NumPy to automate the tedious work of data cleaning and perform initial financial analysis.

## 🧠 Program Logic Flow
1.  **Load**: Read the raw, "dirty" CSV file into a Pandas DataFrame.
2.  **Validate**: Check for required columns and report missing data.
3.  **Clean**: 
    -   Identify and remove duplicate entries.
    -   Cast the 'Amount' column to numeric, forcing errors to `NaN`.
    -   Standardize the 'Date' column to a consistent format.
    -   Fill missing categorical values (e.g., set empty 'Category' to 'Uncategorized').
4.  **Analyze**: Use NumPy to calculate global statistics (Total, Mean, Max spend).
5.  **Export**: Save the cleaned DataFrame to a new CSV for downstream use in Project 2.

## 🛠️ Implementation Tasks

### Phase 1: Setup & Scaffolding
- **Task 1.1: Environment Isolation**
  - Create a virtual environment: `python -m venv .venv`.
  - Activate it and install the local dependencies: `pip install -r requirements.txt`.
- **Task 1.2: Directory Structure**
  - Ensure your project follows the structure:
    - `src/core.py` (Data cleaning and aggregation logic)
    - `src/utils.py` (CSV reading/writing helpers)
    - `main.py` (The CLI interface)
    - `tests/` (Your validation scripts)

### Phase 2: Core Logic (The Brains)
- **Task 2.1: The Cleaning Pipeline**
  - In `src/core.py`, implement a function `clean_data(df)`.
  - It should:
    1. Drop duplicate rows (`df.drop_duplicates()`).
    2. Fill missing values in the 'Category' column with "Other" (`df.fillna()`).
    3. Ensure 'Amount' is a float and 'Date' is a datetime object.
  - *Engineering Standard:* Return a copy of the DataFrame, don't modify the input in-place.
- **Task 2.2: Statistical Summary**
  - Implement a function `get_summary_stats(df)`.
  - Use NumPy to calculate the total spend, average transaction size, and standard deviation.

### Phase 3: Interface & Validation
- **Task 3.1: The CSV Loader**
  - In `main.py`, implement the logic to load a CSV file provided via a command-line argument.
- **Task 3.2: Export Clean Data**
  - After cleaning, save the final DataFrame to `data/cleaned_finance.csv`.
- **Task 3.3: Validation**
  - Create a test in `tests/test_cleaning.py` that passes a DataFrame with known issues (duplicates, NaNs) and asserts that they are fixed.

## 🚀 Going Beyond (Stretch Goals)
- **Auto-Categorization:** Use keyword matching or fuzzy logic to automatically assign categories (e.g., "Amazon" -> "Shopping").
- **Currency Conversion:** Use an API to convert all transactions into a single base currency.
- **Anomaly Detection:** Use NumPy to flag transactions that are 3x higher than your average spending.

## 📚 Standard Resources
- [Project Roadmap](../../roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)
