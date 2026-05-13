#!/bin/bash

# Lab 6 Solution

# 1. The Accidental Deletion
# (Assuming script.js exists from previous labs)
echo "" > script.js 
git restore script.js

# 2. The Premature Add
touch secret_notes.txt
git add secret_notes.txt
git restore --staged secret_notes.txt

# 3. The Typo Fix
touch feature.js
git add feature.js
git commit -m "Add featur"
git commit --amend -m "Add feature"

# 4. The "I messed up the whole day"
# Make some commits
echo "1" > temp.txt && git add temp.txt && git commit -m "C1"
echo "2" > temp.txt && git add temp.txt && git commit -m "C2"
echo "3" > temp.txt && git add temp.txt && git commit -m "C3"

# Find hash (This part is manual for the user, but here's the command)
git log --oneline

# Perform soft reset (Example hash, replace with actual)
# git reset --soft <hash_of_C1>
