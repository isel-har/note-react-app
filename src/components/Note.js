import { useState } from "react";

function Note() {
    const [notes, setNotes] = useState([]); // Array to store multiple notes

    const addButton = () => {
        const newNote = {
            id: notes.length + 1, // Unique ID for each note
            title: `Note ${notes.length + 1}`,
            content: 'This is a new note',
        };
        setNotes([...notes, newNote]); // Add the new note to the array
    };

    return (
        <div className="note">
            <div className="notes-counter">
                <div id="logo-container">
                    <div id="logo"></div>
                    <h3>Notes</h3>
                </div>
                <span>3</span>
            </div>
            {notes.map((note) => (
                <div key={note.id} id={`note-${note.id}`}>
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                    <div id="options">
                        <button id={`edit-${note.id}`} >Edit</button>
                        <button id={`delete-${note.id}`} >Delete</button>
                    </div>
                </div>
            ))}
            <button id="add-note" onClick={addButton}></button>
        </div>
    );
}

export default Note;
