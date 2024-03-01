import { useSelector } from 'react-redux'
import { Goal } from './goal'

import { Modal } from '../modal/modal'
import { useModal } from '../../hooks/useModal'

import { AddGoal } from '../goals/add_goal'

import '../../styles/goal_bar.css'

function GoalsBar() {
  const goals = useSelector((state) => state.goals.goals)

  const [isOpen, openModal, closeModal] = useModal(false)

  const handleAddGoal = () => {
    openModal()
  }

  return (
    <div>
      <div className='goals_bar_container'>
        <ul>
          {goals.map((goal) => (
            <li key={goal.id}>
              <Goal
                // key={goal.id}
                goal={goal}
              />
            </li>
          ))}
        </ul>
        <div className='goals_bar_btn_container'>
          <button
            className='goals_bar_btn'
            onClick={handleAddGoal}
          >
            add
          </button>
        </div>
      </div>
      <div>
        {isOpen ? (
          <Modal
            isOpen={isOpen}
            closeModal={closeModal}
          >
            <AddGoal closeModal={closeModal} />
          </Modal>
        ) : null}
      </div>
    </div>
  )
}

export default GoalsBar
