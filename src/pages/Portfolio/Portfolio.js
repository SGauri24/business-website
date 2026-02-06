import React from "react";
import "./Portfolio.css";
import ProductCard from "../../components/ProductCard/ProductCard";

// ✅ IMPORT IMAGES FROM src/assets (BEST PRACTICE)
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.jpg";
import img6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  const products = [
    {
      id: 1,
      name: "Rose Plant",
      price: 299,
      image: img1,
    },
    {
      id: 2,
      name: "Tulip Collection",
      price: 499,
      image: img2,
    },
    {
      id: 3,
      name: "Indoor Bonsai",
      price: 899,
      image: img3,
    },
    {
      id: 4,
      name: "Orchid Arrangement",
      price: 699,
      image: img4,
    },
    {
      id: 5,
      name: "Succulent Set",
      price: 399,
      image: img5,
    },
    {
      id: 6,
      name: "Garden Setup",
      price: 1499,
      image: img6,
    },
  ];

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
    alert(`${product.name} added to cart 🌱`);
  };

  return (
    <div className="portfolio-container">
      <h1>🌿 Our Plants Portfolio</h1>
      <p>Explore our premium plants and garden collections</p>

      <div className="portfolio-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            onAdd={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
