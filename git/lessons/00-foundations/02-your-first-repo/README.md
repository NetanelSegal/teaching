# Lesson 2: Your First Repo

## Goal
Learn how to transform a standard directory into a Git repository and understand how Git starts tracking your work.

## The "Why?"
In a normal application, you hit `Ctrl+S` to save a single file. But a software project consists of dozens or hundreds of files. How do you save the **state of the entire project**? 

Initializing a repository creates a dedicated database that follows your project's every move, allowing you to "save" snapshots of the whole folder at once.

## In-Depth Explanations

### 1. The Repository (`.git`)
When you initialize a repository, Git creates a hidden folder named `.git`. This is the "brain" of your project. It contains all the history, configuration, and metadata. 
**Warning**: Never modify or delete the `.git` folder manually unless you want to lose your history!

### 2. `git init`
This is the magic command. Running it inside a folder tells Git: "Start watching this directory." It's a one-time operation for each project.

### 3. Tracking vs. Untracked
Just because a file is inside your project folder doesn't mean Git is tracking it. 
- **Untracked**: A new file that Git hasn't seen before.
- **Tracked**: A file that is already in Git's database.

### 4. `git status`
This is your most important tool. It provides "situational awareness." It tells you which files have changed, which are untracked, and what your next step should be.

## Key Examples
In `theory.sh`, we demonstrate the initialization process and how to inspect the repository.

## External Resources
- [Git Basics - Getting a Git Repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)
- [Git Status Documentation](https://git-scm.com/docs/git-status)

---

## Hebrew Summary (סיכום)
איתחול מאגר (Repository) הופך תיקייה רגילה לתיקייה תחת מעקב של Git. הפקודה `git init` יוצרת תיקייה נסתרת בשם `.git` שבה נשמרת כל ההיסטוריה. נשתמש ב-`git status` כדי להבין בכל רגע נתון מה המצב של הקבצים שלנו והאם הם נמצאים תחת מעקב.
