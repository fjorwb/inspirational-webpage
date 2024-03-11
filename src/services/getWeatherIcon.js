// import day from '../assets/day.png'

export const getWeatherIcon = ({ icon }) => {
  const weatherIcons = `https://openweathermap.org/img/wn/${icon}.png`
  if (weatherIcons === 'https://openweathermap.org/img/wn/undefined.png') {
    return 1
  }
  return weatherIcons
}

export default getWeatherIcon
