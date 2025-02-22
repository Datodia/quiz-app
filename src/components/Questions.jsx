import React, { useState } from 'react'

export default function Questions({data, topic, setDisplayState}) {
    const question = data.find(el => el.title === topic)
    const [step, setStep] = useState(0)
    const handleNextQuestion = () => {
        setStep(prev => prev + 1)
    }
  return (
    <div>
      <h1>Questions</h1>
        <h1 className='font-semibold'>{question.questions[step].question}</h1>
        {question.questions[step].options.map(el => (
            <div className='border-2 border-black'>
                {el}
            </div>
        ))}
        <button onClick={handleNextQuestion} className='p-2 bg-blue-600'>Next Queistion</button>
    </div>
  )
}
