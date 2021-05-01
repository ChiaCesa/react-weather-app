import React from "react";
import  "./Weather.css";
//import axios from "axios";


export default function Weather() {
 
   let weatherData = {
      city: "New York",
      date: "Tuesday 10:00",
      description: "Cloudy",
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      humidity: 50,
      wind: 4,
      temperature: 15
    };
    
  
    return (
        <div className="container">
      <div className="Weather">
        <form className="form-floating" />
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              className="form-control "
              placeholder="Type a city..."
            />
          </div>
          <div className="col-3">
            <button type="submit" className="search-button  w=100">
              Search
            </button>
          </div>
  
          <div className="col-3">
            <button className="current-button w=100">Current</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="city-details">
              <h1>{weatherData.city}</h1>
              <h2>{weatherData.date}</h2>
            </div>
          </div>
          <div className="col">
            <div className="weather-icon-container">
              <span className="degree">{weatherData.temperature}</span>
              <span className="celsiusFahrenheit">
                <a href="/" className="active">
                  °C
                </a>{" "}
                | <a href="/">°F</a>
              </span>
              <br />
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="weatherImage"
              ></img>
            </div>
          </div>
          <div className="col">
            <div className="city-weather">
              <h3>{weatherData.description}</h3>
              <ul className="city-stats">
                <li className="humidity">
                  Humidity: <span>{weatherData.humidity}</span>%
                </li>
                <li className="wind">
                  Wind: <span>{weatherData.wind}</span>km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="day-of-the-week">
              <div>07:00 </div>
              <div className="forecast-image">
                <img 
                src={weatherData.imgUrl} alt={weatherData.description}></img>
              </div>
              <div className="temp">
                <span className="temp">{weatherData.temperature} </span>
              </div>
            </div>
          </div>


        </div>
        
        <img src="/img/catBanner.jpg" alt="Cat" className="catBanner" />
      </div>
      <footer> <a href="https://github.com/ChiaCesa/react-weather-app" >Open-source code</a> by Chiara Cesana</footer>
      </div>
    );
  }