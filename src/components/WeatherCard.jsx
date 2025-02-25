import { useContext } from "react";
import { WeatherContext } from "../contexts/ContextProvider";
import weatherIcons from "./WeatherIcons";

import notfound from "../assets/notfound.png";

const WeatherCard = () => {
  const { weather, error, loading } = useContext(WeatherContext);

  const weatherDescription = weather?.weather[0]?.main;
  const iconUrl = weatherIcons[weatherDescription];

  if (loading)
    return (
      <span className="relative flex mt-5 h-8 w-8 mx-auto">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-8 w-8 bg-sky-500"></span>
      </span>
    );

  if (error)
    return (
      <div className="mt-5 mx-auto px-5 w-full flex flex-col items-center">
        <img src={notfound} alt="City not found" className="h-32 mb-5" />
        <p className="text-red-500">{error}</p>
      </div>
    );

  return (
    <>
      {weather && (
        <div className="flex flex-col gap-5 text-slate-300 p-5">
          <p className="text-2xl font-bold">
            {weather.name}, <span>{weather.country}</span>
          </p>
          <p className="font-light text-lg -mt-5">{weather.formattedDate}</p>
          <div className="mt-10 mx-auto w-full flex flex-col gap-3 items-center">
            <img src={iconUrl} alt={weatherDescription} className="w-40 mb-5" />
            <div className="">
              <p className="font-semibold text-5xl">
                {" "}
                {weather.main.temp} <span className="text-3xl">&deg;C</span>
              </p>
              <span className="font-light">
                {weather.weather[0].description}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherCard;
