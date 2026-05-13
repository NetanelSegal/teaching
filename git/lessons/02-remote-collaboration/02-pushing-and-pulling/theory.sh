#!/bin/bash

# Lesson 2: Pushing and Pulling Theory
# This script outlines the synchronization commands.

# 1. Setup (Assuming a remote exists)
# git remote add origin https://github.com/user/repo.git

# 2. Pushing for the first time
# -u sets the upstream so future pushes/pulls know where to go.
# git push -u origin main

# 3. Subsequent pushes
# git push

# 4. Fetching updates (Safe)
# This doesn't change your code, only your metadata about the remote.
# git fetch origin

# 5. Pulling updates (Integration)
# This will try to merge remote changes into your current branch.
# git pull origin main

# 6. Checking remote tracking branches
# Shows how far ahead or behind you are from the server.
git branch -vv
