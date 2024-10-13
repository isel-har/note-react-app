import { Link, useParams } from 'react-router-dom';
import React, { useRef, useEffect, useState } from 'react';
import { API_URL } from './NotesListPage';

function NotePage() {

    const textRef = useRef(null);
    let { id }    = useParams();
    const [note, setNote] = useState({});
    let isNew = (id === undefined || !Number.isInteger(id)) ? true : false;

    const getNote = async() => {
        const response = await fetch(`${API_URL}/${id}`);
        const data  = await response.json();
        setNote(data.data);
    }


    return (
        <div className="paper">
            <Link to='/' className='back'></Link>
            <button className="post" onClick={postNote}></button>
            <Link to='/' className="discard"></Link>
            <textarea ref={textRef} className="Typing" maxLength={500}>{isNew & (note) || ""}</textarea>
        </div>
    );
}

export default NotePage;
