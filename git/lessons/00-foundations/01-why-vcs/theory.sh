#!/bin/bash

# Lesson 1: Git Configuration Theory
# These commands demonstrate how to set up your identity in Git.

# 1. Checking your Git version
# This confirms Git is installed on your system.
git --version

# 2. Setting up your identity
# Git uses this information for every commit you make.
# The --global flag means these settings apply to all repositories on your machine.
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 3. Setting the default branch name
# Professional standard is now 'main' instead of the legacy 'master'.
git config --global init.defaultBranch main

# 4. Verifying your settings
# This will list all your current Git configurations.
git config --list --global

# 5. Setting a default editor (Optional)
# If you prefer VS Code, you can set it as your core editor:
# git config --global core.editor "code --wait"
