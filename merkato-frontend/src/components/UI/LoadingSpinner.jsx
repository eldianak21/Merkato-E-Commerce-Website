@use "../../assets/styles/variables" as *;
import './LoadingSpinner.module.scss'

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
    </div>
  )
}

export default LoadingSpinner