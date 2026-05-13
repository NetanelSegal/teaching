# Lab 3: Navigating the Storm

## Goal
Deliberately create a merge conflict and learn how to resolve it manually.

## Tasks

### 1. Preparation
Create a new folder `lab-conflict` and initialize it. Create a file `index.html` with some basic HTML structure and commit it.

### 2. Divergent Paths
1. Create a branch `header-fix` and switch to it. Change the title tag in `index.html`. Commit the change.
2. Switch back to `main`.
3. Change the title tag in `index.html` to something else entirely. Commit the change.

### 3. The Collision
Try to merge `header-fix` into `main`. Git should report a conflict.

### 4. Resolution
1. Open `index.html` in your editor.
2. Identify the conflict markers.
3. Choose one of the titles (or combine them) and remove all the markers.
4. Save the file.

### 5. Finalize
Run the commands to tell Git the conflict is resolved and complete the merge.

### 6. Verification
Run `git log --graph` to see how the branches merged together.

---

## Instructions
Complete these tasks in your terminal. You can use the `solution.sh` script to see the expected commands.
