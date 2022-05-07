import { atom } from 'recoil'
import { getLocalStorage } from '../../tools/helper'

export const cartItems = atom({
  key: 'cartItems',
  default: getLocalStorage('cartItems') || [],
})
