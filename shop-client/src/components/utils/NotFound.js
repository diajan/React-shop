import React from 'react'

export default function NotFound({
  text = 'محصول مورد نظر یافت نشد ):',
  className,
}) {
  return (
    <>
      <div className='grid grid-cols-3 place-items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          className='bi bi-emoji-dizzy'
          viewBox='0 0 16 16'
          style={{ gridColumnStart: 2, color: '#cbd5e1' }}
        >
          <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
          <path d='M9.146 5.146a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zm-5 0a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 1 1 .708.708l-.647.646.647.646a.5.5 0 1 1-.708.708L5.5 7.207l-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zM10 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0z' />{' '}
        </svg>
        <h2
          className={`xl:text-2xl lg:text-lg col-start-2 text-gray-500 mt-10 ${className}`}
        >
          {text}
        </h2>
      </div>
    </>
  )
}
