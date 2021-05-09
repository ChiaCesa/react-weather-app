import React from "react";
import  "./Weather.css";
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
     
        
          <Weather defaultCity="New York" />
          <img src="/img/catBanner.jpg" alt="Cat banner" className="catBanner"/>
    <footer>
      This project was coded by Chiara Cesana and is
      <a href="https://github.com/ChiaCesa/react-weather-app" > open-sourced on GitHub</a>
    </footer>
    </div>
    
    </div>
  );
}

export default App;
