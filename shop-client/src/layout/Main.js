import React from 'react'
import Header from './generic/Header'
import Footer from './generic/Footer'
import Sidebar from './generic/Sidebar'
import Navigation from './generic/Navigation'
import Darkmode from '../components/Darkmode'
import Filter from './generic/Filter'

export default function Main({ children, filterNone, sidebarNone }) {
  return (
    <>
      <div className='bg-gray-100 dark:bg-gray-800'>
        <Header />
        {sidebarNone ? (
          <WhitoutSideBar children={children} />
        ) : (
          <BeSideBar children={children} filterNone={filterNone} />
        )}
        <Navigation />
        <Footer />
      </div>
      <div className='fixed bottom-20 right-0 px-2 py-1 rounded-l-2xl bg-gray-400 md:bg-transparent md:bottom-4 md:right-4'>
        <Darkmode />
      </div>
    </>
  )
}

function BeSideBar({ children, filterNone }) {
  return (
    <main className='w-11/12 mx-auto pb-20 md:grid md:grid-cols-12 md:gap-8'>
      <div className='hidden md:block md:col-span-3 lg:col-span-2'>
        <Sidebar />
      </div>
      <div className='md:col-span-9 lg:col-span-10 relative'>
        {/* {!filterNone && <Filter />} */}
        <Filter />
        {children}
      </div>
    </main>
  )
}

function WhitoutSideBar({ children }) {
  return (
    <main className='w-11/12 mx-auto pb-20 md:grid md:grid-cols-12 md:gap-8'>
      <div className='md:col-span-12 relative'>{children}</div>
    </main>
  )
}
