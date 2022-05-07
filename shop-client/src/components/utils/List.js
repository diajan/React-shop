export default function List({ children }) {
  return (
    <ul
      className='list-inside space-y-4 text-gray-400'
      style={{ marginBottom: '2rem' }}
    >
      {children}
    </ul>
  )
}

export function ListItem({ title, icon, active }) {
  return (
    <li
      className={`${
        active && 'text-gray-600 dark:text-gray-200'
      } cursor-pointer transition-all duration-300 hover:text-gray-600`}
    >
      {icon}
      <span className='mr-2 text-xs lg:text-sm'>{title}</span>
    </li>
  )
}

List.Item = ListItem
