# Module 01: Introduction to Databases

## Hook: The Scaling Spreadsheet
Imagine you are running a successful online bakery. You start by tracking orders in a shared Excel file. 
- **The Conflict**: Two employees try to update the same row at the same time. One update is lost.
- **The Mess**: A customer's name is misspelled in one row and correct in another. Which one is right?
- **The Speed**: You reach 50,000 orders, and the file takes 2 minutes to open. Searching for a specific order hangs the computer.
- **The Risk**: Anyone with access to the file can delete the entire "Revenue" column by mistake.

A **Relational Database Management System (RDBMS)** solves these problems by providing a robust, multi-user, and high-performance way to manage data.

## Theory

### 1. What is a Relational Database?
A Relational Database organizes data into **tables** (like spreadsheets) that can be linked (**related**) to each other based on data common to each.
- **Table**: A collection of related data (e.g., `Customers`, `Products`).
- **Row (Record)**: A single entry in a table (e.g., one specific customer).
- **Column (Field)**: A specific attribute of the data (e.g., `Email Address`).

### 2. Why SQL?
SQL (Structured Query Language) is the universal language used to communicate with an RDBMS. Whether you use MySQL, PostgreSQL, or SQL Server, the core commands remain the same.

### 3. SQL vs. NoSQL
- **SQL (Relational)**: Rigid structure (Schema), best for complex queries and data integrity (e.g., Banking, E-commerce).
- **NoSQL (Non-Relational)**: Flexible structure, best for massive scale and rapidly changing data formats (e.g., Social Media feeds, Real-time analytics).

## Hebrew Summary (סיכום)
בסיס נתונים יחסי (RDBMS) הוא כלי לניהול מידע בצורה מאורגנת, בטוחה ומהירה. 
- **טבלה**: אוסף של נתונים בנושא מסוים.
- **שורה**: רשומה אחת ספציפית.
- **עמודה**: מאפיין של הנתונים.
שפת SQL היא השפה הסטנדרטית לעבודה עם בסיסי נתונים אלו. בניגוד ל-NoSQL, בסיסי נתונים של SQL דורשים מבנה קבוע מראש (Schema) ומצטיינים בשמירה על שלמות הנתונים.
