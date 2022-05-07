import React from 'react'
import { Link as RoutLink } from 'react-router-dom'

export default function Link({ to, className, children, disabled }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return disabled ? (
    <span className='cursor-not-allowed'>{children}</span>
  ) : (
    <RoutLink onClick={scrollToTop} to={to}>
      {children}
    </RoutLink>
  )
}
