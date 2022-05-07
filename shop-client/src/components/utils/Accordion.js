import React, { useRef  } from 'react'

export default function Accordion({ title, icon, children, show = false }) {
  const iconRef = useRef()
  const content = useRef()

  const handleShow = () => {
    content.current.classList.toggle('show')
    iconRef.current.classList.toggle('rotate-180')
  }

  return (
    <>
      <div
        onClick={handleShow}
        className='flex relative items-baseline select-none text-gray-700 dark:text-gray-300'
      >
        {icon}
        <span
          className={`flex justify-between items-center w-full cursor-pointer mr-2`}
        >
          {title}
          <i ref={iconRef} className='fa-solid fa-angle-up ml-3 '></i>
        </span>
      </div>
      <div
        ref={content}
        className={`${
          show || 'max-h-0'
        } overflow-hidden transition-all px-1 duration-500`}
      >
        {children}
      </div>
    </>
  )
}
