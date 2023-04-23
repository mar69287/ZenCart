import './App.css';
import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import * as userService from '../../utilities/users-service' 
import ProductPage from '../ProductPage/ProductPage';
import HomePage from '../HomePage';
import CartPage from '../CartPage';
import OrderHistoryPage from '../OrderHistoryPage';

export default function App() {
  const [ user, setUser ] = useState(getUser())
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [cart, setCart] = useState([]);

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
            <Route path='/products' element={<HomePage cart={cart} isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} handleUser={handleLogOut}/>}/>  
            <Route path="/products/:productId" element={<ProductPage cart={cart} setCart={setCart} isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} handleUser={handleLogOut}/>} /> 
            <Route path='/cart' element={<CartPage cart={cart} setCart={setCart} isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} handleUser={handleLogOut}/>}/>
            <Route path='/orders' element={<OrderHistoryPage  isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} handleUser={handleLogOut}/>}/>
            <Route path="/*" element={<Navigate to="/products" />} />
          </Routes>
        </>
        :
        <>
          <AuthPage setUser={setUser} />
        </>
      }
    </main>
  );
}


