import './App.css';
import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import * as userService from '../../utilities/users-service' 
import ProductDetailPage from '../ProductPage/ProductPage';
import ProductsPage from '../ProductPage';
import CartPage from '../CartPage';
import OrderHistoryPage from '../OrderHistoryPage';
import LandingPage from '../HomePage'
import '@fontsource/lato/400.css'
import '@fontsource/montserrat/700.css'

export default function App() {
  const [ user, setUser ] = useState(getUser())
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [countCart, setCountCart] = useState(0)

  function handleLogOut() {
    userService.logOut()
    setUser(null)
  }


  return (
    <main className="App">
      {
        user ?
        <>
          <Routes>
            <Route path='/products' element={<ProductsPage cart={cart} isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} handleUser={handleLogOut} countCart={countCart}/>}/>  
            <Route path="/products/:productId" element={<ProductDetailPage cart={cart} setCart={setCart} isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} handleUser={handleLogOut} setCountCart={setCountCart} countCart={countCart}/>} /> 
            <Route path='/cart' element={<CartPage cart={cart} setCart={setCart} isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} handleUser={handleLogOut} setCountCart={setCountCart} countCart={countCart}/>}/>
            <Route path='/orders' element={<OrderHistoryPage  isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} handleUser={handleLogOut} countCart={countCart}/>}/>
            <Route path="/*" element={<Navigate to="/products" />} />
          </Routes>
        </>
        :
        <>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/auth' element={<AuthPage setUser={setUser}/>} />
        </Routes>
          {/* <AuthPage setUser={setUser} /> */}
        </>
      }
    </main>
  );
}


