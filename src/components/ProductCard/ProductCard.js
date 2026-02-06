import React from "react";
import "./ProductCard.css";

const ProductCard = ({ name, price, image, onAdd }) => {
  return (
    <div className="product-card">
      <img
        src={image}
        alt={name}
        loading="lazy"   // ✅ IMAGE LAZY LOADING
      />

      <h3>{name}</h3>
      <p>₹{price}</p>

      <button onClick={onAdd} aria-label={`Add ${name} to cart`}>
        Add to Cart
      </button>
    </div>
  );
};

export default React.memo(ProductCard); // ✅ PERFORMANCE BOOST
