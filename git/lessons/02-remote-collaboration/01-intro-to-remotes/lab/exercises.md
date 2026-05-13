# Lab 1: Connecting to the World

## Goal
Practice cloning repositories and managing remote connections.

## Tasks

### 1. Exploration
Go to GitHub and find a simple public repository (e.g., a "Hello World" project or a small utility). Copy its HTTPS clone URL.

### 2. The Clone
Use your terminal to clone that repository into a new folder on your computer.

### 3. Inspection
Enter the folder and run `git remote -v`. What is the name of the remote? What are the URLs?

### 4. History Check
Run `git log --oneline` to see the history of this project. Notice that you have the **entire** history on your machine now.

### 5. Manual Connection
Create a new folder `my-local-backup` and initialize it.
Try to add a fake remote URL (e.g., `https://github.com/yourname/fake-repo.git`) and name it `cloud`.
Verify that it was added correctly.

---

## Instructions
Complete these tasks in your terminal. You can use the `solution.sh` script to see the expected commands.
