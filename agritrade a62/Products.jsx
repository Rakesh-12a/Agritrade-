import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Wheat", price: 25 },
  { id: 2, name: "Rice", price: 40 },
  { id: 3, name: "Corn", price: 30 },
  { id: 4, name: "Sugarcane", price: 20 },
];

function Products({ addToCart }) {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Products;
