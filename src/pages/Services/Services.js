import React from "react";
import "./Services.css";

const services = [
  {
    id: 1,
    title: "Plant Sales",
    icon: "🌱",
    description: "Wide variety of indoor, outdoor and fruit plants.",
  },
  {
    id: 2,
    title: "Garden Consultancy",
    icon: "🌼",
    description: "Expert guidance for home and commercial gardens.",
  },
  {
    id: 3,
    title: "Landscaping",
    icon: "🌳",
    description: "Professional landscaping and nursery solutions.",
  },
];

const Services = () => {
  return (
    <section className="services">
      <h1 className="services-title">🌿 Our Services</h1>

      <div className="services-flex">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
