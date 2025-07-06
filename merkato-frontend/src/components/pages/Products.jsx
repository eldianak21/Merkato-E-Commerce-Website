import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaSearch, FaFilter, FaTimes } from 'react-icons/fa'
import ProductCard from '../ProductCard/ProductCard'
import { allProducts } from '../utils/constants'
import './Products.module.scss'

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    sort: ''
  })

  const categories = [...new Set(allProducts.map(product => product.category))]
  const priceRanges = [
    { label: 'Under $50', value: '0-50' },
    { label: '$50 - $100', value: '50-100' },
    { label: '$100 - $200', value: '100-200' },
    { label: 'Over $200', value: '200-1000' }
  ]

  useEffect(() => {
    document.title = 'Products | Merkato'
    
    const category = searchParams.get('category')
    const price = searchParams.get('price')
    const sort = searchParams.get('sort')
    const search = searchParams.get('search')
    
    if (category || price || sort || search) {
      setFilters({
        category: category || '',
        priceRange: price || '',
        sort: sort || ''
      })
      setSearchQuery(search || '')
    }
  }, [searchParams])

  const handleSearch = (e) => {
    e.preventDefault()
    const params = {}
    if (searchQuery) params.search = searchQuery
    if (filters.category) params.category = filters.category
    if (filters.priceRange) params.price = filters.priceRange
    if (filters.sort) params.sort = filters.sort
    setSearchParams(params)
  }

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters(prev => ({ ...prev, [name]: value }))
  }

  const applyFilters = () => {
    const params = {}
    if (searchQuery) params.search = searchQuery
    if (filters.category) params.category = filters.category
    if (filters.priceRange) params.price = filters.priceRange
    if (filters.sort) params.sort = filters.sort
    setSearchParams(params)
    setIsFilterOpen(false)
  }

  const clearFilters = () => {
    setFilters({
      category: '',
      priceRange: '',
      sort: ''
    })
    setSearchQuery('')
    setSearchParams({})
  }

  const filteredProducts = allProducts.filter(product => {
    // Search filter
    const matchesSearch = searchQuery
      ? product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true
    
    // Category filter
    const matchesCategory = filters.category
      ? product.category === filters.category
      : true
    
    // Price range filter
    let matchesPrice = true
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number)
      if (max) {
        matchesPrice = product.price >= min && product.price <= max
      } else {
        matchesPrice = product.price >= min
      }
    }
    
    return matchesSearch && matchesCategory && matchesPrice
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (filters.sort === 'price-low') return a.price - b.price
    if (filters.sort === 'price-high') return b.price - a.price
    if (filters.sort === 'rating') return b.rating - a.rating
    if (filters.sort === 'newest') return new Date(b.createdAt) - new Date(a.createdAt)
    return 0
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="products-page"
    >
      <section className="section">
        <div className="container">
          <h1 className="page-title">Our Products</h1>
          
          <div className="products-controls">
            <form className="search-form" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit">
                <FaSearch />
              </button>
            </form>
            
            <div className="filter-controls">
              <select
                name="sort"
                value={filters.sort}
                onChange={handleFilterChange}
                className="sort-select"
              >
                <option value="">Sort by</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
              
              <button
                className="filter-btn"
                onClick={() => setIsFilterOpen(true)}
              >
                <FaFilter />
                <span>Filters</span>
              </button>
            </div>
          </div>
          
          <div className="products-grid">
            {sortedProducts.length > 0 ? (
              sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="no-results">
                <h3>No products found</h3>
                <p>Try adjusting your search or filter criteria</p>
                <button className="btn" onClick={clearFilters}>
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Filter Sidebar */}
      <div className={`filter-sidebar ${isFilterOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>Filters</h3>
          <button
            className="close-btn"
            onClick={() => setIsFilterOpen(false)}
          >
            <FaTimes />
          </button>
        </div>
        
        <div className="sidebar-content">
          <div className="filter-group">
            <h4>Categories</h4>
            <div className="filter-options">
              {categories.map((category) => (
                <label key={category} className="filter-option">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={filters.category === category}
                    onChange={handleFilterChange}
                  />
                  <span>{category}</span>
                </label>
              ))}
              <label className="filter-option">
                <input
                  type="radio"
                  name="category"
                  value=""
                  checked={filters.category === ''}
                  onChange={handleFilterChange}
                />
                <span>All Categories</span>
              </label>
            </div>
          </div>
          
          <div className="filter-group">
            <h4>Price Range</h4>
            <div className="filter-options">
              {priceRanges.map((range) => (
                <label key={range.value} className="filter-option">
                  <input
                    type="radio"
                    name="priceRange"
                    value={range.value}
                    checked={filters.priceRange === range.value}
                    onChange={handleFilterChange}
                  />
                  <span>{range.label}</span>
                </label>
              ))}
              <label className="filter-option">
                <input
                  type="radio"
                  name="priceRange"
                  value=""
                  checked={filters.priceRange === ''}
                  onChange={handleFilterChange}
                />
                <span>All Prices</span>
              </label>
            </div>
          </div>
        </div>
        
        <div className="sidebar-footer">
          <button className="btn btn-outline" onClick={clearFilters}>
            Clear All
          </button>
          <button className="btn" onClick={applyFilters}>
            Apply Filters
          </button>
        </div>
      </div>
      
      {isFilterOpen && (
        <div
          className="filter-overlay"
          onClick={() => setIsFilterOpen(false)}
        />
      )}
    </motion.div>
  )
}

export default Products