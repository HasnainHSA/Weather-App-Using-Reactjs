import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import "./index.css";

const API_KEY = "c2d9227d281142de99a43440232708";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
      );
      const newWeatherData = [response.data, ...weatherData];
      setWeatherData(newWeatherData);
      setCity("");
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="weather-app">
      <div className="weather-search">
        <h1>Weather App</h1>
        <div className="weather-input">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={fetchWeather}>Get Weather</button>
        </div>
      </div>

      <div className="weather-cards">
        {weatherData.map((data, index) => (
          <WeatherCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default WeatherApp;
