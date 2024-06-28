// src/Logout.tsx
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContext'

const Logout = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    logout()
    navigate('/')
  }, [logout, navigate])

  return null // or you can return a loading indicator if needed
}

export default Logout
