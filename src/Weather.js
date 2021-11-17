import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
    <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" 
            placeholder="Enter a city.." 
            className="form-control" />
            </div>
             <div className="col-3">
            <input type="submit" 
            value="search" 
            className="btn btn-primary" />
            </div>
            </div>
        </form>
        <h1>New York</h1>
        <ul>
            <li>Wednesday 07:00</li>
            <li>Mostly cloudy </li>
        </ul>
         
         <div className="row">
             <div className="col-6">
             <img src="https://www.accuweather.com/images/weathericons/34.svg" 
             alt="mostly sunny" width="100px" />
               6 °C
             </div>
             <div className="col-6">
               <ul> 
                   <li>Presipitation: 4%</li>
                    <li>Humidity: 14MPH</li>
                     <li>Wind: 75%</li>
               </ul>
             </div>
         </div>


        </div>
    );
}