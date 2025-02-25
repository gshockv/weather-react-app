import axios from "axios";
import { getName } from "country-list";
import { format } from "date-fns";
import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

const ContextProvider = ({ children }) => {
  const API_KEY = "cfabaca89a0ae0ff7d25a35b7dac5aa4";

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (cityName) => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

    try {
        setLoading(true);

        const response = await axios.get(weatherUrl);
        const data = response.data;
        const countryCode = data.sys.country;
        const country = getName(countryCode);
        const date = new Date();
        const formattedDate = format(date, "EEEE MMM d, yyyy");

        setWeather({...data, country, formattedDate});
        setError("");
      } catch (e) {
        console.error(e);
        setWeather(null);
        setError("City not found");
      } finally {
        setLoading(false);
      }
  };

  useEffect(() => {
    fetchWeather("Odesa");
  }, []);

  return (
    <WeatherContext.Provider value={{ city, setCity, weather, fetchWeather, error, loading }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default ContextProvider;
