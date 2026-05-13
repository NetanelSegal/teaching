#!/bin/bash

# Solution for Lab 1: Git Setup

# 1. Verify Installation
git --version

# 2. Identity Configuration
# Replace with your actual name and email
git config --global user.name "John Doe"
git config --global user.email "john.doe@example.com"

# 3. Default Branch
git config --global init.defaultBranch main

# 4. Review Settings
git config --list --global
