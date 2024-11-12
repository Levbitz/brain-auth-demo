//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { createRoot } from 'react-dom/server'
import App from './App.jsx'
import './main.css'
import AuthProvider from './lib/context/auth.jsx'

createRoot(document.getElementById('root')).render(
 <AuthProvider>
  <App />
 </AuthProvider>
   
 
)
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
