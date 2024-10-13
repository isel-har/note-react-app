import Note from "../components/Note";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const API_URL = "http://localhost:8000/api";

function  NotesListPage()
{
    const [notes, setNotes] = useState([]);
    
    const getList = async() => {
        const response = await fetch(`${API_URL}/notes`);
        const data = await response.json();
        setNotes(data.data);
    }
    useEffect(() => {
        console.log("use effect trigged")
        getList();
    }, []);

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
                <Link to='note/new' className="add"></Link>
            </div>
        </div>
    );
}

export  default NotesListPage;
