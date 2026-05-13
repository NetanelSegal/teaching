#!/bin/bash

# Lab 1 Solution

# 1. Exploration & Clone (Example using a public repo)
git clone https://github.com/octocat/Spoon-Knife.git

# 3. Inspection
cd Spoon-Knife
git remote -v

# 4. History Check
git log --oneline

# 5. Manual Connection
cd ..
mkdir my-local-backup
cd my-local-backup
git init
git remote add cloud https://github.com/yourname/fake-repo.git
git remote -v
