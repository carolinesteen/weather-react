import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [loaded, setLoaded] = useState(false);
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [desc, setDesc] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");

  function showTemp(response) {
    setLoaded(true);
    console.log(response.data);
    setTemperature(Math.round(response.data.temperature.current));
    setDesc(response.data.condition.description);
    setHumidity(response.data.temperature.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "42e4tbb0e36fc43f4faaf7e2bob6c342";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(showTemp);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <h3>Current weather in {city}</h3>
        <ul>
          <li>
            <img src={icon} alt="weather icon"></img>
          </li>
          <li>Temperature: {temperature}°C</li>
          <li>Description: {desc}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind} km/h</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
