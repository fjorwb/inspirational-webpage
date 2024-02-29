import { Goal } from './goal'

import '../../styles/goal_bar.css'

const goals = { goals: [{ title: 'Goal 1' }, { title: 'Goal 2' }, { title: 'Goal 3' }] }

function GoalsBar() {
  return (
    <div className='goals_bar_container'>
      <ul>
        {goals.goals.map((goal, index) => (
          <Goal
            key={index}
            goal={goal.title}
          />
        ))}
      </ul>
      <div className='goals_bar_btn_container'>
        <button className='goals_bar_btn'>add</button>
      </div>
    </div>
  )
}

export default GoalsBar
