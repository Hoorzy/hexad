import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ratting from "./Container/Rating"
import RandomRating from './Container/RandomRating'

function App() {
  return (
    <div className="App">
      <Ratting />      
      <RandomRating />
    </div>
  );
}

export default App;
