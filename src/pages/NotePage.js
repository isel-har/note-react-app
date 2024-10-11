import { Link, useParams } from 'react-router-dom';
import data from "../assets/data";
import React, { useRef } from 'react';


function getByTitle(content)
{
    let size  = () => {
        let i = 0;
        for (; i < content.length || i < 15; ++i) {
            if (content[i] === ' ' || content[i] === '\n')
                break ;
        }
        return i;
    }
    return  content.slice(0, size());
}


function EmptyNote(textref) // later
{
    const addNote = () => {
        const content = textref.current.value;
        if (content !== undefined && content !== "")
            data.push({
                id : 4,
                title : getByTitle(content),
                body  : content,
                // updated : new Date()
            })
        console.log("chfti zaaba : ", content);
    }

    return(
    <div className="paper">
        <Link to='/' className="back" onClick={addNote}></Link>
        <Link to='/' className="discard"></Link>
        <textarea ref={textref} className="Typing" contentEditable maxLength={500}/>
    </div>);
}

function    NotePage()
{
    const textRef = useRef(null);
    const {id} = useParams();

    if (id === undefined)
        return EmptyNote(textRef);
    let Index = 0;
    let note = data.find(function toFind(note, index){
        if (note.id === Number(id))
        {
            Index = index;
            return true;
        }
        return false;
    });
    
    const editNote = () => {
        const content = textRef.current.value != null ? textRef.current.value:  "";
        let updated = {
            id : note.id,
            title : getByTitle(content),
            body  : content 
        };
        data[Index] = updated
        console.log("data from note Page", data);
    }
        
    const prevContent = `${note.title}\n\n${note.updated} : ${note.body}`
    return (
    <div className="paper">
        <Link to='/' className="back" onClick={editNote}></Link>
        <Link to='/' className="discard"></Link>
        <textarea ref={textRef}  className="Typing" contentEditable maxLength={500}>{prevContent}</textarea>
    </div>);
}

export  default NotePage;