import { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = "e7f955c38bef4c08965211958252505";

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          fetch(
            `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}`
          )
            .then((res) => res.json())
            .then((data) => setWeather(data))
            .catch((err) => setError("Failed to fetch weather data."));
        },
        () => {
          setError("Geolocation permission denied.");
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  if (error) {
    return <div className="text-sm text-red-400 text-center mt-4">{error}</div>;
  }

  if (!weather) {
    return (
      <div className="text-sm text-gray-400 text-center mt-4">
        Loading local weather...
      </div>
    );
  }

  return (
    <div className="mt-12 text-center text-sm text-gray-300">
      <p>
        📍 Weather in {weather.location.name}, {weather.location.country}:{" "}
        {weather.current.temp_c}°C, {weather.current.condition.text}
      </p>
      <img
        src={weather.current.condition.icon}
        alt={weather.current.condition.text}
        className="mx-auto mt-2"
      />
    </div>
  );
};

export default Weather;
