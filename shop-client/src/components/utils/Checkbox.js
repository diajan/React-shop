import React, { useEffect, useRef } from 'react'
import { useUriSearchParam } from '../../tools/hooks'

export default function Checkbox({ title, children, onChange, id }) {
  const checkedCategory = useUriSearchParam('category')
  const checkBox = useRef()

  useEffect(() => {
    if (checkedCategory && checkedCategory === title) {
      checkBox.current.click()
      return () => {
        // checkBox.current.click() => error
        const selectedCheckBox = document.getElementById(checkedCategory)
        selectedCheckBox.click()
      }
    }
  }, [checkedCategory, title])

  return (
    <div className='flex items-center justify-between accent-red-400 select-none mb-2 text-gray-600 dark:text-gray-400'>
      <div onChange={onChange}>
        <input
          ref={checkBox}
          className='ml-2 cursor-pointer'
          type='checkbox'
          id={title}
        />
        <label className='cursor-pointer' htmlFor={title}>
          {title}
        </label>
      </div>
      {children}
    </div>
  )
}
