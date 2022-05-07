import { request } from '../../tools/request'

export const getCategories = async page => {
  const { data } = await request.get(`/categories?page=${page}`)
  return data
}
