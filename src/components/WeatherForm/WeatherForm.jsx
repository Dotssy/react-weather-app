import { useState, useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import { WeatherContext } from '../../context/WeatherContext';
import styles from './WeatherForm.module.css';

const WeatherForm = () => {
  const [cityName, setCityName] = useState('');
  const { fetchWeatherData } = useContext(WeatherContext);

  const handleOnChange = (e) => {
    setCityName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cityName.length) return;

    fetchWeatherData(cityName);
  };

  return (
    <form className={styles.weatherForm} onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleOnChange}
        value={cityName}
        placeholder="Type city name"
      />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default WeatherForm;
