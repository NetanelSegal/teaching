# Lab 6: The Time Machine

## Goal
Practice undoing mistakes at different stages of the Git workflow.

## Tasks

### 1. The Accidental Deletion
In your repository, delete all the content inside `script.js` (but don't delete the file itself).
Run a command to restore the file to its state in the last commit.

### 2. The Premature Add
Create a file named `secret_notes.txt`. Add it to the staging area using `git add`.
Wait! You realized this shouldn't be staged yet. Unstage the file without deleting it.

### 3. The Typo Fix
Create a new file `feature.js`, stage it, and commit it with a message that has a typo (e.g., `git commit -m "Add featur"`).
Fix the commit message without creating a new commit.

### 4. The "I messed up the whole day" (Advanced)
Make three new commits with various changes. 
Use `git log --oneline` to find the hash of the commit you made at the **beginning** of this lab.
Perform a "soft reset" to that hash and see what happened to your files and your staging area.

---

## Instructions
Complete these tasks in your terminal. You can use the `solution.sh` script to see the expected commands.
