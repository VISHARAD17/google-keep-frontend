import './App.css';
import Header from './Components/Header/Header';
import CreateArea from './Components/CreateArea/CreateArea';
import Notes from './Components/Notes/Notes';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Components/Footer/Footer';

function App() {

  const [noteList, setNoteList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4001/api/getAll")
    //axios.get("https://react-google-keep-backend.herokuapp.com/api/getAll")
    .then(res => setNoteList(res.data));
  }, []);

  return (
    <div className="App">
      < Header />
      < CreateArea noteList = {noteList} setNoteList = {setNoteList}/>
      < Notes noteList = {noteList} setNoteList = {setNoteList}/>
      < Footer />
    </div>
  );
}

export default App;
