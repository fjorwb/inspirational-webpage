import './App.css'

import Weather from './components/weather/weather.jsx'
import Goals from './components/goals/goals.jsx'
import Quote from './components/quote/quote.jsx'

function App() {
  const render = (
    <div className='back'>
      <Weather />
      <Goals />
      <Quote />
    </div>
  )
  return render
}

export default App
