import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes } from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import './Header.module.scss'

const Header = () => {
  const { cartCount, toggleCart, isCartOpen } = useCart()
  const { user, isAuthenticated, logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    // Search functionality would be implemented here
    console.log('Searching for:', searchQuery)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-top">
          <div className="logo">
            <Link to="/">
              <h1>Merkato</h1>
              <span>Click it. Get it.</span>
            </Link>
          </div>

          <div className="search-bar">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit">
                <FaSearch />
              </button>
            </form>
          </div>

          <div className="header-actions">
            <div className="account">
              <Link to={isAuthenticated ? '/account' : '/login'}>
                <FaUser />
                <span>{isAuthenticated ? user.name : 'Account'}</span>
              </Link>
              {isAuthenticated && (
                <button onClick={logout} className="logout-btn">
                  Logout
                </button>
              )}
            </div>

            <button className="cart-btn" onClick={toggleCart}>
              <FaShoppingCart />
              <span className="cart-count">{cartCount}</span>
            </button>

            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header