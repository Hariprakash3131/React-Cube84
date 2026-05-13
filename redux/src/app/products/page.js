"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";

// Static product data for teaching purposes
const PRODUCTS = [
  {
    id: 1,
    name: "Laptop",
    price: 999,
    description: "High-performance laptop for development",
    image: "💻",
  },
  {
    id: 2,
    name: "Mouse",
    price: 25,
    description: "Wireless ergonomic mouse",
    image: "🖱️",
  },
  {
    id: 3,
    name: "Keyboard",
    price: 75,
    description: "Mechanical gaming keyboard",
    image: "⌨️",
  },
  {
    id: 4,
    name: "Monitor",
    price: 299,
    description: "4K Ultra HD monitor",
    image: "🖥️",
  },
  {
    id: 5,
    name: "Headphones",
    price: 150,
    description: "Noise-cancelling wireless headphones",
    image: "🎧",
  },
  {
    id: 6,
    name: "USB Cable",
    price: 10,
    description: "High-speed USB-C cable",
    image: "🔌",
  },
];

const ProductsPage = () => {
  // useDispatch hook to dispatch Redux actions
  const dispatch = useDispatch();

  // Handler function to add product to cart
  const handleAddToCart = (product) => {
    // Dispatch the addToCart action with product data
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1, // Add 1 item at a time
      })
    );
    // Alert feedback for user (optional)
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Products
        </h1>

        {/* Products grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map through products and display each one */}
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Product image/emoji */}
              <div className="bg-gray-200 h-40 flex items-center justify-center text-6xl">
                {product.image}
              </div>

              {/* Product details */}
              <div className="p-4">
                {/* Product name */}
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h2>

                {/* Product description */}
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>

                {/* Price and Add to Cart button */}
                <div className="flex justify-between items-center">
                  {/* Product price */}
                  <span className="text-2xl font-bold text-green-600">
                    ${product.price}
                  </span>

                  {/* Add to Cart button */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;