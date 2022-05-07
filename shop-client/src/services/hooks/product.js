import { useQuery } from 'react-query'
import { getProducts, getOneProduct } from '../api/product'
import { products } from '../../tools/data'

export const useProducts = (page = 1) => {
  return useQuery(
    ['products', page],
    () =>
      process.env.REACT_APP_SERVER === 'false' ? products.data : getProducts(page),
    {
      keepPreviousData: true,
      staleTime: 100000,
      retry: false,
    }
  )
}

export const useOneProduct = slug => useQuery(['product', slug], getOneProduct)
