// src/ProtectedRoute.tsx
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

/*
const ProtectedRoute = () => {
  const isAuthenticated = !!localStorage.getItem('accessToken') // Check if the user is authenticated

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}
*/

interface ProtectedRouteProps {
  children: JSX.Element
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth()
  console.log(isAuthenticated)
  return isAuthenticated ? children : <Navigate to="/login" />
}

export default ProtectedRoute
