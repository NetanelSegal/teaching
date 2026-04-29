# Professional Projects: Data Science & Dashboards

This track guides you through building a professional portfolio of data-driven applications. Each project builds on the skills learned in Modules 23-26.

---

## 📁 Project 1: The "Dirty" Finance Analyzer
**Focus:** *NumPy, Pandas, and Data Cleaning*
**The Goal:** Build a tool that takes a "messy" bank export (CSV) and cleans it for analysis.
- **The Guide:**
    1.  **Generate/Load Data:** Use a CSV with missing values, duplicates, and inconsistent date formats.
    2.  **Clean with Pandas:** Remove duplicates, fill missing "Category" values using logic (e.g., if it contains "Starbucks", set category to "Dining").
    3.  **Analyze with NumPy:** Calculate monthly averages, highest spending days, and percentage of income spent on "Needs" vs "Wants."
    4.  **Export:** Save the cleaned data to a new `final_spending.csv` for use in Project 2.

## 📈 Project 2: The Global Trends Visualizer
**Focus:** *Seaborn, Matplotlib, and Data Storytelling*
**The Goal:** Use the cleaned data from Project 1 (or a public dataset like World Bank/Spotify) to create a visual report.
- **The Guide:**
    1.  **Exploratory Plots:** Create histograms to see your spending distribution.
    2.  **Correlation Heatmaps:** See if there's a correlation between "Day of the week" and "Amount spent."
    3.  **The Executive Report:** Create a 2x2 subplot dashboard showing:
        - A Line Chart of spending over time.
        - A Bar Chart of spending per category.
        - A Pie/Donut chart of spending distribution.
        - A Box Plot to identify spending "Outliers."

## 🗄️ Project 3: The SQL-Powered Sales System
**Focus:** *SQLite3, Relational Logic, and Pandas Integration*
**The Goal:** Build an "Enterprise" system where data is stored in a database, not just files.
- **The Guide:**
    1.  **Database Design:** Create a `sales.db` with two tables: `Products` (id, name, price) and `Orders` (id, product_id, quantity, date).
    2.  **The Python Bridge:** Write a script that allows a user to "Place an Order" (Input -> SQL Insert).
    3.  **Pre-Filtered Analytics:** Instead of loading everything, write an SQL query to get only "High Value Orders" (> $500) directly into a Pandas DataFrame.
    4.  **Inventory Alert:** Use Python to calculate which products are running low based on order frequency.

## 🚀 Project 4: The Final Capstone (Streamlit Dashboard)
**Focus:** *Full Stack Data Integration*
**The Goal:** Combine SQL, Pandas, and Visualization into a real, shareable web application.
- **The Guide:**
    1.  **The Backend:** Connect to your `sales.db` from Project 3.
    2.  **The Frontend:** Use **Streamlit** to create a web page.
    3.  **User Interactivity:** Add a "Date Slider" and a "Category Dropdown."
    4.  **Live Updates:** When the user changes the slider, run a new SQL query, process it in Pandas, and update a Plotly chart in real-time.
    5.  **Deployment:** (Optional) Deploy your dashboard to the web using Streamlit Cloud so you can send the link to recruiters.

---

## 🏆 How to Succeed
- **Document Your Code:** Use Docstrings and clear variable names.
- **Handle Errors:** Use `try/catch` for database connections and file loading.
- **Visual Polish:** Don't just make a chart; make a *beautiful* chart (labels, titles, clean colors).
