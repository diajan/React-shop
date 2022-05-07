import React from 'react'
import { useSetRecoilState } from 'recoil'
import { useCategories } from '../../services/hooks/category'
import { categoryId, color } from '../../recoil/atom/filter'
import { COLORS } from '../../tools/constant'
import Accordion from '../../components/utils/Accordion'
import Box from '../../components/utils/Box'
import Checkbox from '../../components/utils/Checkbox'
import List from '../../components/utils/List'
import Title from '../../components/utils/Title'
import Colorbox from '../../components/utils/Colorbox'

export default React.memo(function Sidebar() {
  const { data: categoriesDate } = useCategories()
  const setCategory = useSetRecoilState(categoryId)
  const setColor = useSetRecoilState(color)
  const categories = categoriesDate?.data || []

  const handleChangeCategories = id =>
    setCategory(s => (s.includes(id) ? s.filter(e => e !== id) : [...s, id]))

  const handleChangeColors = nameColor =>
    setColor(s =>
      s.includes(nameColor) ? s.filter(e => e !== nameColor) : [...s, nameColor]
    )

  return (
    <Box className='bg-white rounded-lg'>
      <div className='space-y-4'>
        {/* Category Section */}
        <Title className='text-red-400 font-bold text-lg'>دسته بندی</Title>
        <List>
          <List.Item
            title='تلفن همراه'
            icon={<i className='fa-solid fa-mobile text-sm'></i>}
            active
          />
          <List.Item
            title='لپ تاپ'
            icon={<i className='fa-solid fa-laptop text-sm'></i>}
          />
          <List.Item
            title='ساعت هوشمند'
            icon={<i className='fa-solid fa-clock text-sm'></i>}
          />
        </List>

        {/* Filter Section */}
        <Title className='text-red-400 font-bold text-lg'>فیلتر</Title>

        {/* brands */}
        <Accordion
          title={'برند '}
          icon={<i className='fa-solid fa-copyright'></i>}
        >
          {categories.map(({ id, name }) => (
            <Checkbox
              key={id}
              id={id}
              onChange={() => handleChangeCategories(id)}
              title={name}
            />
          ))}
        </Accordion>

        {/* colors */}
        <Accordion
          title={'رنگ '}
          icon={<i className='fa-solid fa-palette'></i>}
        >
          {Object.keys(COLORS).map(key => {
            const { farsiColor, englishColor } = COLORS[key]
            return (
              <Checkbox
                key={key}
                onChange={() => handleChangeColors(englishColor)}
                title={farsiColor}
              >
                <Colorbox color={englishColor} />
              </Checkbox>
            )
          })}
        </Accordion>
      </div>
    </Box>
  )
})
