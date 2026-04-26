import React from "react";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h2> BabyJose Boutique</h2>

      <div className="nav-links">
  <a href="#home">Home</a>
  <a href="#products">Shop</a>
  <a href="#footer">Contact</a>

  <span className="cart-badge">🛒 {cartCount}</span>
</div>
    </nav>
  );
}

export default Navbar;