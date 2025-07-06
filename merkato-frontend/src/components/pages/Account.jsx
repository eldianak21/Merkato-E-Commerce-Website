import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { FaUser, FaHistory, FaHeart, FaSignOutAlt, FaEdit } from 'react-icons/fa'
import { motion } from 'framer-motion'
import './Account.module.scss'

const Account = () => {
  const { user, isAuthenticated, logout, updateUser } = useAuth()
  const [activeTab, setActiveTab] = useState('profile')
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })

  useEffect(() => {
    if (isAuthenticated && user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        address: user.address || ''
      })
    }
  }, [isAuthenticated, user])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(formData)
    setIsEditing(false)
  }

  if (!isAuthenticated) {
    return (
      <div className="not-authenticated">
        <h2>Please log in to view your account</h2>
        <button className="btn">Login</button>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="account-page"
    >
      <section className="section">
        <div className="container">
          <div className="account-header">
            <div className="user-info">
              <div className="user-avatar">
                <FaUser />
              </div>
              <div className="user-details">
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
            </div>
            <button className="logout-btn" onClick={logout}>
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </div>

          <div className="account-content">
            <div className="account-sidebar">
              <ul className="account-menu">
                <li
                  className={activeTab === 'profile' ? 'active' : ''}
                  onClick={() => setActiveTab('profile')}
                >
                  <FaUser />
                  <span>Profile</span>
                </li>
                <li
                  className={activeTab === 'orders' ? 'active' : ''}
                  onClick={() => setActiveTab('orders')}
                >
                  <FaHistory />
                  <span>Orders</span>
                </li>
                <li
                  className={activeTab === 'wishlist' ? 'active' : ''}
                  onClick={() => setActiveTab('wishlist')}
                >
                  <FaHeart />
                  <span>Wishlist</span>
                </li>
              </ul>
            </div>

            <div className="account-main">
              {activeTab === 'profile' && (
                <div className="profile-tab">
                  <div className="tab-header">
                    <h3>Personal Information</h3>
                    {!isEditing && (
                      <button
                        className="edit-btn"
                        onClick={() => setIsEditing(true)}
                      >
                        <FaEdit />
                        <span>Edit</span>
                      </button>
                    )}
                  </div>

                  {isEditing ? (
                    <form onSubmit={handleSubmit} className="profile-form">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <textarea
                          id="address"
                          name="address"
                          rows="3"
                          value={formData.address}
                          onChange={handleChange}
                        ></textarea>
                      </div>

                      <div className="form-actions">
                        <button
                          type="button"
                          className="btn btn-outline"
                          onClick={() => setIsEditing(false)}
                        >
                          Cancel
                        </button>
                        <button type="submit" className="btn">
                          Save Changes
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="profile-info">
                      <div className="info-row">
                        <span className="info-label">Name:</span>
                        <span className="info-value">{user.name}</span>
                      </div>
                      <div className="info-row">
                        <span className="info-label">Email:</span>
                        <span className="info-value">{user.email}</span>
                      </div>
                      <div className="info-row">
                        <span className="info-label">Phone:</span>
                        <span className="info-value">
                          {user.phone || 'Not provided'}
                        </span>
                      </div>
                      <div className="info-row">
                        <span className="info-label">Address:</span>
                        <span className="info-value">
                          {user.address || 'Not provided'}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'orders' && (
                <div className="orders-tab">
                  <h3>Your Orders</h3>
                  <div className="no-orders">
                    <p>You haven't placed any orders yet</p>
                    <button className="btn">Start Shopping</button>
                  </div>
                </div>
              )}

              {activeTab === 'wishlist' && (
                <div className="wishlist-tab">
                  <h3>Your Wishlist</h3>
                  <div className="no-items">
                    <p>Your wishlist is empty</p>
                    <button className="btn">Browse Products</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Account