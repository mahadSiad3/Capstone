import { useState, createContext } from 'react'
import './App.css'
import Home from '../pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import Collections from '../pages/Collections'
import NavBar from './components/NavBar'
import Signup from '../pages/Signup'
import Login from '../pages/Login.jsx'
import Recommendation from '../pages/Recommendation.jsx'

export const UserContext = createContext()


function App() {

  const [username, setUsername] = useState('')
  const location = useLocation()

  const hideNav = location.pathname === '/' || location.pathname === '/signup';


  return (
    <div>
      <UserContext.Provider value={{ username, setUsername }}>
        {!hideNav && <NavBar />}
       
        <main className='mainPage'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/home' element={<Home />} />
            <Route path='/collections' element={<Collections />} />
            <Route path='/recommendations' element={<Recommendation />} />
          </Routes>
        </main>
      </UserContext.Provider>
    </div>
  )
}



export default App
