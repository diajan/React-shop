import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import NavButton from '../../components/utils/NavButton'
import { TABS } from '../../tools/constant'

export default function Navigation() {
  const { pathname } = useLocation()
  const [selectedTab] = useState(pathname)

  return (
    <nav
      style={{ direction: 'rtl' }}
      className='md:hidden flex justify-center items-center fixed bottom-0 left-0 w-full h-16 bg-white dark:bg-gray-100 rounded-t-xl text-2xl text-gray-400 text-center shadow-up'
    >
      {TABS.map(({ title, icon, path }) => (
        <NavButton
          key={title}
          title={title}
          icon={icon}
          link={path}
          active={selectedTab === path}
        />
      ))}
    </nav>
  )
}