# Module 03: DDL (Data Definition Language)

## Hook: The Digital Filing Cabinet
Imagine you are building a filing cabinet for a new hospital. 
- Do you just throw papers in? No. 
- You need drawers (Tables). 
- You need labels on the folders (Columns). 
- You need to decide if a folder *must* have a Social Security Number (Constraints).

If you build a cabinet with drawers that are too small, you can't fit the files. **DDL** is the set of commands used to build, modify, and destroy these "cabinets" and "drawers".

## Theory

### 1. What is DDL?
DDL is used to define the database **schema** (the structure). It doesn't deal with the data itself, but with the containers that hold it.

### 2. `CREATE TABLE`
Creates a new table with specific columns and data types.
```sql
CREATE TABLE patients (
    id INTEGER PRIMARY KEY,
    name TEXT,
    date_of_birth DATE
);
```

### 3. `ALTER TABLE`
Changes the structure of an existing table (e.g., adding a column).
```sql
ALTER TABLE patients ADD COLUMN phone_number TEXT;
```

### 4. `DROP TABLE` vs. `TRUNCATE TABLE`
- `DROP`: Deletes the table and all its data (The cabinet is destroyed).
- `TRUNCATE`: Deletes all data inside the table, but keeps the table structure (The drawer is emptied).

## Hebrew Summary (סיכום)
שפת DDL (Data Definition Language) משמשת להגדרת המבנה של בסיס הנתונים (Schema).
- `CREATE TABLE`: יצירת טבלה חדשה והגדרת העמודות וסוגי הנתונים שלה.
- `ALTER TABLE`: שינוי מבנה של טבלה קיימת (למשל הוספת עמודה).
- `DROP TABLE`: מחיקת הטבלה וכל הנתונים שבה לצמיתות.
- `TRUNCATE TABLE`: מחיקת כל הנתונים בתוך הטבלה, אך השארת המבנה שלה קיים.
חשוב לזכור: פעולות DDL הן בדרך כלל בלתי הפיכות!
