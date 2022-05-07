import React from 'react'

export default function Box({ children, className }) {
  return (
    <div
      className={`${className} bg-white dark:bg-gray-700 rounded-lg relative w-full p-2 shadow-md `}
    >
      {children}
    </div>
  )
}
