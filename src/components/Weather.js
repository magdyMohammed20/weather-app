import React from 'react';

export default function Weather(props){
  
    return (
      <div>
        {
          props.temp !== ''? (
            <ul>
              <li>Temperature: {props.temp}</li>
              <li>Country: {props.country}</li>
              <li>Description: {props.desc}</li>
              <li>Humidity: {props.hum}</li>
            </ul>
          ):''
          
        }
      </div>
    );
  }


