# Exercises: Pandas & Data Analysis

*To complete these exercises, run the "Data Generator" script below first to create a `messy_sales.csv` file in your directory.*

---

## 🛠️ Data Generator (Run this first!)
```python
import pandas as pd
import numpy as np

data = {
    'Date': ['2023-01-01', '2023-01-01', '2023-01-02', '2023-01-02', '2023-01-03', '2023-01-03', '2023-01-03'],
    'Product': ['Laptop', 'Mouse', 'Laptop', 'Keyboard', 'Mouse', 'Laptop', 'Laptop'],
    'Category': ['Tech', 'Tech', 'Tech', 'Tech', 'Tech', 'Tech', 'Tech'],
    'Price': [1200, 25, 1200, 75, 25, 1200, 1200],
    'Quantity': [1, 2, 1, 1, np.nan, 1, 1], # Missing value
    'Customer_Email': ['alice@mail.com', 'bob@mail.com', 'alice@mail.com', 'charlie@mail.com', 'bob@mail.com', 'alice@mail.com', 'alice@mail.com']
}
df = pd.DataFrame(data)
# Add a duplicate row manually
df = pd.concat([df, df.iloc[[0]]], ignore_index=True)
df.to_csv('messy_sales.csv', index=False)
print("File 'messy_sales.csv' created!")
```

---

## Level 1: Foundation (Loading & Exploration)
1. **The Explorer:**
   - Load `messy_sales.csv` into a DataFrame.
   - Print the first 5 rows and the last 2 rows.
   - Use `.info()` and `.describe()` to see the structure and statistics.
2. **Column Selection:**
   - Create a new DataFrame `product_info` that only contains the `Product` and `Price` columns.
   - Print the unique values in the `Product` column.

## Level 2: Logic & Mechanics (Data Cleaning)
3. **The Janitor (Handling Messy Data):**
   - **Step A:** Identify how many missing values are in each column.
   - **Step B:** Fill the missing value in the `Quantity` column with `1`.
   - **Step C:** Remove all duplicate rows from the DataFrame.
   - **Step D:** Verify that your data is now clean (0 missing, 0 duplicates).
4. **Conditional Filtering:**
   - Find all sales where the `Product` is "Laptop" AND the `Price` is greater than 1000.
   - Find all sales that occurred on "2023-01-03".

## Level 3: "Think Like an Engineer" (Algorithmic Thinking)
5. **The Revenue Calculator:**
   - Create a new column `Total_Revenue` by multiplying `Price` and `Quantity`.
   - Calculate the total revenue for the entire dataset.
6. **GroupBy Mastery:**
   - Group the data by `Product` and calculate:
     - The total quantity sold per product.
     - The average price per product.
7. **The Customer Insight:**
   - Find which customer (email) spent the most money in total.
   - *Think:* You'll need to GroupBy `Customer_Email` and sum the `Total_Revenue`.
8. **Date Conversions (Advanced):**
   - Convert the `Date` column to actual Python `datetime` objects using `pd.to_datetime()`.
   - Extract the "Day of the week" for each sale and add it as a new column.
9. **Pivot Table Simulation:**
   - Create a table that shows the total revenue for each `Product` on each `Date`. (Hint: Use `df.groupby(['Date', 'Product'])['Total_Revenue'].sum()`).

## Level 4: Industry Readiness (Job-Level Challenges)
10. **Time Series Analysis (Stock Prices):**
    - Create a DataFrame representing 30 days of stock prices.
    - **Task:** Calculate the "7-day Moving Average" of the price. 
    - *Think:* Use the `.rolling(window=7).mean()` method. This is how analysts smooth out "noise" in data.
11. **Handling JSON APIs:**
    - Often, data comes from the web in JSON format.
    - `raw_json = '[{"id": 1, "score": 85}, {"id": 2, "score": 90}]'`
    - Use `pd.read_json()` (or `pd.DataFrame()` with `json.loads`) to turn this into a table.
12. **The Multi-File Merger:**
    - Imagine you have two files: `users.csv` (id, name) and `purchases.csv` (user_id, item, price).
    - **Task:** Use `pd.merge()` to create a single table showing the names of users next to their purchases.
13. **Pivot Tables:**
    - Use `df.pivot_table()` to create a matrix where rows are `Dates` and columns are `Products`, showing the sum of `Total_Revenue` in the cells. This is a standard Excel task performed in Python.

