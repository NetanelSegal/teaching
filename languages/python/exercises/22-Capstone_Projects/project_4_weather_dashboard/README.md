# Project 4: Weather API Dashboard

## 🌟 The Challenge
Is it raining in Tokyo? Build a "Weather API Dashboard" that fetches real-time meteorological data from a professional API. You'll learn the essentials of job-ready development: making HTTP requests, parsing complex JSON responses, and handling network errors gracefully to ensure your app stays "up" even when the internet is shaky.

## 🗺️ Step-by-Step Learning Path

### Step 1: Research & Discovery
- **Concept Focus:** REST APIs, JSON Parsing, Asynchronous Programming (Optional).
- **Internal Reference:** [Lesson 17: File I/O](../../../lessons/17-File_IO_and_Serialization/), [Lesson 14: Exception Handling](../../../lessons/14-Exception_Handling/)
- **External Docs:** [OpenWeatherMap API](https://openweathermap.org/api), [Python Requests Library](https://requests.readthedocs.io/)

### Step 2: Environment & Scaffolding
1. Create a virtual environment: `python -m venv .venv`
2. Activate it and install dependencies: `pip install -r ../../../requirements.txt`
3. Ensure your structure follows the ORT standard:
   - `src/core.py` (Logic - API Client)
   - `src/utils.py` (Helpers - Data formatting)
   - `main.py` (Dashboard UI)

### Step 3: Designing the Data Model
- Define how your data looks. (e.g., "What weather metrics do we want to display? Temp, Humidity, Wind Speed, Description.")
- Implement these as Classes or Dictionaries in `src/core.py`.

### Step 4: Building the "Brains" (Core Logic)
- Implement the primary functionality in `src/core.py`.
- **Engineering Standard:** Keep your API logic separate from your UI. Your core logic should return a clean data object, not a formatted string.

### Step 5: The Interface (Wiring it up)
- Implement the user interaction in `main.py`.
- Import your API client, handle user input for city names, and display the weather summary.

### Step 6: Defensive Engineering
- Identify 3 ways a user could break your app (e.g., invalid city name, API key is expired or missing, no internet connection).
- Implement `try/except` blocks and clear error messages.

### Step 7: Validation
- Create a test in `tests/` that uses a mock API response to verify your parsing logic.
- Run `pytest` to verify everything works.

## 🚀 Going Beyond (Stretch Goals)
- **5-Day Forecast:** Expand the dashboard to show the upcoming forecast using another API endpoint.
- **Unit Conversion:** Allow the user to toggle between Metric and Imperial units.
- **Historical Data:** If the API supports it, show the weather for the same city exactly one year ago.

## 📚 Standard Resources
- [Project Roadmap](../../../projects/roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)
