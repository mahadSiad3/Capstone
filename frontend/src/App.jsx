import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import animeDisplay from './components/AnimeDisplay'
import Home from '../pages/Home'
import { Route,Routes } from 'react-router-dom'
import Collections from '../pages/Collections'


function App() {

  return (
    <main className='mainPage'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collections' element={<Collections/>}/>
        <Route/>
      </Routes>
      </main>
  )
}



export default App
