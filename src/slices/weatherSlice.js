import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { getBackGroundImage } from '../services/getBackGroundImage'

const initialState = {
  weather: [],
  location: { lat: -12.0979, lon: -77.0021 },
  image: null,
  loading: false,
  error: null,
}

export const fetchWeather = createAsyncThunk('weather/fetchWeather', (url) => {
  // console.log(url)
  return axios.get(url).then((response) => response.data)
})

export const fetchLocation = createAsyncThunk('weather/fetchLocation', (geo) => {
  return axios
    .get(
      geo
      // 'http://api.openweathermap.org/geo/1.0/direct?q={city},{state},{country}&limit={limit}&appid=7c4780e83d9cbb9bbc9d0f863c745130'
    )
    .then((response) => response.data)
})

export const fetchImage = createAsyncThunk('weather/fetchImage', async (query = query || 'sol') => {
  return await getBackGroundImage(query)
})

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.loading = true
      state.error = null
    }),
      builder.addCase(fetchWeather.fulfilled, (state, action) => {
        state.weather = action.payload
        state.loading = false
        state.error = null
      }),
      builder.addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      }),
      builder.addCase(fetchLocation.pending, (state) => {
        state.loading = true
        state.error = null
      }),
      builder.addCase(fetchLocation.fulfilled, (state, action) => {
        state.location = { lat: action.payload[0].lat, lon: action.payload[0].lon }
        state.loading = false
        state.error = null
      }),
      builder.addCase(fetchLocation.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      }),
      builder.addCase(fetchImage.pending, (state) => {
        state.loading = true
        state.error = null
      }),
      builder.addCase(fetchImage.fulfilled, (state, action) => {
        state.loading = false
        state.image = action.payload
        state.error = null
      }),
      builder.addCase(fetchImage.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const { setLocation } = weatherSlice.actions

export default weatherSlice.reducer
