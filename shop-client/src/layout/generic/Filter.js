import React from 'react'
import Select from '../../components/utils/Select'

export default function Filter() {
  return (
    <div className='flex justify-center items-center gap-4 mb-7 md:hidden'>
      <Select
        title={'فیلتر:'}
        icon={<i className='mx-2 text-gray-500 fa-solid fa-filter'></i>}
        row={[
          { name: 'همه', uri: '' },
          { name: 'اپل', uri: 'apple' },
          { name: 'سامسونگ', uri: 'samsung' },
          { name: 'شیائومی', uri: 'xiaomi' },
        ]}
      />
      <Select
        icon={
          <i className='mx-2 text-red-400 fa-solid fa-arrow-down-short-wide'></i>
        }
        row={[
          { name: 'محبوب ترین', uri: 'popular' },
          { name: 'پربازدید ترین', uri: 'most-visited' },
          { name: 'پرفروش ترین', uri: 'bestselling' },
        ]}
      />
    </div>
  )
}
