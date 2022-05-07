export const COLORS = {
  blue: {
    farsiColor: 'آبی',
    englishColor: 'blue',
    code: '#2563eb',
  },
  red: {
    farsiColor: 'قرمز',
    englishColor: 'red',
    code: '#dc2626',
  },
  yellow: {
    farsiColor: 'زرد',
    englishColor: 'yellow',
    code: '#facc15',
  },
  green: {
    farsiColor: 'سبز',
    englishColor: 'green',
    code: '#16a34a',
  },
  pink: {
    farsiColor: 'صورتی',
    englishColor: 'pink',
    code: '#ec4899',
  },
  white: {
    farsiColor: 'سفید',
    englishColor: 'white',
    code: '#f5f5f5',
  },
  black: {
    farsiColor: 'سیاه',
    englishColor: 'black',
    code: '#000',
  },
  orange: {
    farsiColor: 'نارنجی',
    englishColor: 'orange',
    code: '#ea580c',
  },
}
export const TABS = [
  { title: 'خانه', icon: <i className='fa-solid fa-house'></i>, path: '/home' },
  {
    title: 'دسته بندی',
    icon: <i className='fa-solid fa-square-poll-horizontal'></i>,
    path: '/category',
  },
  {
    title: 'سبد خرید',
    icon: <i className='fa-solid fa-cart-shopping'></i>,
    path: '/cart',
  },
  {
    title: 'مورد علاقه',
    icon: <i className='fa-solid fa-heart'></i>,
    path: '/wishlist',
  },
]

export const STORAGE_REQUIRED = [
  { key: 'wishListItems', defaultValue: [] },
  { key: 'cartItems', defaultValue: [] },
  { key: 'theme', defaultValue: 'light' },
]
