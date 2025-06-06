import React from 'react'

function About() {
  return (
    <div className="about-container">
      <h1>About DailyGoods</h1>
      <p>
        Welcome to <strong>DailyGoods</strong> – your reliable partner for fresh groceries delivered straight to your door.
      </p>
      <p>
        Our mission is to make healthy eating simple, convenient, and affordable. We carefully select high-quality products to ensure you get only the best.
      </p>
      <div className="about-features">
        <div className="feature-card">
          <h3>🚚 Fast Delivery</h3>
          <p>Get your groceries delivered within hours, fresh and on time.</p>
        </div>
        <div className="feature-card">
          <h3>🍎 Fresh Products</h3>
          <p>We guarantee the freshness of every item you order.</p>
        </div>
        <div className="feature-card">
          <h3>💡 Easy Ordering</h3>
          <p>Our platform is designed for quick and hassle-free shopping.</p>
        </div>
      </div>
      <p className="about-footer">
        Thank you for choosing <strong>DailyGoods</strong>. We are here to make your life easier!
      </p>
    </div>
  )
}

export default About
