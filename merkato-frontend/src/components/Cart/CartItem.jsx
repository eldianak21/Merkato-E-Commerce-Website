import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import './CartItem.module.scss'

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart()

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value)
    if (!isNaN(newQuantity) {
      updateQuantity(item.id, newQuantity)
    }
  }

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1)
  }

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1)
    }
  }

  return (
    <motion.div
      className="cart-item"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.2 }}
    >
      <div className="item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="item-details">
        <div className="item-header">
          <h4 className="item-name">{item.name}</h4>
          <button
            className="remove-btn"
            onClick={() => removeFromCart(item.id)}
            aria-label="Remove item"
          >
            <FaTimes />
          </button>
        </div>
        <div className="item-price">${item.price.toFixed(2)}</div>
        <div className="item-quantity">
          <button
            className="quantity-btn"
            onClick={handleDecrement}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={handleQuantityChange}
          />
          <button className="quantity-btn" onClick={handleIncrement}>
            +
          </button>
        </div>
        <div className="item-total">
          ${(item.price * item.quantity).toFixed(2)}
        </div>
      </div>
    </motion.div>
  )
}

export default CartItem