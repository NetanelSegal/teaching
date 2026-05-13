#!/bin/bash

# Solution for Lab 2: Initializing a Repo

# 1. Create and navigate
mkdir git-practice
cd git-practice

# 2. Initialize
git init

# 3. Verify
ls -la
git status

# 4. Create file
echo "Hello Git!" > hello.txt

# 5. Inspect state
git status
