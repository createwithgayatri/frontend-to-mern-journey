import { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [editNote, setEditNote] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) setNotes(savedNotes);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add or Update Note
  const handleSave = (text) => {
    if (editNote) {
      setNotes(
        notes.map((note) =>
          note.id === editNote.id ? { ...note, text } : note
        )
      );
      setEditNote(null);
    } else {
      setNotes([...notes, { id: Date.now(), text }]);
    }
  };

  // Delete Note
  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Edit Note
  const handleEdit = (note) => {
    setEditNote(note);
  };

  // Filter Notes
  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>📝 Notes App</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <NoteForm onSave={handleSave} editNote={editNote} />

      <NoteList
        notes={filteredNotes}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;