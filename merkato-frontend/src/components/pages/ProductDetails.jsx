import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaStar, FaRegStar, FaShoppingCart, FaHeart, FaRegHeart, FaChevronLeft } from 'react-icons/fa'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useCart } from '../context/CartContext'
import { allProducts } from '../utils/constants'
import './ProductDetails.module.scss'

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
    const foundProduct = allProducts.find(p => p.id === parseInt(id))
    if (foundProduct) {
      setProduct(foundProduct)
      // Find related products (same category)
      const related = allProducts
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4)
      setRelatedProducts(related)
    } else {
      navigate('/products')
    }
    document.title = foundProduct ? `${foundProduct.name} | Merkato` : 'Product Not Found'
  }, [id, navigate])

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value)
    if (!isNaN(value) && value >= 1) {
      setQuantity(value)
    }
  }

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }

  if (!product) {
    return <div className="loading">Loading...</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="product-details-page"
    >
      <button className="back-btn" onClick={() => navigate(-1)}>
        <FaChevronLeft />
        <span>Back to Products</span>
      </button>

      <section className="section product-section">
        <div className="container">
          <div className="product-details">
            <div className="product-gallery">
              <div className="main-image">
                <Slider {...sliderSettings}>
                  {[product.image, ...product.additionalImages].map((img, index) => (
                    <div key={index} className="slide">
                      <img src={img} alt={`${product.name} ${index + 1}`} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            <div className="product-info">
              <h1 className="product-title">{product.name}</h1>
              
              <div className="product-meta">
                <div className="product-rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="star">
                      {i < product.rating ? <FaStar /> : <FaRegStar />}
                    </span>
                  ))}
                  <span className="rating-count">({product.reviews} reviews)</span>
                </div>
                
                <div className="product-sku">SKU: {product.sku}</div>
              </div>
              
              <div className="product-price">
                {product.discount ? (
                  <>
                    <span className="current-price">
                      ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                    </span>
                    <span className="original-price">${product.price.toFixed(2)}</span>
                    <span className="discount-badge">-{product.discount}%</span>
                  </>
                ) : (
                  <span className="current-price">${product.price.toFixed(2)}</span>
                )}
              </div>
              
              <div className="product-description">
                <p>{product.description}</p>
              </div>
              
              <div className="product-actions">
                <div className="quantity-selector">
                  <button
                    className="quantity-btn"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                  />
                  <button className="quantity-btn" onClick={incrementQuantity}>
                    +
                  </button>
                </div>
                
                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                  <FaShoppingCart />
                  <span>Add to Cart</span>
                </button>
                
                <button
                  className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
                  onClick={toggleWishlist}
                >
                  {isWishlisted ? <FaHeart /> : <FaRegHeart />}
                </button>
              </div>
              
              <div className="product-meta-footer">
                <div className="meta-item">
                  <span className="meta-label">Category:</span>
                  <span className="meta-value">{product.category}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Availability:</span>
                  <span className="meta-value in-stock">In Stock ({product.stock} units)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="section related-products-section">
          <div className="container">
            <h2 className="section-title">You May Also Like</h2>
            <div className="related-products-grid">
              {relatedProducts.map((product) => (
                <div key={product.id} className="related-product">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <div className="price">${product.price.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </motion.div>
  )
}

export default ProductDetails