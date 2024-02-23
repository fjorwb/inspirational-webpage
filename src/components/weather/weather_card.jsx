import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import night from '../../assets/night.png'

import '../../styles/weather.css'

function WeatherCard() {
  const weatherData = useSelector((state) => state.weather.weather)
  console.log(weatherData)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'weather/getWeather' })
  }, [dispatch])

  const name = weatherData ? weatherData.name : ''
  const country = weatherData ? weatherData.sys.country : ''
  const wea = weatherData ? weatherData.weather[0].description : ''
  const temp = weatherData ? weatherData.main.temp : 0

  return (
    <div>
      <img
        src={night}
        alt='night'
      />
      <h2 className='text'>{Math.floor(temp)}C</h2>
      <h3 className='text'>
        {name}, {country}
      </h3>
      <h2 className='text'>{wea}</h2>
    </div>
  )
}

WeatherCard.propTypes = {
  name: PropTypes.string,
  country: PropTypes.string,
  wea: PropTypes.string,
  temp: PropTypes.number,
}

export default WeatherCard
