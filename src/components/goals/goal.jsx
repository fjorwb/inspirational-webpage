/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'

import { Modal } from '../modal/modal'
import { useModal } from '../../hooks/useModal'

import { EditGoal } from '../goals/edit_goal'

import '../../styles/goal.css'

export function Goal({ goal }) {
  const goals = useSelector((state) => state.goals.goals)
  console.log(goals)

  const [isOpen, openModal, closeModal] = useModal(false)

  const handleEditQuote = () => {
    // console.log('edit goal!!')
    openModal()
  }

  const handleDeleteQuote = () => {
    console.log('delete goal')
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
        <p className='goal_title'>{goal}</p>
      </div>
      <div>
        {isOpen ? (
          <Modal
            isOpen={isOpen}
            closeModal={closeModal}
          >
            <EditGoal closeModal={closeModal} />
          </Modal>
        ) : null}
      </div>
    </div>
  )
}

export default Goal
