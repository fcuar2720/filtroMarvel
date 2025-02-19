import logo from './logo.svg';
import {useState, useEffect} from "react";
import './App.css';
import { getCharacters } from './api/ApiGeneral';

function App() {

const [a,setA]=useState();

  useEffect(()=>{
    getCharacters({limit:50,nameStartsWith:"h",setResponse:setA})
  },[]);
  
  useEffect(()=>{
      console.log(a);
  },[a]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
