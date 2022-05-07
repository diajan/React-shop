import { request } from '../../tools/request'

export const getProducts = async page => {
  const { data } = await request.get(`/products?page=${page}`)
  return data
}

export const getOneProduct = async ({ queryKey }) => {
  const { data } = await request.get(`/products/${queryKey.at(1)}`)
  return data
}
