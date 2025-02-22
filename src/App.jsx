import { useState } from 'react'
import './App.css'
import Home from './components/Home.jsx'
import { data } from './questions.js'
import Questions from './components/Questions.jsx'

function App() {
  const [displayState, setDisplayState] = useState('home')
  const [topic, setTopic] = useState('')

  return (
    <>
      <h2>Header</h2>
      {displayState === 'home' &&
        <Home
          setTopic={setTopic}
          setDisplayState={setDisplayState} 
          data={data} 
        />}
      {displayState === 'questions' && 
        <Questions 
          data={data} 
          topic={topic} 
          setDisplayState={setDisplayState} 
        />}
      <h2>queistion</h2>
    </>
  )
}

export default App
