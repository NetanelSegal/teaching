# Project 2: Price Drop Tracker (Web Scraping)

## 🌟 The Challenge
Stop refreshing that product page! Build a "Price Drop Tracker" that automatically monitors an e-commerce site for a specific item. The script will scrape the current price at regular intervals and send you an email or notification the moment the price falls below your budget.

## 🧠 Program Logic Flow
1.  **Request**: The program takes a product URL and makes an HTTP request to fetch the page content.
2.  **Parse**: Use `BeautifulSoup` to find the specific HTML element containing the price.
3.  **Clean**: Extract the text, remove non-numeric characters (e.g., `$`, `,`), and convert the result to a `float`.
4.  **Compare**: Check if the `current_price` is less than or equal to the `target_price`.
5.  **Notify**: If the price dropped, trigger the notification logic (e.g., send an email or print an alert).
6.  **Schedule**: The program waits (e.g., 1 hour) before repeating the process to check for new updates.

## 🛠️ Implementation Tasks

### Phase 1: Setup & Scaffolding
- **Task 1.1: Environment Isolation**
  - Create a virtual environment: `python -m venv .venv`.
  - Activate it and install the local dependencies: `pip install -r requirements.txt`.
- **Task 1.2: Directory Structure**
  - Ensure your project follows the structure:
    - `src/core.py` (Scraping and Logic)
    - `src/utils.py` (Helper functions for email/notifications)
    - `main.py` (The main entry point)
    - `tests/` (Your validation scripts)

### Phase 2: Core Logic (The Brains)
- **Task 2.1: The Price Scraper**
  - In `src/core.py`, implement a function `get_price(url)`.
  - It should:
    1. Make an HTTP GET request using `requests`.
    2. Parse the HTML with `BeautifulSoup`.
    3. Use CSS selectors to find the price tag.
    4. Clean the string (remove currency symbols) and convert it to a `float`.
  - *Engineering Standard:* Set a custom `User-Agent` header to avoid being blocked.
- **Task 2.2: The Comparison Logic**
  - Implement a function `check_price(current_price, target_price)`.
  - It should return `True` if the current price is less than or equal to the target.

### Phase 3: Interface & Validation
- **Task 3.1: Notification System**
  - In `src/utils.py`, implement a basic function to "notify" the user. 
  - *Level 1:* Just print a special message.
  - *Level 2:* Implement `smtplib` to send a real email.
- **Task 3.2: The Main Loop**
  - In `main.py`, combine the scraper and notification logic.
  - Set it to run once every hour (or use the `schedule` library if you want to be fancy).
- **Task 3.3: Validation**
  - Create a test in `tests/test_scraper.py`.
  - Use a local `.html` file (save a sample product page) to test your `get_price` function without hitting the live website repeatedly.

## 🚀 Going Beyond (Stretch Goals)
- **Multi-Store Support:** Track the same product across 3 different websites and find the absolute lowest price.
- **Price History:** Store prices in a CSV file and use Matplotlib to show a graph of price trends over time.
- **User Agent Rotation:** Implement random User-Agents to avoid being blocked by anti-bot measures.

## 📚 Standard Resources
- [Project Roadmap](../../roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)
