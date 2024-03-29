const OW_ACCESS_KEY = import.meta.env.VITE_OPENWEATHERACCESSKEY

import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Loader } from '../loader/loader.jsx'

import {
  fetchWeather,
  fetchLocation,
  fetchImage,
  setLocationNotFount,
} from '../../slices/weatherSlice'

import { getWeatherIcon } from '../../services/getWeatherIcon'

import '../../styles/weather.css'

export function WeatherCard() {
  const weatherData = useSelector((state) => state.weather.weather)
  const locationData = useSelector((state) => state.weather.location)
  const loading = useSelector((state) => state.weather.loading)
  const error = useSelector((state) => state.weather.error)

  const { lat, lon } = locationData

  const dispatch = useDispatch()

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
  const weatherIcon =
    getWeatherIcon({ icon: weatherData.weather?.[0].icon }) === 1
      ? ''
      : getWeatherIcon({ icon: weatherData.weather?.[0].icon })

  const handleInput = (e) => {
    e.preventDefault()
    setInputData({ ...inputData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const city = inputData.city || ''
    const state = inputData.state || ''
    const country = inputData.country || ''
    const query = `${city},${state},${country}`
    const geo = `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${OW_ACCESS_KEY}`
    dispatch(fetchLocation(geo))
    setInputData({})
  }

  useEffect(() => {
    dispatch(fetchWeather())
  }, [dispatch])

  useEffect(() => {
    const query = `${wea} ${name}` || ''
    wea && dispatch(fetchImage(query))
  }, [dispatch, wea, name, weatherData])

  useEffect(() => {
    if (error === 'Location not found') {
      setTimeout(() => dispatch(setLocationNotFount(false)), 1500)
    }
  }, [error, dispatch])

  const render = loading ? (
    // <h5>Loading...</h5>
    <Loader />
  ) : (
    <div className='weather-container'>
      <div className='weather_img'>
        <img
          src={weatherIcon}
          alt={wea}
          style={{
            width: '125px',
            height: '125px',
            margin: '0 auto',
            padding: '0',
          }}
        />
      </div>
      <div className='weather_data'>
        <p style={{ fontSize: '.65rem' }}>temperature / feels like</p>
        <p className='weather_data_temp'>
          {Math.floor(temp)}°C / {Math.floor(feels)}°C
        </p>
        <p className='weather_data_text'>
          {name}, {country}
        </p>
        <p className='weather_data_text'>{wea}</p>
      </div>
      <div className='weather_search'>
        {error ? (
          <p style={{ color: 'darkorange' }}>location not found</p>
        ) : (
          <form
            className='weather_data_form'
            onSubmit={handleSubmit}
          >
            <input
              type='text'
              className='weather_data_input'
              name='city'
              placeholder='Enter City'
              onChange={(e) => handleInput(e)}
            />
            <input
              type='text'
              className='weather_data_input'
              name='state'
              placeholder='Enter State'
              onChange={(e) => handleInput(e)}
            />
            <input
              type='text'
              className='weather_data_input'
              name='country'
              placeholder='Enter Country'
              onChange={(e) => handleInput(e)}
            />
            <button
              className='weather_data_btn'
              type='submit'
            >
              Enter
            </button>
          </form>
        )}
      </div>
    </div>
  )

  return render
}

export default WeatherCard
