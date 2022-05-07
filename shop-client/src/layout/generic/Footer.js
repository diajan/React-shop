import React from 'react'
import { Link } from 'react-router-dom'
import { TABS } from '../../tools/constant'

export default function Footer() {
  return (
    <footer className='hidden md:grid md:grid-cols-2 text-sm lg:text-base place-items-center bg-white dark:bg-gray-900 p-4'>
      <div className='dark:text-gray-200'>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای آن
      </div>
      <div className='w-full flex items-center justify-evenly '>
        <div className=''>
          <ul className='text-gray-600'>
            {TABS.map(({ path, title }) => (
              <li className={` mx-4 hover:font-bold transition-all`} key={title}>
                <Link to={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <iframe
            title='footer-map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.5811270146196!2d51.66967368548556!3d32.643976498065626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8ea78fca37e7658b!2zMzLCsDM4JzM4LjMiTiA1McKwNDAnMDMuMCJF!5e0!3m2!1sfa!2snl!4v1648738213843!5m2!1sfa!2snl'
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
      </div>
    </footer>
  )
}
