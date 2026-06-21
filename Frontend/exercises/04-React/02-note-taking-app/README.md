# Exercise 2: Smart Note-Taking App

## 🎯 Goal
Master React State (`useState`), Form validation/Controlled components (`onSubmit`/`onChange`), side-effects using `useEffect` for syncing state to local persistence, and filtering lists.

## ⚓ Hook
Have you ever visited a site, filled out a form, refreshed by mistake, and lost everything? By binding form inputs to React state, we create "Controlled Components" that validation frameworks can track in real-time. Then, by persisting that data to `localStorage`, the data is saved forever!

## 🛠️ Tasks
1. Refactor the `NoteForm` inside [src/App.jsx](file:///D:/ort/curriculum/Frontend/exercises/04-React/02-note-taking-app/src/App.jsx) to make it controlled. Make sure it resets correctly when the form is submitted.
2. In `App()`, synchronize the `notes` state using `useEffect`. Save to local storage whenever `notes` updates, and pre-fill state on start.
3. Hook up the Filters and Search. The notes grid must dynamically filter based on typing in the search box and selecting a category.

## 🚀 Advanced Challenges
- Make notes editable. Clicking an edit button should populate the form with that note's values and replace it on submit.
- Add tags (multiple strings) to a note, and let the user filter notes by clicking on any tag.
