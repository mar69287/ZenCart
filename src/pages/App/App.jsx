import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import * as userService from '../../utilities/users-service' 
import NavBar from '../../components/NavBar/NavBar'
import { useNavigate } from 'react-router-dom';

export default function App() {
  const [ user, setUser ] = useState(getUser())
  const navigate = useNavigate()

  function handleLogOut() {
    userService.logOut()
    setUser(null)
  }


  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar handleUser={handleLogOut} setUser={setUser} user={user}/>
          <Routes>
            {/* <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} /> */}

          </Routes>
        </>
        :
        <>
          <Routes>
            <Route path="/" element={<AuthPage setUser={setUser} />} />
          </Routes>
        </>
      }
    </main>
  );
}


