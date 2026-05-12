# Project 4: The Final Capstone (Streamlit Dashboard)

## 🌟 The Challenge
Bring your data to life on the web! Combine SQL, Pandas, and visualization into a real, interactive web application using Streamlit. This final project in the track will allow you to build a shareable dashboard with live updates, user-controlled filters, and professional-grade layouts.

## 🗺️ Step-by-Step Learning Path

### Step 1: Research & Discovery
- **Concept Focus:** Web Dashboards, Reactive Programming, Full-Stack Data Integration.
- **Internal Reference:** [Lesson 24: Pandas](../../lessons/24-Pandas_and_Data_Analysis/), [Lesson 26: SQL](../../lessons/26-SQL_and_Databases/)
- **External Docs:** [Streamlit Documentation](https://docs.streamlit.io/), [Plotly for Streamlit](https://plotly.com/python/streamlit/)

### Step 2: Environment & Scaffolding
1. Create a virtual environment: `python -m venv .venv`
2. Activate it and install dependencies: `pip install -r ../../../requirements.txt`
3. Ensure your structure follows the ORT standard:
   - `src/core.py` (Logic - Database/Pandas)
   - `src/utils.py` (Helpers - Viz)
   - `main.py` (Streamlit App)

### Step 3: Designing the Data Model
- Define how your data looks. (e.g., "What user inputs will trigger updates? Date range, Category selection, Metric toggle.")
- Implement the data fetching and filtering logic in `src/core.py`.

### Step 4: Building the "Brains" (Core Logic)
- Implement the primary functionality in `src/core.py`.
- **Engineering Standard:** Cache your data loading using `@st.cache_data` to keep the app fast and responsive.

### Step 5: The Interface (Wiring it up)
- Implement the user interaction in `main.py` using Streamlit widgets (`st.slider`, `st.selectbox`, etc.).
- Import your logic and visualization helpers to render charts and tables dynamically.

### Step 6: Defensive Engineering
- Identify 3 ways a user could break your app (e.g., selecting a date range with no data, database connection failure, inputting invalid parameters in a text box).
- Implement `st.error` messages and default state handling.

### Step 7: Validation
- Create a test in `tests/` for your core data-processing functions.
- Run `pytest` and manually test the UI responsiveness.

## 🚀 Going Beyond (Stretch Goals)
- **Deployment:** Deploy your app to Streamlit Cloud and share the link in your portfolio.
- **Multi-Page App:** Add a sidebar to navigate between different views (e.g., "Sales Overview" vs "Inventory Management").
- **Auth Simulation:** Add a simple password protection layer to the dashboard.

## 📚 Standard Resources
- [Project Roadmap](../../roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)
