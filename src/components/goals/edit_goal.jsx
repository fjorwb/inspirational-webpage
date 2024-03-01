/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { editGoal } from '../../slices/goalSlice'

import '../../styles/goal_bar.css'

export const EditGoal = ({ closeModal }) => {
  const [text, setText] = useState('')
  console.log(text)

  const dispatch = useDispatch()

  const handleEditGoal = () => {
    console.log(text)
    dispatch(editGoal({ title: text }))
    closeModal()
  }

  return (
    <div className='goals_bar_add_container'>
      <h1 className='goal_bar_title'>Edit Goal</h1>
      <input
        className='goal_bar_add_input'
        type='text'
        onChange={(e) => setText(e.target.value)}
        placeholder='enter goal...'
      />
      <button
        className='goals_bar_btn'
        onClick={handleEditGoal}
      >
        edit
      </button>
    </div>
  )
}

export default EditGoal
