#!/bin/bash

# Lab 2 Solution

# 1. New Feature
cd lab-branching
git switch -c add-login

# 2. Work on the Feature
echo "function login() {}" > login.js
git add login.js
git commit -m "Add login functionality"

# 3. Context Switch
git switch main
ls # login.js should be missing

# 4. Integration
git merge add-login

# 5. Cleanup
git branch -d add-login

# 6. Parallel Work
git switch -c fix-header
echo "header { color: red; }" > header.css
git add . && git commit -m "Fix header"
git switch main

git switch -c fix-footer
echo "footer { color: green; }" > footer.css
git add . && git commit -m "Fix footer"
git switch main

git merge fix-header
git merge fix-footer
