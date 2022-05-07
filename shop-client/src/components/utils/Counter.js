import React, { useState } from 'react'

export default function Counter({ defaultValue = 1, onIncrease, onDecrease }) {
  const [counter, setCounter] = useState(defaultValue)

  const handleIncrease = () => {
    onIncrease && onIncrease()
    setCounter(counter => counter + 1)
  }

  const handleDecrease = () => {
    onDecrease && onDecrease()
    setCounter(counter => counter - 1)
  }

  return (
    <div>
      <button
        className='h-5 w-5 bg-gray-300 rounded-full'
        onClick={handleIncrease}
      >
        +
      </button>
      <span className='border rounded dark:text-gray-200 border-red-600 py-1 px-2 mx-2'>
        {counter}
      </span>
      <button
        className={`h-5 w-5 bg-red-300 rounded-full ${
          counter === 1 && 'opacity-50 cursor-not-allowed'
        }`}
        onClick={handleDecrease}
        disabled={counter === 1}
      >
        -
      </button>
    </div>
  )
}
