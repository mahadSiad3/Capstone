import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import animeDisplay from './components/AnimeDisplay'
import Home from '../pages/Home'
import { Route, Routes } from 'react-router-dom'
import Collections from '../pages/Collections'
import NavBar from './components/NavBar'
import Signup from '../pages/Signup'
import Login from '../pages/Login.jsx'

export const UserContext = createContext()


function App() {
  const [username, setUsername] = useState(() => {
    return localStorage.getItem('username') || ''
  })


  return (
    <div>
      <UserContext.Provider value={{ username, setUsername }}>
        <NavBar />
        <main className='mainPage'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/collections' element={<Collections />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route />
          </Routes>
        </main>
      </UserContext.Provider>
    </div>
  )
}



export default App
