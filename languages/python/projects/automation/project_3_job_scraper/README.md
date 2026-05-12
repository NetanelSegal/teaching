# Project 3: Automated Job Scraper (Browser Automation)

## 🌟 The Challenge
Job hunting is a full-time job in itself. Take the edge off by building an "Automated Job Scraper" that uses browser automation to log into a professional network or job board, search for specific roles (e.g., "Python Developer"), and export a structured list of opportunities into an Excel or CSV file.

## 🗺️ Step-by-Step Learning Path

### Step 1: Research & Discovery
- **Concept Focus:** Browser Automation (Selenium/Playwright), Dynamic Content Handling, Data Export.
- **Internal Reference:** [Lesson 17: File I/O](../../../lessons/17-File_IO_and_Serialization/), [Lesson 14: Exception Handling](../../../lessons/14-Exception_Handling/)
- **External Docs:** [Selenium Python Docs](https://selenium-python.readthedocs.io/), [Playwright Python](https://playwright.dev/python/docs/intro), [Pandas (for export)](https://pandas.pydata.org/docs/)

### Step 2: Environment & Scaffolding
1. Create a virtual environment: `python -m venv .venv`
2. Activate it and install dependencies: `pip install -r ../../../requirements.txt`
3. Ensure your structure follows the ORT standard:
   - `src/core.py` (Logic)
   - `src/utils.py` (Helpers)
   - `main.py` (Entry Point)

### Step 3: Designing the Data Model
- Define how your data looks. (e.g., "What attributes does a 'Job Posting' have? Title, Company, Link, Date Posted.")
- Implement these as Classes or Dictionaries in `src/core.py`.

### Step 4: Building the "Brains" (Core Logic)
- Implement the primary functionality in `src/core.py`.
- **Engineering Standard:** Keep functions "pure." No `input()` or `print()` inside this file. Logic should handle data extraction from page elements.

### Step 5: The Interface (Wiring it up)
- Implement the user interaction in `main.py`.
- Import your logic from `src.core`, initialize the browser driver, and orchestrate the search and scraping flow.

### Step 6: Defensive Engineering
- Identify 3 ways a user could break your app (e.g., login credentials incorrect, CAPTCHA appeared, element not found due to slow loading).
- Implement `try/except` blocks and explicit waits.

### Step 7: Validation
- Create a test in `tests/` for your data cleaning and export logic.
- Run `pytest` to verify everything works.

## 🚀 Going Beyond (Stretch Goals)
- **Headless Mode:** Run the scraper in the background without opening a visible browser window.
- **Smart Filtering:** Use RegEx to filter out jobs that require too many years of experience or include "Remote" only.
- **Database Integration:** Save job postings to an SQLite database and only alert you about *new* postings since the last run.

## 📚 Standard Resources
- [Project Roadmap](../../roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)
