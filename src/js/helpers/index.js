export const convertTimestampToDate = (timestamp) => {
  return new Date(timestamp * 1000);
};

export const getShortTime = (date) => {
  return date.toTimeString().slice(0, 5);
}

export const getWindIcon = (deg) => {
  return `from-${deg.toString()}-deg`;
}

export const getWindDirectionFrom = (deg) => {
  const compassPoints = [
    'N', 'NNE', 'NE', 'ENE',
    'E', 'ESE', 'SE', 'SSE',
    'S', 'SSW', 'SW', 'WSW',
    'W', 'WNW', 'NW', 'NNW',
  ];
  const position = Math.round(deg / 22.5) % 16;
  return compassPoints[position];
};
