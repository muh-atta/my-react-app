// src/pages/UsersPage.tsx
import UserTable from '../components/UserTable'
import axiosInstance from '../axiosInstance'
import React, { useEffect, useState } from 'react'

const fetchData = async () => {
  try {
    const users = await axiosInstance.get('/user')
    return users.data.users
  } catch (error) {
    console.error('Error', error)
  }
}

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchData()
      setUsers(data)
      setLoading(false)
    }
    getUsers()
  }, [])

  /*
  const users = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com' }
    // Add more users as needed
  ]
    */

  /*
  try {
    allusers = await axiosInstance.get('/user')
    console.log(allusers.data.users)
  } catch (error) {
    // alert('Login failed!')
    console.error('Error', error)
  }
*/
  return <UserTable users={users} />
}

export default UsersPage
