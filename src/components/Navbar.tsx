// src/components/Navbar.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import logo2x from '../assets/Logo@2x.png'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-bold text-white">
          <Link to="/">
            <img src={logo2x} alt="React Logo" className="" />
          </Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-400">
            About
          </Link>
          <Link to="/blog" className="text-white hover:text-gray-400">
            Blog
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-400">
            Contact Us
          </Link>
        </div>
        <div className="space-x-4">
          <Link to="/login" className="text-white hover:text-gray-400">
            Login
          </Link>
          <Link to="/register" className="text-white hover:text-gray-400">
            Register
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
