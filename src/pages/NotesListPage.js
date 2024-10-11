import data from "../assets/data";
import Note from "../components/Note";
import { Link } from 'react-router-dom';


function    NotesListPage()
{
    const notes = data;

    console.log("Notes rendered!");
    return (
        <div className="note-list">
            <div className="notes-counter">
                <h3>&#9782; Notes</h3>
                <span id="counter">{notes.length}</span>
            </div>
            <div className="list">
            {
                notes.map((note, index) => {
                    return (<Note key={index} note={note} />);
                })
            }
            <Link to='/new' className="add"></Link>
            </div>
        </div>
    );
}

export  default NotesListPage;