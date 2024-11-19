import React ,{useState} from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import { auth } from '../../lib/firebase/Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'



function Register() {

    const [email ,setEmail] = useState('')
    const  [password ,setPassword] = useState('')

    const navigate = useNavigate()

    const registerHandler = async (e)=>{
        e.preventDefault()
        try {
         const user = await createUserWithEmailAndPassword(auth,email,password)

        navigate('/', {replace:true})
            console.log(user)
        } catch (error) {
            console.log(error)
        }
    }
     
  return (
    <div>
    <div className='form_wrap'>
    
    <h3>Welcome  Please Sign Up </h3>

    <h1>may emails is  {email} and password is {password} </h1>
    <div className='input_wrap'>
    <label htmlFor="">Email</label>
    <input onChange={(e)=>setEmail(e.target.value)} type="email" name="" id="" placeholder='Enter your email' />
    </div>
    <div className='input_wrap'>
    <label htmlFor="">Password</label>
    <input onChange={(e)=>setPassword(e.target.value)} type="password" name="" id="" placeholder='Enter your password' />
    </div>
    
    
    <button onClick={registerHandler}>Register</button>
    <p> have an account? <Link to="/sign-in">Login</Link></p>
 
    </div>
    </div>
  )
}

export default Register
