import { useState } from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import './App.css'

function App() {
const router = createBrowserRouter([
  {
    path: '/',
    element: <><Navbar/><Home/></>
  },
  {
    path: '/about',
    element: <><Navbar/><About/></>
  },
  {
    path: '/login',
    element: <><Navbar/><Login/></>
  },
])

  return (
    <>    
      
      <RouterProvider router={router}/>
      
      
    </>
  )
}

export default App
