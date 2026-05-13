#!/bin/bash

# Lesson 2: Initializing a Repository
# This script demonstrates the lifecycle of creating a repo.

# 1. Create a new directory for our project
mkdir my-cool-project
cd my-cool-project

# 2. Initialize the Git repository
# This creates the .git folder.
git init

# 3. Inspecting the folder structure
# Note: the -a flag is required to see the hidden .git folder.
ls -la

# 4. Checking the status
# At this point, the repo is empty (no commits yet).
git status

# 5. Adding a new file
echo "# My Cool Project" > README.md

# 6. Checking status again
# Git will report README.md as an "Untracked file".
git status
