import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setLocation } from '../../slices/weatherSlice'

import { useGeolocation } from '../../hooks/useGeolocation.js'

import { Loader } from '../loader/loader.jsx'

import '../../styles/weather.css'

import WeatherCard from '../weather/weather_card.jsx'

function Weather() {
  const loading = 'false'

  const image = useSelector((state) => state.weather.image)

  const location = useGeolocation()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLocation(location))
  }, [dispatch, location])

  const image_url = `url(${image})`

  const backgroundImage = document.querySelector('#root')
  backgroundImage.style.setProperty(`--bg`, `${image_url}`)


  return <div>{loading ? <WeatherCard /> : <Loader />}</div>
}

export default Weather
