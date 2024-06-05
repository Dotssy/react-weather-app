const getDate = () => {
  const date = new Date().toUTCString();
  const extractedDateTime = date.slice(5, 16);
  return extractedDateTime.toLocaleString('en-US');
};

export default getDate;
