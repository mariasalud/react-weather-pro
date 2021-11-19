import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
        <ul>
            <li>
              <FormattedDate date={props.data.date} />
              </li>
            <li className="text-capitalize">{props.data.description} </li>
        </ul>
           <div className="row mt-5">
             <div className="col-6">
                 <div className="clearfix">
             <img 
             src={props.data.iconUrl} 
             alt={props.data.description}
             width="100px" 
             className="float-left"
             />
             <div className="float-left">
               <span className="temperature">{Math.round(props.data.temperature)}</span> 
               <span className="unit"> °C </span>
               </div>
               </div>
             </div>
             <div className="col-6">
               <ul> 
                   <li>Precipitation: 4 %</li>
                    <li>Humidity: {props.data.humidity} MPH</li>
                     <li>Wind: {props.data.wind} %</li>
               </ul>
             </div>
         </div>
         </div>
         );
} 