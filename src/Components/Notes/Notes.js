import './Notes.css';
import axios from 'axios';

const Notes = ({ noteList, setNoteList }) => {

    const handleDelete = (id) => {
        axios.post("http://localhost:4001/api/delete", { id })
        //axios.post("https://react-google-keep-backend.herokuapp.com/api/delete", { id })
        .then(res => setNoteList(res.data));
    }

    return ( 
        <>
        {
            noteList.map(note => (
                <div className="note" key={note._id}>
                    <h1>{note.title}</h1>
                    <p>{note.content}</p>
                    <button onClick={() => handleDelete(note._id)} > 
                        <i className="fa-solid fa-trash"></i>
                    </button>
                    {/* <button onClick={() => editNote(note._id)}>
                        <i className='fa-solid fa-pen-to-square'></i>
                    </button> */}
            </div>
            ))
        }
        </>
     );
}
 
export default Notes;
