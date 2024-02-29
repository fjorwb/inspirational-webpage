import '../../styles/goal.css'

export function Goal({ goal }) {
  return (
    <div className='goal_container'>
      <div className='goal_btn_container'>
        <button className='goal_btn edit_btn'>edit</button>
        <button className='goal_btn delete_btn'>delete</button>
      </div>
      <p className='goal_title'>{goal}</p>
    </div>
  )
}

export default Goal
