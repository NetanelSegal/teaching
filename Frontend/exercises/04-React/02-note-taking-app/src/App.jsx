import React, { useState } from 'react';
import './index.css';

// Task 1: Complete the NoteForm component as a "controlled component".
// It should contain inputs for:
// - Title (text)
// - Content (textarea)
// - Category (select: Work, Personal, Ideas)
// - Is Important (checkbox)
// On submit, it should trigger the onAddNote callback and reset the form fields.
function NoteForm({ onAddNote }) {
  // TODO: Add state hooks for form elements
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Create a note object and call onAddNote
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <h3>Add a New Note</h3>
      {/* TODO: Add input elements with value and onChange attributes */}
      <button type="submit" className="btn-submit">Save Note</button>
    </form>
  );
}

function App() {
  // Task 2: Initialize note state. Load notes from localStorage on mount.
  const [notes, setNotes] = useState([]);
  
  // Task 3: Filter and Search state
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const handleAddNote = (newNote) => {
    // TODO: Append newNote to notes array, and save to localStorage
  };

  const handleDeleteNote = (id) => {
    // TODO: Filter out note by id, and update localStorage
  };

  // Task 4: Filter notes dynamically based on search term and category filter
  const filteredNotes = notes; // TODO: Implement filtering logic

  return (
    <div className="container">
      <header>
        <h1>Smart Notes Drawer</h1>
        <p>Manage your daily thoughts, categories, and reminders with local persistence</p>
      </header>

      <div className="workspace">
        <aside className="sidebar">
          <NoteForm onAddNote={handleAddNote} />
          
          <div className="filters-box">
            <h3>Filters</h3>
            <input 
              type="text" 
              placeholder="Search notes..." 
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select 
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="filter-select"
            >
              <option value="All">All Categories</option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Ideas">Ideas</option>
            </select>
          </div>
        </aside>

        <main className="notes-area">
          <h2>Your Notes ({filteredNotes.length})</h2>
          
          <div className="notes-grid">
            {filteredNotes.length === 0 ? (
              <p className="no-notes">No notes found. Create one to get started!</p>
            ) : (
              filteredNotes.map((note) => (
                <div key={note.id} className={`note-card ${note.isImportant ? 'important' : ''}`}>
                  <div className="note-header">
                    <span className="category-badge">{note.category}</span>
                    {note.isImportant && <span className="imp-badge">⭐ Important</span>}
                  </div>
                  <h3>{note.title}</h3>
                  <p>{note.content}</p>
                  <button 
                    onClick={() => handleDeleteNote(note.id)} 
                    className="btn-delete"
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
