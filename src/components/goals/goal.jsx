/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from 'react-redux'

import { Modal } from '../modal/modal'
import { useModal } from '../../hooks/useModal'

import { deleteGoal } from '../../slices/goalSlice'

import { EditGoal } from '../goals/edit_goal'

import '../../styles/goal.css'

export function Goal({ goal, key }) {
  const dispatch = useDispatch()

  const [isOpen, openModal, closeModal] = useModal(false)

  const handleEditQuote = () => {
    openModal()
  }

  const handleDeleteQuote = () => {
    dispatch(deleteGoal({ id: goal.id }))
  }

  return (
    <div>
      <div className='goal_container'>
        <div className='goal_btn_container'>
          <button
            className='goal_btn edit_btn'
            onClick={handleEditQuote}
          >
            edit
          </button>
          <button
            className='goal_btn delete_btn'
            onClick={handleDeleteQuote}
          >
            delete
          </button>
        </div>
        <p className='goal_title'>{goal.title}</p>
      </div>
      <div>
        {isOpen ? (
          <Modal
            isOpen={isOpen}
            closeModal={closeModal}
          >
            <EditGoal
              closeModal={closeModal}
              goal={goal}
            />
          </Modal>
        ) : null}
      </div>
    </div>
  )
}

export default Goal
