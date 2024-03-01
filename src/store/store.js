import { configureStore } from '@reduxjs/toolkit'

import { weatherSlice } from '../slices/weatherSlice'
import { quoteSlice } from '../slices/quoteSlice'
import { goalSlice } from '../slices/goalSlice'

const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer,
    quote: quoteSlice.reducer,
    goals: goalSlice.reducer,
  },
})

export { store }
