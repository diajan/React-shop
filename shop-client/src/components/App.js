import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import Category from '../pages/Category'
import WishList from '../pages/WishList'
import { theme } from '../recoil/atom/theme'
import { ToastProvider } from 'react-toast-notifications'

function App() {
  const currentTheme = useRecoilValue(theme)
  return (
    <div className={`${!currentTheme && 'dark'}`}>
      <ToastProvider>
        <Router onUpdate={() => console.log('ddddd')}>
          <Routes>
            <Route index element={<Navigate replace to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<WishList />} />
            <Route path='/category' element={<Category />} />
          </Routes>
        </Router>
      </ToastProvider>
    </div>
  )
}

export default App
