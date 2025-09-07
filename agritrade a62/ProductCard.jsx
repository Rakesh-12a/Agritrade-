import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-700">₹{product.price} per kg</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
