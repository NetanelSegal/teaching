#!/bin/bash

# Lab 3 Solution

# 1. New Project
mkdir lab-03-git
cd lab-03-git
git init

# 2. Create Content
echo 'console.log("Hello Git");' > script.js
echo "# Lab 3" > README.md

# 3. Selective Staging
git add README.md
git status

# 4. First Commit
git commit -m "Add project documentation"

# 5. Remaining Work
git add script.js
git commit -m "Initialize JavaScript logic"

# 6. Verification
git status
