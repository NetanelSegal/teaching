# Lesson 1: What is a Branch?

## Goal
Understand the concept of branching in Git and how it allows for parallel development.

## The "Why?" (Parallel Universes)
Imagine you are building a website and it's live. You want to experiment with a new design, but you don't want to break the live site while you're working on it. 
In the old days, you might copy the entire project folder to `website-v2-experiment`. 
In Git, you create a **Branch**. 

A branch is a "parallel universe." You can make changes, break things, and experiment in your branch without affecting the "stable" version (the `main` branch). If the experiment works, you can merge it back. If it doesn't, you can just delete the branch and your stable code remains untouched.

## In-Depth Explanations

### 1. Branches are Pointers
In many other VCS, branching involves copying all the files. In Git, a branch is just a **lightweight pointer** to a specific commit. 
When you make a new commit while on a branch, the pointer simply moves forward to the new commit. This makes branching in Git incredibly fast and "cheap."

### 2. The `main` (or `master`) Branch
When you run `git init`, Git creates a default branch for you (usually called `main`). This is typically where the "production-ready" code lives.

### 3. What is `HEAD`?
`HEAD` is a special pointer that tells Git which branch you are currently working on. Think of it as the "You Are Here" icon on a map. 
- When you switch branches, `HEAD` moves to the new branch pointer.
- When you commit, the current branch pointer moves, and `HEAD` stays with it.

### 4. Why Use Branches?
- **Feature Development**: Work on a new feature without affecting others.
- **Bug Fixes**: Fix a critical bug in production while continuing work on new features elsewhere.
- **Collaboration**: Multiple people can work on different parts of the project at the same time without stepping on each other's toes.

## Key Examples
In `theory.sh`, we demonstrate how to create a branch and how the `HEAD` pointer moves.

## External Resources
- [Git Branching - What a Branch Is](https://git-scm.com/book/en/v2/Git-Branching-What-a-Branch-Is)
- [Git Branching Visualizer](https://learngitbranching.js.org/) (Highly recommended!)

---

## Hebrew Summary (סיכום)
ענף (Branch) ב-Git הוא כמו "יקום מקביל". הוא מאפשר לנו לעבוד על פיצ'ר חדש או תיקון באג בלי להשפיע על הקוד היציב (שנמצא בדרך כלל בענף `main`).
- בניגוד למערכות אחרות, ענף ב-Git הוא פשוט "מצביע" (Pointer) קטן ל-Commit מסוים. זה הופך את היצירה והמעבר בין ענפים לפעולה מיידית וקלה.
- `HEAD` הוא המצביע שאומר לנו באיזה ענף אנחנו נמצאים כרגע.
עבודה עם ענפים היא הבסיס לעבודה מקצועית בצוות.
