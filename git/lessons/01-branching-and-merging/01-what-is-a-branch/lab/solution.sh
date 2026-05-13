#!/bin/bash

# Lab 1 Solution

# 1. Preparation
mkdir lab-branching
cd lab-branching
git init
echo "Hello" > hello.txt
git add .
git commit -m "First commit"

# 2. The First Branch
git branch development

# 3. Verification
git branch

# 4. The Experimental Branch
git branch crazy-experiment

# 5. Detailed View
git log --oneline --decorate

# 6. Cleanup
git branch -d crazy-experiment
git branch
