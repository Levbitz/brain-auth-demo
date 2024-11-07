//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { createRoot } from 'react-dom/server'
import App from './App.jsx'
import './main.css'

createRoot(document.getElementById('root')).render(
 
    <App />
 
)
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
