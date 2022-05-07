const PRODUCTS = {
  current_page: 1,
  data: [
    {
      id: 1,
      name: 'گوشی آیفون 11',
      description: 'گوشی آیفون محصول شرکت اپل',
      image:
        'https://www.refurbished.nl/cache/images/iphone-11-groen_600x600_BGresize_16777215-tj.png',
      price: 130000,
      created_at: '2022-04-10T14:46:19.000000Z',
      updated_at: '2022-04-10T14:46:19.000000Z',
      category: {
        id: 1,
        name: 'اپل',
        created_at: '2022-04-10T14:46:20.000000Z',
        updated_at: '2022-04-10T14:46:20.000000Z',
      },
      colors: ['red', 'white', 'yellow'],
    },
    {
      id: 2,
      name: 'گوشی سامسونگ نوت 9',
      description: 'گوشی سامسونگ گلکسی نوت، تلفن همراه',
      image:
        'https://www.seekpng.com/png/detail/69-694469_the-new-samsung-galaxy-note9-samsung-galaxy-note.png',
      price: 130000,
      created_at: '2022-04-10T14:46:19.000000Z',
      updated_at: '2022-04-10T14:46:19.000000Z',
      category: {
        id: 2,
        name: 'سامسونگ',
        created_at: '2022-04-10T14:46:20.000000Z',
        updated_at: '2022-04-10T14:46:20.000000Z',
      },
      colors: ['blue', 'green', 'red', 'yellow'],
    },
    {
      id: 3,
      name: 'گوشی شیائومی ردمی 10',
      description: 'گوشی شیائومی مدل ردمی محصول کشور چین',
      image:
        'https://i01.appmifile.com/webfile/globalimg/nl/J19-Grey-800x800.png',
      price: 900000,
      created_at: '2022-04-10T14:46:19.000000Z',
      updated_at: '2022-04-10T14:46:19.000000Z',
      category: {
        id: 3,
        name: 'شیائومی',
        created_at: '2022-04-10T14:46:20.000000Z',
        updated_at: '2022-04-10T14:46:20.000000Z',
      },
      colors: ['red', 'white', 'yellow'],
    },
    {
      id: 4,
      name: 'گوشی آیفون 12',
      description: 'گوشی آیفون محصول شرکت اپل',
      image:
        'https://www.refurbished.nl/cache/images/iphone-x-zwart_600x600_BGresize_16777215-tj.png',
      price: 500000,
      created_at: '2022-04-10T14:46:19.000000Z',
      updated_at: '2022-04-12T11:42:35.000000Z',
      category: {
        id: 1,
        name: 'اپل',
        created_at: '2022-04-10T14:46:20.000000Z',
        updated_at: '2022-04-10T14:46:20.000000Z',
      },
      colors: ['blue', 'green', 'red', 'yellow'],
    },
    {
      id: 5,
      name: 'گوشی سامسونگ نوت 10',
      description: 'گوشی سامسونگ گلکسی نوت، تلفن همراه',
      image:
        'https://www.kindpng.com/picc/m/454-4547041_samsung-note-10-plus-hd-png-download.png',
      price: 500000,
      created_at: '2022-04-10T14:46:19.000000Z',
      updated_at: '2022-04-10T14:46:19.000000Z',
      category: {
        id: 2,
        name: 'سامسونگ',
        created_at: '2022-04-10T14:46:20.000000Z',
        updated_at: '2022-04-10T14:46:20.000000Z',
      },
      colors: ['orange', 'blue'],
    },
    {
      id: 6,
      name: 'گوشی شیائومی ردمی 11',
      description: 'گوشی شیائومی مدل ردمی محصول کشور چین',
      image: 'https://i01.appmifile.com/webfile/globalimg/nl/white-800x800.png',
      price: 130000,
      created_at: '2022-04-10T14:46:19.000000Z',
      updated_at: '2022-04-10T14:46:19.000000Z',
      category: {
        id: 3,
        name: 'شیائومی',
        created_at: '2022-04-10T14:46:20.000000Z',
        updated_at: '2022-04-10T14:46:20.000000Z',
      },
      colors: ['red', 'white', 'black', 'pink'],
    },
    {
      id: 7,
      name: 'گوشی آیفون 11',
      description: 'گوشی آیفون محصول شرکت اپل',
      image:
        'https://www.refurbished.nl/cache/images/iphone-11-groen_600x600_BGresize_16777215-tj.png',
      price: 130000,
      created_at: '2022-04-10T14:46:19.000000Z',
      updated_at: '2022-04-10T14:46:19.000000Z',
      category: {
        id: 1,
        name: 'اپل',
        created_at: '2022-04-10T14:46:20.000000Z',
        updated_at: '2022-04-10T14:46:20.000000Z',
      },
      colors: ['orange', 'blue'],
    },
    {
      id: 8,
      name: 'گوشی سامسونگ نوت 9',
      description: 'گوشی سامسونگ گلکسی نوت، تلفن همراه',
      image:
        'https://www.seekpng.com/png/detail/69-694469_the-new-samsung-galaxy-note9-samsung-galaxy-note.png',
      price: 900000,
      created_at: '2022-04-10T14:46:19.000000Z',
      updated_at: '2022-04-10T14:46:19.000000Z',
      category: {
        id: 2,
        name: 'سامسونگ',
        created_at: '2022-04-10T14:46:20.000000Z',
        updated_at: '2022-04-10T14:46:20.000000Z',
      },
      colors: ['blue', 'green', 'red', 'yellow'],
    },
    {
      id: 9,
      name: 'گوشی شیائومی ردمی 10',
      description: 'گوشی شیائومی مدل ردمی محصول کشور چین',
      image:
        'https://i01.appmifile.com/webfile/globalimg/nl/J19-Grey-800x800.png',
      price: 860000,
      created_at: '2022-04-10T14:46:19.000000Z',
      updated_at: '2022-04-10T14:46:19.000000Z',
      category: {
        id: 3,
        name: 'شیائومی',
        created_at: '2022-04-10T14:46:20.000000Z',
        updated_at: '2022-04-10T14:46:20.000000Z',
      },
      colors: ['orange', 'blue'],
    },
    {
      id: 10,
      name: 'گوشی آیفون 12',
      description: 'گوشی آیفون محصول شرکت اپل',
      image:
        'https://www.refurbished.nl/cache/images/iphone-x-zwart_600x600_BGresize_16777215-tj.png',
      price: 500000,
      created_at: '2022-04-10T14:46:19.000000Z',
      updated_at: '2022-04-10T14:46:19.000000Z',
      category: {
        id: 1,
        name: 'اپل',
        created_at: '2022-04-10T14:46:20.000000Z',
        updated_at: '2022-04-10T14:46:20.000000Z',
      },
      colors: ['orange', 'pink', 'white', 'black'],
    },
  ],
  first_page_url: 'http://127.0.0.1:8000/api/products?page=1',
  from: 1,
  last_page: 3,
  last_page_url: 'http://127.0.0.1:8000/api/products?page=3',
  links: [
    {
      url: null,
      label: '&laquo; Previous',
      active: false,
    },
    {
      url: 'http://127.0.0.1:8000/api/products?page=1',
      label: '1',
      active: true,
    },
    {
      url: 'http://127.0.0.1:8000/api/products?page=2',
      label: '2',
      active: false,
    },
    {
      url: 'http://127.0.0.1:8000/api/products?page=3',
      label: '3',
      active: false,
    },
    {
      url: 'http://127.0.0.1:8000/api/products?page=2',
      label: 'Next &raquo;',
      active: false,
    },
  ],
  next_page_url: 'http://127.0.0.1:8000/api/products?page=2',
  path: 'http://127.0.0.1:8000/api/products',
  per_page: 10,
  prev_page_url: null,
  to: 10,
  total: 30,
}

const CATEGORY = {
  current_page: 1,
  data: [
    {
      id: 1,
      name: 'اپل',
      created_at: '2022-04-10T14:46:20.000000Z',
      updated_at: '2022-04-10T14:46:20.000000Z',
    },
    {
      id: 2,
      name: 'سامسونگ',
      created_at: '2022-04-10T14:46:20.000000Z',
      updated_at: '2022-04-10T14:46:20.000000Z',
    },
    {
      id: 3,
      name: 'شیائومی',
      created_at: '2022-04-10T14:46:20.000000Z',
      updated_at: '2022-04-10T14:46:20.000000Z',
    },
  ],
  first_page_url: 'http://127.0.0.1:8000/api/categories?page=1',
  from: 1,
  last_page: 1,
  last_page_url: 'http://127.0.0.1:8000/api/categories?page=1',
  links: [
    {
      url: null,
      label: '&laquo; Previous',
      active: false,
    },
    {
      url: 'http://127.0.0.1:8000/api/categories?page=1',
      label: '1',
      active: true,
    },
    {
      url: null,
      label: 'Next &raquo;',
      active: false,
    },
  ],
  next_page_url: null,
  path: 'http://127.0.0.1:8000/api/categories',
  per_page: 15,
  prev_page_url: null,
  to: 3,
  total: 3,
}

export const products = { data: PRODUCTS, isLoading: false, isFetching: false }
export const categories = {
  data: CATEGORY,
  isLoading: false,
  isFetching: false,
}
