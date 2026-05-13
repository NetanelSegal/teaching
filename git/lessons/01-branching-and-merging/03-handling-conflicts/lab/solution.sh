#!/bin/bash

# Lab 3 Solution

# 1. Preparation
mkdir lab-conflict
cd lab-conflict
git init
echo "<h1>Old Title</h1>" > index.html
git add . && git commit -m "Initial HTML"

# 2. Divergent Paths
git switch -c header-fix
echo "<h1>New Title from Branch</h1>" > index.html
git add . && git commit -m "Change title in branch"

git switch main
echo "<h1>New Title from Main</h1>" > index.html
git add . && git commit -m "Change title in main"

# 3. The Collision
git merge header-fix

# 4. Resolution (Simulated)
# In reality, you'd edit the file.
echo "<h1>Final Merged Title</h1>" > index.html

# 5. Finalize
git add index.html
git commit -m "Resolve title conflict"

# 6. Verification
git log --oneline --graph --all
