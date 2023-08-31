import React from 'react';
import '../App.css'
// image
import GraphImg from '../images/weathergraph.png'
const WeatherCard = ({ data }) => {
  const { location, current } = data;
  return (
    <div className="weather-card">
      <div className="weather-right">
      <img src={current.condition.icon} alt={current.condition.text} />
      <p className='temp'>{current.temp_c}°C</p>
      <h2>{location.name}</h2>

      <div className="weather-details">
      <div className="detail-cont">
          <p>wind Now</p>
          <span>{current.wind_kph}
          <p className="sign">km</p></span>
        </div>
        <div className="detail-cont">
          <p>Humidity</p>
          <span>{current.humidity} <p className="sign">%</p></span>
        </div>
        <div className="detail-cont">
          <p>Pressure</p>
          <span>{current.pressure_mb} <p className="sign">md</p> </span>
        </div>
      </div>
      </div>
      
      <div className="weather-left">
        <div className='weather-info'>
          <div className='date'>
            <p>{location.localtime}</p>
          </div>
          <div  className='country'>
            <p>{location.region}, {location.country}</p>
          </div>
        </div>

        <div className='left-detail1'>
          <div className="left-de-cont">
            <p>Feels Like</p>
            <span>{current.feelslike_c} °C</span>
          </div>
          <div className="left-de-cont">
            <p>Cloud</p>
            <span>{current.cloud}</span>
          </div>
          <div className="left-de-cont">
            <p>Wind Degrees</p>
            <span>{current.wind_degree}°</span>
          </div>
        </div>
       
        <div className='left-detail2'>
        <div className="left-de-cont">
            <p>Visibility:</p>
            <span>{current.vis_km}km</span>
          </div>
          <div className="left-de-cont">
            <p>Gust</p>
            <span>{current.gust_kph} kph</span>
          </div>
          <div className="left-de-cont">
            <p>temperature</p>
            <span>{current.temp_f}°F</span>
          </div>
        </div>
        <div className='left-detail3'>
        <img src={GraphImg} alt="" />
      </div>
      </div>

      
      
    </div>
  );
};

export default WeatherCard;
