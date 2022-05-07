import { atom } from 'recoil'
import { getLocalStorage } from '../../tools/helper'

export const theme = atom({
  key: 'theme',
  default: getLocalStorage('theme') === 'light',
})
