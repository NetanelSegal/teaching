# TypeScript Course Creation Rules

This document outlines the mandatory standards for creating and organizing lessons within the `typescript/` directory.

---

## 1. Directory Structure
Every lesson must be contained within its own folder. The internal structure is strictly defined as follows:

```text
typescript/lessons/xx-subject/
├── README.md        # Detailed theory, objectives, and links
├── theory.ts        # Runnable code examples with in-depth comments
└── lab/             # Student practice workspace
    ├── exercises.ts  # Practical tasks with boilerplate code
    └── solution.ts   # Reference implementation for instructors
```

## 2. README.md Requirements
The `README.md` must contain:

1.  **Title**: Clear, descriptive name.
2.  **Goal**: Concise statement of achievement.
3.  **The "Why?" (Hook)**: Practical problem this topic solves.
4.  **In-Depth Explanations**: Step-by-step breakdowns.
5.  **Diverse Examples**: Including edge cases and failures.
6.  **External Resources**: Links to [typescriptlang.org](https://www.typescriptlang.org/docs/).
7.  **Hebrew Summaries**: Essential for all technical terms.

## 3. Code Quality & Standards
-   **Strict Mode**: `tsconfig.json` MUST have `"strict": true`.
-   **No `any`**: The use of `any` is forbidden unless it's part of a lesson specifically explaining why not to use it.
-   **Modern Syntax**: ES Modules, `template literals`, `arrow functions`.
-   **Naming**: `camelCase` for variables/functions, `PascalCase` for classes/interfaces.
-   **Types vs Interfaces**: Prefer `interface` for object shapes that might be extended, `type` for unions/intersections/complex aliases.

## 4. Pedagogy: The "Hook-Theory-Lab" Model
1.  **The Hook**: Start with a "pain point".
2.  **Theory**: Technical solution with nuance.
3.  **The Lab**: Hands-on practice.

---
*Last Updated: May 2026*
