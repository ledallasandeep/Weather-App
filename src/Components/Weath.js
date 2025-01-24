import React, { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineWindPower } from "react-icons/md";
import { LuCloudy } from "react-icons/lu";
import { FaTemperatureFull } from "react-icons/fa6";
import Weather from "./Weather";

const Weath = () => {
  const [weatherdata, setWeatherData] = useState(null);
  const [city, setCity] = useState("London");
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      const data = await Weather(city);
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className="h-screen bg-cover bg-no-repeat w-full text-white flex flex-col gap-10"
      style={{ backgroundImage: `url('/weather5.jpg')` }}
    >
      {weatherdata && weatherdata.name && (
        <div className="flex flex-col md:flex-row items-center  gap-8 my-[35%] mx-[10%] w-4/5 md:w-2/3 text-center md:text-start">
          <h1 className="text-6xl md:text-8xl font-bold">
            {Math.round(weatherdata.main.temp - 273.15)}°C
          </h1>
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl md:text-5xl font-semibold">
              {weatherdata.name}
            </h1>
            <h1 className="text-sm md:text-base font-bold">22:56 01-01</h1>
          </div>
          <LuCloudy className="text-5xl md:text-7xl text-white" />
        </div>
      )}

      <div className="flex flex-col fixed top-0 right-0 overflow-y-scroll w-full md:w-1/3 h-full py-5 bg-black bg-opacity-50 backdrop-blur-md border-l border-gray-600">
        <div className="flex items-center w-full px-5 md:px-10">
          <form onSubmit={() => getData()} className="w-full">
            <input
              type="text"
              placeholder="Search City"
              className="w-[100%] py-2 bg-transparent border-b border-gray-600 text-white outline-none placeholder-gray-400"
              onChange={(e) => setCity(e.target.value)}
            />
          </form>
          <FaMagnifyingGlass
            onClick={() => getData()}
            className="text-white text-xl ml-2 cursor-pointer"
          />
        </div>

        {weatherdata && (
          <div className="flex flex-col gap-8 w-full px-5 md:px-10 text-white mt-10">
            <h1 className="text-lg font-bold">
              WEATHER {Math.round(weatherdata.main.temp - 273.15)}°C
            </h1>
            <h1 className="text-sm font-medium">
              THUNDERSTORM WITH LIGHT DRIZZLE
            </h1>

            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h1 className="text-sm">Humidity</h1>
                <h1 className="text-sm">{weatherdata.main.humidity}%</h1>
                <FaTemperatureFull />
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-sm">Pressure</h1>
                <h1 className="text-sm">{weatherdata.main.pressure} </h1>
                <FaTemperatureFull />
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-sm">Temp Max</h1>
                <h1 className="text-sm">
                  {Math.round(weatherdata.main.temp_max - 273.15)}°C
                </h1>
                <FaTemperatureFull />
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-sm">Temp Min</h1>
                <h1 className="text-sm">
                  {Math.round(weatherdata.main.temp_min - 273.15)}°C
                </h1>
                <FaTemperatureFull className="text-red-400" />
              </div>
            </div>

            <hr className="border-gray-600" />
            <div className="flex flex-col gap-3">
              <h1 className="text-lg">Today's Weather Forecast</h1>
              <div className="flex items-center justify-between">
                <MdOutlineWindPower className="text-3xl" />
                <h1>{weatherdata.wind.speed}</h1>
                <h1>{weatherdata.wind.deg}°C</h1>
              </div>
              <div className="flex items-center justify-between">
                <MdOutlineWindPower className="text-3xl" />
                <h1>19:00</h1>
                <h1>16°C</h1>
              </div>
              <div className="flex items-center justify-between">
                <MdOutlineWindPower className="text-3xl" />
                <h1>19:00</h1>
                <h1>16°C</h1>
              </div>
              <div className="flex items-center justify-between">
                <MdOutlineWindPower className="text-3xl" />
                <h1>19:00</h1>
                <h1>16°C</h1>
              </div>
              <div className="flex items-center justify-between">
                <MdOutlineWindPower className="text-3xl" />
                <h1>19:00</h1>
                <h1>16°C</h1>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weath;
