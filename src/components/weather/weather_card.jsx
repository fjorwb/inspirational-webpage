const OW_ACCESS_KEY = import.meta.env.VITE_OPENWEATHERACCESSKEY

import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchWeather, fetchLocation, fetchImage } from '../../slices/weatherSlice'

import night from '../../assets/night.png'

import '../../styles/weather.css'

function WeatherCard() {
  const weatherData = useSelector((state) => state.weather.weather)
  const locationData = useSelector((state) => state.weather.location)

  const { lat, lon } = locationData

  const dispatch = useDispatch()

  const loading = useSelector((state) => state.weather.loading)
  // const error = useSelector((state) => state.weather.error)

  const [inputData, setInputData] = useState({})

  useEffect(() => {
    if (lat === undefined || lon === undefined) return
    if (lat === 0 || lon === 0) return
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OW_ACCESS_KEY}&units=metric`
    dispatch(fetchWeather(url))
  }, [dispatch, lat, lon])

  const name = weatherData.name
  const country = weatherData.sys?.country
  const wea = weatherData.weather?.[0].description
  const feels = weatherData.main?.feels_like
  const temp = weatherData.main?.temp

  const handleInput = (e) => {
    e.preventDefault()
    setInputData({ ...inputData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const city = inputData.city || ''
    const state = inputData.state || ''
    const country = inputData.country || ''
    const geo = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=1&appid=${OW_ACCESS_KEY}`
    dispatch(fetchLocation(geo))
  }

  // useEffect(() => {
  //   dispatch(fetchWeather(url))
  // }, [dispatch, url])

  useEffect(() => {
    wea && dispatch(fetchImage(wea))
  }, [dispatch, wea, weatherData])

  const render = loading ? (
    <h5>Loading...</h5>
  ) : (
    <div className='container'>
      <img
        src={night}
        alt='night'
      />
      <div>
        <p style={{ fontSize: '.65rem' }}>temperature / feels like</p>
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
      {/* <hr /> */}
    </div>
  )

  return render
}

export default WeatherCard
