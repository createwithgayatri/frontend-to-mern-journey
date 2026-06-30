import { useState, useEffect } from "react";

function NoteForm({ onSave, editNote }) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (editNote) {
      setText(editNote.text);
    }
  }, [editNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    onSave(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Write a note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">
        {editNote ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default NoteForm;