// src/components/UserTable.tsx
import React from 'react'

interface User {
  id: number
  firstName: string
  lastName: string
  email: string
}

interface UserTableProps {
  users: User[]
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
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
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b border-gray-200">
              <td className="px-4 py-2 text-gray-700">{user.id}</td>
              <td className="px-4 py-2 text-gray-700">{user.firstname}</td>
              <td className="px-4 py-2 text-gray-700">{user.lastname}</td>
              <td className="px-4 py-2 text-gray-700">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable
