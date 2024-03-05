export const getWeatherIcon = ({ icon }) => {
  const weatherIcons = `https://openweathermap.org/img/wn/${icon}.png`
  return weatherIcons
}

export default getWeatherIcon
