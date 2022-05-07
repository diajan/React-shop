/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { latestPage } from '../../recoil/atom/page'
import Link from '../utils/Link'

export default function Pagination({ links = [] }) {
  const lastPage = useRecoilValue(latestPage)
  const [searchParams] = useSearchParams()
  const page = +searchParams.get('page') || 1

  return (
    <nav aria-label='pagination'>
      <ul className='flex flex-row-reverse justify-center items-center mt-10'>
        <span className='block text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 mr-3'>
          <Link to={`?page=${page - 1}`} disabled={page === 1}>
            <i className='fa-solid fa-circle-chevron-left'></i>
          </Link>
        </span>
        {links.slice(1, -1).map(({ active, label }) => (
          <li
            key={label}
            className={`${
              active && 'text-red-400'
            } py-2 px-3 text-gray-500 hover:opacity-70  dark:text-gray-400 dark:hover:text-white`}
          >
            <Link to={`?page=${label}`}>{label}</Link>
          </li>
        ))}
        <li>
          <span className='block text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 ml-3'>
            <Link to={`?page=${page + 1}`} disabled={page === lastPage}>
              <i className='fa-solid fa-circle-chevron-right'></i>
            </Link>
          </span>
        </li>
      </ul>
    </nav>
  )
}
