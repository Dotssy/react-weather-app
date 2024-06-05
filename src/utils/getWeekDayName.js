const getWeekDayName = (dt) => {
  const dayName = new Date(dt * 1000).toLocaleDateString('en-US', {
    weekday: 'long',
  });

  return dayName;
};

export default getWeekDayName;
