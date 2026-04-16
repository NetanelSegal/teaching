# JavaScript Course Creation Rules

This document outlines the mandatory standards for creating and organizing lessons within the `js/` directory. Adhering to these rules ensures a consistent, professional, and high-quality learning experience for all students.

---

## 1. Directory Structure
Every lesson must be contained within its own folder under the appropriate category. The internal structure is strictly defined as follows:

```text
js/xx-category/xx-subject/
├── README.md        # Detailed theory, objectives, and links
├── theory.js        # Runnable code examples with in-depth comments
└── lab/             # Student practice workspace
    ├── exercises.js  # Practical tasks with boilerplate code
    └── solution.js   # Reference implementation for instructors
```

## 2. README.md Requirements
The `README.md` is the primary source of truth for the student. It must contain the following sections in order:

1.  **Title**: Clear, descriptive name (e.g., `Lesson 2: Data Types`).
2.  **Goal**: A concise statement of what the student will achieve (e.g., "Master the 8 basic data types and understand their behaviors").
3.  **The "Why?"**: Explain the practical problem this topic solves. Connect it to real-world software engineering.
4.  **In-Depth Explanations**: Provide clear, step-by-step breakdowns of concepts. Avoid "magic" explanations; explain the underlying mechanics (e.g., how the JS Engine works).
5.  **Diverse & Key Examples**:
    *   Include multiple code examples for every core concept.
    *   **Edge Cases**: Explicitly demonstrate common pitfalls (e.g., "Where does `NaN` come from?").
    *   **Contextual Examples**: Show examples that apply to both Front-end (DOM) and Back-end (Node.js/Logic).
6.  **External Resources**: Always link to the corresponding sections on [javascript.info](https://javascript.info/).
7.  **Hebrew Summaries (Optional)**: For complex technical terms, provide a brief Hebrew translation or summary to aid comprehension.

## 3. Code Quality & Standards
All JavaScript code (in `theory.js`, `exercises.js`, and `solution.js`) must adhere to these standards:

-   **ES Modules (ESM)**: Always use `import`/`export` syntax. The root `js/package.json` must include `"type": "module"`.
-   **Modern Syntax**: Use `let` and `const` exclusively (no `var`). Use arrow functions and template literals where appropriate.
-   **Diverse Scenarios**: Theory files should include examples of "what happens when it fails" (e.g., division by zero, invalid types).
-   **Self-Documenting Code**: Comments should focus on **why** a specific approach is taken, rather than just narrating the syntax.
-   **Grading Rubric Alignment**: All code must follow the naming conventions (camelCase), structure, and error-handling patterns defined in `Teaching_Materials/Exams_Solutions/grading_rubric.md`.

## 4. Pedagogy: The "Hook-Theory-Lab" Model
Every lesson must follow this three-step flow:

1.  **The Hook**: Start the README or classroom session with a specific problem or "pain point" that the new topic will solve.
2.  **Theory with Nuance**: Provide the technical solution, but elaborate on the differences between similar methods (e.g., "Internal vs External scripts" or "let vs const").
3.  **The Lab**: Provide an immediate "hands-on" experience. Start with guided exercises and progress to open-ended problem-solving.

---
*Last Updated: March 2026*
