# Project 3: Automated Job Scraper (Browser Automation)

## 🌟 The Challenge
Job hunting is a full-time job in itself. Take the edge off by building an "Automated Job Scraper" that uses browser automation to log into a professional network or job board, search for specific roles (e.g., "Python Developer"), and export a structured list of opportunities into an Excel or CSV file.

## 🧠 Program Logic Flow
1.  **Initialize**: Launch the Selenium WebDriver and navigate to the target job board.
2.  **Navigate**: Perform search by locating input fields for "Role" and "Location" and submitting the form.
3.  **Wait**: Use explicit waits to ensure the results page has fully loaded before attempting to scrape.
4.  **Extract**: Loop through the list of job cards on the page and extract relevant details (Title, Company, Link).
5.  **Clean/Structure**: Convert the raw data into a structured format (e.g., a list of dictionaries).
6.  **Export**: Use Pandas to save the structured data into a CSV or Excel file for later review.
7.  **Cleanup**: Close the browser session.

## 🛠️ Implementation Tasks

### Phase 1: Setup & Scaffolding
- **Task 1.1: Environment Isolation**
  - Create a virtual environment: `python -m venv .venv`.
  - Activate it and install the local dependencies: `pip install -r requirements.txt`.
- **Task 1.2: Directory Structure**
  - Ensure your project follows the structure:
    - `src/core.py` (Browser automation logic)
    - `src/utils.py` (Data cleaning and export helpers)
    - `main.py` (The main entry point)
    - `tests/` (Your validation scripts)

### Phase 2: Core Logic (The Brains)
- **Task 2.1: The Browser Driver**
  - In `src/core.py`, implement a class `JobScraper`.
  - Add an `__init__` method that initializes the Selenium WebDriver (Chrome or Firefox).
  - Add a `close()` method to safely shut down the browser.
- **Task 2.2: Searching for Jobs**
  - Implement a method `search_jobs(keyword, location)`.
  - It should navigate to the job board, find the search inputs, type the keyword/location, and click the search button.
  - *Engineering Standard:* Use `WebDriverWait` to handle slow-loading elements instead of `time.sleep()`.

### Phase 3: Interface & Validation
- **Task 3.1: Data Extraction**
  - Implement a method `extract_listings()`.
  - It should find all job listing elements on the results page and extract the Title, Company, and Link for each.
- **Task 3.2: Export to CSV/Excel**
  - In `src/utils.py`, implement a function `save_to_file(data, filename)`.
  - Use the `pandas` library to convert your list of dictionaries into a DataFrame and export it.
- **Task 3.3: Validation**
  - Create a test in `tests/test_utils.py` that verifies the data cleaning and CSV export works with a mock data list.

## 🚀 Going Beyond (Stretch Goals)
- **Headless Mode:** Run the scraper in the background without opening a visible browser window.
- **Smart Filtering:** Use RegEx to filter out jobs that require too many years of experience or include "Remote" only.
- **Database Integration:** Save job postings to an SQLite database and only alert you about *new* postings since the last run.

## 📚 Standard Resources
- [Project Roadmap](../../roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)
