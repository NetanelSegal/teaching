# Project 3: The SQL-Powered Sales System

## 🌟 The Challenge
Move beyond flat files! Build an "Enterprise" sales system where data is stored in a relational SQLite database. You'll learn how to design schemas, perform SQL queries from Python, and integrate database results directly into Pandas for advanced analytics.

## 🧠 Program Logic Flow
1.  **Initialize**: Connect to the SQLite database. If it doesn't exist, create it and run the schema script to set up tables (`products`, `orders`).
2.  **Input (CLI)**: Display a menu for the user (1. Add Product, 2. Place Order, 3. View Inventory, 4. Analytics).
3.  **Process (SQL)**:
    -   **Add Product**: INSERT a new row into the `products` table.
    -   **Place Order**: 
        -   Check if the product exists and has enough stock.
        -   INSERT a row into the `orders` table.
        -   UPDATE the `products` table to decrement the quantity.
4.  **Analyze (Pandas)**: 
    -   Execute a SELECT query with a JOIN to get order details and product prices.
    -   Load the results into a Pandas DataFrame.
    -   Group and sum data to calculate total revenue.
5.  **Output**: Display the inventory table and revenue summary in the terminal.

## 🛠️ Implementation Tasks

### Phase 1: Setup & Scaffolding
- **Task 1.1: Environment Isolation**
  - Create a virtual environment: `python -m venv .venv`.
  - Activate it and install the local dependencies: `pip install -r requirements.txt`.
- **Task 1.2: Directory Structure**
  - Ensure your project follows the structure:
    - `src/core.py` (Database schema and SQL logic)
    - `src/utils.py` (Pandas integration helpers)
    - `main.py` (The system interface)
    - `tests/` (Your validation scripts)

### Phase 2: Core Logic (The Brains)
- **Task 2.1: Schema Design**
  - In `src/core.py`, write the SQL to create `products` and `orders` tables.
  - Use `sqlite3` to execute these commands when the app starts.
- **Task 2.2: CRUD Operations**
  - Implement functions to `add_product()`, `place_order()`, and `get_inventory()`.
  - *Engineering Standard:* Use parameterized queries (e.g., `cursor.execute("INSERT INTO... VALUES (?)", (val,))`) to prevent SQL injection.

### Phase 3: Interface & Validation
- **Task 3.1: SQL to Pandas**
  - Implement a function `get_sales_report()`.
  - Use `pd.read_sql_query()` to pull data from the database directly into a DataFrame for analysis.
- **Task 3.2: Analytics**
  - Calculate the total revenue and identify the top-selling products using Pandas.
- **Task 3.3: Validation**
  - Create a test in `tests/test_db.py` using an in-memory database (`:memory:`) to verify that orders correctly decrement the product stock.

## 🚀 Going Beyond (Stretch Goals)
- **Advanced Joins:** Write a query that shows the total revenue per category by joining the Products and Orders tables.
- **Inventory Trigger:** Automatically flag products as "Low Stock" when their total order quantity reaches a threshold.
- **Data Export:** Add a feature to export any SQL query result into a formatted Excel file.

## 📚 Standard Resources
- [Project Roadmap](../../roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)
