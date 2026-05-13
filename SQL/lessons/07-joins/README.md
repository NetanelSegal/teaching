# Module 07: Joins

## Hook: The Fragmented Story
Imagine you are reading a book, but all the names of the characters are in a separate index at the back. Every time a character appears in the story, you only see a ID number (e.g., "Character #45 walked into the room").
- To understand the story, you have to constantly flip between the story and the index.
- A **Relational Database** does the same thing: it keeps `Orders` in one table and `Customers` in another to save space and stay organized.

**Joins** are the tool we use to "flip between the pages" and combine these tables into a single, readable story.

## Theory

### 1. Why Join? (Normalization)
Normalization is the process of organizing data to reduce redundancy. Instead of storing a customer's address with every single order they make, we store the address once in a `Customers` table and link it to the `Orders` table using a `customer_id`.

### 2. `INNER JOIN`
The most common join. It returns records that have matching values in **both** tables.
- *Example*: Show only customers who have made at least one order.

### 3. `LEFT JOIN` (or `LEFT OUTER JOIN`)
Returns all records from the left table, and the matched records from the right table. If there is no match, the result is `NULL` on the right side.
- *Example*: Show ALL customers, even those who haven't made an order yet.

### 4. `RIGHT JOIN` (or `RIGHT OUTER JOIN`)
The opposite of a Left Join. It returns all records from the right table.
- *Note*: Many developers just use `LEFT JOIN` and swap the table order.

### 5. `FULL JOIN`
Returns all records when there is a match in either the left or right table.

## Hebrew Summary (סיכום)
פעולת ה-JOIN היא הלב של עבודה עם בסיסי נתונים יחסיים. היא מאפשרת לנו לחבר נתונים מטבלאות שונות המקושרות ביניהן:
- `INNER JOIN`: מחזיר שורות שיש להן התאמה בשתי הטבלאות.
- `LEFT JOIN`: מחזיר את כל השורות מהטבלה השמאלית, גם אם אין להן התאמה בטבלה הימנית (במקרה כזה יופיע `NULL`).
- `RIGHT JOIN`: הפוך מ-`LEFT JOIN`.
- `FULL JOIN`: מחזיר את כל השורות משתי הטבלאות, עם התאמות איפה שישנן.
טיפ: הדרך הטובה ביותר להבין JOINS היא לדמיין דיאגרמת ון (Venn Diagram) המראה את החפיפה בין הקבוצות.
