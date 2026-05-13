# Module 08: Subqueries

## Hook: The Average Comparison
Imagine you are a teacher analyzing student grades. You want to find all students who scored **higher than the class average**.
- Step 1: Calculate the class average (e.g., 82).
- Step 2: Search for students who scored > 82.

In SQL, you can do this in one step! You don't need to write down the average and type it back into a new query. You can "nest" the average calculation inside your main search.

## Theory

### 1. What is a Subquery?
A subquery is a query nested inside another query. It is also known as an "Inner Query," while the query containing it is the "Outer Query."

### 2. Scalar Subqueries
A subquery that returns a single value (one row and one column).
```sql
SELECT name, salary 
FROM employees 
WHERE salary > (SELECT AVG(salary) FROM employees);
```

### 3. Column Subqueries
A subquery that returns a single column of values. Often used with the `IN` operator.
```sql
SELECT name 
FROM customers 
WHERE customer_id IN (SELECT customer_id FROM orders WHERE amount > 500);
```

### 4. Correlated Subqueries
A subquery that refers to a column from the outer query. It is executed once for each row processed by the outer query.
- *Example*: Find employees who earn more than the average salary *of their specific department*.

## Hebrew Summary (סיכום)
תת-שאילתה (Subquery) היא שאילתה הממוקמת בתוך שאילתה אחרת. היא מאפשרת לנו לבצע פעולות מורכבות בשלב אחד:
- **Scalar Subquery**: מחזירה ערך בודד (למשל: מצא את כל המוצרים שמחירם גבוה מהמחיר הממוצע).
- **Column Subquery**: מחזירה עמודה של ערכים (שימושי מאוד עם האופרטור `IN`).
- **Correlated Subquery**: תת-שאילתה המסתמכת על ערכים מהשאילתה החיצונית (למשל: מצא עובדים המרוויחים יותר מהממוצע במחלקה שלהם).
חשוב לזכור: תת-שאילתות הופכות את הקוד לקריא וחזק, אך לפעמים הן עלולות להיות איטיות יותר מ-JOIN אם לא משתמשים בהן נכון.
