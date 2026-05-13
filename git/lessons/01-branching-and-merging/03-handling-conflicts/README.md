# Lesson 3: Handling Conflicts

## Goal
Learn how to identify, understand, and resolve merge conflicts when they arise.

## The "Why?"
Git is smart, but it's not a mind reader. If you change line 10 of `index.html` to say "Hello" in one branch, and someone else changes line 10 to say "Hi" in another branch, Git doesn't know which one is correct. 

Instead of guessing, Git stops the merge process and says: "I have a conflict. You need to decide which version to keep." While conflicts can be intimidating at first, they are a normal part of collaboration and easy to fix once you understand the markers.

## In-Depth Explanations

### 1. When do Conflicts Happen?
A conflict occurs when two branches have different changes to the **same line** of the **same file**, or if one branch deleted a file that another branch modified.

### 2. How Git Marks Conflicts
When a conflict happens, Git modifies the file and adds "Conflict Markers":
```
<<<<<<< HEAD
This is the version from the branch you are currently on.
=======
This is the version from the branch you are trying to merge in.
>>>>>>> branch-name
```

### 3. The Resolution Process
1. **Identify**: Run `git status` to see which files are "both modified."
2. **Open**: Open the conflicting file in your editor.
3. **Edit**: Manually choose which version to keep (or combine them). **Remove all markers** (`<<<<<<<`, `=======`, `>>>>>>>`).
4. **Stage**: Run `git add <file>` to tell Git you've resolved the conflict.
5. **Commit**: Run `git commit` to finalize the merge.

### 4. The "Panic Button"
If you start a merge and it becomes too messy or you're not ready to fix the conflicts yet:
`git merge --abort`
This will cancel the merge and return your repository to exactly how it was before you started.

## Key Examples
In `theory.sh`, we deliberately create a conflict and walk through the steps to fix it.

## External Resources
- [Git Basics - Basic Merging Conflicts](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging#_basic_merge_conflicts)
- [GitHub: Resolving a Merge Conflict](https://docs.github.com/en/get-started/using-git/resolving-a-merge-conflict-using-the-command-line)

---

## Hebrew Summary (סיכום)
קונפליקט (Conflict) קורה כששני אנשים (או שני ענפים) משנים את אותה שורה בדיוק באותו קובץ. Git לא יודע איזו גרסה היא הנכונה, ולכן הוא עוצר את המיזוג ומבקש מאיתנו להחליט.
כדי לפתור קונפליקט:
1. נפתח את הקובץ הבעייתי.
2. נחפש את הסימונים `<<<<<<<`, `=======`, ו-`>>>>>>>`.
3. נבחר את הקוד שאנחנו רוצים להשאיר ונמחק את סימוני ה-Git.
4. נשמור את הקובץ, נוסיף אותו (`git add`) ונבצע Commit לסיום המיזוג.
טיפ: אם הסתבכתם, תמיד אפשר להריץ `git merge --abort` כדי לבטל הכל ולחזור למצב שלפני המיזוג.
