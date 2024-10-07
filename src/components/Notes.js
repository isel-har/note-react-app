import NotesCounter from "./NotesCounter";
import Note from "./Note";

function Notes()
{
    return (
    <div className="notes-container">
        <h1>Notes List</h1>
        <NotesCounter />
        <Note />
    </div>);
}

export default Notes;