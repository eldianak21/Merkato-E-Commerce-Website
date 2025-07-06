import { useRef } from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import ProductCard from '../ProductCard/ProductCard'
import './ProductCarousel.module.scss'

const ProductCarousel = ({ title, products }) => {
  const sliderRef = useRef(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <div className="product-carousel-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <div className="carousel-nav">
            <button onClick={() => sliderRef.current.slickPrev()}>
              <FaChevronLeft />
            </button>
            <button onClick={() => sliderRef.current.slickNext()}>
              <FaChevronRight />
            </button>
          </div>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {products.map((product) => (
            <div key={product.id} className="carousel-item">
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default ProductCarousel