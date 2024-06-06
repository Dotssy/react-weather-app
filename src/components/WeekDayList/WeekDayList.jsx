import { useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContext';
import getWeekDayName from '../../utils/getWeekDayName';
import selectWeatherIcon from '../../utils/selectWeatherIcon';
import styles from './WeekDayList.module.css';

const WeekDayList = () => {
  const { weatherData } = useContext(WeatherContext);

  const makeForecastList = () => {
    if (!Object.keys(weatherData).length) return;

    const todayDate = weatherData.list[0].dt_txt.split(' ');

    const sortedDayList = weatherData.list.filter((elem) => {
      const date = elem.dt_txt.split(' ');

      if (todayDate[0] !== date[0] && todayDate[1] === date[1]) {
        return elem;
      }
    });

    return sortedDayList.map((elem) => {
      return (
        <li>
          <span className={styles.dayName}>{getWeekDayName(elem.dt)}</span>
          <span className={styles.dayTemp}>
            {`${Math.round(elem.main.temp_min)} º / ${Math.round(
              elem.main.temp_max
            )} º`}
          </span>
          <span className={styles.dayIcon}>
            {selectWeatherIcon(elem.weather[0].id)}
          </span>
        </li>
      );
    });
  };

  return <ul className={styles.weekDayList}>{makeForecastList()}</ul>;
};

export default WeekDayList;
