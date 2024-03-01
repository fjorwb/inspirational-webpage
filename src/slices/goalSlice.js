import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  goals: [
    { id: '52e5cddd-e85d-449b-a097-99eef4c727c9', title: 'Goal 1' },
    { id: '32ef2461-9966-47ad-97e2-c07e3950f318', title: 'Goal 2' },
  ],
  loading: false,
  error: false,
}

export const goalSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    addGoal: (state, action) => {
      state.goals.push(action.payload)
    },
    editGoal: (state, action) => {
      state.goals = state.goals.map((goal) => {
        if (goal.id === action.payload.id) {
          return {
            ...goal,
            title: action.payload.title,
          }
        }
        return goal
      })
    },
    deleteGoal: (state, action) => {
      state.goals = state.goals.filter((goal) => goal.id !== action.payload.id)
    },
  },
})

export const { addGoal, editGoal, deleteGoal } = goalSlice.actions

export default goalSlice.reducer
