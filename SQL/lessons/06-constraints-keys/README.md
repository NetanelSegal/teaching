# Module 06: Constraints & Keys

## Hook: The Ghost Student
Imagine you are managing a university database. 
- A student is assigned to a course, but the student doesn't exist. (Orphaned Record)
- A student's ID is duplicated, so two people have the same identity. (Duplicate Identity)
- A student's age is accidentally set to `-5`. (Invalid Data)
- A student's email is left blank, but it's required for communication. (Missing Data)

Without rules, your database will eventually become a mess of "junk data." **Constraints** and **Keys** are the laws that prevent this from happening.

## Theory

### 1. Data Constraints
Rules applied to a column to limit the type of data that can go into it:
- `NOT NULL`: The column cannot be empty.
- `UNIQUE`: All values in the column must be different.
- `CHECK`: Ensures all values satisfy a specific condition (e.g., `age > 0`).
- `DEFAULT`: Sets a default value if none is provided.

### 2. Primary Key (PK)
A column (or set of columns) that **uniquely identifies** each row in a table. 
- It cannot be NULL.
- It must be UNIQUE.
- Every table should have one.

### 3. Foreign Key (FK)
A column in one table that refers to the **Primary Key** in another table. This creates a "Relationship" between the tables.
- It ensures **Referential Integrity**: You cannot add an order for a customer who doesn't exist.

## Hebrew Summary (סיכום)
אילוצים (Constraints) ומפתחות (Keys) הם הכללים השומרים על איכות ושלמות הנתונים בבסיס הנתונים:
- `NOT NULL`: העמודה חייבת להכיל ערך.
- `UNIQUE`: הערכים בעמודה חייבים להיות ייחודיים (ללא כפילויות).
- `CHECK`: וידוא שהערך עומד בתנאי מסוים (לשלם: גיל חיובי).
- `DEFAULT`: ערך ברירת מחדל אם לא הוזן ערך אחר.
- **Primary Key (מפתח ראשי)**: עמודה המזהה באופן בלעדי כל שורה בטבלה.
- **Foreign Key (מפתח זר)**: עמודה המקשרת בין שורה בטבלה אחת לשורה בטבלה אחרת, ובכך יוצרת קשר בין הטבלאות.
חשוב לזכור: הגדרת אילוצים נכונה בשלב תכנון הטבלה תמנע טעויות קשות בהמשך הדרך.
