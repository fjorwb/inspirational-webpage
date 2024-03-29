/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { editGoal } from '../../slices/goalSlice'

import '../../styles/goal_bar.css'

export const EditGoal = ({ closeModal, goal }) => {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const handleEdit = (e) => {
    e.preventDefault()
    dispatch(editGoal({ id: goal.id, title: text }))
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
        onClick={handleEdit}
      >
        edit
      </button>
    </div>
  )
}

export default EditGoal
