#!/bin/bash

# Lesson 3: Conflict Resolution Theory
# This script simulates a conflict and how to fix it.

# 1. Setup
mkdir conflict-demo
cd conflict-demo
git init
echo "Common Line" > file.txt
git add .
git commit -m "Base commit"

# 2. Branch A change
git switch -c branch-a
echo "Line changed by A" > file.txt
git add .
git commit -m "Change by A"

# 3. Branch B change (from the same base)
git switch main
git switch -c branch-b
echo "Line changed by B" > file.txt
git add .
git commit -m "Change by B"

# 4. Attempt to merge branch-a into branch-b
# This WILL cause a conflict.
git merge branch-a

# 5. Check status
# Git will say "Unmerged paths"
git status

# 6. Manual resolution (Simulated)
# In a real scenario, you'd open the file. 
# Here we just overwrite it with the "correct" version.
echo "Resolved version combining A and B" > file.txt

# 7. Finalize the merge
git add file.txt
git commit -m "Resolve conflict between A and B"

# 8. Check result
git log --oneline --graph --all
