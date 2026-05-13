#!/bin/bash

# Lesson 5: Ignoring Files Theory
# This script demonstrates the effect of .gitignore.

# 1. Setup
mkdir ignore-demo
cd ignore-demo
git init

# 2. Create a sensitive file
echo "SECRET_PASSWORD=12345" > .env

# 3. Check status
# Git sees the .env file and wants to track it.
git status

# 4. Create .gitignore
echo ".env" > .gitignore
echo "*.log" >> .gitignore

# 5. Check status again
# Git no longer mentions .env! It only sees the .gitignore file itself.
git status

# 6. Test wildcards
touch debug.log
touch error.log

# 7. Check status
# Both .log files are ignored.
git status

# 8. Commit the ignore rules
git add .gitignore
git commit -m "Add basic ignore rules"

# 9. Verify
# Even if we modify debug.log, Git won't notice.
echo "New error" >> debug.log
git status
