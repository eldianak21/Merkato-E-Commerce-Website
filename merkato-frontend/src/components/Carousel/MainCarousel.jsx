import { useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './MainCarousel.module.scss'

const MainCarousel = () => {
  const sliderRef = useRef(null)
  const controls = useAnimation()

  const slides = [
    {
      id: 1,
      title: 'Summer Collection 2023',
      subtitle: 'Discover the latest trends',
      image: 'https://via.placeholder.com/1200x500',
      link: '/products',
      buttonText: 'Shop Now'
    },
    {
      id: 2,
      title: 'New Arrivals',
      subtitle: 'Fresh products just for you',
      image: 'https://via.placeholder.com/1200x500',
      link: '/products?new=true',
      buttonText: 'Explore'
    },
    {
      id: 3,
      title: 'Special Discounts',
      subtitle: 'Up to 50% off selected items',
      image: 'https://via.placeholder.com/1200x500',
      link: '/products?discount=true',
      buttonText: 'Get Deals'
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    beforeChange: () => {
      controls.start('hidden')
    },
    afterChange: () => {
      controls.start('visible')
    }
  }

  useEffect(() => {
    controls.start('visible')
  }, [controls])

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  return (
    <div className="main-carousel">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <div className="slide-image">
              <img src={slide.image} alt={slide.title} />
            </div>
            <motion.div
              className="slide-content"
              initial="hidden"
              animate={controls}
              variants={variants}
            >
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
              <Link to={slide.link} className="btn">
                {slide.buttonText}
              </Link>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default MainCarousel