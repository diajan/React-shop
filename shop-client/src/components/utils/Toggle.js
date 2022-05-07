import React from 'react'

export default function Toggle() {
  return (
    <div className='flex items-center justify-center w-full mb-12 select-none'>
      <label htmlFor='toggle' className='flex items-center cursor-pointer'>
        <div className='relative'>
          <input id='toggle' type='checkbox' className='sr-only' />
          <div className='w-10 h-4 bg-gray-400 rounded-full shadow-inner'></div>
          <div className='dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition'></div>
        </div>
      </label>
      <style jsx='true'>{`
        #toggle:checked ~ .dot {
          transform: translateX(100%);
          background-color: #48bb78;
        }
      `}</style>
    </div>
  )
}
