import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { API_URL } from './NotesListPage';

const noteObject = (note) => {

    const getTitle = () => {
        let title = note.body.substring(0, note.body.indexOf("\n"));
        if (title.length > 15)
            title = title.substring(0, 15); 
        if (title.length === 0)
            title  = note.body.substring(0, note.body.length >=15 ? 15 : note.body.length);
        return `${title}...`;
    }
    let newNote = {
        title : getTitle(),
        body  : note.body
    }
    return newNote;
}

function NotePage() {

    let { id } = useParams();
    const [note, setNote] = useState({});
    const navigate = useNavigate(null);

    const getNote = async() => {
        const response = await fetch(`${API_URL}/note/${id}`);
        if (await response.status === 200)
        {
            let data = await response.json();
            setNote(data);
        }
    }
    useEffect(() => {
        if (id === undefined)
            return ;
        getNote();
    }, []);

    const createNote = async () => {

        return await fetch(`${API_URL}/create`, {
            headers: {"Content-Type": "application/json"},
            method: 'POST',
            body: JSON.stringify(noteObject(note))
        })
    }
    const deleteNote = async () => {
        return await fetch(`${API_URL}/note/${id}`, {
            method: 'DELETE',
        });
    }

    const updateNote = async() => {
        return await fetch(`${API_URL}/note/${id}`, {
            headers: {"Content-type" : "application/json"},
            method: 'PUT',
            body: JSON.stringify(noteObject(note))
        })
    }

    const submitHandler = async (discard=false) => {
        const waitResponse = async() => {
            
            if (discard === true) 
                await deleteNote();
            else if (id === undefined && note.body)
                await createNote();
            else if (id !== undefined && !note.body)
                await deleteNote();
            else if (id !== undefined) 
                await updateNote();
        }
        await waitResponse();
        navigate('/');
    }
    return (
        <div className="paper">
            <div  className='back' onClick={submitHandler}></div>
            { id && note.body && (<div  className="discard" onClick={()  => submitHandler(true)}></div>) }
            <textarea className="Typing" onChange={(e) => {setNote({...note, body:e.target.value})}} value={note?.body} maxLength={500} />
        </div>
    );
}

export default NotePage;
