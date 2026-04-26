import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  // Add to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove from cart
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <Home addToCart={addToCart} />

      {/* CART SECTION */}
      <div className="cart">
        <h2>🛒 Cart Items</h2>

        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>{item.price}</p>
              </div>

              <button onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;