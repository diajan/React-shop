import React from 'react'
import { useRecoilState } from 'recoil'
import { cartItems } from '../../recoil/atom/cart'
import { setLocalStorage, toMoney } from '../../tools/helper'
import Box from '../utils/Box'
import Counter from './Counter'

export default function CartCard({ id, name, price, img, quantity = 1 }) {
  const [cart, setCart] = useRecoilState(cartItems)

  const handleRemove = () => {
    const newCartList = cart.filter(item => item.id !== id)
    setCart(newCartList)
    setLocalStorage('cartItems', newCartList)
  }

  const handleQuantity = ({ type }) => {
    let newCartList

    switch (type) {
      case 'INCREASE':
        newCartList = cart.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
        break

      case 'DECREASE':
        newCartList = cart.map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        break

      default:
        break
    }

    setCart(newCartList)
    setLocalStorage('cartItems', newCartList)
  }

  return (
    <Box>
      <div className='flex relative h-24 '>
        <div>
          <img
            className='object-contain object-center h-full w-full rounded-md'
            src={img}
            alt='phone'
          />
        </div>
        <div className='grid grow pr-4'>
          <div className='flex justify-between'>
            <h2 className='self-center lg:text-lg mt-2'> {name}</h2>
            <i
              onClick={handleRemove}
              className='fa-solid fa-xmark text-red-600 font-bold ml-2 cursor-pointer'
            ></i>
          </div>
          <div className='flex items-center justify-between'>
            <h4 className='text-red-500 font-bold'>
              {toMoney(quantity * price)}
            </h4>
            <Counter
              onIncrease={() => handleQuantity({ type: 'INCREASE' })}
              onDecrease={() => handleQuantity({ type: 'DECREASE' })}
              defaultValue={quantity}
            />
          </div>
        </div>
      </div>
    </Box>
  )
}
