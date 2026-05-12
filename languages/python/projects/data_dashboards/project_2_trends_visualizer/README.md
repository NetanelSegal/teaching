# Project 2: The Global Trends Visualizer

## 🌟 The Challenge
A picture is worth a thousand rows of data. Use Matplotlib and Seaborn to turn the cleaned financial data from Project 1 into a professional visual report. You'll learn how to tell a story with data by creating distribution plots, correlation heatmaps, and a multi-chart executive dashboard.

## 🗺️ Step-by-Step Learning Path

### Step 1: Research & Discovery
- **Concept Focus:** Data Visualization, Statistical Plotting, Subplots.
- **Internal Reference:** [Lesson 24: Pandas](../../lessons/24-Pandas_and_Data_Analysis/), [Lesson 25: Data Visualization](../../lessons/25-Data_Visualization/)
- **External Docs:** [Matplotlib Guide](https://matplotlib.org/stable/users/index.html), [Seaborn Gallery](https://seaborn.pydata.org/examples/index.html)

### Step 2: Environment & Scaffolding
1. Create a virtual environment: `python -m venv .venv`
2. Activate it and install dependencies: `pip install -r ../../../requirements.txt`
3. Ensure your structure follows the ORT standard:
   - `src/core.py` (Logic)
   - `src/utils.py` (Helpers)
   - `main.py` (Entry Point)

### Step 3: Designing the Data Model
- Define how your data looks. (e.g., "What metrics do we need to visualize? Spending per category, Trends over time, Outliers.")
- Implement helper functions in `src/core.py` to aggregate data for these charts.

### Step 4: Building the "Brains" (Core Logic)
- Implement the primary functionality in `src/core.py`.
- **Engineering Standard:** Separate data processing from plotting. One function prepares the data, another generates the chart object.

### Step 5: The Interface (Wiring it up)
- Implement the user interaction in `main.py`.
- Import your logic from `src.core`, load your clean data, and generate the 2x2 dashboard layout.

### Step 6: Defensive Engineering
- Identify 3 ways a user could break your app (e.g., data contains NaN values that break plotting, categories have 0 entries, too many categories to display clearly).
- Implement `try/except` blocks and data pre-checks.

### Step 7: Validation
- Create a test in `tests/` to verify that your data aggregation logic returns the correct shapes and types.
- Run `pytest` to verify everything works.

## 🚀 Going Beyond (Stretch Goals)
- **Interactive Tooltips:** Use Plotly to make your charts interactive (hover for details).
- **Automated PDF Report:** Use a library like `FPDF` to export your charts into a polished PDF document.
- **Dynamic Theming:** Allow the user to choose between "Light Mode" and "Dark Mode" for the charts.

## 📚 Standard Resources
- [Project Roadmap](../../roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)
