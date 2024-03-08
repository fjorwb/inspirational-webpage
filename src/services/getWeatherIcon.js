// import day from '../assets/day.png'

export const getWeatherIcon = ({ icon }) => {
  const weatherIcons = `https://openweathermap.org/img/wn/${icon}.png`
  console.log(weatherIcons)
  if (weatherIcons === 'https://openweathermap.org/img/wn/undefined.png') {
    // throw new Error('not weather icon found')
    return 1
  }
  return weatherIcons
}

export default getWeatherIcon
