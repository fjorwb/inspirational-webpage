import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setLocation } from '../../slices/weatherSlice'

import { useGeolocation } from '../../hooks/useGeolocation.js'

import '../../styles/weather.css'

import WeatherCard from '../weather/weather_card.jsx'

function Weather() {
  const loading = 'false'

  // const weather = useSelector((state) => state.weather.weather)
  const image = useSelector((state) => state.weather.image)
  // const loading = useSelector((state) => state.weather.loading)
  // console.log(loading)

  const location = useGeolocation()
  // console.log(location)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLocation(location))
  }, [dispatch, location])

  // useEffect(() => {
  // dispatch(fetchWeather())
  // }, [dispatch])

  // const wea = Object.entries(weather).length === 0 ? 'XXXX' : weather.weather[0].description

  // let query = `${wea} ${weather.name || ''}`
  // console.log(query)

  // useEffect(() => {
  //   dispatch(fetchImage(query))
  // }, [dispatch, query])

  const image_url = `url(${image})`

  const xxx = document.querySelector('#root')
  xxx.style.setProperty(`--bg`, `${image_url}`)

  // console.log(weatherData)

  return <div>{loading ? <WeatherCard /> : <h3>loading.....</h3>}</div>
  // return <WeatherCard />
}

export default Weather
