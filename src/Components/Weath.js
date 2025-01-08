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
      className="h-screen bg-cover bg-no-repeat w-[100%] text-white flex flex-col gap-10"
      style={{ backgroundImage: `url('/weather5.jpg')` }}
    >
      {weatherdata && weatherdata.name && (
        <div className="flex items-center gap-8 my-[35%] w-1/3 mx-[10%] text-start   ">
          <h1 className="text-8xl font-bold">
            {Math.round(weatherdata.main.temp - 273.15)}°C
          </h1>
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl font-semibold">{weatherdata.name}</h1>
            <h1 className="text-sm font-bold">22:56 01-01-[72px]25</h1>
          </div>
          <LuCloudy className="text-7xl text-white" />
        </div>
      )}
      <div className="flex backdrop-blur backdrop-opacity-90 fixed overflow-y-auto  border-l-[2px] border-gray-600   flex-col w-[32%] mx-[870px]  h-[100vh]  py-5 abosolute">
        <div className="flex w-full  bg-transparent">
          <input
            type="text"
            placeholder="Search City"
            className=" py-2 w-[70%] bg-transparent mx-[45px] border-b-[1px] border-gray-[72px]0 text-white outline-none placeholder-gray-[72px]0 "
            onChange={(e) => setCity(e.target.value)}
          />
          <FaMagnifyingGlass
            onClick={() => getData()}
            className="text-white text-xl relative left-[-70px] top-[12px]"
          />
        </div>
        {weatherdata !== null ? (
          <div className="flex flex-col text-sm gap-8 w-[65%] text-white text-start my-5 mx-12">
            <h1>WEATHER.......</h1>
            <h1>THUNDERSTORM WITH LIGHT DRIZZLE</h1>

            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between w-full">
                <h1 className="text-sm ">Humidity</h1>
                <h1 className="text-sm ">{weatherdata.main.humidity}</h1>
                <FaTemperatureFull className="" />
              </div>
              <div className="flex items-center justify-between w-full">
                <h1 className="text-sm ">Pressure</h1>
                <h1 className="text-sm ">{weatherdata.main.pressure}</h1>
                <FaTemperatureFull className="" />
              </div>
              <div className="flex items-center justify-between w-full">
                <h1 className="text-sm ">Temp_Max</h1>
                <h1 className="text-sm ">
                  {Math.round(weatherdata.main.temp_max - 273.15)}°C
                </h1>
                <FaTemperatureFull className="" />
              </div>
              <div className="flex items-center justify-between w-full">
                <h1 className="text-sm ">Temp_Min</h1>
                <h1 className="text-sm ">
                  {Math.round(weatherdata.main.temp_min - 273.15)}°C
                </h1>
                <FaTemperatureFull className="text-red-400" />
              </div>
            </div>

            <hr />
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
        ) : null}
      </div>
    </div>
  );
};

export default Weath;
