# Project 4: The Final Capstone (Streamlit Dashboard)

## 🌟 The Challenge
Bring your data to life on the web! Combine SQL, Pandas, and visualization into a real, interactive web application using Streamlit. This final project in the track will allow you to build a shareable dashboard with live updates, user-controlled filters, and professional-grade layouts.

## 🧠 Program Logic Flow
1.  **Start App**: Run `streamlit run main.py`.
2.  **Load & Cache**: The app calls the database and loads the data into a Pandas DataFrame. The `@st.cache_data` decorator ensures this only happens once, even when the user interacts with the UI.
3.  **UI Interaction (Sidebar)**: The user interacts with widgets (e.g., Sliders, Selectboxes) to choose a date range or product category.
4.  **Reactive Filtering**:
    -   Streamlit detects the change in widget state.
    -   The app re-runs the filtering logic on the cached DataFrame.
5.  **Render Visuals**:
    -   Update Plotly charts based on the filtered data.
    -   Update Key Performance Indicators (KPIs) like "Total Revenue" or "Growth Rate."
    -   Display the filtered data table.
6.  **Refresh**: The app stays open and reactive, waiting for the next user input.

## 🛠️ Implementation Tasks

### Phase 1: Setup & Scaffolding
- **Task 1.1: Environment Isolation**
  - Create a virtual environment: `python -m venv .venv`.
  - Activate it and install the local dependencies: `pip install -r requirements.txt`.
- **Task 1.2: Directory Structure**
  - Ensure your project follows the structure:
    - `src/core.py` (Data fetching and filtering logic)
    - `src/utils.py` (Plotly chart generators)
    - `main.py` (The Streamlit application)
    - `tests/` (Your validation scripts)

### Phase 2: Core Logic (The Brains)
- **Task 2.1: Cached Data Loading**
  - In `src/core.py`, implement a function `load_data()`.
  - Use `@st.cache_data` to ensure the data is only loaded once.
- **Task 2.2: Reactive Filtering**
  - Implement a function `filter_data(df, category, date_range)`.
  - It should return a subset of the DataFrame based on the user's selection in the UI.

### Phase 3: Interface & Validation
- **Task 3.1: Streamlit Layout**
  - In `main.py`, use `st.sidebar` for filters and `st.columns()` to create a dashboard layout.
- **Task 3.2: Interactive Charts**
  - In `src/utils.py`, use Plotly to create interactive charts that respond to the filtered data.
- **Task 3.3: Validation**
  - Create a test in `tests/test_filters.py` that verifies the filtering logic returns the expected number of rows for a given category.

## 🚀 Going Beyond (Stretch Goals)
- **Deployment:** Deploy your app to Streamlit Cloud and share the link in your portfolio.
- **Multi-Page App:** Add a sidebar to navigate between different views (e.g., "Sales Overview" vs "Inventory Management").
- **Auth Simulation:** Add a simple password protection layer to the dashboard.

## 📚 Standard Resources
- [Project Roadmap](../../roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)
