# Lesson 2: Switching and Merging

## Goal
Learn how to move between branches and integrate changes from one branch into another.

## The "Why?"
Creating a branch is only the first step. You need to actually **go** to that branch to work on it. And once your feature is complete and tested, you need a way to bring those changes back into the `main` branch so they can be part of the final product.

## In-Depth Explanations

### 1. Moving Between Branches (`git switch`)
To move from one branch to another, use:
- `git switch <branch-name>`: Moves `HEAD` to that branch and updates the files in your working directory to match that branch's state.
- `git switch -c <new-branch>`: A shortcut that **creates** a new branch and **switches** to it in one command.
*Note: You might see `git checkout` in older tutorials. `git switch` is the modern, more intuitive replacement for changing branches.*

### 2. What is Merging?
Merging is the process of combining the history and changes of two branches. 
If you are on `main` and want to bring in changes from `feature-x`, you run:
`git merge feature-x`

### 3. Types of Merges
#### A. Fast-Forward Merge
This happens if the `main` branch hasn't changed since you created the `feature-x` branch. Git simply moves the `main` pointer forward to match `feature-x`. It's clean and linear.

#### B. Three-Way Merge (Merge Commit)
This happens if both `main` and `feature-x` have new, different commits. Git creates a new "Merge Commit" that has two parents, tying the two histories together.

### 4. Safety Check
Before merging, it's a best practice to:
1. Ensure your working directory is clean (`git status`).
2. Be on the **target** branch (e.g., `main`) where you want the changes to go.

## Key Examples
In `theory.sh`, we walk through creating a feature, committing on it, and merging it back into the main line.

## External Resources
- [Git Branching - Basic Branching and Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
- [Visualizing Merges](https://git-scm.com/book/en/v2/images/basic-merging-2.png)

---

## Hebrew Summary (סיכום)
אחרי שיצרנו ענף, אנחנו צריכים לדעת איך להשתמש בו:
1. `git switch <name>`: עובר לענף המבוקש. הקבצים בתיקייה שלנו ישתנו בהתאם למה ששמור באותו ענף.
2. `git merge <name>`: ממזג את השינויים מהענף שציינו לתוך הענף שאנחנו נמצאים בו כרגע.
- **Fast-forward**: מיזוג פשוט שבו הענף הראשי פשוט "רץ קדימה" לסוף הענף המשני.
- **Merge Commit**: מיזוג מורכב יותר שיוצר Commit חדש המחבר בין שתי היסטוריות שונות.
חשוב תמיד לוודא שאנחנו נמצאים בענף ה"מטרה" (בדרך כלל `main`) לפני שאנחנו מריצים את פקודת המיזוג.
