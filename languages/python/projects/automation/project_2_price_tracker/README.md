# Project 2: Price Drop Tracker (Web Scraping)

## 🌟 The Challenge
Stop refreshing that product page! Build a "Price Drop Tracker" that automatically monitors an e-commerce site for a specific item. The script will scrape the current price at regular intervals and send you an email or notification the moment the price falls below your budget.

## 🗺️ Step-by-Step Learning Path

### Step 1: Research & Discovery
- **Concept Focus:** Web Scraping, HTTP Requests, SMTP for Emails.
- **Internal Reference:** [Lesson 17: File I/O](../../../lessons/17-File_IO_and_Serialization/), [Lesson 06: Functions](../../../lessons/06-Functions/)
- **External Docs:** [BeautifulSoup Documentation](https://www.crummy.com/software/BeautifulSoup/bs4/doc/), [Requests: HTTP for Humans](https://requests.readthedocs.io/), [smtplib (Email)](https://docs.python.org/3/library/smtplib.html)

### Step 2: Environment & Scaffolding
1. Create a virtual environment: `python -m venv .venv`
2. Activate it and install dependencies: `pip install -r ../../../requirements.txt`
3. Ensure your structure follows the ORT standard:
   - `src/core.py` (Logic)
   - `src/utils.py` (Helpers)
   - `main.py` (Entry Point)

### Step 3: Designing the Data Model
- Define how your data looks. (e.g., "What product details do we need to store? URL, target price, selector for price tag.")
- Implement these as Classes or Dictionaries in `src/core.py`.

### Step 4: Building the "Brains" (Core Logic)
- Implement the primary functionality in `src/core.py`.
- **Engineering Standard:** Keep functions "pure." No `input()` or `print()` inside this file. It should only take a URL/HTML and return the numeric price.

### Step 5: The Interface (Wiring it up)
- Implement the user interaction in `main.py`.
- Import your logic from `src.core`, handle the scheduling of the check, and trigger the notification logic.

### Step 6: Defensive Engineering
- Identify 3 ways a user could break your app (e.g., invalid URL, site structure changed/selector failed, network timeout).
- Implement `try/except` blocks and input validation.

### Step 7: Validation
- Create a test in `tests/` for your core logic using a local HTML file instead of a live site.
- Run `pytest` to verify everything works.

## 🚀 Going Beyond (Stretch Goals)
- **Multi-Store Support:** Track the same product across 3 different websites and find the absolute lowest price.
- **Price History:** Store prices in a CSV file and use Matplotlib to show a graph of price trends over time.
- **User Agent Rotation:** Implement random User-Agents to avoid being blocked by anti-bot measures.

## 📚 Standard Resources
- [Project Roadmap](../../roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)
