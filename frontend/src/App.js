import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Search from './components/search';

// Global environment variables are set in .env.local
const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

// The data returned from App is used in root in index.js
function App() {
  
  /* 
  * React works such that the code updates the virtual DOM.
  * The virtual DOM is its in-memory model of the real DOM.
  * Then after the virtual DOM is updated, it automatically
  * updates the real DOM behind the scenes. Unlike vanilla 
  * js where the code edits the DOM directly. 
  * 
  * Here, word is the state variable. setWord is the func
  * that updates its state. useState is the React hook that
  * adds state to a functional component. 
  */
  const [word, setWord] = useState('')

  /*
  * This function passed into the Search component to control
  * the action taken upon submit. 
  * 
  * e.preventDefault() is added to stop the submit from refreshing
  * the entire page when the (e)vent occurs. 
  * It uses method-chaining syntax to effect the returned Promise.
  */
  const handleSearchSubmit = (e) => {
    e.preventDefault()
    console.log(word)
    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
    setWord('') 
  }

  return (
    <div>
      <Header title="Images Gallery"/>
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
    </div>
  );
}


// Functions must be exported in order to be imported in anothe file.
export default App;
