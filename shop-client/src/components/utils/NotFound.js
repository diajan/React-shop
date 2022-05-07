import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import noData from '../../assets/img/no_data_.svg'

export default function NotFound({
  text = 'نتیجه ای یافت نشد ):',
  img = noData,
  noLink = false,
}) {
  return (
    <>
      <div className='w-3/5 mx-auto mt-10'>
        <div className='h-44 relative'>
          <img
            className='object-contain object-center h-full w-full'
            src={img}
            alt='exmpty'
          />
        </div>
        <h1 className='text-center sm:text-2xl dark:text-gray-200 my-12'>
          {text}
        </h1>
        {noLink && (
          <div className='flex'>
            <Button
              className={'w-4/5 mx-auto text-sm bg-red-400 md:text-lg mb-4'}
            >
              <Link to='/home'>رفتن به فروشگاه</Link>
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
