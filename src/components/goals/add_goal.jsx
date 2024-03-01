/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addGoal } from '../../slices/goalSlice'

import '../../styles/goal_bar.css'

export const AddGoal = ({ closeModal }) => {
  const [text, setText] = useState('')
  console.log(text)

  const dispatch = useDispatch()

  const handleAddGoal = (e) => {
    e.preventDefault()
    dispatch(addGoal({ title: text }))
    closeModal()
  }

  return (
    <div className='goals_bar_add_container'>
      <h1 className='goal_bar_title'>Add Goal</h1>
      <input
        className='goal_bar_add_input'
        type='text'
        onChange={(e) => setText(e.target.value)}
        placeholder='enter goal...'
      />
      <button
        className='goals_bar_btn'
        onClick={handleAddGoal}
      >
        Add
      </button>
    </div>
  )
}

export default AddGoal
