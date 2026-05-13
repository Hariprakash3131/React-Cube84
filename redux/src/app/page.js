"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

export default function Home() {
  // Get cart count from Redux store to show on home page
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Welcome to Our Store
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore our amazing products and add them to your cart
          </p>

          {/* Shopping status */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 inline-block">
            <p className="text-lg text-gray-700">
              Items in cart:{" "}
              <span className="text-2xl font-bold text-blue-600">
                {totalItems}
              </span>
            </p>
          </div>

          {/* Main action buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg text-lg transition-colors"
            >
              Shop Now →
            </Link>
            <Link
              href="/cart"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-lg text-lg transition-colors"
            >
              View Cart 🛒
            </Link>
          </div>
        </div>

        {/* Features section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Wide Selection
            </h3>
            <p className="text-gray-600">
              Browse through our collection of quality tech products
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Easy Cart Management
            </h3>
            <p className="text-gray-600">
              Add, remove, and update quantities with Redux state management
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Fast & Reliable
            </h3>
            <p className="text-gray-600">
              Built with Next.js and Redux for optimal performance
            </p>
          </div>
        </div>

        {/* Redux Info Section (for teaching) */}
        <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-6 mt-12">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">
            Redux Toolkit in Action
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Cart Slice:</strong> Manages all cart-related state
            </li>
            <li>
              <strong>useDispatch:</strong> Used to dispatch actions (addToCart,
              removeFromCart, etc)
            </li>
            <li>
              <strong>useSelector:</strong> Used to read state from Redux store
            </li>
            <li>
              <strong>Actions:</strong> addToCart, removeFromCart, updateQuantity,
              clearCart
            </li>
            <li>
              <strong>Store:</strong> Centralized state management using
              configureStore
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}