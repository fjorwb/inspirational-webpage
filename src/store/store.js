import { configureStore } from '@reduxjs/toolkit'

import { weatherSlice } from '../slices/weatherSlice'
import { quoteSlice } from '../slices/quoteSlice'

const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer,
    quote: quoteSlice.reducer,
  },
})

export { store }
