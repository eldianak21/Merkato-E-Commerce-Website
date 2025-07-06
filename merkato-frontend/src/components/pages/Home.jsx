import { useEffect } from 'react'
import { motion } from 'framer-motion'
import MainCarousel from '../Carousel/MainCarousel'
import ProductCarousel from '../Carousel/ProductCarousel'
import { featuredProducts, bestSellers, newArrivals } from '../utils/constants'
import './Home.module.scss'

const Home = () => {
  useEffect(() => {
    document.title = 'Merkato - Click it. Get it.'
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MainCarousel />

      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <ProductCarousel title="" products={featuredProducts} />
        </div>
      </section>

      <section className="section categories-section">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="categories-grid">
            {[
              { name: 'Electronics', image: 'https://via.placeholder.com/400x300' },
              { name: 'Fashion', image: 'https://via.placeholder.com/400x300' },
              { name: 'Home & Garden', image: 'https://via.placeholder.com/400x300' },
              { name: 'Health & Beauty', image: 'https://via.placeholder.com/400x300' }
            ].map((category, index) => (
              <motion.div
                key={category.name}
                className="category-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="category-image">
                  <img src={category.image} alt={category.name} />
                </div>
                <h3 className="category-name">{category.name}</h3>
                <button className="btn btn-outline">Shop Now</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Best Sellers</h2>
          <ProductCarousel title="" products={bestSellers} />
        </div>
      </section>

      <section className="section new-arrivals-section">
        <div className="container">
          <h2 className="section-title">New Arrivals</h2>
          <ProductCarousel title="" products={newArrivals} />
        </div>
      </section>

      <section className="section promo-section">
        <div className="container">
          <div className="promo-banner">
            <div className="promo-content">
              <h2>Special Offer</h2>
              <p>Get 20% off on all products this week</p>
              <button className="btn">Shop Now</button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home