# Module 14: Triggers & Automation

## Hook: The Invisible Accountant
Imagine you are running a warehouse.
- Every time a product is sold, you need to subtract `1` from the `stock` table.
- Every time a customer is deleted, you need to log that event in an `audit_log` table.
- If you forget to do these things in your code, your data becomes inconsistent.

What if the database could "watch" itself? **Triggers** are automated actions that "fire" whenever a specific event occurs (INSERT, UPDATE, or DELETE). They are the "Invisible Accountants" that keep your data clean without you lifting a finger.

## Theory

### 1. What is a Trigger?
A Trigger is a named SQL block that is automatically executed when a specified event happens on a table.
- **Events**: `INSERT`, `UPDATE`, `DELETE`.
- **Timing**: `BEFORE` or `AFTER`.

### 2. Basic Syntax (SQLite)
```sql
CREATE TRIGGER trigger_name
AFTER INSERT ON orders
BEGIN
    -- Action to take
    UPDATE products SET stock = stock - 1 WHERE id = NEW.product_id;
END;
```
- `NEW`: Refers to the row being inserted or updated.
- `OLD`: Refers to the row being deleted or updated.

### 3. Use Cases
- **Auditing**: Tracking who changed what and when.
- **Data Integrity**: Ensuring that certain rules are always followed (e.g., "Don't allow price to be negative").
- **Automation**: Automatically updating summary tables or logs.

## Hebrew Summary (סיכום)
טריגרים (Triggers) הם פעולות אוטומטיות שמתבצעות בבסיס הנתונים בתגובה לאירועים מסוימים:
- **אירועים**: הוספה (`INSERT`), עדכון (`UPDATE`) או מחיקה (`DELETE`) של שורות.
- **תזמון**: ניתן להגדיר שהטריגר ירוץ לפני (`BEFORE`) או אחרי (`AFTER`) האירוע.
- **שימושים**: שמירה על לוגים (Auditing), עדכון אוטומטי של טבלאות קשורות (כמו מלאי מוצרים) ווידוא תקינות נתונים מורכבת שלא ניתן לבצע עם `CHECK` רגיל.
טריגרים עוזרים לנו להעביר לוגיקה עסקית מהקוד של האפליקציה ישירות לבסיס הנתונים, מה שמבטיח שהכללים יישמרו תמיד, ללא קשר לאיזו שפה משתמשת בבסיס הנתונים.
