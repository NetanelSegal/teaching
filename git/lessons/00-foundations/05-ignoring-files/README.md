# Lesson 5: Ignoring Files

## Goal
Learn how to prevent specific files and directories from being tracked by Git using the `.gitignore` file.

## The "Why?"
Not everything in your project folder belongs in your Git repository. 
- **Large Dependencies**: Folders like `node_modules` can contain thousands of files. You don't need to track them because they can be easily re-downloaded.
- **Sensitive Data**: API keys, passwords, and `.env` files should **never** be committed. If they are, anyone with access to the repo can see them.
- **Build Artifacts**: Compiled code (like `.exe`, `.class`, or `dist/` folders) is generated from your source code. Tracking it creates noise and bloating.
- **System Files**: Your operating system might create hidden files like `.DS_Store` (macOS) or `Thumbs.db` (Windows) that have nothing to do with your code.

## In-Depth Explanations

### 1. The `.gitignore` File
This is a special text file placed in the root of your repository. Git looks at this file to decide which files to ignore. If a file matches a pattern in `.gitignore`, Git will act as if it doesn't exist.

### 2. Common Patterns
- **Specific File**: `secrets.txt` ignores exactly that file.
- **Wildcard**: `*.log` ignores all files ending in `.log`.
- **Directory**: `build/` ignores the entire `build` directory and everything inside it.
- **Negation**: `!important.log` tells Git to **not** ignore this specific file, even if a previous rule (like `*.log`) matched it.
- **Comments**: Lines starting with `#` are ignored by Git and used for documentation.

### 3. What if a file is already tracked?
If you add a file to `.gitignore` **after** it has already been committed, Git will continue to track it. To stop tracking it without deleting the file from your computer, you need to run:
`git rm --cached <file>`

### 4. Pro Tip: `.gitignore` Templates
You don't have to write these from scratch. Websites like [gitignore.io](https://www.toptal.com/developers/gitignore) can generate templates based on your operating system, IDE, and programming language.

## Key Examples
In `theory.sh`, we demonstrate how Git reacts to files before and after they are added to `.gitignore`.

## External Resources
- [Git Basics - Ignoring Files](https://git-scm.com/book/en/v2/Git-Basics-Ignoring-Files)
- [Official .gitignore Documentation](https://git-scm.com/docs/gitignore)

---

## Hebrew Summary (סיכום)
לא כל קובץ בפרויקט שלנו צריך להיכנס ל-Git. קבצי הגדרות רגישים (סיסמאות), תיקיות ענקיות של ספריות חיצוניות (כמו `node_modules`) וקבצי מערכת צריכים להישאר מחוץ למאגר. 
כדי לעשות זאת, ניצור קובץ בשם `.gitignore` בתיקייה הראשית של הפרויקט ונכתוב בו את השמות או התבניות של הקבצים שאנחנו רוצים ש-Git יתעלם מהם.
- `*.log` - מתעלם מכל קבצי ה-Log.
- `secret/` - מתעלם מכל תיקיית secret.
חשוב לזכור: ה-`.gitignore` עצמו הוא קובץ שכן נכנס ל-Git כדי שכל הצוות יתעלם מאותם דברים.
