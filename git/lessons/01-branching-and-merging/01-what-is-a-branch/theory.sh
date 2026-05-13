#!/bin/bash

# Lesson 1: Branching Theory
# This script demonstrates creating and listing branches.

# 1. Setup
mkdir branch-intro
cd branch-intro
git init
echo "Stable code" > main.txt
git add main.txt
git commit -m "Initial stable commit"

# 2. List branches
# The asterisk (*) indicates the current branch.
git branch

# 3. Create a new branch
# This creates a pointer named 'feature-x' at the same commit as 'main'.
git branch feature-x

# 4. List branches again
# Now we see two branches, but we are still on 'main'.
git branch

# 5. Look at the pointers (HEAD)
# This command shows where HEAD and the branches are pointing.
git log --oneline --decorate

# 6. Delete a branch
# If we decide we don't need the branch anymore.
git branch -d feature-x
