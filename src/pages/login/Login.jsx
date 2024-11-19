import React, { useState } from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import { AuthContext } from '../../lib/context/auth'
import { auth } from '../../lib/firebase/Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
function Login() {
  // const {user} = useContext(AuthContext)
  // console.log(user);
  const navigate = useNavigate()
  const [email ,setEmail] = useState('')
  const  [password ,setPassword] = useState('')


  const signInHandler = async (e)=>{
    e.preventDefault()
    try {
     const user = await signInWithEmailAndPassword(auth,email,password)
     navigate('/', {replace:true})
        console.log(user)
    } catch (error) {
        console.log(error)
    }
}
 
  
  return (
    <div>
    <div className='form_wrap'>
    
    <h3>Welcome back Please Login </h3>

    <div className='input_wrap'>
    <label htmlFor="">Email</label>
    <input onChange={(e)=>setEmail(e.target.value)} type="email" name="" id="" placeholder='Enter your email' />
    </div>
    <div className='input_wrap'>
    <label htmlFor="">Password</label>
    <input onChange={(e)=>setPassword(e.target.value)} type="password" name="" id="" placeholder='Enter your password' />
    </div>
    
    <button onClick={signInHandler}>Login</button>
    
    <p>Don't have an account? <Link to="/sign-up">Register</Link></p>
 
    </div>
    </div>
  )
}

export default Login
