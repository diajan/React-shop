import React from 'react'
import { useRecoilState } from 'recoil'
import { useToasts } from 'react-toast-notifications'
import Box from './Box.js'
import { COLORS } from '../../tools/constant.js'
import { wishListItems } from '../../recoil/atom/wishList.js'
import { setLocalStorage, toMoney } from '../../tools/helper.js'
import { cartItems } from '../../recoil/atom/cart.js'
import Link from './Link.js'

export default React.memo(function ProductCard({
  id,
  name,
  category,
  colors,
  image,
  price,
}) {
  const [wishItems, setWishItems] = useRecoilState(wishListItems)
  const [cart, setCart] = useRecoilState(cartItems)
  const { addToast } = useToasts()

  const handleAction = ({ type }) => {
    let newWishList
    let newCart = []

    switch (type) {
      case 'ADD_WISHLIST':
        newWishList = [
          ...wishItems,
          { id, name, category, colors, image, price },
        ]
        break

      case 'ADD_CART':
        newCart = [...cart, { id, name, image, price, quantity: 1 }]
        break

      case 'REMOVE_WISHLIST':
        newWishList = wishItems.filter(item => item.id !== id)
        break

      default:
        return null
    }

    if (type.includes('WISHLIST')) {
      // update state manager
      setWishItems(newWishList)
      //upadte local storage
      setLocalStorage('wishListItems', newWishList)
    } else if (type.includes('CART')) {
      // update state manager
      setCart(newCart)
      //upadte local storage
      setLocalStorage('cartItems', newCart)
    }

    //notifcation
    addToast(
      `${
        type.includes('ADD')
          ? '  محصول با موفقیت اضافه شد '
          : 'محصول با موفقیت حذف شد'
      }`,
      {
        appearance: type.includes('ADD') ? 'success' : 'warning',
        autoDismiss: true,
        placement: 'bottom-right',
        autoDismissTimeout: 3000,
      }
    )
  }

  return (
    <Box>
      {/* icon and image  */}
      <div className='relative h-44 sm:h-64 lg:h-52 rounded-md'>
        {wishItems?.find(({ id: wishId }) => wishId === id) ? (
          <div
            onClick={() => handleAction({ type: 'REMOVE_WISHLIST' })}
            className='flex justify-center items-center w-6 h-6  absolute top-2 right-2 bg-gray-300 rounded-full cursor-pointer'
          >
            <i className='fa-solid fa-trash text-blue-600 text-xs'></i>
          </div>
        ) : (
          <div
            onClick={() => handleAction({ type: 'ADD_WISHLIST' })}
            className='flex justify-center items-center w-6 h-6  absolute top-2 right-2 bg-gray-300 rounded-full cursor-pointer'
          >
            <i className='fa fa-heart text-red-500 text-xs'></i>
          </div>
        )}
        <img
          className='object-contain object-center h-full w-full rounded-md'
          src={image}
          alt='phone'
        />
      </div>
      {/* brand and color */}
      <div className='flex items-center justify-between text-xs my-3 text-gray-400'>
        <span>{category.name}</span>
        <div className='flex justify-end'>
          {colors?.map((color, _, arr) => (
            <span
              key={color}
              style={{ backgroundColor: COLORS[color].code }}
              className={`w-4 h-4 rounded-full border ${
                arr.at(-1) !== color && '-ml-1.5'
              }`}
            />
          ))}
        </div>
      </div>
      {/* price */}
      <div className='text-sm text-gray-700 dark:text-gray-200 font-semibold space-y-4'>
        <h4>{name}</h4>
        <p className='text-left text-red-600 dark:text-red-500'>
          {toMoney(price)}
        </p>
        <hr />
      </div>
      {/* its link */}
      {cart.find(({ id: cartId }) => cartId === id) ? (
        <div className='font-bold text-sm text-center my-2 hover:text-white transition-colors rounded-md'>
          <Link to='/cart'>
            <span className='text-green-700'> موجود در سبد ✔️</span>
          </Link>
        </div>
      ) : (
        <div className='font-bold text-sm text-center text-red-400 my-2 hover:bg-red-400 hover:text-white transition-colors rounded-md'>
          <button
            onClick={() => handleAction({ type: 'ADD_CART' })}
            className='cursor-pointer'
          >
            افزودن به سبد خرید
          </button>
        </div>
      )}
    </Box>
  )
})
