# Lab 3: The Contributor's Journey

## Goal
Simulate the process of contributing to an external project using the Fork and Pull Request model.

## Tasks

### 1. Find a Target
Find a repository on GitHub that welcomes contributions (e.g., [First Contributions](https://github.com/firstcontributions/first-contributions)).

### 2. Fork and Clone
Click the **Fork** button on the GitHub page. Then, clone **your** fork to your machine.

### 3. Create a Feature Branch
Create a new branch for your contribution (e.g., `add-my-name`).
`git switch -c add-my-name`

### 4. Make Your Mark
Follow the project's instructions to make a change (e.g., add your name to a contributors list). Stage and commit your change.

### 5. Push and PR
1. Push your branch to **your** fork (`origin`).
`git push -u origin add-my-name`
2. Go to the original project's GitHub page. You should see a button to "Compare & pull request."
3. Click it, write a clear description of what you did, and submit!

### 6. Managing Upstream (Challenge)
While you wait for your PR, someone else's PR was merged into the main project.
1. Add the original project as a remote named `upstream`.
2. Fetch the changes from `upstream`.
3. Merge `upstream/main` into your local `main` branch.

---

## Instructions
Complete these tasks on GitHub. This is a rite of passage for every modern developer!
