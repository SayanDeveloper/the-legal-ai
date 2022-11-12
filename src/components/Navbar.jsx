import React from 'react'
import logo from "../assets/logo.png"
import "../styles/navbar.css"

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt="logo" />
            <div className='navbar-items'>
                <a href='#'>Home</a>
                <a href='#'>Legal Areas</a>
                <a href='#'>Vision</a>
            </div>
        </div>
    )
}

export default Navbar
