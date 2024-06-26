const capitalize = (text) => {
  const words = text.split(' ');

  return words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(' ');
};

export default capitalize;
