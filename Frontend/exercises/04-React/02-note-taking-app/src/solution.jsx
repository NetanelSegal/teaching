import React, { useState, useEffect } from 'react';
import './index.css';

function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Personal");
  const [isImportant, setIsImportant] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    onAddNote({
      id: Date.now(),
      title,
      content,
      category,
      isImportant
    });

    setTitle("");
    setContent("");
    setCategory("Personal");
    setIsImportant(false);
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <h3>Add a New Note</h3>
      
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input 
          id="title"
          type="text" 
          placeholder="Title..." 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea 
          id="content"
          placeholder="Write your note here..." 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          rows={4}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Ideas">Ideas</option>
        </select>
      </div>

      <div className="form-checkbox">
        <input 
          id="isImportant"
          type="checkbox" 
          checked={isImportant} 
          onChange={(e) => setIsImportant(e.target.checked)} 
        />
        <label htmlFor="isImportant">Mark as Important ⭐</label>
      </div>

      <button type="submit" className="btn-submit">Save Note</button>
    </form>
  );
}

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("ort-notes");
    return saved ? JSON.parse(saved) : [];
  });
  
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("ort-notes", JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (newNote) => {
    setNotes((prev) => [newNote, ...prev]);
  };

  const handleDeleteNote = (id) => {
    setNotes((prev) => prev.filter(note => note.id !== id));
  };

  const filteredNotes = notes.filter((note) => {
    const matchesSearch = 
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      note.content.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = categoryFilter === "All" || note.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

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
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Search notes..." 
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="form-group">
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
          </div>
        </aside>

        <main className="notes-area">
          <h2>Your Notes ({filteredNotes.length})</h2>
          
          <div className="notes-grid">
            {filteredNotes.length === 0 ? (
              <p className="no-notes">No notes found. Create one or adjust filters!</p>
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
