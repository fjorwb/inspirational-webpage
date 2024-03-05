export const getWeatherIcon = ({ icon }) => {
  const weatherIcons = `https://openweathermap.org/img/wn/${icon}.png`
  console.log(weatherIcons)
  return weatherIcons
}

export default getWeatherIcon
