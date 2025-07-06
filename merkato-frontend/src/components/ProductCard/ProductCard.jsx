import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart, FaShoppingCart, FaEye } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import './ProductCard.module.scss'

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(product, 1)
  }

  const toggleWishlist = (e) => {
    e.preventDefault()
    setIsWishlisted(!isWishlisted)
  }

  return (
    <motion.div
      className="product-card"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/products/${product.id}`} className="product-link">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          {product.discount && (
            <span className="discount-badge">-{product.discount}%</span>
          )}
          {isHovered && (
            <div className="product-actions">
              <button
                className="action-btn wishlist-btn"
                onClick={toggleWishlist}
                aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                {isWishlisted ? <FaHeart /> : <FaRegHeart />}
              </button>
              <button
                className="action-btn quickview-btn"
                aria-label="Quick view"
              >
                <FaEye />
              </button>
            </div>
          )}
        </div>

        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <div className="product-price">
            {product.discount ? (
              <>
                <span className="current-price">
                  ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                </span>
                <span className="original-price">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="current-price">${product.price.toFixed(2)}</span>
            )}
          </div>
          <div className="product-rating">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`star ${i < product.rating ? 'filled' : ''}`}
              >
                ★
              </span>
            ))}
            <span className="rating-count">({product.reviews})</span>
          </div>
        </div>

        <button
          className="add-to-cart-btn"
          onClick={handleAddToCart}
          aria-label="Add to cart"
        >
          <FaShoppingCart />
          <span>Add to Cart</span>
        </button>
      </Link>
    </motion.div>
  )
}

export default ProductCard