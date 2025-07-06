import { motion } from 'framer-motion'
import { FaLeaf, FaShippingFast, FaHeadset, FaAward } from 'react-icons/fa'
import './About.module.scss'

const About = () => {
  useEffect(() => {
    document.title = 'About Us | Merkato'
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="about-page"
    >
      <section className="section hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>About Merkato</h1>
            <p>Ethiopia's premier online marketplace</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2023, Merkato was born out of a desire to bring the vibrant
                marketplace experience of Ethiopia to the digital world. Our name is inspired
                by the famous Merkato in Addis Ababa, Africa's largest open-air market.
              </p>
              <p>
                We started with a simple mission: to make it easy for Ethiopians to discover
                and purchase quality products from the comfort of their homes. Today, we've
                grown into a trusted platform connecting thousands of buyers and sellers
                across the country.
              </p>
              <p>
                Our team is passionate about leveraging technology to solve real problems
                while staying true to our Ethiopian roots and values.
              </p>
            </div>
            <div className="about-image">
              <img src="https://via.placeholder.com/600x400" alt="Our Team" />
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            {[
              {
                icon: <FaLeaf />,
                title: 'Sustainability',
                description: 'We promote eco-friendly products and practices'
              },
              {
                icon: <FaShippingFast />,
                title: 'Convenience',
                description: 'Fast delivery and easy shopping experience'
              },
              {
                icon: <FaHeadset />,
                title: 'Customer First',
                description: '24/7 support and customer satisfaction guarantee'
              },
              {
                icon: <FaAward />,
                title: 'Quality',
                description: 'Curated selection of high-quality products'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            {[
              { name: 'Abebe Kebede', role: 'Founder & CEO', image: 'https://via.placeholder.com/300x300' },
              { name: 'Selamawit Tesfaye', role: 'Marketing Director', image: 'https://via.placeholder.com/300x300' },
              { name: 'Yohannes Assefa', role: 'Tech Lead', image: 'https://via.placeholder.com/300x300' },
              { name: 'Meron Girma', role: 'Customer Support', image: 'https://via.placeholder.com/300x300' }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                className="team-member"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default About