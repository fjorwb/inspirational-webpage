import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getRandomQuote } from '../services/getRandomQuote'

const initialState = {
  quote: `That's the risk `,
  // quote: `That's the risk you take if you change: that people you've been involved with won't like the new you. But other people who do will come along. —Lisa Alther`,
  status: 'idle',
  loading: false,
  error: null,
}

export const fetchQuote = createAsyncThunk('quote/fetchQuote', async () => {
  const response = await getRandomQuote()
  const data = response[0]
  return {
    quote: `${data.content} —${data.author}`,
  }
})

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    // getQuote: (state, action) => {
    //   state.quote = action.payload
    // },
    loading: (state) => {
      state.loading = true
    },
    error: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.quote = action.payload.quote
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { getQuote, loading, error } = quoteSlice.actions

export default quoteSlice.reducer
