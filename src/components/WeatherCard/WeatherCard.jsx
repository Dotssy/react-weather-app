import { useContext } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { WeatherContext } from '../../context/WeatherContext';
import capitalize from '../../utils/capitalize';
import getWeekDayName from '../../utils/getWeekDayName';
import getDate from '../../utils/getDate';
import selectWeatherIcon from '../../utils/selectWeatherIcon';
import styles from './WeatherCard.module.css';

const WeatherCard = () => {
  const { weatherData } = useContext(WeatherContext);

  return (
    <div className={styles.weatherCard}>
      <div className={styles.weatherGradient}></div>

      {!Object.keys(weatherData).length ? (
        ''
      ) : (
        <>
          <div className={styles.dateContainer}>
            <h2 className={styles.dayName}>
              {getWeekDayName(weatherData.list[0].dt)}
            </h2>
            <span className={styles.dateDay}>{getDate()}</span>
            <span className={styles.location}>
              <IoLocationSharp />
              {weatherData.city.name}
            </span>
          </div>
          <div className={styles.weatherContainer}>
            <span className={styles.weatherIcon}>
              {selectWeatherIcon(weatherData.list[0].weather[0].id)}
            </span>
            <h1 className={styles.weatherTemp}>
              {Math.round(weatherData.list[0].main.temp) + 'ºC'}
            </h1>
            <h3 className={styles.weatherDesc}>
              {capitalize(weatherData.list[0].weather[0].description)}
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherCard;
