// src/components/UserTable.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import { FaPen, FaTrash } from 'react-icons/fa'
import axiosInstance from '../axiosInstance'
import { useNavigate } from 'react-router-dom'

interface User {
  id: number
  firstname: string
  lastname: string
  email: string
}

interface UserTableProps {
  users: User[]
  refreshUsers: () => void // Function to refresh the user list
}

const deleteUser = async (userId: number) => {
  console.log(userId)
  try {
    await axiosInstance.delete(`/user/${userId}`)
  } catch (error) {
    alert('Delete failed!')
    console.error('Error', error)
  }
}

const UserTable: React.FC<UserTableProps> = ({ users, refreshUsers }) => {
  const navigate = useNavigate()
  const handleDelete = async (userId: number) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(userId)
        refreshUsers() // Refresh the user list after deletion
        navigate('/users') // Redirect to the users listing page
      } catch (error) {
        console.error('Failed to delete user:', error)
      }
    }
  }
  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full border border-gray-200 bg-white">
        <thead>
          <tr>
            <th className="border-b border-gray-200 bg-gray-100 px-4 py-2 text-left text-sm font-semibold uppercase text-gray-600">
              ID
            </th>
            <th className="border-b border-gray-200 bg-gray-100 px-4 py-2 text-left text-sm font-semibold uppercase text-gray-600">
              First Name
            </th>
            <th className="border-b border-gray-200 bg-gray-100 px-4 py-2 text-left text-sm font-semibold uppercase text-gray-600">
              Last Name
            </th>
            <th className="border-b border-gray-200 bg-gray-100 px-4 py-2 text-left text-sm font-semibold uppercase text-gray-600">
              Email
            </th>
            <th className="border-b border-gray-200 bg-gray-100 px-4 py-2 text-left text-sm font-semibold uppercase text-gray-600">
              Edit
            </th>
            <th className="border-b border-gray-200 bg-gray-100 px-4 py-2 text-left text-sm font-semibold uppercase text-gray-600">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b border-gray-200">
              <td className="px-4 py-2 text-gray-700">{user.id}</td>
              <td className="px-4 py-2 text-gray-700">{user.firstname}</td>
              <td className="px-4 py-2 text-gray-700">{user.lastname}</td>
              <td className="px-4 py-2 text-gray-700">{user.email}</td>
              <td className="px-4 py-2 text-gray-700">
                <Link to={`/edit/${user.id}`}>
                  <FaPen />
                </Link>
              </td>
              <td>
                <Link to="#" onClick={() => handleDelete(user.id)}>
                  <FaTrash />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable
