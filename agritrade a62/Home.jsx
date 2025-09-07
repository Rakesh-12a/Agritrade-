import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center mt-10">
      <h2 className="text-3xl font-bold">Welcome to 🌾 AgriTrade</h2>
      <p className="mt-4 text-lg text-gray-700">
        Buy and sell farm produce directly with ease.
      </p>
      <Link
        to="/products"
        className="mt-6 inline-block bg-green-600 text-white px-6 py-2 rounded-lg"
      >
        View Products
      </Link>
    </div>
  );
}

export default Home;
