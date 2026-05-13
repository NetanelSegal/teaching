# Lesson 3: Staging and Committing

## Goal
Understand the three-stage architecture of Git and how to create permanent snapshots of your work.

## The "Why?" (The Loading Dock Analogy)
Imagine you are moving to a new house. You don't just throw everything into the truck at once. 
1. You have your **Room** (Working Directory) where everything is messy.
2. You pick specific items and put them into **Boxes** (Staging Area). This is where you organize what goes together.
3. Once the boxes are ready, you load them onto the **Truck** (Repository) and seal it.

The Staging Area (or "Index") is Git's unique feature. It allows you to group related changes together into a single, logical "save point" called a **Commit**, rather than just saving everything you've touched.

## In-Depth Explanations

### 1. The Three Stages of Git
1. **Working Directory**: The actual files on your disk. (Modified state)
2. **Staging Area (Index)**: A file that stores information about what will go into your next commit. (Staged state)
3. **Repository (.git directory)**: Where Git stores the snapshots permanently. (Committed state)

### 2. `git add`
This command moves changes from the Working Directory to the Staging Area.
- `git add <file>`: Stage a specific file.
- `git add .`: Stage all changes in the current directory.

### 3. `git commit`
This command takes everything in the Staging Area and wraps it into a permanent snapshot in the repository.
- **The Message**: Every commit *must* have a message explaining *why* the change was made.
- **The Hash**: Every commit gets a unique ID (e.g., `f2a3b4c`).

### 4. Commit Message Best Practices
A good commit message should be:
- **Short and Descriptive**: "Add login functionality" is better than "stuff".
- **Imperative Mood**: "Fix bug" instead of "Fixed bug".
- **Atomic**: One commit should represent one logical change. Don't mix "Fix CSS" and "Add database connection" in one commit.

## Key Examples
In `theory.sh`, we walk through the process of staging multiple files and committing them with a message.

## External Resources
- [Git Basics - Recording Changes to the Repository](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)
- [How to Write a Git Commit Message](https://cbea.ms/git-commit/)

---

## Hebrew Summary (סיכום)
תהליך העבודה ב-Git מורכב משלושה שלבים:
1. **Working Directory**: הקבצים שאנחנו עורכים כרגע.
2. **Staging Area**: ה"במה" שבה אנחנו בוחרים אילו שינויים ייכנסו לגרסה הבאה. משתמשים בפקודה `git add`.
3. **Repository**: המאגר שבו נשמרות הגרסאות לצמיתות. משתמשים בפקודה `git commit`.
כל Commit חייב לכלול הודעה המתארת את השינוי שבוצע.
