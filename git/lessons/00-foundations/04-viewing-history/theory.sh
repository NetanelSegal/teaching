#!/bin/bash

# Lesson 4: Viewing History and Diffs
# This script demonstrates how to inspect changes.

# 1. Setup
mkdir history-demo
cd history-demo
git init
echo "Initial content" > file.txt
git add file.txt
git commit -m "First commit"

# 2. Making a change
echo "Adding more content" >> file.txt

# 3. View the difference (Working Directory vs Last Commit)
# This shows what you've changed since the last save.
git diff

# 4. Stage the change
git add file.txt

# 5. View the difference (Staging Area vs Last Commit)
# This shows what will be in the next commit.
git diff --staged

# 6. Commit the change
git commit -m "Second commit"

# 7. Viewing the history
# Shows a full list of commits.
git log

# 8. Compact history
# Shows one line per commit.
git log --oneline

# 9. Viewing the changes in each commit
# Shows the diff for every commit in the history.
git log -p
