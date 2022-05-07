import React from 'react'

export default function Title({ children, className }) {
  return <h4 className={`${className} `}>{children}</h4>
}
