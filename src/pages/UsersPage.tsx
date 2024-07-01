// src/pages/UsersPage.tsx
import UserTable from '../components/UserTable'
import axiosInstance from '../axiosInstance'
import React, { useEffect, useState } from 'react'

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const dataReturned = await axiosInstance.get('/user')
      setUsers(dataReturned.data.users)
      setLoading(false)
    } catch (error) {
      console.error('Error', error)
    }
  }

  useEffect(() => {
    fetchData()
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
  return <UserTable users={users} refreshUsers={fetchData} />
}

export default UsersPage
