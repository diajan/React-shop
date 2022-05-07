import React from 'react'
import { useRecoilValue } from 'recoil'
import { wishListItems } from '../recoil/atom/wishList'
import { useFilter } from '../tools/hooks'
import NotFound from '../components/utils/NotFound'
import Main from '../layout/Main'
import Product from '../components/utils/ProductCard'

export default function WishList() {
  const items = useRecoilValue(wishListItems) || []
  const products = useFilter(items)

  return (
    <Main>
      {!products.length ? (
        <NotFound text='چیزی موجود نیست ):' />
      ) : (
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
          {products.map(({ id, name, category, colors, image, price }) => (
            <Product
              key={`id${id}`}
              id={id}
              name={name}
              image={image}
              colors={colors}
              category={category}
              price={price}
            />
          ))}
        </div>
      )}
    </Main>
  )
}
