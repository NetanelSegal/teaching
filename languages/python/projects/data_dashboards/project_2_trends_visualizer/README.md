# Project 2: The Global Trends Visualizer

## 🌟 The Challenge
A picture is worth a thousand rows of data. Use Matplotlib and Seaborn to turn the cleaned financial data from Project 1 into a professional visual report. You'll learn how to tell a story with data by creating distribution plots, correlation heatmaps, and a multi-chart executive dashboard.

## 🧠 Program Logic Flow
1.  **Load**: Load the `cleaned_finance.csv` generated in Project 1.
2.  **Aggregate**: 
    -   Group data by 'Month' to calculate monthly totals.
    -   Group data by 'Category' to find the top spending sectors.
3.  **Plot**:
    -   Create a Matplotlib Figure with multiple subplots.
    -   Generate a line plot for temporal trends.
    -   Generate a bar chart for categorical totals.
    -   Generate a Seaborn heatmap or boxplot for deeper distribution analysis.
4.  **Style**: Apply consistent labels, titles, and color palettes.
5.  **Save**: Export the finished dashboard as a high-resolution PNG or PDF.

## 🛠️ Implementation Tasks

### Phase 1: Setup & Scaffolding
- **Task 1.1: Environment Isolation**
  - Create a virtual environment: `python -m venv .venv`.
  - Activate it and install the local dependencies: `pip install -r requirements.txt`.
- **Task 1.2: Directory Structure**
  - Ensure your project follows the structure:
    - `src/core.py` (Visualization and aggregation logic)
    - `src/utils.py` (Chart styling and layout helpers)
    - `main.py` (The report generator)
    - `tests/` (Your validation scripts)

### Phase 2: Core Logic (The Brains)
- **Task 2.1: Monthly Trends**
  - In `src/core.py`, implement a function `get_monthly_spending(df)`.
  - Use `df.resample('M')` or `df.groupby()` to aggregate spending by month.
- **Task 2.2: Category Distribution**
  - Implement a function `get_category_totals(df)`.
  - Calculate the percentage of total spending for each category.

### Phase 3: Interface & Validation
- **Task 3.1: The Plotting Suite**
  - Create a function `plot_dashboard(df)` that uses Matplotlib subplots to show:
    1. A Line chart of trends over time.
    2. A Pie chart or Bar chart of category distribution.
    3. A Seaborn Boxplot showing spending outliers.
- **Task 3.2: Save the Report**
  - Save the final dashboard as a PNG file: `output/annual_report.png`.
- **Task 3.3: Validation**
  - Create a test in `tests/test_logic.py` that verifies the aggregated monthly totals match the raw sum of transactions.

## 🚀 Going Beyond (Stretch Goals)
- **Interactive Tooltips:** Use Plotly to make your charts interactive (hover for details).
- **Automated PDF Report:** Use a library like `FPDF` to export your charts into a polished PDF document.
- **Dynamic Theming:** Allow the user to choose between "Light Mode" and "Dark Mode" for the charts.

## 📚 Standard Resources
- [Project Roadmap](../../roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)
