import React, { useState } from "react";
import "./Cart.css";

const Cart = () => {
  // Temporary cart data (backend-ready)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Rose Plant",
      price: 299,
      quantity: 1,
    },
    {
      id: 2,
      name: "Indoor Bonsai",
      price: 899,
      quantity: 1,
    },
  ]);

  // Increase quantity
  const increaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  // Calculate total
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty 🌱</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div>
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                </div>

                <div className="cart-actions">
                  <button
                    aria-label="Decrease quantity"
                    onClick={() => decreaseQty(item.id)}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    aria-label="Increase quantity"
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>

                  <button
                    className="remove-btn"
                    aria-label="Remove item"
                    onClick={() => removeItem(item.id)}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h2>Total: ₹{totalPrice}</h2>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
