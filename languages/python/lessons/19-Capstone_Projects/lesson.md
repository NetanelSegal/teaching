# Lesson 19: Capstone Guide - From Student to Engineer

You have the skills. Now, you need the **Mindset**. This guide helps you navigate your final projects.

---

## 1. The Engineering Lifecycle
1. **Requirements:** What *must* the app do? (The "Definition of Done").
2. **Design:** Sketch the data structures (Dicts? Classes?) and the flow.
3. **Implementation:** Write the code. Start with the MVP (Minimum Viable Product).
4. **Verification:** Write tests. Run the linter.
5. **Documentation:** Write a `README.md` that explains how to run it.

---

## 2. Architecture: "The Core & The Shell"
Keep your "Business Logic" (the math, the rules) separate from your "Input/Output" (the prints, the file reads).
- **Core:** Pure functions that are easy to test.
- **Shell:** The CLI menu, the API calls, the file saving.

---

## 3. Git & Professional Workflow
- **Commit Early:** "Add basic budget logic", "Fix bug in date parsing".
- **Branching:** Don't work on `main`. Create a `feature/api-integration` branch.

---

## 4. Common Capstone Pitfalls
- **Scope Creep:** Trying to build "The next Facebook" in two days. **Focus on one core feature and do it perfectly.**
- **Hardcoding:** `path = "C:/Users/MyName/Desktop/data.txt"`. This will crash on anyone else's computer! Use relative paths.
- **Ignoring Errors:** Assuming the user will always type exactly what you expect. **Validate everything.**

---

## 5. Summary Checklist
- [ ] Is my code type-hinted and formatted?
- [ ] Do I have at least 3 unit tests for my core logic?
- [ ] Is my `README.md` clear and professional?
