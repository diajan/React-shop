import { atom } from 'recoil'

export const textSearch = atom({
  key: 'textSearch',
  default: '',
})

export const categoryId = atom({
  key: 'categoryId',
  default: [],
})

export const color = atom({
  key: 'color',
  default: [],
})
