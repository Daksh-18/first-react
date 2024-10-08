import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
            <NavLink className="red"  to='/'><li>Home</li></NavLink>                         
            <NavLink className="red" to='/about'><li>About Us</li></NavLink>
            <NavLink className="red" to='/login'><li>Login</li></NavLink>
            </nav>
        </div>
    )
}

export default Navbar
