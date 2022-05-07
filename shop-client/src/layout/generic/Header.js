import React, { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { TABS } from '../../tools/constant'
import Title from '../../components/utils/Title'
import logo from '../../assets/img/logo.png'
import { textSearch } from '../../recoil/atom/filter'
import { useRecoilState } from 'recoil'

export default function Header() {
  return (
    <>
      <div className='hidden md:block'>
        <HeaderPC />
      </div>
      <div className='md:hidden'>
        <HeaderMobile />
      </div>
    </>
  )
}
function HeaderPC() {
  const { pathname } = useLocation()
  const [search, setSearch] = useRecoilState(textSearch)

  const handleChange = ({ target }) => setSearch(target.value)

  return (
    <header className='flex h-16 bg-white dark:bg-gray-700 mb-14'>
      <img className='object-cover object-center' src={logo} alt='logo' />
      <div className='flex flex-1 justify-between'>
        <ul className='flex items-center text-gray-600 dark:text-gray-300 lg:text-lg'>
          {TABS.map(({ path, title }) => (
            <li
              key={path}
              className={`inline-block mx-4 hover:font-bold transition-all ${
                pathname === path && 'font-bold'
              }`}
            >
              <Link to={path}>{title}</Link>
            </li>
          ))}
        </ul>
        <input
          className='bg-gray-200 rounded-lg w-1/3 m-3 lg:ml-20 p-3 text-gray-500'
          onChange={handleChange}
          type='text'
          placeholder='جست و جو کنید'
          value={search}
        />
      </div>
    </header>
  )
}
function HeaderMobile() {
  const [showSearch, setShowSearch] = useState(false)
  const searchBar = useRef()
 
  const { pathname } = useLocation()
  const [search, setSearch] = useRecoilState(textSearch)

  const handleChange = ({ target }) => setSearch(target.value)
  const handleShowSearch = () => {
    searchBar.current.classList.toggle('open-search')
    setShowSearch(s => !s)
  }
  return (
    <header className='w-11/12 mx-auto flex h-16 justify-center items-center pt-8 mb-8 overflow-hidden'>
      <div className=' flex -space-x-2 overflow-hidden'>
        <img
          className='inline-block h-12 w-12 rounded-full object-cover object-center'
          src='https://www.logodesignlove.com/wp-content/uploads/2022/02/arnaldo-c-castro-logo.jpeg'
          alt=''
        />
      </div>
      <Title className='grow text-center font-semibold text-2xl dark:text-gray-100'>
        {TABS.find(({ path }) => path === pathname).title}
      </Title>
      <div
        ref={searchBar}
        className='flex justify-center items-center bg-white dark:bg-gray-100 w-8 h-8 rounded shadow transition-all'
      >
        {showSearch ? (
          <input
            className='rounded-lg text-gray-500 p-1'
            onChange={handleChange}
            type='text'
            placeholder='جست و جو کنید'
            value={search}
            onBlur={handleShowSearch}
          />
        ) : (
          <i
            onClick={handleShowSearch}
            className='text-lg fa-solid fa-magnifying-glass'
          ></i>
        )}
      </div>
    </header>
  )
}
