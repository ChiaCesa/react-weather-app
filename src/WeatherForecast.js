import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(){
    return (
        <div className="weatherForecast">
           <div className="row">
               <div className="col">
                       <div className="weatherForecast-day">Thu</div>
                       <WeatherIcon code="01d" size={36}/>
                       <div className="weatherForecast-temperatures"> 
                       <span className="weatherForecast-temp-max">19° </span>
                       <span className="weatherForecast-temp-min"> 10°</span>
                       </div>
               </div>
            </div>
        </div>
    );
}