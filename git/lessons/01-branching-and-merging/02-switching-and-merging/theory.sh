#!/bin/bash

# Lesson 2: Switching and Merging Theory
# This script demonstrates the full workflow of a feature branch.

# 1. Setup
mkdir merge-demo
cd merge-demo
git init
echo "V1" > app.py
git add .
git commit -m "Initial version"

# 2. Create and switch to a feature branch
# Using the shortcut -c (create and switch)
git switch -c new-feature

# 3. Work on the feature
echo "Cool new feature" >> app.py
git add .
git commit -m "Add new feature logic"

# 4. Switch back to main
# Notice that app.py will go back to its "V1" state.
git switch main

# 5. Merge the feature into main
# This will be a "Fast-forward" merge.
git merge new-feature

# 6. Verify
# app.py now has the feature code.
cat app.py

# 7. 3-Way Merge simulation
# Create another branch
git switch -c another-fix
echo "Fixing bug" >> bug.txt
git add .
git commit -m "Fix bug"

# Go back to main and make a different change
git switch main
echo "Important update" >> main_update.txt
git add .
git commit -m "Add important update"

# Now both branches have unique commits.
# Merging will create a "Merge Commit".
git merge another-fix

# 8. View the history graph
git log --oneline --graph --all
