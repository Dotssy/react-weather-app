import AirConditions from '../AirConditions/AirConditions';
import WeekDayList from '../WeekDayList/WeekDayList';
import WeatherForm from '../WeatherForm/WeatherForm';
import styles from './WeatherInfo.module.css';

const WeatherInfo = () => {
  return (
    <div className={styles.weatherInfo}>
      <AirConditions />
      <WeekDayList />
      <WeatherForm />
    </div>
  );
};

export default WeatherInfo;
