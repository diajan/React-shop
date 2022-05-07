import { useQuery } from 'react-query'
import { categories } from '../../tools/data'
import { getCategories } from '../api/category'

export const useCategories = (page = 1) =>
  useQuery(
    ['categories', page],
    () =>
      process.env.REACT_APP_SERVER === 'false'
        ? categories.data
        : getCategories(page),
    {
      keepPreviousData: true,
      staleTime: 100000,
      retry: false,
    }
  )
