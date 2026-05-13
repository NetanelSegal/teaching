#!/bin/bash

# Lesson 3: Collaboration Workflow Theory
# This script outlines the commands for a contributor.

# 1. Setup Remotes
# origin is YOUR fork
# git remote add origin https://github.com/your-username/repo.git

# 2. Add the original project as 'upstream'
# git remote add upstream https://github.com/original-owner/repo.git

# 3. List remotes
# git remote -v

# 4. Syncing your fork with the original project
# git fetch upstream
# git switch main
# git merge upstream/main

# 5. Pushing a new feature to your fork
# git switch -c new-feature
# (make changes and commit)
# git push -u origin new-feature
