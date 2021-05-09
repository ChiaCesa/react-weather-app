import React,  { useState } from "react";
import  "./Weather.css";
import axios from "axios";


export default function Weather(props){
  
  const [weatherData,  setWeatherData] = useState({ready: false});
  function handleResponse(response) {
   
setWeatherData({
  ready: true,
  temperature: response.data.main.temp,
  humidity: response.data.main.humidity,
  description: response.data.weather[0].description,
  iconUrl:  response.data.weather[0].icon,
  wind: response.data.wind.speed,
  city: response.data.name,
  date: "Wednesday 07:00",
});
  }
  
  if (weatherData.ready){
    return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
        <input
        type="search"
        placeholder="Enter a city..."
        className="form-control"
        autoFocus="on"
        />
        </div>
        <div className="col-3">
        <input 
        type="submit"
        value="search"
        className="btn btn-outline-secondary w-100"
        />
        </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <ul>
        <li>{weatherData.date}</li>
        <li className="text-capitalize">{weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src={weatherData.icon} alt={weatherData.description} />
       <span className="temperature">{Math.round(weatherData.temperature)}</span>
       <span className="unit"> °C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  )
  } else {
  const apiKey="73f51c65cf902e402e962053834ff472";
  let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return  "Loading...";
}
}