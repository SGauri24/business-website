import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>🌱 About Shree Ganesh HiTech Nursery</h1>
        <p>Bringing greenery and joy to your homes and gardens</p>
      </section>

      {/* Our Story Section */}
      <section className="about-story">
        <h2>Our Story</h2>
        <p>
          Shree Ganesh HiTech Nursery started with a passion for plants and
          sustainable gardening. We provide healthy plants and guidance for
          a greener lifestyle.
        </p>
      </section>

      {/* Our Values Section */}
      <section className="about-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Quality</h3>
            <p>We deliver only healthy, top-quality plants.</p>
          </div>
          <div className="value-card">
            <h3>Sustainability</h3>
            <p>Eco-friendly practices in all our gardening solutions.</p>
          </div>
          <div className="value-card">
            <h3>Expert Guidance</h3>
            <p>We help our customers nurture and grow their plants successfully.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
