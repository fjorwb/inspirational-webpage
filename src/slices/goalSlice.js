import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  goals: localStorage.getItem('goals') ? JSON.parse(localStorage.getItem('goals')) : [],
  loading: false,
  error: false,
}

export const goalSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    addGoal: (state, action) => {
      state.goals.push(action.payload)
      localStorage.setItem('goals', JSON.stringify(state.goals))
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
      localStorage.setItem('goals', JSON.stringify(state.goals))
    },
    deleteGoal: (state, action) => {
      state.goals = state.goals.filter((goal) => goal.id !== action.payload.id)
      localStorage.setItem('goals', JSON.stringify(state.goals))
    },
  },
})

export const { addGoal, editGoal, deleteGoal } = goalSlice.actions

export default goalSlice.reducer
