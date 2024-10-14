import '../App.css'
import { Link } from 'react-router-dom';

function Note({note})
{   
    const timestamp = (updated_at) => {
        let date = new Date(updated_at)
        return date.toLocaleDateString();
    }

    return (
    <Link to={`/note/${note.id}`}>
        <div className="Note">
            <h3 className="title">{note.title}</h3>
            <p className="body">{ timestamp(note.updated_at) } :  {note.body}</p>
            <span className="edit-symbol"></span>
        </div>
    </Link>);
}

export  default Note;