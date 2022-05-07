import React from 'react'

export default function Button({ children, className, ...rest }) {
  return (
    <button
      {...rest}
      className={`${className} text-center text-white py-3 rounded`}
    >
      {children}
    </button>
  )
}
