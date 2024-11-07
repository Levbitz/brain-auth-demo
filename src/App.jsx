import React from 'react'
import { BrowserRouter ,Routes ,Route}  from  'react-router-dom'
import Home from './pages/home/Home'
import Register from './pages/Register/Register'
import Login from './pages/login/Login'


function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-up' element={<Register/>}/>
      <Route path='/sign-in' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
