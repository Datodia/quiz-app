import React, { useState } from 'react'

export default function Home({data, setDisplayState, setTopic}) {
    console.log('data', data)

    const handleClick = (topic) => {
        setDisplayState('questions')
        setTopic(topic)
    }

  return (
    <div className='flex gap-5 w-full'>
        <div>
            <h1 className='text-bold text-2xl'>Quiz App</h1>
        </div>
        <div className='w-full '>
            {data.map(el => (
                <div
                    onClick={() => handleClick(el.title)} 
                    className='cursor-pointer h-10 w-1/2 border-2 border-black hover:bg-blue-300'
                >
                    {el.title}
                </div>
            ))}
        </div>
    </div>
  )
}
