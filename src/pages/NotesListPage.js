// import data from "../assets/data";
import Note from "../components/Note";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const API_URL = "http://localhost:8000/api/";

function  NotesListPage()
{
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const response = fetch(`${API_URL}notes`); // fetch async

    })
    




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