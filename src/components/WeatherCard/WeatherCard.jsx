import { IoLocationSharp } from 'react-icons/io5';
import { IoIosSunny } from 'react-icons/io';
import styles from './WeatherCard.module.css';

const WeatherCard = () => {
  return (
    <div className={styles.weatherCard}>
      <div className={styles.weatherGradient}></div>
      <div className={styles.dateContainer}>
        <h2 className={styles.dayName}>Thursday</h2>
        <span className={styles.dateDay}>30 May 2024</span>
        <span className={styles.location}>
          <IoLocationSharp />
          Boston
        </span>
      </div>
      <div className={styles.weatherContainer}>
        <span className={styles.weatherIcon}>
          <IoIosSunny />
        </span>
        <h1 className={styles.weatherTemp}>12ºC</h1>
        <h3 className={styles.weatherDesc}>Heavy Intensity Rain</h3>
      </div>
    </div>
  );
};

export default WeatherCard;
