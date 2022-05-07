import { atom } from 'recoil'
import { getLocalStorage } from '../../tools/helper'

export const wishListItems = atom({
  key: 'wishListItems',
  default: getLocalStorage('wishListItems') || [],
})
