#!/bin/bash

# Lesson 1: Remote Configuration Theory
# This script demonstrates how to view and add remotes.

# 1. Setup a local repo
mkdir remote-intro
cd remote-intro
git init

# 2. Check current remotes
# This will be empty because we haven't added any yet.
git remote -v

# 3. Adding a remote (Simulated URL)
# In a real scenario, you'd get this from GitHub.
git remote add origin https://github.com/example-user/example-repo.git

# 4. Verifying the remote
# Now it should show 'origin' for both fetch and push.
git remote -v

# 5. Renaming a remote
# If you decide you don't like the name 'origin'.
git remote rename origin upstream

# 6. Removing a remote
git remote remove upstream
