import React, { useEffect, useState } from 'react'
import {  useSetRecoilState } from 'recoil'
import { useProducts } from '../services/hooks/product'
import { useFilter, useUriSearchParam } from '../tools/hooks'
import { latestPage } from '../recoil/atom/page'
import NotFound from '../components/utils/NotFound'
import Pagination from '../components/utils/Pagination'
import Product from '../components/utils/ProductCard'
import Main from '../layout/Main'
import Loading from '../components/utils/Loading'

export default function Home() {
  //pagination
  const [links, setLinks] = useState([])
  const page = useUriSearchParam('page', 1)
  const setLatestPage = useSetRecoilState(latestPage)

  //get products
  const { data: productsData, isLoading, isFetching } = useProducts(page)
  // console.log(productsData.data)
  const products = useFilter(productsData?.data || [])

  useEffect(() => {
    setLatestPage(() => productsData && productsData.last_page)
    setLinks(() => productsData && productsData.links)
  }, [productsData, setLatestPage])

  return (
    <Main>
      <div>
        {(isLoading || isFetching) && <Loading />}
        {!products?.length ? (
          <NotFound />
        ) : (
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
            {products.map(({ id, name, category, colors, image, price }) => (
              <Product
                id={id}
                key={id}
                name={name}
                image={image}
                colors={colors}
                category={category}
                price={price}
              />
            ))}
          </div>
        )}
      </div>
      {!!products?.length /* => true*/ && <Pagination links={links} />}
    </Main>
  )
}
