import React, { useContext } from 'react'
import { AuthContext } from '../../lib/context/auth';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase/Firebase';
import { useNavigate } from 'react-router-dom';

function Home() {
  const {user} = useContext(AuthContext);
  console.log(user);
  const navigate =useNavigate()

  const logoutHandler =  () =>{
    signOut(auth)
    navigate('/sign-in', {replace:true})
  } 
  return (
    <div>
    <h1>Home Page  {user?.email}</h1>
    <h1>Only Accessed by logged in Users</h1>
    <button 
    onClick={logoutHandler}
    className='btn'>Log out </button>
    </div>
  )
}

export default Home
