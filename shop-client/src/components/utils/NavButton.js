import React from 'react'
import { Link } from 'react-router-dom'

export default function NavButton({ title, icon, active, link = '' }) {
  return (
    <div
      style={{ minWidth: '20%' }}
      className={`'flex items-center justify-center ${
        active && 'text-blue-900'
      } cursor-pointer`}
    >
      <Link to={link}>
        {icon}
        <span className={`${active || 'hidden'} text-xl font-bold mr-2`}>
          {title}
        </span>
      </Link>
    </div>
  )
}
