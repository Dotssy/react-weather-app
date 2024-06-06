import { createContext, useState } from 'react';
import axios from 'axios';
import { apiKey } from '../api/apiKey';

export const WeatherContext = createContext();

const WeatherContextProvider = (props) => {
  const [weatherData, setWeatherData] = useState({});

  const fetchGeoData = async (cityName) => {
    const geoURL = 'http://api.openweathermap.org/geo/1.0/direct';

    try {
      const geoRes = await axios.get(geoURL, {
        params: {
          appid: apiKey,
          q: cityName,
          limit: '1',
        },
      });

      if (!geoRes.data.length) {
        console.log('Please enter a valid city name');
        return;
      }

      return geoRes;
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchWeatherData = async (cityName) => {
    const geoData = await fetchGeoData(cityName);

    if (!geoData) return;

    const coords = { lon: geoData.data[0].lon, lat: geoData.data[0].lat };
    const weatherURL = 'http://api.openweathermap.org/data/2.5/forecast';

    try {
      const weatherRes = await axios.get(weatherURL, {
        params: {
          lon: coords.lon,
          lat: coords.lat,
          appid: apiKey,
          units: 'metric',
        },
      });
      setWeatherData(weatherRes.data);
    } catch (error) {
      console.log('Called: ', error.message);
    }
  };

  return (
    <WeatherContext.Provider value={{ weatherData, fetchWeatherData }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
