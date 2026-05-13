# Lab 2: The Feature Workflow

## Goal
Practice the standard workflow of creating a feature branch, working on it, and merging it back into the main project.

## Tasks

### 1. New Feature
In your `lab-branching` folder, create a new branch named `add-login` and switch to it.

### 2. Work on the Feature
Create a file `login.js` and add some code to it. Stage and commit it.

### 3. Context Switch
Switch back to the `main` branch. Verify that `login.js` is **not** there.

### 4. Integration
Merge the `add-login` branch into `main`.

### 5. Cleanup
Since the feature is now part of `main`, delete the `add-login` branch.

### 6. Parallel Work (Challenge)
1. Create a branch `fix-header` and switch to it. Modify a file and commit.
2. Switch back to `main`.
3. Create a branch `fix-footer` and switch to it. Modify a different file and commit.
4. Switch back to `main`.
5. Merge both branches into `main` one by one.

---

## Instructions
Complete these tasks in your terminal. You can use the `solution.sh` script to see the expected commands.
