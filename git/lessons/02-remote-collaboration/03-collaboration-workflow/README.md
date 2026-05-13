# Lesson 3: Collaboration Workflow

## Goal
Understand the professional workflow for contributing to shared projects and open-source software using Forks and Pull Requests.

## The "Why?" (The Gatekeeper)
In a professional setting, you don't just "push" code directly to the production branch. If everyone did that, the code would quickly become a mess of bugs and conflicting styles. 

Instead, projects use a **Pull Request (PR)** workflow. This creates a "waiting room" where your code can be reviewed, discussed, and tested before it's allowed into the main project. It's a quality control mechanism that ensures high standards.

## In-Depth Explanations

### 1. What is a Fork?
A **Fork** is a copy of a repository that lives in **your** GitHub account. It allows you to freely experiment without affecting the original project. 
- You "Fork" a project on GitHub.
- You "Clone" your fork to your computer.
- You "Push" changes to your fork.

### 2. Pull Requests (PRs)
Once you've pushed a feature to your fork, you want to "request" that the original project owner "pulls" your changes into their repository.
- You open a **Pull Request** on GitHub.
- The project maintainers review your code, leave comments, and suggest changes.
- Once they are happy, they **Merge** your PR.

### 3. The `upstream` Remote
When you fork a project, you have two remotes:
1. **`origin`**: Your copy on GitHub.
2. **`upstream`**: The original repository you forked from.
You need to occasionally `pull` from `upstream` to keep your fork up-to-date with the latest changes from the main project.

### 4. The Industry Standard Workflow
1. **Fork** the repository.
2. **Clone** your fork.
3. Create a **Feature Branch** (`git switch -c new-feature`).
4. **Commit** your work.
5. **Push** the branch to your fork (`git push origin new-feature`).
6. Open a **Pull Request** on the original repository.
7. Address feedback and wait for the **Merge**.

## Key Examples
In `theory.sh`, we outline the commands for managing multiple remotes (`origin` and `upstream`).

## External Resources
- [GitHub: Contributing to a Project](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)
- [Understanding the GitHub Flow](https://guides.github.com/introduction/flow/)

---

## Hebrew Summary (סיכום)
בעבודה מקצועית או בפרויקטי קוד פתוח (Open Source), אנחנו לא דוחפים קוד ישירות למאגר הראשי. במקום זאת, אנחנו משתמשים בתהליך מוסדר:
1. **Fork**: יצירת עותק אישי של המאגר בחשבון ה-GitHub שלנו.
2. **Feature Branch**: עבודה על ענף נפרד עבור כל פיצ'ר.
3. **Pull Request (PR)**: בקשה ממנהלי הפרויקט המקורי לבדוק ולמזג את השינויים שלנו.
זהו שלב ה"ביקורת" שבו הקוד עובר בדיקה (Code Review) לפני שהוא נכנס למוצר הסופי.
כדי להישאר מעודכנים בשינויים שהאחרים עושים במאגר המקורי, נחבר אותו כמקור נוסף בשם `upstream`.
