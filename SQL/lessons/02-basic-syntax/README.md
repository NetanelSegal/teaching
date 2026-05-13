# Module 02: Basic Syntax

## Hook: The Unorganized Library
Imagine a massive library with millions of books, but no computer system. You want to find every book written by "George Orwell". 
- You could walk through every aisle (Slow).
- You could ask the librarian to find them (The Librarian is the RDBMS).
- **The Catch**: The librarian only speaks a very specific language. If you say "Hey, show me Orwell books", they won't understand. You must say: `SELECT title FROM books WHERE author = 'George Orwell';`

SQL is that specific language.

## Theory

### 1. The `SELECT` Statement
The most basic SQL command. It tells the database which columns you want to see.
```sql
SELECT column_name FROM table_name;
```

### 2. Selecting Everything (`*`)
If you want to see every column in a table, use the asterisk wildcard.
```sql
SELECT * FROM table_name;
```

### 3. Aliases (`AS`)
Use `AS` to give a column a temporary name for the duration of the query.
```sql
SELECT first_name AS "Name" FROM users;
```

### 4. Basic CRUD Operations
While we will dive deeper into each, these are the core actions:
- **C**reate: `INSERT INTO` (Add data)
- **R**ead: `SELECT` (View data)
- **U**pdate: `UPDATE` (Modify data)
- **D**elete: `DELETE` (Remove data)

## Hebrew Summary (סיכום)
שפת SQL מורכבת מפקודות בסיסיות לניהול המידע:
- `SELECT`: בחירת העמודות שיוצגו בתוצאה.
- `*`: קיצור לשליפת כל העמודות בטבלה.
- `AS`: מתן שם זמני (Alias) לעמודה לצורך הצגת התוצאה.
- פקודות ה-CRUD:
    - **C**reate: `INSERT` - הוספת נתונים.
    - **R**ead: `SELECT` - קריאת נתונים.
    - **U**pdate: `UPDATE` - עדכון נתונים קיימים.
    - **D**elete: `DELETE` - מחיקת נתונים.
