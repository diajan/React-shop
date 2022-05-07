import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import Box from '../components/utils/Box'
import Button from '../components/utils/Button'
import CartCard from '../components/utils/CartCard'
import Main from '../layout/Main'
import { cartItems } from '../recoil/atom/cart'
import { setLocalStorage, toMoney } from '../tools/helper'
import EmptyCart from '../assets/img/undraw_empty_cart.svg'
import Link from '../components/utils/Link'

export default function Category() {
  const [cart, setCart] = useRecoilState(cartItems)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const total = cart.reduce(
      (total, { price, quantity }) => total + price * quantity,
      0
    )
    setTotalPrice(total)
  }, [cart])

  const handleClearCart = () => {
    setCart([])
    setLocalStorage('cartItems', [])
  }

  if (cart.length === 0) {
    return (
      <Main sidebarNone>
        <div className='w-2/5 mx-auto'>
          <div className='h-44 relative'>
            <img
              className='object-contain object-center h-full w-full'
              src={EmptyCart}
              alt='exmpty cart'
            />
          </div>
          <h1 className='text-center text-2xl my-12'>سبد خرید خالی است ):</h1>
          <div className='flex'>
            <Button className={'w-4/5 mx-auto bg-red-500 text-lg mb-4'}>
              <Link to='/home'>رفتن به فروشگاه</Link>
            </Button>
          </div>
        </div>
      </Main>
    )
  }

  return (
    <Main sidebarNone>
      <div className='md:grid md:grid-cols-12 md:gap-8'>
        <div className='md:col-span-7 lg:col-span-8 space-y-3'>
          {cart.map(({ id, name, price, image, quantity }) => (
            <CartCard
              key={id}
              id={id}
              name={name}
              price={price}
              img={image}
              quantity={quantity}
            />
          ))}
        </div>

        {/* Sidebar */}
        <div className='md:col-span-5 lg:col-span-4 sticky h-fit top-10'>
          <Box className='h-32 mb-8'>
            <div className='flex justify-between my-3 p-2'>
              <h4 className='text-gray-800 font-bold'>مجموع قیمت: </h4>
              <span className='text-red-500 text-xl'>
                {toMoney(totalPrice)}
              </span>
            </div>
            <div className='p-2'>
              <button className='text-blue-900'>کد تخفیف دارید؟</button>
            </div>
          </Box>
          <Button className={'w-full bg-red-400 text-lg hover:bg-none mb-2'}>
            ادامه فرآیند خرید
          </Button>
          <Button
            onClick={handleClearCart}
            className={
              'w-full border border-red-400 text-red-400 text-lg  mb-4'
            }
          >
            خالی کردن سبد خرید
          </Button>
        </div>
      </div>
    </Main>
  )
}
