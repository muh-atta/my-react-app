// src/routes/AppRouter.tsx
import {
  Navigate,
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import App from 'components/App'
import Navbar from 'components/Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Blog from '../pages/Blog'
import ContactUs from '../pages/ContactUs'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Footer from '../components/Footer'
import Dashboard from '../Dashboard'
import ProtectedRoute from '../ProtectedRoute'
import { AuthProvider } from '../AuthContext'
import Logout from '../pages/Logout'
import UsersPage from '../pages/UsersPage'

const AppRouter = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="grow">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/users"
              element={
                <ProtectedRoute>
                  <UsersPage />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/login" />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  )
}

export default AppRouter
