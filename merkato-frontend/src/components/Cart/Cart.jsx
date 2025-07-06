import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'
import './Cart.module.scss'

const Cart = () => {
  const {
    cartItems,
    cartTotal,
    isCartOpen,
    toggleCart,
    clearCart,
    cartCount
  } = useCart()

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isCartOpen])

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const cartVariants = {
    hidden: { x: '100%' },
    visible: {
      x: 0,
      transition: { type: 'spring', damping: 25 }
    }
  }

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            className="cart-overlay"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            onClick={toggleCart}
          />
          <motion.div
            className="cart-sidebar"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={cartVariants}
          >
            <div className="cart-header">
              <div className="cart-title">
                <FaShoppingCart />
                <h3>Your Cart ({cartCount})</h3>
              </div>
              <button className="close-btn" onClick={toggleCart}>
                <FaTimes />
              </button>
            </div>

            <div className="cart-body">
              {cartItems.length === 0 ? (
                <div className="empty-cart">
                  <p>Your cart is empty</p>
                  <button className="btn" onClick={toggleCart}>
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  <div className="cart-items">
                    {cartItems.map((item) => (
                      <CartItem key={item.id} item={item} />
                    ))}
                  </div>
                  <div className="cart-summary">
                    <div className="summary-row">
                      <span>Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="summary-row total">
                      <span>Total</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="cart-footer">
                <button className="btn btn-block" onClick={clearCart}>
                  Clear Cart
                </button>
                <button className="btn btn-block primary">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Cart