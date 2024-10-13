import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { API_URL } from './NotesListPage';

function NotePage() {

    let { id } = useParams();
    const [note, setNote] = useState({});
    
    const getNote = async() => {
        const response = await fetch(`${API_URL}/note/${id}`);
        if (await response.status === 200)
        {
            let data = await response.json();
            setNote(data.data);
        }
    }
    useEffect(() => {
        if (id === undefined)
            return ;
        getNote();
    }, []);

    const createNote = async () => {

        await fetch(`${API_URL}/create`, {
            headers: {"Content-Type": "application/json"},
            method: 'POST',
            body: JSON.stringify(note)
        })
    }
    const deleteNote = async () => {
 
        await fetch(`${API_URL}/note/${id}`, {
            method: 'DELETE',
        });
    }

    const updateNote = async() => {

        await fetch(`${API_URL}/note/${id}`, {
            headers: {"Content-type" : "application/json"},
            method: 'PUT',
            body: JSON.stringify(note)
        })
    }

    const submitHandler = () => {

        if (id === undefined && note.body) // more parsing
            createNote();
        else if (id !== undefined && !note.body)
            deleteNote();
        else if (id !== undefined)
            updateNote();
    }
    return (
        <div className="paper">
            <Link to='/' className='back' onClick={submitHandler}></Link>
            <Link to='/' className="discard" onClick={deleteNote}></Link>
            <textarea className="Typing" onChange={(e) => {setNote({title:"mn 3ndi", body:e.target.value})}} value={note?.body} maxLength={500} />
        </div>
    );
}

export default NotePage;
