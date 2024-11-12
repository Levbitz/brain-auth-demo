import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../lib/context/auth'
function Login() {
  const {user} = useContext(AuthContext)
  console.log(user);
  
  return (
    <div>
    <div className='form_wrap'>
    
    <h3>Welcome back Please Login </h3>

    <div className='input_wrap'>
    <label htmlFor="">Email</label>
    <input type="email" name="" id="" placeholder='Enter your email' />
    </div>
    <div className='input_wrap'>
    <label htmlFor="">Password</label>
    <input type="password" name="" id="" placeholder='Enter your password' />
    </div>
    
    
    <button>Login</button>
    <p>Don't have an account? <Link to="/sign-up">Register</Link></p>
 
    </div>
    </div>
  )
}

export default Login
