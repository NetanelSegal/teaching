# Lesson 6: Undoing Changes

## Goal
Learn how to recover from mistakes and "go back in time" when things go wrong.

## The "Why?" (The Safety Net)
Everyone makes mistakes. You might delete a file accidentally, write code that breaks everything, or realize you have a typo in your last commit message. 
In a traditional environment, these mistakes can be catastrophic. In Git, as long as you have committed (or even just staged) your work, you can almost always get it back. This "Safety Net" is what allows developers to work quickly and experiment without fear.

## In-Depth Explanations

### 1. Undoing Working Directory Changes (`git restore`)
If you've modified a file but haven't staged it yet, and you want to discard your changes and go back to how the file looked in the last commit:
- `git restore <file>`: Discards all local changes in that file. **Warning**: This cannot be undone!

### 2. Unstaging a File (`git restore --staged`)
If you ran `git add` on a file but realized you're not ready to commit it yet:
- `git restore --staged <file>`: Moves the file from the Staging Area back to the Working Directory. It doesn't change the content of the file, just its "staged" status.

### 3. Fixing the Last Commit (`git commit --amend`)
If you just committed and realized you had a typo in the message, or forgot to include a small change:
1. Stage the missing change (if any).
2. Run `git commit --amend -m "New and correct message"`.
- This "overwrites" the last commit with a new one. **Note**: Only do this for commits that haven't been pushed to a shared server!

### 4. Going Back to a Previous State (`git reset`)
(Advanced but important)
- `git reset --soft <hash>`: Moves the "head" of your project back to a previous commit, but keeps all your work in the staging area.
- `git reset --hard <hash>`: **DANGER!** Moves everything back and deletes all work done after that commit. Use with extreme caution.

## Key Examples
In `theory.sh`, we simulate a "disaster" and use Git to recover from it step-by-step.

## External Resources
- [Git Basics - Undoing Things](https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things)
- [Git Restore Documentation](https://git-scm.com/docs/git-restore)

---

## Hebrew Summary (סיכום)
אחד היתרונות הגדולים של Git הוא היכולת לתקן טעויות בקלות.
1. `git restore <file>`: מבטל שינויים שביצענו בקובץ ולא שמרנו עדיין (הקובץ יחזור למצבו ב-Commit האחרון). **זהירות: פעולה זו אינה הפיכה!**
2. `git restore --staged <file>`: מוציא קובץ מה-Staging Area חזרה ל-Working Directory (ביטול `git add`).
3. `git commit --amend`: מאפשר לתקן את ה-Commit האחרון (שינוי ההודעה או הוספת קבצים ששכחנו).
הידיעה שיש לנו "רשת ביטחון" מאפשרת לנו לעבוד בביטחון ולנסות דברים חדשים בלי פחד.
