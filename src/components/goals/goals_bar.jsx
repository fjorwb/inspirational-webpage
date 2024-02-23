import { Goal } from './goal'

import '../../styles/goal_bar.css'

const goals = { goals: [{ title: 'Goal 1' }, { title: 'Goal 2' }, { title: 'Goal 3' }] }

function GoalsBar() {
  return (
    <ul>
      {goals.goals.map((goal, index) => (
        <Goal
          key={index}
          goal={goal.title}
        />
      ))}
    </ul>
  )
}

export default GoalsBar
