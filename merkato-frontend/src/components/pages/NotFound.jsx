import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './NotFound.module.scss'

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="not-found-page"
    >
      <div className="container">
        <div className="not-found-content">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for doesn't exist or has been moved.</p>
          <Link to="/" className="btn">
            Go Back Home
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default NotFound