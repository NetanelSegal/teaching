# Exercises: SQL & Databases with Python

## Level 1: Foundation (CRUD Operations)
1. **The Library Database:**
   - Create an SQLite database named `library.db`.
   - Create a table `books` with columns: `id` (Primary Key), `title` (Text), `author` (Text), and `year` (Integer).
   - Insert 3 of your favorite books into the table.
   - Remember to `commit()` and `close()` the connection.
2. **The Update Task:**
   - Write a script that connects to `library.db`.
   - Update the `year` of one of your books.
   - Delete a book by its `title`.
   - Query the table and print all remaining rows to verify.

## Level 2: Logic & Mechanics (Parameters & Pandas)
3. **The Parameterized Search (Security):**
   - Write a function `search_by_author(author_name)` that connects to `library.db` and returns all books by that author.
   - **Constraint:** Use the `?` placeholder to prevent SQL Injection.
4. **The Pandas Bridge:**
   - Use `pd.read_sql()` to load all books from `library.db` directly into a Pandas DataFrame.
   - Print the mean (average) year of the books in your library using Pandas.
5. **Dynamic Data Entry:**
   - Ask the user to input a book's title, author, and year via `input()`.
   - Insert this data into the database safely.

## Level 3: "Think Like an Engineer" (Algorithmic Thinking)
6. **The Relationship (JOIN):**
   - Create a second table `members` with `id` and `name`.
   - Create a third table `loans` with `book_id` and `member_id`.
   - **Task:** Write a query that JOINs these tables to show which member has which book.
   - *Think:* Why is it better to store `book_id` in the loans table instead of the full book title?
7. **SQL for Pre-Filtering:**
   - You have a database with 1 million "Sales" rows (simulation).
   - **Scenario A:** Load everything into Pandas and filter for `Price > 100`.
   - **Scenario B:** Use an SQL `WHERE` clause to only load rows where `Price > 100`.
   - *Think:* Which scenario is faster and uses less RAM? Why? Implement Scenario B.
8. **The Security Auditor:**
   - You are given this "Bad Code":
     ```python
     query = f"SELECT * FROM users WHERE username = '{name}'"
     cursor.execute(query)
     ```
   - Explain exactly how a hacker could use the string `' OR '1'='1` to bypass your login.
   - Rewrite the code to be 100% secure.
9. **Aggregation in SQL:**
   - Write a query that uses `GROUP BY` and `COUNT()` in SQL to find how many books each author has in your `library.db`.
   - Pull this result into a Pandas DataFrame and plot a bar chart of the results.

## Level 4: Industry Readiness (Job-Level Challenges)
10. **The Many-to-Many Relationship:**
    - In the real world, a Book can have many Tags (e.g., "Fiction", "History") and a Tag can belong to many Books.
    - Create a `tags` table and a `book_tags` junction table.
    - **Task:** Write a query to find all books that have the "Science Fiction" tag.
11. **The Subquery Challenge:**
    - Find all students whose grade is **above the average** grade of the entire class.
    - **Constraint:** You must do this in a single SQL query using a **Subquery**: `SELECT ... WHERE grade > (SELECT AVG(grade) FROM ...)`
12. **The Database Migrator:**
    - Write a Python script that reads a CSV file and inserts all its data into a new SQL table automatically.
    - *Think:* How do you handle cases where the table already exists?
13. **Performance Indexing:**
    - Use the SQL command `CREATE INDEX` on the `author` column.
    - *Think:* Based on the "Deep Dive" in the lesson, how does this index speed up your `SELECT` queries?

