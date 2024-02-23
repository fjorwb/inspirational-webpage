import { configureStore } from '@reduxjs/toolkit'

import { weatherSlice } from '../slices/weatherSlice'

const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer,
  },
})

export { store }
