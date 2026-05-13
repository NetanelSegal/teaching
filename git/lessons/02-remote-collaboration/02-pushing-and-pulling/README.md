# Lesson 2: Pushing and Pulling

## Goal
Learn how to synchronize your local work with a remote repository.

## The "Why?"
Connecting to a remote is just the setup. The real work happens when you:
- **Upload** your new features so others can see them.
- **Download** the latest fixes and features that your teammates have contributed.
Synchronizing ensures that everyone on the team is working on the same "source of truth."

## In-Depth Explanations

### 1. `git push`
This command uploads your local commits to the remote repository.
- `git push origin main`: Uploads your `main` branch to the `origin` remote.
- **Upstream**: Usually, the first time you push a branch, you use `-u` (e.g., `git push -u origin main`). This "sets the upstream," so in the future, you can just type `git push`.

### 2. `git fetch` vs. `git pull`
This is a common point of confusion.
- **`git fetch`**: Downloads the latest changes from the remote but **does not** touch your local files. It just updates your "knowledge" of what's happening on the server.
- **`git pull`**: Does a `fetch` AND then immediately tries to **`merge`** those changes into your current local branch.
*Rule of thumb: Use `pull` when you just want to update your work quickly. Use `fetch` when you want to see what others have done before you decide to merge it.*

### 3. The Sync Workflow
A typical day as a developer looks like this:
1. `git pull`: Get the latest changes from the team.
2. [Work, Add, Commit]: Do your thing locally.
3. `git push`: Send your work back to the server.

### 4. What if `push` fails?
If someone else pushed changes while you were working, Git will reject your `push`. It will say something like "fetch first." This is Git's way of preventing you from accidentally overwriting someone else's work. You must `pull` (and resolve any conflicts) before you are allowed to `push`.

## Key Examples
In `theory.sh`, we show the commands for basic synchronization.

## External Resources
- [Git Basics - Pushing to Your Remotes](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes#_pushing_to_your_remotes)
- [Git Pull Documentation](https://git-scm.com/docs/git-pull)

---

## Hebrew Summary (סיכום)
אחרי שחיברנו את המאגר לשרת, אנחנו צריכים לסנכרן ביניהם:
1. **`git push`**: העלאת ה-Commits המקומיים שלנו לשרת.
2. **`git fetch`**: הורדת עדכונים מהשרת למחשב בלי לשנות את הקבצים שלנו (רק "עדכון מידע").
3. **`git pull`**: הורדת עדכונים ומיזוג אוטומטי שלהם לתוך הקוד שלנו (`fetch` + `merge`).
טיפ חשוב: אם ה-`push` נכשל, זה בדרך כלל כי מישהו אחר העלה שינויים לפניכם. במקרה כזה, חייבים לעשות `pull`, לפתור קונפליקטים אם ישנם, ורק אז לעשות `push` שוב.
