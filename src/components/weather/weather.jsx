import '../../styles/weather.css'

import WeatherCard from '../weather/weather_card.jsx'

function Weather() {
  const loading = 'false'

  // console.log(weatherData)

  return <div>{loading ? <WeatherCard /> : <h3>loading.....</h3>}</div>
}

export default Weather
