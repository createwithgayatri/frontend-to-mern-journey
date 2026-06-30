function NoteList({ notes, onDelete, onEdit }) {
  return (
    <div className="notes">
      {notes.length === 0 ? (
        <p>No notes found</p>
      ) : (
        notes.map((note) => (
          <div key={note.id} className="note">
            <p>{note.text}</p>
            <div className="actions">
              <button onClick={() => onEdit(note)}>✏ Edit</button>
              <button onClick={() => onDelete(note.id)}>🗑 Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default NoteList;