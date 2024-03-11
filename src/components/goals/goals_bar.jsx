import { useSelector } from 'react-redux'
import { Goal } from './goal'

import { Modal } from '../modal/modal'
import { useModal } from '../../hooks/useModal'

import { AddGoal } from '../goals/add_goal'
import { EditGoal } from '../goals/edit_goal'

import '../../styles/goal_bar.css'

function GoalsBar() {
  const goals = useSelector((state) => state.goals.goals)

  const [isOpenAddGoal, openModalAddGoal, closeModalAddGoal] = useModal(false)
  const [isOpenEditGoal, openModalEditGoal, closeModalEditGoal] = useModal(false)

  const handleAddGoal = () => {
    openModalAddGoal()
  }

  const handleEditGoal = () => {
    openModalEditGoal()
  }

  return (
    <div>
      <div className='goals_bar_container'>
        <ul className='goals_list'>
          {goals.map((goal) => (
            <li key={goal.id}>
              <Goal
                // key={goal.id}
                goal={goal}
                handleEditGoal={handleEditGoal}
              />
            </li>
          ))}
        </ul>
        <div className='goals_bar_btn_container'>
          <button
            className='goals_bar_btn'
            onClick={handleAddGoal}
          >
            add goal
          </button>
        </div>
      </div>
      {isOpenAddGoal ? (
        <Modal
          isOpen={isOpenAddGoal}
          closeModal={closeModalAddGoal}
        >
          <AddGoal closeModal={closeModalAddGoal} />
        </Modal>
      ) : null}
      {isOpenEditGoal ? (
        <Modal
          isOpen={isOpenEditGoal}
          closeModal={closeModalEditGoal}
        >
          <EditGoal
            closeModal={closeModalEditGoal}
            handleEditGoal={handleEditGoal}
          />
        </Modal>
      ) : null}
    </div>
  )
}

export default GoalsBar
