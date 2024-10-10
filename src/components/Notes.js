import { useState, useRef } from "react";
import {add_note_style, title_istyle, content_istyle} from "./styles";
import '../hovers.css'

let ids = 0; // for testing

function Notes()
{
    const inputTitleRef = useRef(null); 
    const inputTextRef  = useRef(null);
    const [isVisible, setVisibleText] = useState(false);
    const [notes, setNotes] = useState([])

    const changeAction = () => {
        let action = isVisible === false  ?  true : false;
        setVisibleText(action);}

    document.addEventListener("click", (e) => {
        if (e.target.name !== "fixed" && e.target.className !=="add-note-text")
            setVisibleText(false);
    });

    const addNote = () => {
        let title = inputTitleRef.current.value;
        let text  = inputTextRef.current.value;
        let newNote = {
            id    : ids,
            title : title,
            text  : text,
        }
        setNotes((prevNotes) => [...prevNotes, newNote]); // to understand.
        ids += 1;
    }
    // const editNote = (id) => {
    //     // handle editing logic
    // };
    const deleteNote = (id) => {
        console.log("yakma trigriti?")
        setNotes((prevNotes) => prevNotes.filter(note => {return note.id !== id}));
    }
    return (
        <div className="note-container">
            <h1>Notes List</h1>
            <div id="notes-counter">
                <div id="logo">
                    <span id="note-logo"></span>
                    <h3>Notes</h3>
                </div>
                <span id="notes-number">{notes.length}</span>
            </div>
            <div id="notes-list">
                {
                    notes.map((n) => {
                        return (<div className="note">
                            <div className="left-side-note">
                                <h5 className="note-title">{n.title}</h5>
                                <p className="note-content">{n.text}</p> 
                            </div> 
                            <div className="buttons">
                                <span className="edit" /*</div>onClick={editNote(n.id)}*/></span>
                                <span className="delete" onClick={() => deleteNote(n.id)}></span>
                            </div>
                        </div>);
                    })
                }
            </div>
            <button id="add-note" onClick={changeAction} name="fixed"></button>
            {isVisible && (<div className="add-note-text" style={add_note_style}>
                <input ref={inputTitleRef} className="add-note-text"  type="text" placeholder="enter a title for note." style={title_istyle} maxLength={20} name="fixed"/>
                <textarea ref = {inputTextRef} className="add-note-text"  type="text" placeholder="enter the note text." style={content_istyle} maxLength={200} name="fixed"/>
                <button id="commit" className="button-effect" name="fixed" onClick={addNote}>add</button>
                <button id="cancle" className="cancle-button">cancle</button>
            </div>)}
        </div>
    );
}
export default Notes;