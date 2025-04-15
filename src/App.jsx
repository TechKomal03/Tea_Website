import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Login from './auth/Login'
import Reg from './auth/Reg'


const App = () => {
  return (
    <div>
  <BrowserRouter >
  <Routes>
<Route path='/' element={<Home />}></Route>
<Route path='/contact' element={<Contact />}></Route>
<Route path='/login' element={<Login />}></Route>
<Route path='/regstration' element={<Reg />}></Route>
  </Routes>
  </BrowserRouter>
      
    </div>
  )
}

export default App
