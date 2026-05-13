# Module 11: Transactions & Security

## Hook: The Half-Finished Transfer
Imagine you are transferring $500 from your bank account to a friend's account.
1.  The bank subtracts $500 from **your** account.
2.  *SUDDEN POWER OUTAGE.* The bank's server crashes.
3.  The bank never adds $500 to **your friend's** account.

Your $500 has vanished into thin air! To prevent this, databases use **Transactions**. A transaction ensures that *all* steps of an operation happen, or *none* of them happen.

## Theory

### 1. What is a Transaction?
A transaction is a single unit of work. It starts with `BEGIN TRANSACTION` and ends with either `COMMIT` (save changes) or `ROLLBACK` (cancel changes).

### 2. ACID Properties
A reliable database must follow these four principles:
- **A**tomicity: All-or-nothing.
- **C**onsistency: Data must follow all rules/constraints.
- **I**solation: Transactions don't interfere with each other.
- **D**urability: Once saved, data stays saved even if the server crashes.

### 3. Database Security
Not everyone should have access to all data.
- `GRANT`: Give a user permission (e.g., `SELECT`, `UPDATE`).
- `REVOKE`: Take away a user's permission.

```sql
GRANT SELECT ON employees TO 'accountant';
REVOKE DELETE ON products FROM 'intern';
```

## Hebrew Summary (סיכום)
ניהול טרנזקציות ואבטחת מידע הם קריטיים לשמירה על שלמות ואמינות המידע:
- **טרנזקציה (Transaction)**: רצף פעולות המתבצע כיחידה אחת. אם אחת הפעולות נכשלת, כל הרצף מבוטל (`ROLLBACK`). אם הכל הצליח, השינויים נשמרים (`COMMIT`).
- **עקרונות ACID**: מודל המבטיח שטרנזקציות יתבצעו בצורה אמינה (אטומיות, עקביות, בידוד ועמידות).
- **אבטחת מידע**: שליטה על הרשאות המשתמשים באמצעות `GRANT` (מתן הרשאה) ו-`REVOKE` (ביטול הרשאה).
חשוב לזכור: תמיד השתמשו בטרנזקציות כשמבצעים שינויים הקשורים אחד לשני (כמו העברת כספים או עדכון מלאי והזמנה במקביל).
