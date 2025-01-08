import axios from "axios";

const baseurl = "http://api.openweathermap.org/data/2.5/weather?";
const apikey = "de2e398f6b59a258d55080a31937c82c";

// Utility function to fetch weather data
const Weather = async (cityname) => {
  try {
    const { data } = await axios.get(`${baseurl}q=${cityname}&appid=${apikey}`);
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export default Weather;
