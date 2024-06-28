// src/components/Footer.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'
import { useAuth } from '../AuthContext'

const Footer = () => {
  const { isAuthenticated } = useAuth()
  return (
    <footer className="mt-8 bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-bold text-white">
          <Link to="/">
            <img src={logo} alt="React Logo" className="" />
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
        {isAuthenticated ? (
          <div className="space-x-4">
            <Link to="/logout" className="text-white hover:text-gray-400">
              Logout
            </Link>
            <Link to="/dashboard" className="text-white hover:text-gray-400">
              Dashboard
            </Link>
          </div>
        ) : (
          <div className="space-x-4">
            <Link to="/login" className="text-white hover:text-gray-400">
              Login
            </Link>
            <Link to="/register" className="text-white hover:text-gray-400">
              Register
            </Link>
          </div>
        )}

        <div className="text-sm text-white">
          &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
