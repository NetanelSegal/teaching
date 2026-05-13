#!/bin/bash

# Lesson 6: Undoing Changes Theory
# This script demonstrates recovery techniques.

# 1. Setup
mkdir undo-demo
cd undo-demo
git init
echo "Solid foundation" > base.txt
git add base.txt
git commit -m "Initial commit"

# 2. Disaster: Making a bad change
echo "I am breaking everything!" > base.txt

# 3. Recovery: Discarding working directory changes
# This will revert base.txt to "Solid foundation"
git restore base.txt

# 4. Disaster: Staging something by mistake
touch mistake.txt
git add mistake.txt

# 5. Recovery: Unstaging
# The file remains on disk, but Git no longer plans to commit it.
git restore --staged mistake.txt

# 6. Disaster: Commit with a typo
git add base.txt # Let's say we modified it slightly
git commit -m "Add base logic with typo"

# 7. Recovery: Amending the commit
git commit --amend -m "Add base logic"

# 8. Check final status
git log --oneline
git status
