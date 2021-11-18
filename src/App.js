import React from 'react';
import Weather from "./Weather";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>React weather project</h1>
      <Weather defaultCity="Berlin" />
      <footer>
         This project was coded by Maria Garcia {""}
         <a href="https://github.com/mariasalud/react-weather-pro" target="_blank" rel="noreferrer">
        Open-source on Github</a> and on {""}
       <a href="https://hardcore-hugle-da8414.netlify.app" target="_blank" rel="noreferrer">Netlify</a> 
      </footer>
      </div>
      </div>
  );
}


