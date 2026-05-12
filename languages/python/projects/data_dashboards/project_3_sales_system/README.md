# Project 3: The SQL-Powered Sales System

## 🌟 The Challenge
Move beyond flat files! Build an "Enterprise" sales system where data is stored in a relational SQLite database. You'll learn how to design schemas, perform SQL queries from Python, and integrate database results directly into Pandas for advanced analytics.

## 🗺️ Step-by-Step Learning Path

### Step 1: Research & Discovery
- **Concept Focus:** Relational Databases, SQL Queries, Python-DB integration.
- **Internal Reference:** [Lesson 26: SQL](../../lessons/26-SQL_and_Databases/), [Lesson 17: File I/O](../../lessons/17-File_IO_and_Serialization/)
- **External Docs:** [SQLite3 Python Module](https://docs.python.org/3/library/sqlite3.html), [SQLAlchemy (Optional)](https://www.sqlalchemy.org/)

### Step 2: Environment & Scaffolding
1. Create a virtual environment: `python -m venv .venv`
2. Activate it and install dependencies: `pip install -r ../../../requirements.txt`
3. Ensure your structure follows the ORT standard:
   - `src/core.py` (Logic)
   - `src/utils.py` (Helpers)
   - `main.py` (Entry Point)

### Step 3: Designing the Data Model
- Define how your data looks. (e.g., "Products Table: id, name, price. Orders Table: id, product_id, quantity, date.")
- Implement the SQL schema as a string or a setup script in `src/core.py`.

### Step 4: Building the "Brains" (Core Logic)
- Implement the primary functionality in `src/core.py`.
- **Engineering Standard:** Use parameterized queries to prevent SQL Injection. Never use f-strings to build SQL queries.

### Step 5: The Interface (Wiring it up)
- Implement the user interaction in `main.py`.
- Import your logic from `src.core`, provide a menu for adding products/orders, and display filtered analytics.

### Step 6: Defensive Engineering
- Identify 3 ways a user could break your app (e.g., trying to order a non-existent product, entering a negative quantity, database file is locked or corrupted).
- Implement `try/except` blocks for database operations and foreign key checks.

### Step 7: Validation
- Create a test in `tests/` that uses an in-memory database (`:memory:`) to verify your CRUD operations.
- Run `pytest` to verify everything works.

## 🚀 Going Beyond (Stretch Goals)
- **Advanced Joins:** Write a query that shows the total revenue per category by joining the Products and Orders tables.
- **Inventory Trigger:** Automatically flag products as "Low Stock" when their total order quantity reaches a threshold.
- **Data Export:** Add a feature to export any SQL query result into a formatted Excel file.

## 📚 Standard Resources
- [Project Roadmap](../../roadmap.md)
- [Grading Rubric](../../../../../../exams_solutions/grading_rubric.md)
