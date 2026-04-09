import { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d76a473146b2c74d50cbe28e44a9a130&units=metric`
      );
      const data = await res.json();
      setWeather(data);
    } catch {
      setWeather(null);
    }
  };

  return (
    <div>
      <h1>Weather</h1>

      <input
        type="text"
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Get Weather</button>

      {weather && weather.main ? (
        <p>{weather.main.temp} °C</p>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}

export default Weather;