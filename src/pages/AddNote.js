import { Link } from "react-router-dom";
// import { useParams } from 'react-router-dom';

function    NotePage()
{
    // const {id} = useParams();
    
    return <div className="paper">
        <Link to='/' className="back"></Link>
        <textarea className="Typing" contentEditable maxLength={500} />
    </div>
}

export  default NotePage;