#!/bin/bash

# Lab 5 Solution

# 1. Preparation
cd lab-03-git

# 2. Simulate "Noise"
touch logs.txt
touch temp.tmp
touch api_key.env

# 3. Verification
git status

# 4. Create the Shield
echo "api_key.env" > .gitignore
echo "*.tmp" >> .gitignore
echo "logs*" >> .gitignore

# 5. Confirm the Shield
git status

# 6. Commit the Rules
git add .gitignore
git commit -m "Add project ignore rules"

# 7. The Exception (Optional)
touch logs_important.txt
git status # Still ignored

# Adding the exception rule
echo "!logs_important.txt" >> .gitignore
git status # Now it should be visible!
