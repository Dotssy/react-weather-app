import { IoIosSunny, IoIosThunderstorm, IoIosCloudy } from 'react-icons/io';
import { BsCloudDrizzleFill } from 'react-icons/bs';
import { IoRainy } from 'react-icons/io5';
import { FaRegSnowflake } from 'react-icons/fa';
import { MdFoggy, MdOutlineQuestionMark } from 'react-icons/md';

const selectWeatherIcon = (weatherId) => {
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      return <IoIosThunderstorm />;
    case weatherId >= 300 && weatherId < 400:
      return <BsCloudDrizzleFill />;
    case weatherId >= 500 && weatherId < 600:
      return <IoRainy />;
    case weatherId >= 600 && weatherId < 700:
      return <FaRegSnowflake />;
    case weatherId >= 700 && weatherId < 800:
      return <MdFoggy />;
    case weatherId === 800:
      return <IoIosSunny />;
    case weatherId >= 801 && weatherId < 810:
      return <IoIosCloudy />;
    default:
      return <MdOutlineQuestionMark />;
  }
};

export default selectWeatherIcon;
