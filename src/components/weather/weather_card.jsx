import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchWeather, fetchLocation } from '../../slices/weatherSlice'

import night from '../../assets/night.png'

import '../../styles/weather.css'

function WeatherCard() {
  const weatherData = useSelector((state) => state.weather.weather)
  const locationData = useSelector((state) => state.weather.location)

  const loading = useSelector((state) => state.weather.loading)
  // const error = useSelector((state) => state.weather.error)

  const [inputData, setInputData] = useState({})

  let lat = locationData ? locationData.lat : -12.0979
  let lon = locationData ? locationData.lon : -77.0021

  const OW_ACCESS_KEY = import.meta.env.VITE_OPENWEATHERACCESSKEY
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OW_ACCESS_KEY}&units=metric`

  const dispatch = useDispatch()

  const handleInput = (e) => {
    e.preventDefault()
    setInputData({ ...inputData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const city = inputData.city
    const state = inputData.state
    const country = inputData.country
    const geo = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=1&appid=${OW_ACCESS_KEY}`
    dispatch(fetchLocation(geo))
  }

  useEffect(() => {
    dispatch(fetchWeather(url))
  }, [dispatch, url])

  const name = weatherData.name
  const country = weatherData.sys?.country
  const wea = weatherData.weather?.[0].description
  const feels = weatherData.main?.feels_like
  const temp = weatherData.main?.temp

  const render = loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <img
        src={night}
        alt='night'
      />
      <div>
        <p style={{ fontSize: '.95rem' }}>temperature / feels like</p>
        <p className='temp'>
          {Math.floor(temp)}°C / {Math.floor(feels)}°C
        </p>
        <p className='text'>
          {name}, {country}
        </p>
        <p className='text'>{wea}</p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='city'
            placeholder='Enter City'
            onChange={handleInput}
          />
          <input
            type='text'
            name='state'
            placeholder='Enter State'
            onChange={handleInput}
          />
          <input
            type='text'
            name='country'
            placeholder='Enter Country'
            onChange={handleInput}
          />
          <button
            className='btn'
            type='submit'
          >
            enter
          </button>
        </form>
      </div>
      <hr />
    </div>
  )

  return render
}

export default WeatherCard
