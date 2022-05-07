import React, { useState } from 'react'

export default function Select({ icon, title, row }) {
  const [show, setShow] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null)

  return (
    <div
      onClick={() => setShow(s => !s)}
      onBlur={() => setShow(false)}
      className='flex relative items-center w-full h-10 bg-white dark:bg-gray-100 rounded-md hover:ring hover:ring-blue-900'
    >
      {icon}
      <span className='font-semibold text-gray-800'>
        {`${title || ''} ${selectedRow ? selectedRow.name : row.at().name}`}
      </span>
      <ul
        className={`${
          show ? 'flex' : 'hidden'
        } absolute flex-col w-full space-y-2 p-4 top-12 right-2 bg-white rounded-md text-md font-semibold z-40`}
      >
        {row.map(({ name, uri }) => (
          <li
            key={uri}
            onClick={e => setSelectedRow({ name, uri })}
            className='rounded cursor-pointer hover:bg-gray-300'
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}
