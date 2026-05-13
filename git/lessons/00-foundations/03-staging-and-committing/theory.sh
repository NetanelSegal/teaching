#!/bin/bash

# Lesson 3: Staging and Committing Theory
# This script demonstrates how to move files through the three stages.

# 1. Setup (from Lesson 2)
mkdir staging-demo
cd staging-demo
git init
echo "Hello World" > index.html
echo "body { color: blue; }" > style.css

# 2. Check current status
# Both files are "Untracked"
git status

# 3. Staging a single file
# We decide only index.html is ready for the first commit.
git add index.html

# 4. Check status again
# index.html is now "Changes to be committed" (Staged)
# style.css is still "Untracked"
git status

# 5. Committing the staged file
# The -m flag allows us to provide the message inline.
git commit -m "Add initial HTML structure"

# 6. Check status again
# index.html is gone from the status (it's committed!)
# style.css is still "Untracked"
git status

# 7. Staging everything else
# The dot (.) represents the current directory and all subdirectories.
git add .

# 8. Committing everything
git commit -m "Add basic styling"

# 9. Final status check
# "nothing to commit, working tree clean"
git status
