import './App.css';
import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import * as userService from '../../utilities/users-service' 
import ProductPage from '../ProductPage/ProductPage';
import HomePage from '../HomePage';

export default function App() {
  const [ user, setUser ] = useState(getUser())
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
            <Route path='/products' element={<HomePage isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} handleUser={handleLogOut}/>}/>  
            <Route path="/products/:productId" element={<ProductPage isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} handleUser={handleLogOut}/>} /> 
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


