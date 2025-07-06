import { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for user in localStorage on initial load
    const storedUser = localStorage.getItem('merkatoUser')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
      setIsAuthenticated(true)
    }
    setLoading(false)
  }, [])

  const login = (userData) => {
    localStorage.setItem('merkatoUser', JSON.stringify(userData))
    setUser(userData)
    setIsAuthenticated(true)
    toast.success('Logged in successfully!')
  }

  const logout = () => {
    localStorage.removeItem('merkatoUser')
    setUser(null)
    setIsAuthenticated(false)
    toast.info('Logged out successfully')
  }

  const register = (userData) => {
    localStorage.setItem('merkatoUser', JSON.stringify(userData))
    setUser(userData)
    setIsAuthenticated(true)
    toast.success('Account created successfully!')
  }

  const updateUser = (updatedUser) => {
    localStorage.setItem('merkatoUser', JSON.stringify(updatedUser))
    setUser(updatedUser)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        login,
        logout,
        register,
        updateUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)