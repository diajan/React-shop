import { STORAGE_REQUIRED } from './constant'

export const initialStorage = () =>
  STORAGE_REQUIRED.forEach(
    ({ key, defaultValue }) =>
      !getLocalStorage(key) && setLocalStorage(key, defaultValue)
  )

export const getLocalStorage = key => JSON.parse(localStorage.getItem(key))

export const setLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value))

export const toMoney = price => {
  return `${Intl.NumberFormat('fa-IR').format(price)} تومان`
}
