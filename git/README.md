# Git & GitHub Curriculum

Welcome to the Git curriculum! This course is designed to take you from knowing nothing about version control to contributing to professional projects.

## Pedagogical Model: Hook-Theory-Lab
Each lesson follows our core pedagogical model:
1.  **Hook**: Why does this matter? What problem are we solving?
2.  **Theory**: How does it work? What are the commands and concepts?
3.  **Lab**: Practical, hands-on exercises to reinforce the learning.

## Course Structure

### [Module 0: Foundations](./lessons/00-foundations/)
Learn the basics of how Git works locally on your machine.
- **Lesson 1: Why VCS?** - Introduction to version control and Git.
- **Lesson 2: Your First Repo** - Initializing a project with `git init`.
- **Lesson 3: Staging and Committing** - The core "save" loop of Git.
- **Lesson 4: Viewing History** - Navigating the timeline with `log` and `diff`.
- **Lesson 5: Ignoring Files** - Keeping your repo clean with `.gitignore`.
- **Lesson 6: Undoing Changes** - The safety net: `restore` and `amend`.

### [Module 1: Branching and Merging](./lessons/01-branching-and-merging/)
Learn how to work on multiple features in parallel.
- **Lesson 1: What is a Branch?** - The concept of parallel universes.
- **Lesson 2: Switching and Merging** - The standard feature-branch workflow.
- **Lesson 3: Handling Conflicts** - Resolving the "storm" when code collides.

### [Module 2: Remote Collaboration](./lessons/02-remote-collaboration/)
Bridge the gap between your local computer and the world.
- **Lesson 1: Introduction to Remotes** - Connecting to GitHub with `clone` and `remote`.
- **Lesson 2: Pushing and Pulling** - Synchronizing your work with a team.
- **Lesson 3: Collaboration Workflow** - Professional contributing via Forks and Pull Requests.

---

## Technical Standards
- **Modern Syntax**: We use `git switch` and `git restore` instead of the older, overloaded `git checkout`.
- **Branch Naming**: We use `main` as the default branch name.
- **Atomic Commits**: We teach the importance of small, logical, and well-described commits.
