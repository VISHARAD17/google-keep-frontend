import { useState } from "react";
import './CreateArea.css';
import axios from 'axios';

const CreateArea = ({setNoteList}) => {

    const [noteObj, setNoteObj] = useState({
        title : "",
        content : ""
    });

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setNoteObj({
            ...noteObj,
            [name]:value
        });
        // event.preventDefault();
    }

    const add = () => {
        if(noteObj.title){
          axios.post("http://localhost:4001/api/addNew", noteObj)
          //axios.post("https://react-google-keep-backend.herokuapp.com/api/addNew", noteObj)
          .then(res => setNoteList(res.data));
          setNoteObj({
            title : "",
            content : ""
          })
        }
        // event.preventDefault();
    }

    return (
        <>
          <form className="create-note">
              <input
                name = 'title'
                // className = ""
                type = 'text'
                autoComplete = 'off'
                onChange={handleChange}
                value = {noteObj.title}
                placeholder = 'Title'
              />
            <textarea
                name = "content"
                placeholder = "Take a Note ...."
                onChange={handleChange}
                value = {noteObj.content}
            />
            <button onClick={add}>+</button>
          </form>
        </>
      );
}
 
export default CreateArea;
