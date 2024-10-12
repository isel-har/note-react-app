import { Link, useParams } from 'react-router-dom';
import React, { useRef, useEffect, useState } from 'react';
import { API_URL } from './NotesListPage';

function NotePage() {
    const textRef = useRef(null);
    const { id } = useParams();
    const [note, setNote] = useState({});
    const [noteContent, setNoteContent] = useState('');

    const getNote = async () => {
        const response = await fetch(`${API_URL}/note/${id}`);
        let data = await response.json();
        setNote(data);
        setNoteContent(`${data.title}\n\n${data.created_at} : ${data.body}`);
    }

    useEffect(() => {
        getNote();
    }, [id]);

    return (
        <div className="paper">
            <Link to='/' className="back"></Link>
            <Link to='/' className="discard"></Link>
            <textarea 
                ref={textRef} 
                className="Typing" 
                maxLength={500} 
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
            />
        </div>
    );
}

export default NotePage;
