import { FaSearch } from 'react-icons/fa';
import styles from './WeatherForm.module.css';

const WeatherForm = () => {
  return (
    <form className={styles.weatherForm}>
      <input type="text" placeholder="Type city name" />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default WeatherForm;
