import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      
      {/* Hero Section */}
      <section className="hero">
        <span className="hero-icon" aria-hidden="true">🌱</span>
        <h1>Shree Ganesh HiTech Nursery</h1>
        <p>Bringing Nature Closer to You</p>
        <button className="hero-btn">Explore Plants</button>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Quality Plants</h3>
            <p>Only healthy and fresh plants delivered to you.</p>
          </div>
          <div className="feature-card">
            <h3>Expert Guidance</h3>
            <p>We help you grow your plants successfully.</p>
          </div>
          <div className="feature-card">
            <h3>Eco Friendly</h3>
            <p>Our practices are sustainable and safe for environment.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Start Your Garden Today!</h2>
        <button className="cta-btn">Shop Now</button>
      </section>

    </div>
  );
};

export default Home;
