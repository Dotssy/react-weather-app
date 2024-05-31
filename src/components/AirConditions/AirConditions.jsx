import { IoWater } from 'react-icons/io5';
import { FaWind } from 'react-icons/fa';
import styles from './AirConditions.module.css';

const AirConditions = () => {
  return (
    <div className={styles.airConditions}>
      <div className={styles.humidity}>
        <span className={styles.title}>
          <IoWater />
          HUMIDITY
        </span>
        <span className={styles.value}>42 %</span>
      </div>
      <div className={styles.wind}>
        <span className={styles.title}>
          <FaWind />
          WIND
        </span>
        <span className={styles.value}>5.21 m/s</span>
      </div>
    </div>
  );
};

export default AirConditions;
