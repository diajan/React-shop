import { useSearchParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { categoryId, color, textSearch } from '../recoil/atom/filter'

export const useUriSearchParam = (key, defaultValue) => {
  const [searchParams] = useSearchParams()
  return searchParams.get(key) || defaultValue
}

export const useFilter = data => {
  //--- filters
  const search = useRecoilValue(textSearch)
  const categories = useRecoilValue(categoryId)
  const filterColors = useRecoilValue(color)

  const dataFillterBrands = data.filter(
    ({ category }) => !categories.length || categories.includes(category.id)
  )
  const dataFillterColors = dataFillterBrands?.filter(({ colors }) =>
    colors?.some(color => !filterColors.length || filterColors.includes(color))
  )
  const filteredData = dataFillterColors?.filter(({ name }) => name?.includes(search))
  //--- End of Filter

  return filteredData
}
