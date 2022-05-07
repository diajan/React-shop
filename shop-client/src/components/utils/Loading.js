import React from 'react'
import ReactLoading from 'react-loading'

export default function Loading({ type = 'spin', color = 'red' }) {
  return (
    <>
      <div className='absolute inset-0 z-20 backdrop-blur-sm'></div>
      <div className='absolute inset-0 grid place-items-center z-40'>
        <ReactLoading type={type} color={color} />
      </div>
    </>
  )
}
