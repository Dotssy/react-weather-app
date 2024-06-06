import { useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContext';
import { IoWater } from 'react-icons/io5';
import { FaWind } from 'react-icons/fa';
import styles from './AirConditions.module.css';

const AirConditions = () => {
  const { weatherData } = useContext(WeatherContext);

  return (
    <div className={styles.airConditions}>
      <div className={styles.humidity}>
        <span className={styles.title}>
          <IoWater />
          HUMIDITY
        </span>
        <span className={styles.value}>
          {!Object.keys(weatherData).length
            ? ''
            : `${weatherData.list[0].main.humidity} %`}
        </span>
      </div>
      <div className={styles.wind}>
        <span className={styles.title}>
          <FaWind />
          WIND
        </span>
        <span className={styles.value}>
          {!Object.keys(weatherData).length
            ? ''
            : `${weatherData.list[0].wind.speed} m/s`}
        </span>
      </div>
    </div>
  );
};

export default AirConditions;
