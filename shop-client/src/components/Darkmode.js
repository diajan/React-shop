import React from 'react'
import { useRecoilState } from 'recoil'
import { theme } from '../recoil/atom/theme'
import { setLocalStorage } from '../tools/helper'

export default function Darkmode() {
  const [currentTheme, setcurrentTheme] = useRecoilState(theme)
  return (
    <div
      className='select-none cursor-pointer'
      onClick={() => {
        setcurrentTheme(theme => !theme)
        setLocalStorage('theme', !currentTheme ? 'light' : 'dark')
      }}
    >
      {currentTheme ? (
        <i className='fa-solid fa-sun text-4xl'></i>
      ) : (
        <i className='fa-solid fa-moon text-white text-4xl'></i>
      )}
    </div>
  )
}
