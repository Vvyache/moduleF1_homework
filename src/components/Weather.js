import React from "react";


function Weather(props)  {

    return (
        <div className='weather'>
            <h2>{props.weather.dt_txt}</h2>
            <span className="badge badge-info">{props.weather.main.temp}<sup> o</sup>C</span>
        </div>
    )

}

export default Weather;
