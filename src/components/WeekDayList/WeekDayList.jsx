import { IoIosSunny } from 'react-icons/io';
import styles from './WeekDayList.module.css';

const WeekDayList = () => {
  return (
    <ul className={styles.weekDayList}>
      <li>
        <span className={styles.dayName}>Friday</span>
        <span className={styles.dayTemp}>22º / 24º</span>
        <span className={styles.dayIcon}>
          <IoIosSunny />
        </span>
      </li>
      <li>
        <span className={styles.dayName}>Saturday</span>
        <span className={styles.dayTemp}>22º / 24º</span>
        <span className={styles.dayIcon}>
          <IoIosSunny />
        </span>
      </li>
      <li>
        <span className={styles.dayName}>Sunday</span>
        <span className={styles.dayTemp}>22º / 24º</span>
        <span className={styles.dayIcon}>
          <IoIosSunny />
        </span>
      </li>
      <li>
        <span className={styles.dayName}>Monday</span>
        <span className={styles.dayTemp}>22º / 24º</span>
        <span className={styles.dayIcon}>
          <IoIosSunny />
        </span>
      </li>
    </ul>
  );
};

export default WeekDayList;
