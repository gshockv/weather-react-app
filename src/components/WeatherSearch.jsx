import { useContext } from "react";
import { WeatherContext } from "../contexts/ContextProvider";

const WeatherSearch = () => {
  const { city, setCity, fetchWeather } = useContext(WeatherContext);

  const handleSearch = () => {
    fetchWeather(city);
    setCity("");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="p-5">
      <div className="flex gap-5 items-center w-full">
        <input
          type="text"
          className="border-b border-slate-400 bg-transparent w-full py-2 text-white placeholder:text-slate-300/50 focus:outline-none"
          placeholder="Enter City name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={handleSearch}
          disabled={!city}
          className="bg-slate-300/20 text-white rounded-md hover:bg-slate-300/30 hover:cursor-pointer transition duration-200 px-3 py-2"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default WeatherSearch;
