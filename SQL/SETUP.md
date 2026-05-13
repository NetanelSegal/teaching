# 💻 Practice Environment Setup

To follow this curriculum, you need a place to run your SQL code. We recommend using **SQLite** for your practice. It is lightweight, requires no server installation, and is the industry standard for local databases.

## Option 1: VS Code (Highly Recommended)
If you are already using VS Code, this is the easiest way to practice.

1.  Open VS Code.
2.  Go to the **Extensions** view (Ctrl+Shift+X).
3.  Search for and install **"SQLite"** (by alexcvzz).
4.  To create a database:
    - Press `Ctrl+Shift+P` and type `SQLite: New Query`.
    - This will open a temporary SQL editor. 
    - You can copy-paste code from `theory.sql` or `solution.sql` and run it by right-clicking and selecting **"Run Query"**.

## Option 2: DBeaver (Visual Tool)
If you prefer a professional, visual interface for managing multiple database types (MySQL, PostgreSQL, SQLite, etc.).

1.  Download and install [DBeaver Community](https://dbeaver.io/download/).
2.  Click the "New Database Connection" icon (Plug icon).
3.  Select **SQLite**.
4.  Click **Finish**. It will create a local `.db` file for you.
5.  Open a new SQL Script (F3) and start typing!

## Option 3: Online (Zero Install)
If you don't want to install anything right now:
- [SQLFiddle](http://sqlfiddle.com/)
- [DB-Fiddle](https://www.db-fiddle.com/)
- Select **SQLite 3.x** in the dropdown.

## How to use this curriculum's files
1.  **Theory Phase**: Copy the content of `theory.sql` in each module and paste it into your SQL editor. Run the "Setup" part first to create the tables, then run the individual queries to see how they work.
2.  **Lab Phase**: Try to write the queries yourself based on the tasks in `exercises.md`.
3.  **Validation**: Compare your code with `solution.sql`.

---

## Hebrew Summary (הוראות התקנה)
כדי לתרגל את החומר הנלמד, מומלץ להשתמש ב-**SQLite**. הוא קל משקל ואינו דורש התקנת שרת.
1. **VS Code**: התקינו את התוסף "SQLite". ניתן להריץ שאילתות ישירות מהעורך.
2. **DBeaver**: כלי ויזואלי מקצועי לניהול בסיסי נתונים. מומלץ למי שמעדיף ממשק גרפי.
3. **דפדפן**: ניתן להשתמש באתרים כמו SQLFiddle לתרגול מהיר ללא התקנה.
פשוט העתיקו את התוכן של `theory.sql` לתוך העורך שלכם כדי להתחיל להתנסות!
