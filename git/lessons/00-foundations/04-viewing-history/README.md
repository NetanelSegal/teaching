# Lesson 4: Viewing History

## Goal
Learn how to navigate the project's timeline and understand the differences between versions.

## The "Why?"
Software development isn't just about writing code; it's about maintaining it. 
- "What did I change yesterday that broke the login?"
- "Why was this specific line of code added three months ago?"
- "I'm about to commit—what exactly did I change in this file?"

Without the ability to view history and differences, you are essentially flying blind. Git provides a crystal-clear record of every decision made in the project.

## In-Depth Explanations

### 1. `git log`
This is your primary tool for looking at the past. It lists all the commits in reverse chronological order.
- **The Hash**: The unique ID of the commit.
- **Author**: Who made the change.
- **Date**: When it was made.
- **Message**: The "Why" behind the change.

#### Useful `log` Variations:
- `git log --oneline`: A compact version showing only the first 7 characters of the hash and the commit message. Great for a quick overview.
- `git log -p`: Shows the actual code changes (the "patch") for each commit.
- `git log --graph --all --oneline`: (Advanced) Shows a visual representation of branches and history.

### 2. `git diff`
While `log` shows you *which* commits happened, `diff` shows you *exactly what* changed inside the files.
- `git diff`: Compares your **Working Directory** with the **Staging Area**. Use this to see what you've changed but haven't staged yet.
- `git diff --staged`: Compares the **Staging Area** with the **Last Commit**. Use this to review what you are about to commit.
- `git diff <hash1> <hash2>`: Compares two specific points in history.

### 3. Reading a Diff
Diffs use a standard format:
- Lines starting with **`-` (Red)** were removed.
- Lines starting with **`+` (Green)** were added.

## Key Examples
In `theory.sh`, we create a series of commits and use `log` and `diff` to inspect the evolution of the project.

## External Resources
- [Git Basics - Viewing the Commit History](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)
- [Git Diff Documentation](https://git-scm.com/docs/git-diff)

---

## Hebrew Summary (סיכום)
כדי להבין מה קרה בפרויקט שלנו לאורך זמן, נשתמש בשתי פקודות מרכזיות:
1. `git log`: מציגה את רשימת כל ה-Commits שבוצעו. שימוש ב-`--oneline` מאפשר תצוגה תמציתית ונוחה.
2. `git diff`: מציגה את ההבדלים המדויקים בין הקבצים. היא עוזרת לנו לוודא מה שינינו לפני שאנחנו שומרים את הגרסה.
שורות שמתחילות ב-`+` הן שורות שנוספו, ושורות שמתחילות ב-`-` הן שורות שנמחקו.
