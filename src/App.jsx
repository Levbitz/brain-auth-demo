import React from 'react'
import { BrowserRouter ,Routes ,Route}  from  'react-router-dom'
import Home from './pages/home/Home'
import Register from './pages/Register/Register'
import Login from './pages/login/Login'
import PrivateRoute from './lib/PrivateRoute/PrivateRoute'


function App() {
  return (
    <BrowserRouter>

    <Routes>
    <Route path='/' element={<PrivateRoute/>}>

     <Route path='/' element={<Home/>}/>

    </Route>

    
     
      <Route path='/sign-up' element={<Register/>}/>
      <Route path='/sign-in' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
