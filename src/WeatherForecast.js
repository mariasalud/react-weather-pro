import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
}

let apikey = "77d7aad521d071522cc04f7e20b8ab63";
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?
lat=${latitude}&long=${longitude}$appid=${apikey}&units=metric`;

axios.get(apiUrl).then(handleResponse);

    return (
    <div className="WeatherForecast">
       <div className="row">
        <div className="col">
        <div className="WeatherForecast-day">Thur</div> 
         <WeatherIcon code="01d" size={36} /> 
         <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">19°</span> 
        <span className="WeatherForecast-temperature-min">10°</span>
           </div>
        </div>
       </div>
      </div>
    );
}