// src/pages/Login.tsx

import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axiosInstance from '../axiosInstance'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContext'

const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuth()

  const initialValues = {
    email: '',
    password: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required')
  })

  const handleSubmit = async (values: typeof initialValues) => {
    console.log('Form data', values)
    // Handle form submission, e.g., send data to server
    try {
      const response = await axiosInstance.post('/auth/login', values)
      //const { accessToken, refreshToken } = response.data
      const accessToken = response.data.tokens.access.token
      const refreshToken = response.data.tokens.refresh.token
      //localStorage.setItem('accessToken', accessToken)
      //localStorage.setItem('refreshToken', refreshToken)
      login(accessToken, refreshToken)
      alert('Login successful!')
      navigate('/dashboard') // Redirect to dashboard
      //console.log('Response data', response.data)
      //console.log('access data', response.data.tokens.access.token)
      //console.log('refresh data', response.data.tokens.refresh.token)
    } catch (error) {
      alert('Login failed!')
      console.error('Error', error)
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold">Login</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="mt-1 text-sm text-red-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Field
                type="password"
                name="password"
                id="password"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="mt-1 text-sm text-red-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full rounded-md bg-gray-800 p-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
              >
                Login
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Login
