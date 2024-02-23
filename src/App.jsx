import './App.css'

import Weather from './components/weather/weather.jsx'
import Goals from './components/goals/goals.jsx'
import Quote from './components/quote/quote.jsx'

function App() {
  return (
    <div>
      <h5>Inspirational Webpage</h5>
      <Weather />
      <Goals />
      <Quote />
    </div>
  )
}

export default App
