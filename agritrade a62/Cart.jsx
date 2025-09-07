import React from "react";

function Cart({ cart }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p className="mt-4">Cart is empty.</p>
      ) : (
        <ul className="mt-4 space-y-2">
          {cart.map((item, index) => (
            <li
              key={index}
              className="p-2 border rounded flex justify-between items-center"
            >
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
