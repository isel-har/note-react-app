import '../App.css'
import { Link } from 'react-router-dom';

function Note({note})
{  
    return (
    <Link to={`/note/${note.id}`}>
        <div className="Note">
            <h3 className="title">{note.title}</h3>
            <p className="body">{note.updated} - {note.body}</p>
            <span className="edit-symbol"></span>
        </div>
    </Link>);
}

export  default Note;