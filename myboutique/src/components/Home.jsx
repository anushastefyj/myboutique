import React from "react";
import ProductCard from "./ProductCard";

function Home({ addToCart }) {
  const products = [
    { id: 1, name: "Floral Dress", price: "$45", image: "/Images/download (2).jpeg" },
    { id: 2, name: "Casual Jacket", price: "$60", image: "/Images/download (3).jpeg" },
    { id: 3, name: "Summer Top", price: "$30", image: "/Images/download (4).jpeg" },
    { id: 4, name: "Elegant Wear", price: "$50", image: "/Images/download (5).jpeg" }
  ];

  return (
    <div id="home">
      <header className="hero">
        <h1>Boutique Collection</h1>
      </header>

      <div className="products">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;