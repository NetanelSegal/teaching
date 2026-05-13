# Lab 2: Staying in Sync

## Goal
Understand the workflow of pushing and pulling, and how to handle synchronization issues.

## Tasks

### 1. Preparation
If you have a GitHub account, create a new **public** repository named `git-sync-lab`. Do NOT initialize it with a README or .gitignore.

### 2. Connect Local to Remote
Follow the instructions on GitHub to connect your existing `lab-branching` folder (or a new folder) to this remote repository.
`git remote add origin <your-url>`

### 3. The First Push
Push your `main` branch to GitHub.
`git push -u origin main`
Check your GitHub page to see if your files are there!

### 4. Remote Modification (Simulation)
On the GitHub website, manually edit one of your files (use the pencil icon) and commit the change directly on the website. Now, your GitHub version is **ahead** of your local version.

### 5. The Pull
Go back to your terminal. Your local files don't have the change you just made on the website. Run the command to download and merge that change.
`git pull origin main`
Verify that your local file now has the update.

### 6. The Push Conflict (Simulation)
1. On the website, change line 1 of `README.md`.
2. In your terminal, change line 1 of `README.md` to something else.
3. Commit locally.
4. Try to `git push`. It should fail!
5. Run `git pull`. You will have a merge conflict. Resolve it, commit, and then `git push` again.

---

## Instructions
Complete these tasks using your own GitHub account. If you don't have one, review the `solution.sh` to understand the flow.
