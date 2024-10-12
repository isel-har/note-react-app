// import data from "../assets/data";
import Note from "../components/Note";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const API_URL = "http://localhost:8000/api";

function  NotesListPage()
{
    const [notes, setNotes] = useState([]);
    useEffect(() => {

        fetch(`${API_URL}/notes`) // to understand very well
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();  
        })
        .then(data => {
            setNotes(data.data);
        })
        .catch(error => {
            console.error('error:', error);
        });

    }, []);

    return (
        <div className="note-list">
            <div className="notes-counter">
                <h3>&#9782; Notes</h3>
                <span id="counter">...</span>
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
