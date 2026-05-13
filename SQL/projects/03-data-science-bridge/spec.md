# Project 03: Data Science Bridge (SQL + Python)

## 🌟 The Challenge
A Data Scientist's job is 80% data cleaning and 20% analysis. However, before you can clean the data, you have to **get it**. In this project, you will act as a Data Engineer who builds a SQL database, and then a Data Analyst who pulls that data into Python for visualization.

## 🧠 Program Logic Flow
1.  **SQL Extraction**: Write complex SQL queries to aggregate raw data into a summary format.
2.  **Python Connection**: Use the `sqlite3` library to connect your Python script to the database.
3.  **Pandas Analysis**: Load the SQL result directly into a Pandas DataFrame.
4.  **Visualization**: Use Matplotlib or Seaborn to create a chart showing the trends discovered in the data.

## 🛠️ Implementation Tasks

### Phase 1: The SQL Foundation
- **Task 1.1: The "Big Data" Simulation**
  - Use the provided `setup.sql` to create a database with 10,000 "Stock Market" records.
- **Task 1.2: The Analysis Query**
  - Write a query using **Window Functions** to calculate the "Moving Average" of a stock price over the last 7 days.
  - *Goal:* This query is too complex to write in pure Python; we let the database handle the heavy lifting.

### Phase 2: The Python Bridge
- **Task 2.1: Connection Script**
  - Create a Python file `analysis.py`.
  - Use `sqlite3.connect()` to open the database file.
- **Task 2.2: From SQL to DataFrame**
  - Use `pd.read_sql(query, conn)` to execute your complex query from Phase 1.
  - Print the first 10 rows of the resulting DataFrame.

### Phase 3: Visual Insights
- **Task 3.1: Plotting the Trend**
  - Use Matplotlib to plot the "Stock Price" vs. "Moving Average".
  - Add a title, labels for the axes, and a legend.

## 🚀 Going Beyond (Stretch Goals)
- **Anomaly Detection**: Use Python to find any rows where the price changed by more than 10% in a single day.
- **Dynamic Input**: Allow the user to type a "Stock Ticker" symbol in Python, and have the SQL query update dynamically to fetch only that stock.

## 📚 Standard Resources
- [Python Lesson 26: SQL & Databases](../../../languages/python/lessons/26-SQL_and_Databases/lesson.md)
- [Python Lesson 24: Pandas](../../../languages/python/lessons/24-Pandas_and_Data_Analysis/lesson.md)
- [Grading Rubric](../../../../exams_solutions/grading_rubric.md)
