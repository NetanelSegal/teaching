# Lab 5: Protecting Your Repository

## Goal
Practice creating and managing a `.gitignore` file to keep your repository clean and safe.

## Tasks

### 1. Preparation
Continue in your `lab-03-git` folder or create a new repository.

### 2. Simulate "Noise"
Create three files that we **do not** want to track:
- `logs.txt`
- `temp.tmp`
- `api_key.env`

### 3. Verification
Run `git status` to see all three files listed as untracked.

### 4. Create the Shield
Create a `.gitignore` file and add rules to ignore:
- The exact file `api_key.env`.
- Any file ending in `.tmp`.
- Any file starting with `logs`.

### 5. Confirm the Shield
Run `git status` again. You should only see the `.gitignore` file listed. The other three files should be invisible to Git.

### 6. Commit the Rules
Stage and commit the `.gitignore` file with the message "Add project ignore rules".

### 7. The Exception (Optional)
Try to add a file named `logs_important.txt`. Does Git ignore it? 
Modify `.gitignore` to **allow** `logs_important.txt` while still ignoring other `logs` files (using the `!` operator).

---

## Instructions
Complete these tasks in your terminal. You can use the `solution.sh` script to see the expected commands.
