import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function NotFound({ text = 'نتیجه ای یافت نشد ):', img }) {
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
        <div className='flex'>
          <Button
            className={'w-4/5 mx-auto text-sm bg-red-500 md:text-lg mb-4'}
          >
            <Link to='/home'>رفتن به فروشگاه</Link>
          </Button>
        </div>
      </div>
    </>
  )
}

// <div className='flex flex-col'>
//   <div className='w-6/12 mx-auto mt-5'>
//     <img
//       className='object-contain object-center w-full h-full'
//       src={noData}
//       alt='not found'
//     />
//   </div>
//   <div className='text-center'>
//     <h2
//       className={`xl:text-2xl text-xl col-start-2 text-gray-500 mt-10 ${className}`}
//     >
//       {text}
//     </h2>
//   </div>
// </div>
