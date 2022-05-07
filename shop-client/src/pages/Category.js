import React from 'react'
import Main from '../layout/Main'
import apple from '../assets/img/apple.png'
import mi from '../assets/img/mi.png'
import samsung from '../assets/img/samsung.png'
import { Link } from 'react-router-dom'

export default function Category() {
  return (
    <Main>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 '>
        <div className='h-56 md:h-auto p-10 bg-white dark:bg-gray-600 rounded-3xl relative'>
          <Link to={'/home?category=اپل'}>
            <img
              className='object-contain object-center h-full w-full'
              src={apple}
              alt='applle'
            />
          </Link>
        </div>
        <div className='h-56 md:h-auto p-10 bg-white dark:bg-gray-600 rounded-3xl lrelative'>
          <Link to={'/home?category=شیائومی'}>
            <img
              className='object-contain object-center h-full w-full'
              src={mi}
              alt='xiaomi'
            />
          </Link>
        </div>
        <div className='h-56 md:h-auto p-10 bg-white dark:bg-gray-600 rounded-3xl lrelative'>
          <Link to={'/home?category=سامسونگ'}>
            <img
              className='object-contain object-center h-full w-full'
              src={samsung}
              alt='samsung'
            />
          </Link>
        </div>
      </div>
    </Main>
  )
}
