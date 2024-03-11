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

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async (url) => {
  // return await axios.get(url).then((response) => response.data)

  try {
    const response = await axios.get(url)
    return response.data
  } catch {
    // console.log('ERROR')
    throw new Error('Error')
  }
})

export const fetchLocation = createAsyncThunk('weather/fetchLocation', async (geo) => {
  return await axios.get(geo).then((response) => response.data)
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
    setLocationNotFount: (state, action) => {
      console.log('ERROR SLICE', action.payload)
      state.loading = false
      state.error = action.payload
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
        state.weather = []
      }),
      builder.addCase(fetchLocation.pending, (state) => {
        state.loading = true
        state.error = null
      }),
      builder.addCase(fetchLocation.fulfilled, (state, action) => {
        if (action.payload[0] !== undefined) {
          state.location = { lat: action.payload[0]?.lat, lon: action.payload[0]?.lon }
        } else {
          state.loading = false
          state.error = 'Location not found'
        }
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

export const { setLocation, setLocationNotFount } = weatherSlice.actions

export default weatherSlice.reducer
