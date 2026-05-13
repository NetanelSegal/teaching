#!/bin/bash

# Lab 4 Solution

# 1. Preparation (Assuming lab-03-git exists)
cd lab-03-git

# 2. Make a Modification
echo 'console.log("Learning Git History");' >> script.js

# 3. Inspect the Change
git diff

# 4. Stage and Review
git add script.js
git diff --staged

# 5. Final Commit
git commit -m "Add history learning log"

# 6. History Review
git log
git log --oneline

# 7. Patch View
git log -p
