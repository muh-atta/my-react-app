// src/pages/ContactUs.tsx

import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const ContactUs = () => {
  const initialValues = {
    name: '',
    email: '',
    message: ''
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    message: Yup.string().required('Required')
  })

  const handleSubmit = (values: typeof initialValues) => {
    console.log('Form data', values)
    // Handle form submission, e.g., send data to server
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold">Contact Us</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="mt-1 text-sm text-red-500"
              />
            </div>
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
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <Field
                as="textarea"
                name="message"
                id="message"
                rows="4"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="mt-1 text-sm text-red-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full rounded-md bg-gray-800 p-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default ContactUs
