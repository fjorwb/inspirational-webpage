import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getWeather } from '../services/getWeather'

// const url =
// 'https://api.openweathermap.org/data/2.5/weather?lat=-12.09645155&lon=-76.99568986771155&appid=7c4780e83d9cbb9bbc9d0f863c745130&units=metric'

const wwww = {
  coord: {
    lon: -77.0008,
    lat: -12.1022,
  },
  weather: [
    {
      id: 802,
      main: 'Clouds',
      description: 'scattered clouds',
      icon: '03d',
    },
  ],
  base: 'stations',
  main: {
    temp: 25.2,
    feels_like: 25.68,
    temp_min: 25.2,
    temp_max: 25.2,
    pressure: 1013,
    humidity: 73,
  },
  visibility: 10_000,
  wind: {
    speed: 4.63,
    deg: 170,
  },
  clouds: {
    all: 40,
  },
  dt: 1_708_614_920,
  sys: {
    type: 1,
    id: 8_682,
    country: 'PE',
    sunrise: 1_708_600_159,
    sunset: 1_708_644_848,
  },
  timezone: -18_000,
  id: 3_929_792,
  name: 'San Borja',
  cod: 200,
}

const initialState = {
  weather: {},
  loading: false,
  error: null,
}

export const fetchWeather = createAsyncThunk('weather/getWeather', async () => {
  const response = await getWeather()
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => error)

  return response ? response : wwww
})

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.loading = true
    }),
      builder.addCase(fetchWeather.fulfilled, (state, action) => {
        state.weather = action.payload
        state.loading = false
      }),
      builder.addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default weatherSlice.reducer
