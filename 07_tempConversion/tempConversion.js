const convertToCelsius = function(fahrenheitTemperature) {
  return +((fahrenheitTemperature-32)*5/9).toFixed(1);
};

const convertToFahrenheit = function(celsiusTemperature) {
  return +(celsiusTemperature*9/5+32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
