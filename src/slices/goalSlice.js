import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  goals: [{ title: 'Goal 1' }, { title: 'Goal 2' }],
  loading: false,
  error: false,
}

export const goalSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    addGoal: (state, action) => {
      console.log(action.payload)
      state.goals.push(action.payload)
    },
    editGoal: (state, action) => {
      console.log('ACTION', action.payload)
    },
  },
})

export const { addGoal, editGoal } = goalSlice.actions

export default goalSlice.reducer
